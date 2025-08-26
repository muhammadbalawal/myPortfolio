import { NextRequest, NextResponse } from 'next/server';

const repoOwner = process.env.GITHUB_REPO_OWNER!;
const repoName = process.env.GITHUB_REPO_NAME!;
const filePath = process.env.GITHUB_DATA_FILE!;
const token = process.env.GITHUB_TOKEN!;
const fileUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`;

interface GitHubContent {
  content: string;
  sha: string;
}

interface VisitorsData {
  visitors: string[];
}

async function getFileContent(): Promise<{ content: string; sha: string }> {
  const res = await fetch(fileUrl, {
    headers: { Authorization: `token ${token}` },
  });

  if (!res.ok) throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);

  const data: GitHubContent = await res.json();
  const content = Buffer.from(data.content, 'base64').toString('utf8');
  return { content, sha: data.sha };
}

async function updateFileContent(newContent: string, sha: string) {
  const encodedContent = Buffer.from(newContent).toString('base64');

  const body = {
    message: 'Update unique visitor data',
    content: encodedContent,
    sha,
  };

  const res = await fetch(fileUrl, {
    method: 'PUT',
    headers: {
      Authorization: `token ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(`GitHub update error: ${JSON.stringify(err)}`);
  }

  return await res.json();
}

export async function POST(request: NextRequest) {
  try {
    const { userId } = await request.json();

    if (!userId || typeof userId !== 'string') {
      return NextResponse.json({ error: 'Missing or invalid userId' }, { status: 400 });
    }

    const { content, sha } = await getFileContent();
    const data: VisitorsData = JSON.parse(content);

    if (!Array.isArray(data.visitors)) {
      data.visitors = [];
    }

    if (!data.visitors.includes(userId)) {
      data.visitors.push(userId);
      await updateFileContent(JSON.stringify(data, null, 2), sha);
    }

    return NextResponse.json({ uniqueVisitors: data.visitors.length });
  } catch (error: any) {
    console.error('Error in POST /unique-views:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const { content } = await getFileContent();
    const data: VisitorsData = JSON.parse(content);

    return NextResponse.json({ uniqueVisitors: data.visitors.length });
  } catch (error: any) {
    console.error('Error in GET /unique-views:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
