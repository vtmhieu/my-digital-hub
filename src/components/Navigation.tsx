import { Link } from "react-router-dom";
import { Download, Menu } from "lucide-react";
import { NavLink } from "./NavLink";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";

export const navItems = [
  { to: "/", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/experiences", label: "Experiences" },
  { to: "/blog", label: "Blog" },
];

export const CV_URL = "/HieuVu_CV.pdf";

export const Navigation = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link to="/" className="text-[15px] font-semibold tracking-tight text-foreground">
          Hieu Vu
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className="rounded-full px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeClassName="bg-muted text-foreground"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <Button size="sm" className="hidden sm:inline-flex" asChild>
            <a href={CV_URL} download="HieuVu_CV.pdf">
              <Download strokeWidth={1.75} />
              Download CV
            </a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9 md:hidden" aria-label="Open menu">
                <Menu strokeWidth={1.75} />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[280px]">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <nav aria-label="Mobile" className="mt-10 flex flex-col gap-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === "/"}
                    className="rounded-lg px-3 py-2.5 text-lg text-muted-foreground transition-colors hover:text-foreground"
                    activeClassName="bg-muted text-foreground"
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
              <Button className="mt-8 w-full" asChild>
                <a href={CV_URL} download="HieuVu_CV.pdf">
                  <Download strokeWidth={1.75} />
                  Download CV
                </a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
