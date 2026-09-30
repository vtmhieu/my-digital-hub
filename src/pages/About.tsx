import type { CSSProperties, ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, ArrowUpRight, Download } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { CV_URL } from "@/components/Navigation";
import { Reveal } from "@/components/Reveal";
import { ProjectDialog } from "@/components/ProjectDialog";
import { Scroller, Story, scrollToChapter, type Chapter } from "@/components/Story";
import { CountUp } from "@/components/CountUp";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getProject, type Project } from "@/content/projects";
import portrait from "@/assets/portrait.jpg";

const delay = (ms: number) => ({ "--enter-delay": `${ms}ms` }) as CSSProperties;

/* ---------- small building blocks ---------- */

const Lead = ({ children }: { children: ReactNode }) => (
  <Reveal>
    <p className="max-w-[60ch] text-lg leading-relaxed text-foreground/85 md:text-xl md:leading-relaxed">{children}</p>
  </Reveal>
);

const Tags = ({ items }: { items: string[] }) => (
  <div className="flex flex-wrap gap-1.5">
    {items.map((tag) => (
      <Badge key={tag} variant="secondary" className="font-normal">
        {tag}
      </Badge>
    ))}
  </div>
);

const TextLink = ({ to, children }: { to: string; children: ReactNode }) => (
  <Link to={to} className="group inline-flex items-center gap-2 font-medium text-tone">
    {children}
    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={1.75} />
  </Link>
);

/** A clickable project tile that opens the full write-up. */
const ProjectTile = ({ project, className }: { project: Project; className?: string }) => (
  <ProjectDialog project={project}>
    <button
      type="button"
      className={`group flex h-full flex-col gap-3 rounded-lg border border-border border-t-4 border-t-tone-solid bg-card p-6 text-left transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${className ?? ""}`}
    >
      {project.metric && (
        <div>
          <CountUp value={project.metric.value} className="block text-3xl font-semibold tracking-tight text-tone" />
          <p className="mt-1 text-sm text-muted-foreground">{project.metric.label}</p>
        </div>
      )}
      <h3 className="text-lg font-semibold leading-snug tracking-tight">{project.title}</h3>
      <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
      <div className="mt-auto flex items-center justify-between gap-3 pt-2">
        <Tags items={project.tags.slice(0, 3)} />
        <ArrowUpRight
          className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          strokeWidth={1.75}
        />
      </div>
    </button>
  </ProjectDialog>
);

/* ---------- chapter data ---------- */

const hustStats = [
  { value: "3.58/4.0", label: "GPA in Electronics and Telecommunications" },
  { value: "4x", label: "Merit Scholarships (Type A) for academic performance" },
  { value: "600+", label: "participants per season at SETCUP, the football tournament I led" },
];

const hustAlso = [
  { when: "2019 - 2021", text: "Head Organizer of SETCUP: 32 teams and over 600 participants each season." },
  { when: "2020, 2021", text: "Core Organizer of the University Freshmen Orientation, coordinating university-wide student intake." },
  { when: "2019 - 2023", text: "Led career orientation workshops, academic support groups, and industry networking events." },
  { when: "2022", text: "“Student of 5 Merits” title and a Certificate of Merit from the University President." },
];

const fptBuilds = [
  {
    value: "30%",
    title: "Cluster hibernation",
    text: "Worker nodes scale to zero while etcd state, PVCs, and Services are kept, and clusters wake on demand. Cut infrastructure cost by 30% for enterprise customers.",
    style: "border-transparent bg-tone-solid text-tone-on [&_p]:text-tone-on/90",
  },
  {
    title: "Backup and restore operator",
    text: "A Kubebuilder operator for cron-scheduled PVC snapshots, retention, and on-demand restore. It unlocked contracts with compliance-heavy clients.",
    style: "border-tone/25 bg-tone/5",
  },
  {
    title: "Load balancers and networking",
    text: "Extended the Cloud Controller Manager for L4/L7 load balancers with Proxy Protocol and multi-zone HA, and added Cilium/eBPF as a CNI option.",
    style: "border-border bg-card",
  },
  {
    title: "Upgrades and migrations",
    text: "Ran quarterly zero-downtime Kubernetes upgrades (up to v1.32) across sites, and moved enterprise customers' environments off AWS.",
    style: "border-tone/25 bg-tone/5",
  },
];

