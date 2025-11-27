import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Linkedin, Mail, Phone, MessageCircle } from "lucide-react";
import avatarImage from "@/assets/avatar.png";

const About = () => {
  const skillCategories = [
    {
      category: "Cloud & Infrastructure",
      skills: ["OpenStack", "Kubernetes", "Terraform (IaC)", "Ansible", "VMware", "GCP Concepts"]
    },
    {
      category: "Programming",
      skills: ["Python", "Go (Golang)", "Bash/Shell scripting", "TypeScript"]
    },
    {
      category: "CI/CD & DevOps",
      skills: ["GitOps", "ArgoCD", "Jenkins", "Helm", "Docker"]
    },
    {
      category: "Observability & Security",
      skills: ["Prometheus", "Grafana", "Loki", "Falco", "Trivy", "Network Policies"]
    },
    {
      category: "Databases & Storage",
      skills: ["PostgreSQL", "MySQL", "Redis", "etcd", "CSI Drivers"]
    }
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
              <p className="text-xl text-foreground/70 mb-6">
                Cloud Engineer / Platform Engineer — MSc Student at KTH
              </p>
              <div className="flex gap-3 justify-center mb-6 flex-wrap">
                <Button 
                  variant="outline" 
                  size="sm"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/hieu-vu-tong-minh/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  asChild
                >
                  <a href="mailto:hieuvtm@kth.se">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  asChild
                >
                  <a href="tel:+46764574103">
                    <Phone className="w-4 h-4 mr-2" />
                    +46 764 574 103
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  asChild
                >
                  <a href="https://wa.me/84961596635" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </div>
              <Button 
                className="bg-gradient-warm hover:opacity-90 transition-opacity"
                asChild
              >
                <a href="/HieuVTM_CV.pdf" download="HieuVTM_CV.pdf">
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
                    Cloud Engineer with 2 years of experience building scalable, enterprise-grade infrastructure. 
                    Strong expertise in <strong>Infrastructure as Code (IaC)</strong>, <strong>Automation</strong>, and 
                    <strong> Modern Cloud Solutions</strong>. Proven track record of driving <strong>sustainability</strong> by 
                    optimizing resource usage and ensuring high availability for critical banking-grade systems. Currently 
                    pursuing an MSc in Distributed Systems at KTH. Eager to apply deep technical expertise in cloud foundations 
                    (GCP/Private Cloud) and question the status quo to create value.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold mb-4 text-accent">Education</h2>
                  <div className="space-y-4">
                    <div className="border-l-4 border-accent pl-4">
                      <h3 className="font-semibold text-lg">MSc in Software Engineering of Distributed Systems</h3>
                      <p className="text-foreground/70">KTH Royal Institute of Technology • 2025 – Now</p>
                      <p className="text-foreground/60 text-sm mt-1">Stockholm, Sweden — Focus: Cloud Computing, Distributed Algorithms</p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <h3 className="font-semibold text-lg">BSc in Electronics and Telecommunications</h3>
                      <p className="text-foreground/70">Hanoi University of Science and Technology • 2019 – 2023</p>
                      <p className="text-foreground/60 text-sm mt-1">GPA: 3.58/4.0 — Ranked 1st in graduation thesis defense (9.5/10)</p>
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
                      <span className="font-medium">English</span>
                      <span className="text-foreground/70">Professional Working Proficiency (IELTS 7.0)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Vietnamese</span>
                      <span className="text-foreground/70">Native</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold mb-4 text-accent">Honors & Extracurricular Activities</h2>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lg">Executive Committee Member, Student Youth Union (HUST)</h3>
                        <Badge variant="secondary">2019 – 2023</Badge>
                      </div>
                      <ul className="list-disc list-inside text-foreground/80 space-y-1 ml-2">
                        <li><strong>Leadership & Collaboration:</strong> Head Organizer of SETCUP (Scale: 600+ participants). Managed large teams and logistics, fostering an inclusive environment.</li>
                        <li><strong>Community Building:</strong> Core Organizer for "Welcome Freshmen" (University-wide) and Career Orientation events, helping students navigate their future.</li>
                      </ul>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-lg">"Student of 5 Merits" Title</h3>
                        <p className="text-foreground/70 text-sm">Awarded for excellence in 5 criteria: Study, Ethics, Volunteering, Integration, and Physical Fitness.</p>
                      </div>
                      <Badge variant="secondary">2023</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-lg">Merit Scholarships (Type A)</h3>
                        <p className="text-foreground/70 text-sm">Awarded four times for outstanding academic performance.</p>
                      </div>
                      <Badge variant="secondary">2019 – 2023</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
