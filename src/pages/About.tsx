import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Linkedin, Mail, Phone, MessageCircle } from "lucide-react";
import avatarImage from "@/assets/avatar.png";

const About = () => {
  const skillCategories = [
    {
      category: "Kubernetes Ecosystem",
      skills: ["Kubernetes", "Operators", "Helm", "Istio", "Calico", "Cilium"]
    },
    {
      category: "Cloud & Virtualization",
      skills: ["OpenStack", "VMware vSphere"]
    },
    {
      category: "Programming",
      skills: ["Go", "Python", "Bash/Shell", "Terraform", "Ansible", "YAML"]
    },
    {
      category: "Observability",
      skills: ["Prometheus", "Grafana", "Loki"]
    },
    {
      category: "Storage & Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "etcd", "CSI Drivers"]
    },
    {
      category: "CI/CD & Security",
      skills: ["ArgoCD", "Jenkins", "RBAC", "Network Policies", "Trivy", "Falco"]
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
                Cloud Native / Kubernetes Platform Engineer — Passionate about Open Source
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
                  <a href="tel:+84961596635">
                    <Phone className="w-4 h-4 mr-2" />
                    +84 961 596 635
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
                    Cloud Native Platform Engineer with strong experience in Kubernetes orchestration, automation, and open-source cloud infrastructure. 
                    Proven track record designing scalable control planes, developing Kubernetes Operators with custom CRDs, and integrating with 
                    multi-cloud environments (OpenStack, VMware). Passionate about automation, observability, and contributing to open-source infrastructure 
                    projects. Currently pursuing MSc in Software Engineering of Distributed Systems at KTH Royal Institute of Technology.
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
                      <p className="text-foreground/60 text-sm mt-1">GPA: 3.58/4.0 — Ranked first in graduation thesis defense (9.5/10)</p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <h3 className="font-semibold text-lg">Physics Specialized Student</h3>
                      <p className="text-foreground/70">High School for Gifted Students – HNUE • 2016 – 2019</p>
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
                  <h2 className="text-2xl font-serif font-bold mb-4 text-accent">Honors & Extracurricular Activities</h2>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
