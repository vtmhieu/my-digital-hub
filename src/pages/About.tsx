import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import avatarImage from "@/assets/avatar.png";

const About = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Go", "Python", "Rust", "C", "Bash", "Erlang/OTP"]
    },
    {
      category: "Kubernetes & Cloud",
      skills: ["Kubernetes (Operators, CRDs, Kubebuilder)", "Gardener", "Cilium/eBPF", "Helm", "GitOps", "Terraform", "OpenStack", "VMware vSphere", "AWS", "Docker", "Linux"]
    },
    {
      category: "ML Systems & HPC",
      skills: ["vLLM", "LMCache", "MPI", "OpenMP", "HuggingFace Transformers", "scikit-learn", "PySpark", "Delta Lake"]
    },
    {
      category: "Data & Observability",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "etcd", "Prometheus", "Grafana", "Loki"]
    }
  ];

  const roles = [
    {
      position: "Cloud Platform Engineer, Founding Platform Team",
      company: "FPT Smart Cloud",
      period: "Aug 2023 – Aug 2025",
      summary: "Founding engineer in a 6-person team that built M-FKE, a managed Kubernetes service similar to AWS EKS, serving 500+ customer clusters across Vietnam and Japan."
    },
    {
      position: "Backend Developer Intern",
      company: "Viettel Cyber Security",
      period: "Jun 2022 – Nov 2022",
      summary: "Selected for the VCS Talent Program. Built a Go/PostgreSQL backend for tracking internal company servers."
    }
  ];

  const quickLinks = [
    { to: "/projects", title: "Projects", blurb: "Kubernetes operators, LLM serving, HPC, and side projects" },
    { to: "/experiences", title: "Experience", blurb: "The full story of my professional work and achievements" },
    { to: "/blog", title: "Blog", blurb: "Notes on cloud infrastructure and distributed systems" }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />

      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-in fade-in duration-700 space-y-8">
            <div className="text-center mb-12">
              <img
                src={avatarImage}
                alt="Hieu Vu Tong Minh"
                className="w-40 h-40 rounded-full mx-auto mb-6 shadow-medium border-4 border-accent/20 object-cover"
              />
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-4">
                Hieu Vu Tong Minh
              </h1>
              <p className="text-xl text-foreground/70 mb-3">
                MSc Student in Distributed Systems at KTH — Platform &amp; ML-Systems Engineering
              </p>
              <p className="flex items-center justify-center gap-2 text-foreground/60 mb-6">
                <MapPin className="w-4 h-4" />
                Stockholm, Sweden
              </p>
              <div className="flex gap-3 justify-center mb-6 flex-wrap">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://www.linkedin.com/in/hieu-vu-tong-minh/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://github.com/vtmhieu" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="mailto:vtmhieu111@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    vtmhieu111@gmail.com
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="tel:+46764574103">
                    <Phone className="w-4 h-4 mr-2" />
                    +46 764574103
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://wa.me/46764574103" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </div>
              <Button
                className="bg-gradient-warm hover:opacity-90 transition-opacity"
                asChild
              >
                <a href="/HieuVTM_CV_110926.pdf" download="HieuVTM_CV_110926.pdf">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </a>
              </Button>
            </div>

            <Card className="shadow-medium">
              <CardContent className="p-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-serif font-bold mb-4 text-accent">Summary</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    MSc student in Distributed Systems at KTH, seeking internship and thesis roles in platform and
                    ML-systems engineering. Previously spent two years as a Cloud Platform Engineer on the founding team
                    behind Managed FPT Kubernetes Engine (M-FKE), building Kubernetes control-plane components in Go
                    serving 500+ customer clusters across Vietnam and Japan. Currently working on LLM serving,
                    distributed consensus, and multi-agent LLM systems.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold mb-4 text-accent">Experience</h2>
                  <div className="space-y-4">
                    {roles.map((role) => (
                      <div key={role.company} className="border-l-4 border-accent pl-4">
                        <h3 className="font-semibold text-lg">{role.position}</h3>
                        <p className="text-foreground/70">{role.company} • {role.period}</p>
                        <p className="text-foreground/60 text-sm mt-1">{role.summary}</p>
                      </div>
                    ))}
                  </div>
                  <Button variant="link" asChild className="px-0 mt-2 text-accent">
                    <Link to="/experiences">
                      See the full experience
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold mb-4 text-accent">Education</h2>
                  <div className="space-y-4">
                    <div className="border-l-4 border-accent pl-4">
                      <h3 className="font-semibold text-lg">MSc Software Engineering of Distributed Systems</h3>
                      <p className="text-foreground/70">KTH Royal Institute of Technology • 2025 – 2027</p>
                      <p className="text-foreground/60 text-sm mt-1">Stockholm, Sweden — Courses: Advanced Distributed Systems (A), Data-Intensive Computing, Data Mining, HPC, Network Systems for ML</p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <h3 className="font-semibold text-lg">BSc Electronics and Telecommunications</h3>
                      <p className="text-foreground/70">Hanoi University of Science and Technology • 2019 – 2023</p>
                      <p className="text-foreground/60 text-sm mt-1">GPA 3.58/4.0 — Ranked 1st in graduation thesis defense (9.5/10)</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold mb-4 text-accent">Certifications &amp; Awards</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h3 className="font-semibold text-lg">Winner, SSEN Hackathon 2026 (Ellipsis VC Challenge)</h3>
                        <p className="text-foreground/70 text-sm">Built a multi-agent AI app that automates marketing and finance workflows for one-person companies.</p>
                      </div>
                      <Badge variant="secondary" className="shrink-0">Apr 2026</Badge>
                    </div>
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h3 className="font-semibold text-lg">AWS Certified Solutions Architect – Associate (SAA-C03)</h3>
                        <p className="text-foreground/70 text-sm">Amazon Web Services</p>
                      </div>
                      <Badge variant="secondary" className="shrink-0">Mar 2026</Badge>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold mb-4 text-accent">Technical Skills</h2>
                  <div className="space-y-4">
                    {skillCategories.map((category) => (
                      <div key={category.category}>
                        <h3 className="font-semibold text-foreground/90 mb-2">{category.category}</h3>
                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-sm">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold mb-4 text-accent">Languages</h2>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Vietnamese</span>
                      <span className="text-foreground/70">Native</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">English</span>
                      <span className="text-foreground/70">Professional Working Proficiency (IELTS 7.0)</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold mb-4 text-accent">Honors &amp; Extracurricular Activities</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">Merit Scholarships (Type A)</h3>
                        <p className="text-foreground/70 text-sm">Awarded four times for outstanding academic performance at Hanoi University of Science and Technology.</p>
                      </div>
                      <Badge variant="secondary">2019 – 2023</Badge>
                    </div>
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lg">Executive Committee Member, Student Youth Union (HUST)</h3>
                        <Badge variant="secondary">2019 – 2023</Badge>
                      </div>
                      <ul className="list-disc list-inside text-foreground/80 space-y-1 ml-2">
                        <li><strong>Event Management (Scale: 600+ people):</strong> Head Organizer of SETCUP (2019–2021), a major football tournament with 32 teams and over 600 participants per season.</li>
                        <li><strong>University Events:</strong> Core Organizer for the University Freshmen Orientation (2020, 2021), coordinating logistics for university-wide student intake.</li>
                        <li><strong>Student Support:</strong> Led career orientation workshops, academic support groups, and industry networking events to connect students with enterprise partners.</li>
                      </ul>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-lg">"Student of 5 Merits" Title</h3>
                        <p className="text-foreground/70 text-sm">Awarded for excellence in 5 criteria: Study, Ethics, Volunteering, Integration, and Physical Fitness.</p>
                      </div>
                      <Badge variant="secondary">2022</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-lg">Certificate of Merit</h3>
                        <p className="text-foreground/70 text-sm">Recognized by the University President for outstanding study and extracurricular achievements.</p>
                      </div>
                      <Badge variant="secondary">2022</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              {quickLinks.map((link) => (
                <Link key={link.to} to={link.to} className="group">
                  <div className="h-full p-8 bg-card rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 border border-border">
                    <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-accent transition-colors">{link.title}</h3>
                    <p className="text-foreground/70">{link.blurb}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
