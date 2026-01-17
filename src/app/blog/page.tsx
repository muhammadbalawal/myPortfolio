import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="max-w-sm sm:max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
      <section>
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h1 className="font-medium text-2xl mb-8 tracking-tighter text-black dark:text-white">blog</h1>
        </BlurFade>
        {posts
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post, id) => (
            <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
              <Link
                className="flex flex-col space-y-1 mb-4 group transition-colors"
                href={`/blog/${post.slug}`}
              >
                <div className="w-full flex flex-col">
                  <p className="tracking-tight text-black dark:text-white group-hover:text-foreground/80 transition-colors">
                    {post.metadata.title}
                  </p>
                  <p className="h-6 text-xs text-muted-foreground">
                    {formatDate(post.metadata.publishedAt)}
                  </p>
                </div>
              </Link>
            </BlurFade>
          ))}
      </section>
    </div>
  );
}
