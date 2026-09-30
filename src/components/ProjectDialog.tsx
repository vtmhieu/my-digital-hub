import type { ReactNode } from "react";
import { ExternalLink, FileText, Github } from "lucide-react";
import type { Project } from "@/content/projects";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

/** Wraps any trigger element so clicking it opens the full project write-up. */
export const ProjectDialog = ({ project, children }: { project: Project; children: ReactNode }) => {
  const { title, description, architectureImage, details, technologies, results, liveUrl, githubUrl, docUrl, reportUrl } =
    project;
  const links = [
    liveUrl && { href: liveUrl, label: "Live demo", icon: ExternalLink, primary: true },
    githubUrl && { href: githubUrl, label: "Source code", icon: Github },
    docUrl && { href: docUrl, label: "Documentation", icon: FileText },
    reportUrl && { href: reportUrl, label: "Report", icon: FileText },
  ].filter(Boolean) as { href: string; label: string; icon: typeof Github; primary?: boolean }[];

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[90dvh] max-w-3xl overflow-y-auto p-6 sm:rounded-lg md:p-10">
        <DialogHeader className="text-left">
          <DialogTitle className="pr-6 text-2xl font-semibold tracking-tight md:text-3xl">{title}</DialogTitle>
          <DialogDescription className="pt-2 text-base leading-relaxed">{description}</DialogDescription>
        </DialogHeader>

        {links.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {links.map(({ href, label, icon: Icon, primary }) => (
              <Button key={label} size="sm" variant={primary ? "default" : "outline"} asChild>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <Icon strokeWidth={1.75} />
                  {label}
                </a>
              </Button>
            ))}
          </div>
        )}

        {architectureImage && (
          <figure className="mt-2 overflow-hidden rounded-lg border border-border bg-white">
            <img src={architectureImage} alt={`${title} architecture diagram`} className="h-auto w-full" loading="lazy" />
          </figure>
        )}

        <div className="mt-2 space-y-8">
          {details && details.length > 0 && (
            <section>
              <h3 className="mb-3 font-semibold">What I did</h3>
              <ul className="list-disc space-y-2 pl-5 leading-relaxed text-muted-foreground marker:text-primary">
                {details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </section>
          )}

          {results && results.length > 0 && (
            <section>
              <h3 className="mb-3 font-semibold">Results</h3>
              <ul className="list-disc space-y-2 pl-5 leading-relaxed text-muted-foreground marker:text-primary">
                {results.map((result) => (
                  <li key={result}>{result}</li>
                ))}
              </ul>
            </section>
          )}

          {technologies && technologies.length > 0 && (
            <section>
              <h3 className="mb-3 font-semibold">Stack</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="font-normal">
                    {tech}
                  </Badge>
                ))}
              </div>
            </section>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