const kthProjects = [
  "kv-cache-llm-serving",
  "parallel-fdtd",
  "omnipaxos-deadline-ordering",
  "distributed-messaging",
  "big-data-analytics",
  "multi-agent-simulation",
].map((slug) => getProject(slug)!);

const operator = getProject("backup-restore-operator")!;
const thesis = getProject("cesium-3d-tiles")!;
const hackathon = getProject("ssen-hackathon-multi-agent")!;
const sideProjects = [getProject("prototype-agent")!, getProject("aws-quiz-pro")!];

const chapters: Chapter[] = [
  {
    id: "hust",
    years: "2019 - 2023",
    label: "HUST, Hanoi",
    title: "Four years at HUST, in class and out of it.",
    content: (
      <div className="space-y-14">
        <Lead>
          I studied Electronics and Telecommunications at Hanoi University of Science and Technology. I kept my grades
          up, and spent most of my free time on the executive committee of the Student Youth Union.
        </Lead>

        <div className="grid gap-8 sm:grid-cols-3">
          {hustStats.map((stat, i) => (
            <Reveal key={stat.value} delay={i * 80} className="border-t-2 border-tone/40 pt-5">
              <CountUp value={stat.value} className="block text-4xl font-semibold tracking-tight text-tone md:text-5xl" />
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{stat.label}</p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="text-lg font-semibold tracking-tight">Outside the classroom</h3>
          <ul className="mt-6 grid gap-x-10 gap-y-6 md:grid-cols-2">
            {hustAlso.map((item) => (
              <li key={item.text}>
                <p className="font-mono text-xs font-medium text-tone">{item.when}</p>
                <p className="mt-1.5 leading-relaxed text-foreground/85">{item.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    ),
  },
  {
    id: "viettel",
    years: "Jun - Nov 2022",
    label: "Viettel Cyber Security",
    title: "First real backend work, at Viettel Cyber Security.",
    content: (
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <Lead>
            I was selected for the VCS Talent Program and built a backend that gives the company one place to track and
            manage its internal servers.
          </Lead>
        </div>
        <Reveal className="md:col-span-5" delay={80}>
          <ul className="space-y-4 rounded-lg border-l-4 border-tone-solid bg-tone/5 py-5 pl-6 pr-5 text-foreground/80">
            <li>Go and PostgreSQL service for server inventory</li>
            <li>Role-based access control and secure REST APIs</li>
            <li>Containerized with Docker for consistent deployment</li>
          </ul>
        </Reveal>
      </div>
    ),
  },
  {
    id: "graduation",
    years: "2023",
    label: "Graduation",
    title: "Graduating with the top thesis defense.",
    content: (
      <Reveal>
        <div className="grid items-center gap-8 rounded-lg bg-tone-solid p-8 text-tone-on md:grid-cols-12 md:p-12">
          <div className="md:col-span-4">
            <p className="text-8xl font-semibold leading-none tracking-tighter md:text-9xl">1st</p>
            <p className="mt-4 font-medium">
              in the graduation thesis defense, scored <CountUp value="9.5" />/10
            </p>
          </div>
          <div className="md:col-span-8">
            <p className="text-lg leading-relaxed">
              My thesis designed an adaptive octree partitioning scheme for massive glTF datasets, making large 3D city
              models in CesiumJS faster to render and lighter on memory.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <ProjectDialog project={thesis}>
                <Button className="bg-tone-on text-tone-solid hover:bg-tone-on/90">Read the thesis summary</Button>
              </ProjectDialog>
              <p className="text-sm font-medium opacity-80">Python, C++, CesiumJS</p>
            </div>
          </div>
        </div>
      </Reveal>
    ),
  },
  {
    id: "fpt",
    years: "2023 - 2025",
    label: "FPT Smart Cloud",
    title: "Two years building a managed Kubernetes service from zero.",
    content: (
      <div className="space-y-14">
        <Lead>
          I joined FPT Smart Cloud as one of six founding engineers on M-FKE, a managed Kubernetes service similar to
          AWS EKS. I built the control plane that runs 500+ customer clusters across Vietnam and Japan, on OpenStack
          and VMware vSphere.
        </Lead>

        <Reveal>
          <div className="flex flex-wrap items-end gap-x-6 gap-y-2 border-y-2 border-tone/30 py-8">
            <CountUp value="500+" className="text-7xl font-semibold leading-none tracking-tighter text-tone md:text-8xl" />
            <p className="max-w-[28ch] pb-1 text-lg leading-snug text-muted-foreground">
              customer clusters across Vietnam and Japan, run by a founding team of six
            </p>
          </div>
        </Reveal>

        <Reveal>
          <ProjectDialog project={operator}>
            <button
              type="button"
              className="group block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <figure>
                <div className="overflow-hidden rounded-lg border border-border bg-white">
                  <img
                    src={operator.architectureImage}
                    alt="Architecture diagram of the backup and restore operator across seed and shoot clusters"
                    loading="lazy"
                    className="h-auto w-full transition-transform duration-700 ease-out-expo group-hover:scale-[1.015]"
                  />
                </div>
                <figcaption className="mt-3 flex items-center justify-between gap-4 text-sm text-muted-foreground">
                  The backup and restore operator I designed: controllers in the seed cluster snapshot volumes in each
                  customer cluster through OpenStack Cinder.
                  <ArrowUpRight className="h-4 w-4 shrink-0" strokeWidth={1.75} />
                </figcaption>
              </figure>
            </button>
          </ProjectDialog>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {fptBuilds.map((build, i) => (
            <Reveal key={build.title} delay={(i % 2) * 80}>
              <div className={cn("flex h-full flex-col gap-3 rounded-lg border p-6 md:p-7", build.style)}>
                {build.value && <CountUp value={build.value} className="block text-5xl font-semibold tracking-tight" />}
                <h3 className="text-lg font-semibold tracking-tight">{build.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{build.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <TextLink to="/experiences">Full experience</TextLink>
        </Reveal>
      </div>
    ),
  },
  {
    id: "kth",
    years: "2025 - 2027",
    label: "KTH, Stockholm",
    title: "Moving to Stockholm for distributed systems.",
    content: (
      <div className="space-y-12">
        <Lead>
          In 2025 I started an MSc in Software Engineering of Distributed Systems at KTH Royal Institute of Technology.
          The courses go underneath the systems I used to operate: consensus, parallel computing, data-intensive
          processing, and serving ML models.
        </Lead>

        <Reveal>
          <p className="max-w-[65ch] text-sm leading-relaxed text-muted-foreground">
            Courses include Advanced Distributed Systems (grade A), Data-Intensive Computing, Data Mining, HPC, and
            Network Systems for ML.
          </p>
        </Reveal>

        <Reveal>
          <Scroller label="KTH projects">
            {kthProjects.map((project) => (
              <div key={project.slug} className="w-[82%] shrink-0 snap-start sm:w-[320px]">
                <ProjectTile project={project} className="w-full" />
              </div>
            ))}
          </Scroller>
        </Reveal>
      </div>
    ),
  },
  {
    id: "beyond",
    years: "2026",
    label: "Hackathon and AWS",
    title: "Building outside the classroom too.",
    content: (
      <div className="space-y-12">
        <div className="grid gap-4 md:grid-cols-5">
          <Reveal className="md:col-span-3">
            <ProjectDialog project={hackathon}>
              <button
                type="button"
                className="group flex h-full w-full flex-col gap-4 rounded-lg bg-tone-solid p-7 text-left text-tone-on transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:p-8"
              >
                <p className="font-mono text-xs opacity-90">Apr 2026</p>
                <p className="text-5xl font-semibold tracking-tighter md:text-6xl">Winner</p>
                <h3 className="text-xl font-semibold tracking-tight">SSEN Hackathon 2026, Ellipsis VC Challenge</h3>
                <p className="leading-relaxed opacity-90">
                  A multi-agent AI app that automates marketing and finance workflows for one-person companies.
                </p>
                <ArrowUpRight
                  className="mt-auto h-5 w-5 self-end transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={1.75}
                />
              </button>
            </ProjectDialog>
          </Reveal>
          <Reveal className="md:col-span-2" delay={80}>
            <div className="flex h-full flex-col gap-4 rounded-lg border border-tone/25 bg-tone/5 p-7 md:p-8">
              <p className="font-mono text-xs font-medium text-tone">Mar 2026</p>
              <h3 className="text-xl font-semibold tracking-tight">AWS Certified Solutions Architect, Associate</h3>
              <p className="leading-relaxed text-muted-foreground">
                SAA-C03. I also built a practice app for it, below.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <h3 className="text-lg font-semibold tracking-tight">Side projects</h3>
          <ul className="mt-4">
            {sideProjects.map((project) => (
              <li key={project.slug}>
                <ProjectDialog project={project}>
                  <button
                    type="button"
                    className="group grid w-full gap-1 border-t border-border py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:grid-cols-12 md:gap-6"
                  >
                    <span className="font-medium transition-colors group-hover:text-tone md:col-span-4">
                      {project.title}
                    </span>
                    <span className="line-clamp-2 text-muted-foreground md:col-span-7">{project.description}</span>
                    <ArrowUpRight
                      className="hidden h-4 w-4 justify-self-end text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 md:col-span-1 md:block"
                      strokeWidth={1.75}
                    />
                  </button>
                </ProjectDialog>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    ),
  },
  {
    id: "now",
    years: "Now",
    label: "What I work on today",
    title: "LLM serving, consensus, and multi-agent systems.",
    content: (
      <Reveal>
        <p className="max-w-[55ch] text-lg leading-relaxed text-foreground/85 md:text-xl md:leading-relaxed">
          That is where my time goes today: LLM serving, distributed consensus, and multi-agent LLM systems, alongside
          my MSc at KTH.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button size="lg" asChild>
            <a href={CV_URL} download="HieuVu_CV.pdf">
              <Download strokeWidth={1.75} />
              Download CV
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/projects">
              View projects
              <ArrowRight strokeWidth={1.75} />
            </Link>
          </Button>
        </div>
      </Reveal>
    ),
  },
];

/** The "at a glance" wall: each tile is colored by, and jumps to, the chapter it comes from. */
const highlights = [
  {
    chapter: "fpt",
    value: "500+",
    label: "customer Kubernetes clusters on a platform I helped build from zero",
    meta: "FPT Smart Cloud, 2023 - 2025",
    solid: true,
    size: "col-span-2 md:col-span-4 lg:col-span-2 lg:row-span-2",
    big: true,
  },
  {
    chapter: "graduation",
    value: "1st",
    label: "in my graduation thesis defense, scored 9.5/10",
    meta: "HUST, 2023",
    solid: true,
    size: "col-span-2 md:col-span-2 lg:col-span-2",
  },
  {
    chapter: "beyond",
    value: "Winner",
    label: "SSEN Hackathon 2026, Ellipsis VC Challenge",
    meta: "Apr 2026",
    solid: true,
    size: "col-span-2 md:col-span-2 lg:col-span-2",
  },
  {
    chapter: "kth",
    value: "14.8x",
    label: "MPI speedup at 92% efficiency on the Dardel supercomputer",
    meta: "KTH, 2025",
    solid: true,
    size: "col-span-2 md:col-span-2 lg:col-span-2",
  },
  {
    chapter: "fpt",
    value: "30%",
    label: "infrastructure cost cut with cluster hibernation",
    meta: "FPT Smart Cloud",
    size: "col-span-1",
  },
  {
    chapter: "hust",
    value: "4x",
    label: "Merit Scholarships (Type A)",
    meta: "HUST",
    size: "col-span-1",
  },
];

const skillCategories = [
  { category: "Languages", skills: ["Go", "Python", "Rust", "C", "Bash", "Erlang/OTP"] },
  {
    category: "Kubernetes & Cloud",
    skills: ["Kubernetes (Operators, CRDs, Kubebuilder)", "Gardener", "Cilium/eBPF", "Helm", "GitOps", "Terraform", "OpenStack", "VMware vSphere", "AWS", "Docker", "Linux"],
  },
  {
    category: "ML Systems & HPC",
    skills: ["vLLM", "LMCache", "MPI", "OpenMP", "HuggingFace Transformers", "scikit-learn", "PySpark", "Delta Lake"],
  },
  {
    category: "Data & Observability",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "etcd", "Prometheus", "Grafana", "Loki"],
  },
];

/* ---------- page ---------- */

const About = () => {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="container-page grid items-center gap-10 pb-16 pt-10 md:grid-cols-12 md:gap-12 md:pb-24 md:pt-20">
        <div className="md:col-span-7">
          <p className="enter text-sm font-medium text-primary">Open to internship and thesis roles</p>
          <h1
            className="enter mt-5 text-5xl font-semibold leading-[0.95] tracking-tighter md:text-6xl lg:text-7xl"
            style={delay(60)}
          >
            Hieu Vu
            <br />
            Tong Minh
          </h1>
          <p className="enter mt-6 max-w-[46ch] text-lg leading-relaxed text-muted-foreground" style={delay(140)}>
            Platform and ML-systems engineer. I built Kubernetes control-plane components behind 500+ customer
            clusters, and now study distributed systems at KTH.
          </p>
          <div className="enter mt-9 flex flex-wrap gap-3" style={delay(220)}>
            <Button size="lg" asChild>
              <a href={CV_URL} download="HieuVu_CV.pdf">
                <Download strokeWidth={1.75} />
                Download CV
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/projects">
                View projects
                <ArrowRight strokeWidth={1.75} />
              </Link>
            </Button>
          </div>
        </div>

        <div className="enter md:col-span-5" style={delay(120)}>
          <div className="mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-lg bg-muted md:max-w-none">
            <img
              src={portrait}
              alt="Hieu Vu Tong Minh standing in a cobblestone square in front of a historic stone building"
              width={800}
              height={800}
              className="h-full w-full object-cover object-[50%_40%]"
            />
          </div>
        </div>
      </section>

      {/* At a glance */}
      <section aria-labelledby="highlights-title" className="container-page pb-20 md:pb-28">
        <h2 id="highlights-title" className="sr-only">
          Highlights
        </h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 lg:grid-cols-6">
          {highlights.map((item, i) => (
            <Reveal key={item.value} delay={i * 70} className={cn(`tone-${item.chapter}`, item.size)}>
              <button
                type="button"
                onClick={() => scrollToChapter(item.chapter)}
                aria-label={`${item.value} ${item.label}. Jump to this part of the story.`}
                className={cn(
                  "group flex h-full w-full flex-col justify-between gap-6 rounded-lg p-5 text-left transition-[transform,box-shadow] duration-300 ease-out-expo hover:-translate-y-1 hover:shadow-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:p-7",
                  item.solid ? "bg-tone-solid text-tone-on" : "border border-tone/25 bg-tone/10",
                  item.big && "md:min-h-[280px] lg:min-h-0",
                )}
              >
                <div>
                  <CountUp
                    value={item.value}
                    className={cn(
                      "block font-semibold leading-none tracking-tighter",
                      item.big ? "text-7xl md:text-8xl lg:text-9xl" : "text-5xl md:text-6xl",
                      !item.solid && "text-tone",
                    )}
                  />
                  <p
                    className={cn(
                      "mt-4 max-w-[30ch] leading-snug",
                      item.big ? "text-lg md:text-xl" : "text-sm md:text-base",
                      !item.solid && "text-foreground/80",
                    )}
                  >
                    {item.label}
                  </p>
                </div>
                <p
                  className={cn(
                    "flex items-center justify-between gap-2 font-mono text-xs",
                    item.solid ? "opacity-90" : "text-tone",
                  )}
                >
                  {item.meta}
                  <ArrowDown
                    className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-y-0.5"
                    strokeWidth={1.75}
                  />
                </p>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Story intro */}
      <section className="border-t border-border">
        <div className="container-page pb-4 pt-20 md:pt-28">
          <Reveal>
            <h2 className="max-w-[20ch] text-4xl font-semibold leading-[1.05] tracking-tighter md:text-6xl">
              How I got from <span className="tone-hust text-tone">Hanoi</span> to{" "}
              <span className="tone-kth text-tone">Stockholm</span>.
            </h2>
            <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-muted-foreground">
              An electronics degree, a founding platform team, and an MSc in distributed systems. Here is how it
              happened.
            </p>
          </Reveal>
        </div>
      </section>

      <Story chapters={chapters} />

      {/* Skills */}
      <section className="border-t border-border">
        <div className="container-page pt-20 md:pt-28">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">What I work with</h2>
          </Reveal>
          <div className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {skillCategories.map((group, i) => (
              <Reveal key={group.category} delay={(i % 2) * 80}>
                <h3 className="text-sm font-medium text-muted-foreground">{group.category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm font-normal">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 border-t border-border pt-6">
            <p className="text-muted-foreground">
              <span className="font-medium text-foreground">Spoken:</span> Vietnamese (native), English (professional
              working proficiency, IELTS 7.0)
            </p>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
};

export default About;
