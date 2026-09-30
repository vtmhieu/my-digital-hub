import { ArrowUpRight, Github, Linkedin } from "lucide-react";

const EMAIL = "vtmhieu111@gmail.com";

const profiles = [
  { href: "https://www.linkedin.com/in/hieu-vu-tong-minh/", label: "LinkedIn", icon: Linkedin },
  { href: "https://github.com/vtmhieu", label: "GitHub", icon: Github },
];

export const Footer = () => (
  <footer id="contact" className="mt-24 border-t border-border md:mt-32">
    <div className="container-page grid gap-12 py-16 md:grid-cols-12 md:py-24">
      <div className="md:col-span-7">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Hiring for platform or ML-systems work?
        </h2>
        <p className="mt-4 max-w-[48ch] text-muted-foreground leading-relaxed">
          I'm looking for internship and MSc thesis roles. Email reaches me fastest.
        </p>
        <a
          href={`mailto:${EMAIL}`}
          className="mt-8 inline-block text-xl font-medium text-primary underline decoration-primary/30 underline-offset-[6px] transition-colors hover:decoration-primary md:text-2xl"
        >
          {EMAIL}
        </a>
      </div>

      <div className="md:col-span-4 md:col-start-9 md:self-end">
        <ul className="space-y-1">
          {profiles.map(({ href, label, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-lg px-3 py-3 -mx-3 transition-colors hover:bg-muted"
              >
                <span className="flex items-center gap-3">
                  <Icon className="h-[18px] w-[18px] text-muted-foreground" strokeWidth={1.75} />
                  {label}
                </span>
                <ArrowUpRight
                  className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={1.75}
                />
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted-foreground">Based in Stockholm, Sweden.</p>
      </div>
    </div>
    <div className="container-page pb-10 text-sm text-muted-foreground">
      © {new Date().getFullYear()} Hieu Vu Tong Minh
    </div>
  </footer>
);
