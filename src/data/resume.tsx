import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Muhammad Balawal Safdar",
  initials: "MBS",
  url: "https://dillion.io",
  location: "montreal, CA",
  locationLink: "https://www.google.com/maps/place/montreal",
  description: "CS student and builder, creating real projects across software and hardware.",
  summary: "I’ve always loved exploring electronics and software. Over the past few years, I’ve built projects, taken part in hackathons, and connected with others at networking events. These experiences have helped me sharpen my technical skills, sparked my interest in startups and creativity, and inspired me to turn ideas into real-world solutions. I enjoy challenging myself with new technologies, collaborating with like-minded people, and constantly finding ways to grow as a builder",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "muhammadbalawalsafdar@gmail.com.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Desnine",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Developer Intern",
      logoUrl: "/Desnine-logo.png",
      start: "July 2025",
      end: "Current",
      description:
        "Collaborated on projects spanning branding, web development, digital design, and AI-driven automation. Developed skills in designing cohesive brand identities, optimizing websites for SEO, and creating digital assets for diverse industries.",
    },
    {
      company: "Solaire Canada Solar",
      href: "https://atomic.finance",
      badges: [],
      location: "Pointe-Claire, CA",
      title: "Project Developer Intern",
      logoUrl: "/SolaireLogo.png",
      start: "June 2024",
      end: "September 2024",
      description:
      "Conducted comprehensive data collection and analysis on businesses in Montreal's West Island, collaborating with municipal Clean Technologies Departments to present findings. Designed and modeled solar panel systems using AutoCAD and SolidWorks, demonstrating to businesses the potential electricity savings achievable through solar energy adoption. Developed an informative and user-friendly landing page utilizing Figma, HTML, CSS, and JavaScript, enabling visitors to access detailed information about our services and the benefits of solar energy.",
    },
    {
      company: "Party Surprise",
      href: "https://atomic.finance",
      badges: [],
      location: "Vaudreuil-Dorion, CA",
      title: "Team Member",
      logoUrl: "/partysurpriseLogo.jpg",
      start: "April 2024",
      end: "June 2024",
      description:
        "Collaborated with a team to update and maintain the website using WordPress, ensuring an engaging and up-to-date online presence. Captured high-quality images and managed social media platforms to enhance brand visibility and audience engagement. Implemented SEO strategies to improve search engine rankings, driving more organic traffic to the store's website.",
    },
  ],
  education: [
    {
      school: "John Abbott College",
      href: "https://johnabbott.qc.ca",
      degree: "DEC Computer Science",
      logoUrl: "/JAClogo.png",
      start: "2023",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "UdeMHacks 2025",
      dates: "March 2025",
      location: "Montreal, CA",
      description:
        "EyeCrop combines AI and smart hardware to protect homegrown fruits from birds and rodents in realtime. With a web app for remote monitoring and data tracking, it makes sustainable gardening simple and accessible.",
      image:"/udemhacks.png",
      mlh: "",
      links: [
        {
          type: "Devpost",
          title: "Devpost",
          href: "https://devpost.com/software/eyecrop",
          icon: <Icons.globe className="size-3" />,
          text: "Devpost",
        },
      ],
    },
    {
      title: "BagelHacks",
      dates: "March 2025",
      location: "Montreal, CA",
      description:
        "InterAce transforms the interview prep experience by simulating real-time conversations with AI interviewers, complete with facial expressions, lip-sync, and technical coding challenges. Built with cutting edge tools like Three.js, LiveKit, and FastAPI, it offers detailed performance insights to help users land their dream tech job.",
      image:"/bagelhacks.png",
      mlh: "",
      links: [
        {
          type: "Devpost",
          title: "Devpost",
          href: "https://devpost.com/software/interace",
          icon: <Icons.globe className="size-3" />,
          text: "Devpost",
        },
      ],
    },
    {
      title: "MariHacks 8.0",
      dates: "April 2025",
      location: "Montreal, CA",
      description:
        "Echo activates when emergency calls go unanswered, using AI to gather critical information, geolocate the caller, and send real-time reports to first responders. It earned an Honourable Mention in the AI Challenge at MariHacks 8.0 for its potential to save lives in high-stakes situations.",
      image:"/marihacks.png",
      mlh: "",
      links: [
        {
          type: "Devpost",
          title: "Devpost",
          href: "https://devpost.com/software/echo-yql8zg",
          icon: <Icons.globe className="size-3" />,
          text: "Devpost",
        },
      ],
    },
    {
      title: "JACHacks",
      dates: "April 2025",
      location: "Montreal, CA",
      description:
        "Sentinel is an end-to-end accident response platform that uses TensorFlow, Gemini AI, and Twilio to detect crashes from live traffic camera feeds, generate structured reports, and instantly notify emergency services all within seconds. It won first place overall at JACHacks 2025 for its potential to save lives using only existing city infrastructure.",
      image:"/jachacks.png",
      mlh: "",
      links: [
        {
          type: "Devpost",
          title: "Devpost",
          href: "https://devpost.com/software/sentintel",
          icon: <Icons.globe className="size-3" />,
          text: "Devpost",
        },
      ],
    },
    {
      title: "MiniDawsHacks.25",
      dates: "May 2025",
      location: "Montreal, CA",
      description:
        "Synapse is a powerful Chrome extension that leverages advanced AI to semantically analyze and search through YouTube video transcripts, allowing users to instantly navigate and jump directly to the exact moments they need—making research and learning faster and more efficient; this innovative tool was proudly awarded an Honourable Mention at miniDawsHacks 25 for its impact and technical excellence",
      image:"/minidaws.jpg",
      mlh: "",
      links: [
        {
          type: "Devpost",
          title: "Devpost",
          href: "https://devpost.com/software/synapse-3r7pje",
          icon: <Icons.globe className="size-3" />,
          text: "Devpost",
        },
      ],
    },
  ],
} as const;
