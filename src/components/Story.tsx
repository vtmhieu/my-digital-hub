import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { Button } from "./ui/button";

export type Chapter = {
  id: string;
  /** Shown in the timeline rail and above the chapter headline. */
  years: string;
  /** Short label for the timeline rail. */
  label: string;
  title: string;
  content: ReactNode;
};

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Tracks which chapter currently sits in the middle band of the viewport. */
const useActiveChapter = (ids: string[]) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(elements.indexOf(entry.target as HTMLElement));
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
};

export const scrollToChapter = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
};

/**
 * Scroll-driven life story: a sticky timeline rail (desktop) or progress bar (mobile)
 * that follows the reader through a sequence of chapters.
 */
export const Story = ({ chapters }: { chapters: Chapter[] }) => {
  const [ids] = useState(() => chapters.map((chapter) => chapter.id));
  const active = useActiveChapter(ids);
  const current = chapters[Math.max(active, 0)];

  return (
    <div className="relative">
      {/* Mobile: current chapter + progress, pinned under the nav while the story is on screen */}
      <div
        className={cn(
          `tone-${current.id}`,
          "sticky top-16 z-30 border-b border-border bg-background/90 backdrop-blur-md lg:hidden",
        )}
      >
        <div className="container-page flex h-11 items-center gap-3 text-sm">
          <span className="font-mono text-tone transition-colors duration-500">{current.years}</span>
          <span className="truncate font-medium">{current.label}</span>
        </div>
        <div className="h-0.5 w-full bg-border">
          <div
            className="h-0.5 origin-left bg-tone-solid transition-[transform,background-color] duration-500 ease-out-expo"
            style={{ transform: `scaleX(${(active + 1) / chapters.length})` }}
          />
        </div>
      </div>

      <div className="container-page lg:grid lg:grid-cols-12 lg:gap-12">
        {/* Desktop: timeline rail */}
        <nav aria-label="Story timeline" className="hidden lg:col-span-3 lg:block">
          <div className="sticky top-28 pt-24">
            <ol>
              {chapters.map((chapter, i) => (
                <li key={chapter.id} className={cn(`tone-${chapter.id}`, "relative")}>
                  {i < chapters.length - 1 && (
                    <span aria-hidden className="absolute left-[5px] top-[20px] h-full w-0.5 -translate-x-[0.5px] bg-border">
                      <span
                        className="block h-full w-full origin-top bg-tone-solid transition-transform duration-700 ease-out-expo"
                        style={{ transform: `scaleY(${i < active ? 1 : 0})` }}
                      />
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => scrollToChapter(chapter.id)}
                    aria-current={i === active ? "step" : undefined}
                    className="group relative flex w-full items-start gap-4 py-2.5 text-left focus-visible:outline-none"
                  >
                    <span
                      aria-hidden
                      className={cn(
                        "relative z-10 mt-[5px] h-[11px] w-[11px] shrink-0 rounded-full border-2 transition-all duration-300",
                        i <= active ? "border-tone-solid bg-tone-solid" : "border-border bg-background",
                        i === active && "scale-125 ring-4 ring-tone-solid/20",
                      )}
                    />
                    <span className="min-w-0">
                      <span
                        className={cn(
                          "block font-mono text-xs transition-colors duration-300",
                          i <= active ? "text-tone" : "text-muted-foreground",
                        )}
                      >
                        {chapter.years}
                      </span>
                      <span
                        className={cn(
                          "mt-0.5 block text-sm transition-colors duration-300 group-hover:text-foreground group-focus-visible:underline",
                          i === active ? "font-medium text-foreground" : "text-muted-foreground",
                        )}
                      >
                        {chapter.label}
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <div className="lg:col-span-9">
          {chapters.map((chapter) => (
            <section
              key={chapter.id}
              id={chapter.id}
              aria-labelledby={`${chapter.id}-title`}
              className={cn(`tone-${chapter.id}`, "scroll-mt-28 border-t border-border py-20 first:border-t-0 md:py-28")}
            >
              <Reveal>
                <p className="flex items-center gap-3 font-mono text-sm font-medium text-tone">
                  <span aria-hidden className="h-1 w-8 rounded-full bg-tone-solid" />
                  {chapter.years}
                </p>
                <h2
                  id={`${chapter.id}-title`}
                  className="mt-3 max-w-[22ch] text-3xl font-semibold leading-[1.1] tracking-tight md:text-5xl"
                >
                  {chapter.title}
                </h2>
              </Reveal>
              <div className="mt-8 md:mt-10">{chapter.content}</div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

/** Horizontal, snap-scrolling strip with previous/next controls for pointer users. */
export const Scroller = ({ children, label }: { children: ReactNode; label: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const step = (direction: 1 | -1) =>
    ref.current?.scrollBy({ left: direction * 340, behavior: prefersReducedMotion() ? "auto" : "smooth" });

  return (
    <div>
      <div
        ref={ref}
        role="region"
        aria-label={label}
        tabIndex={0}
        className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] focus-visible:outline-none md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>
      <div className="mt-4 hidden gap-2 md:flex">
        <Button variant="outline" size="icon" className="h-10 w-10" onClick={() => step(-1)} aria-label="Scroll back">
          <ArrowLeft strokeWidth={1.75} />
        </Button>
        <Button variant="outline" size="icon" className="h-10 w-10" onClick={() => step(1)} aria-label="Scroll forward">
          <ArrowRight strokeWidth={1.75} />
        </Button>
      </div>
    </div>
  );
};
