import { ArrowUpRight, FileText, Github } from "lucide-react";
import { PageHeader, SiteLayout } from "@/components/SiteLayout";
import { ProjectDialog } from "@/components/ProjectDialog";
import { Reveal } from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projectGroups, projects } from "@/content/projects";

const MAX_TAGS = 4;

const Projects = () => {
  const featured = projects.find((project) => project.featured)!;

  return (
    <SiteLayout>
      <PageHeader
        title="Projects & Open Source"
        description="A collection of my work on Kubernetes, cloud infrastructure, and open-source contributions"
      />

      {/* Featured project */}
      <section className="container-page pt-14 md:pt-20">
        <Reveal>
          <div className="grid overflow-hidden rounded-lg border border-border bg-card lg:grid-cols-12">
            <div className="flex flex-col gap-5 p-6 md:p-10 lg:col-span-5">
              <p className="text-sm font-medium text-primary">Favorite project</p>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{featured.title}</h2>
              <p className="leading-relaxed text-muted-foreground">{featured.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {featured.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="font-normal">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="mt-auto flex flex-wrap gap-2 pt-4">
                <ProjectDialog project={featured}>
                  <Button>Read the write-up</Button>
                </ProjectDialog>
                {featured.githubUrl && (
                  <Button variant="outline" asChild>
                    <a href={featured.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github strokeWidth={1.75} />
                      Source code
                    </a>
                  </Button>
                )}
                {featured.docUrl && (
                  <Button variant="ghost" asChild>
                    <a href={featured.docUrl} target="_blank" rel="noopener noreferrer">
                      <FileText strokeWidth={1.75} />
                      Documentation
                    </a>
                  </Button>
                )}
              </div>
            </div>
            <div className="border-t border-border bg-white lg:col-span-7 lg:border-l lg:border-t-0">
              <img
                src={featured.architectureImage}
                alt={`${featured.title} architecture diagram`}
                className="h-full w-full object-contain p-4 md:p-6"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Grouped projects */}
      {projectGroups.map((group) => {
        const items = projects.filter((project) => project.group === group.id && !project.featured);
        if (items.length === 0) return null;

        return (
          <section key={group.id} className="container-page pt-20 md:pt-28" aria-labelledby={`group-${group.id}`}>
            <Reveal>
              <h2 id={`group-${group.id}`} className="text-2xl font-semibold tracking-tight md:text-3xl">
                {group.title}
              </h2>
              <p className="mt-2 max-w-[60ch] text-muted-foreground">{group.blurb}</p>
            </Reveal>

            <div className="mt-8 grid gap-x-10 md:grid-cols-2">
              {items.map((project, i) => (
                <Reveal key={project.slug} delay={(i % 2) * 70}>
                  <ProjectDialog project={project}>
                    <button
                      type="button"
                      className="group flex w-full flex-col gap-3 border-t border-border py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">{project.title}</h3>
                        <ArrowUpRight
                          className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          strokeWidth={1.75}
                        />
                      </div>
                      <p className="line-clamp-3 max-w-[60ch] leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, MAX_TAGS).map((tag) => (
                          <Badge key={tag} variant="secondary" className="font-normal">
                            {tag}
                          </Badge>
                        ))}
                        {project.tags.length > MAX_TAGS && (
                          <span className="px-1 py-0.5 text-xs text-muted-foreground">
                            +{project.tags.length - MAX_TAGS} more
                          </span>
                        )}
                      </div>
                    </button>
                  </ProjectDialog>
                </Reveal>
              ))}
            </div>
          </section>
        );
      })}
    </SiteLayout>
  );
};

export default Projects;
