import type { CSSProperties, ReactNode } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

export const SiteLayout = ({ children }: { children: ReactNode }) => (
  <div className="flex min-h-[100dvh] flex-col">
    <Navigation />
    <main className="flex-1 pt-16">{children}</main>
    <Footer />
  </div>
);

/** Left-aligned page header shared by the inner pages. */
export const PageHeader = ({ title, description }: { title: string; description: string }) => (
  <header className="container-page pt-14 md:pt-20">
    <h1 className="enter text-4xl font-semibold tracking-tighter md:text-6xl">{title}</h1>
    <p
      className="enter mt-5 max-w-[60ch] text-lg leading-relaxed text-muted-foreground"
      style={{ "--enter-delay": "80ms" } as CSSProperties}
    >
      {description}
    </p>
  </header>
);
