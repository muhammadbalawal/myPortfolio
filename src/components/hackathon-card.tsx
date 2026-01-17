import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  dates: string;
  location: string;
  win?: string;
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
}

export function HackathonCard({
  title,
  description,
  dates,
  location,
  win,
  links,
}: Props) {
  return (
    <li className="relative py-4">
      <div className="border border-black dark:border-white bg-white dark:bg-card px-5 py-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
        <div className="flex flex-1 flex-col justify-start gap-2">
          {dates && (
            <time className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{dates}</time>
          )}
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="font-semibold text-lg leading-tight text-foreground dark:text-foreground">{title}</h2>
            {win && (
              <Badge variant="default" className="bg-blue-600 hover:bg-blue-700 text-white border-0 px-2.5 py-1 text-xs font-medium">
                {win}
              </Badge>
            )}
          </div>
          {location && (
            <p className="text-sm text-muted-foreground dark:text-muted-foreground">{location}</p>
          )}
          {description && (
            <p className="text-sm text-muted-foreground dark:text-muted-foreground leading-relaxed mt-1">
              {description}
            </p>
          )}
        </div>
        {links && links.length > 0 && (
          <div className="mt-4 flex flex-row flex-wrap items-start gap-2 pt-3 border-t border-black dark:border-white">
            {links?.map((link, idx) => (
              <Link href={link.href} key={idx} className="transition-opacity hover:opacity-80">
                <Badge key={idx} title={link.title} variant="secondary" className="flex gap-1.5 px-2.5 py-1 text-xs font-medium">
                  {link.icon}
                  {link.title}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}
