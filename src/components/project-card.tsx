import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WinnerBadge } from "@/components/winner-badge";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  winner?: boolean;
  win?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
    text?: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  winner,
  win,
  links,
  className,
}: Props) {
  return (
    <Card
      className={
        "relative flex flex-col overflow-visible border-2 border-black dark:border-white hover:shadow-lg transition-all duration-300 ease-out h-full font-sans"
      }
    >
      {winner && (
        <WinnerBadge className="absolute -top-[30px] -right-[30px] z-10 w-[60px] h-[60px] rotate-12" />
      )}
      <div className="flex flex-col p-3">
        {/* Content */}
        <div className="flex flex-col flex-1 min-w-0">
          <CardHeader className="px-0 py-0">
            <div className="space-y-1">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <CardTitle className="text-base text-foreground dark:text-foreground font-sans">{title}</CardTitle>
                {win && (
                  <div className="inline-block bg-gray-200/90 dark:bg-gray-800/90 px-1 py-0.5 rounded-sm backdrop-blur-sm shadow-lg">
                    <p 
                      className="text-black dark:text-white text-[8px]"
                      style={{ 
                        fontFamily: '"hd44780", monospace',
                        fontFeatureSettings: '"liga" off'
                      }}
                    >
                      {win}
                    </p>
                  </div>
                )}
              </div>
              <div className="hidden text-xs underline print:visible">
                {link?.replace("https://", "").replace("www.", "").replace("/", "")}
              </div>
            </div>
          </CardHeader>
          
          {/* Tags below title/date */}
          {tags && tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {tags?.map((tag) => (
                <Badge
                  className="px-1 py-0 text-[10px]"
                  variant="secondary"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Description at the bottom */}
      <CardContent className="px-3 pb-3 pt-0">
        <Markdown className="prose max-w-full text-pretty text-xs text-muted-foreground dark:prose-invert">
          {description}
        </Markdown>
      </CardContent>
      
      {/* Links footer */}
      {links && links.length > 0 && (
        <CardFooter className="px-3 pb-3 pt-0">
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                  {link.icon}
                  {(link as any).text || link.type}
                </Badge>
              </Link>
            ))}
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
