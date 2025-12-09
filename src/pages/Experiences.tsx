import { Navigation } from "@/components/Navigation";
import { ExperienceCard } from "@/components/ExperienceCard";

const Experiences = () => {
  const experiences = [
    {
      company: "FPT Smart Cloud",
      position: "Cloud Platform Engineer",
      period: "Aug 2023 – Aug 2025",
      description: "Core engineer in the Managed FPT Kubernetes Engine (M-FKE) team, developing large-scale distributed control-plane components powering 500+ production Kubernetes clusters across multi-site environments in Vietnam and Japan.",
      achievements: [
        "Designed and implemented Kubernetes reconciliation and operator patterns to automate cluster lifecycle management",
        "Developed control-plane controllers (CCM, MCM) integrating with OpenStack and VMware",
        "Built autoscaling and cluster hibernation workflows reducing operational cost by up to 30%",
        "Delivered quarterly Kubernetes upgrades (up to v1.32)",
        "Built end-to-end observability using Prometheus, Loki, Grafana",
        "Designed multi-zone control-plane ingress with zero-downtime rollout",
        "Developed L4/L7 load-balancing (Proxy Protocol, HTTPS routing) and integrated Cilium/eBPF networking",
        "Built a Kubernetes Operator for automated backup/restore of cluster state and persistent volumes",
        "Implemented private-cluster endpoint architecture, Trivy scanning, and Falco runtime monitoring"
      ],
      skills: ["Kubernetes", "Operators", "OpenStack", "VMware", "Go", "Python", "Terraform", "Ansible", "ArgoCD", "Helm", "Prometheus", "Grafana", "Loki", "Cilium", "Trivy", "Falco"]
    },
    {
      company: "Viettel Cyber Security",
      position: "Backend Developer Intern",
      period: "Jun 2022 – Nov 2022",
      description: "Selected for the competitive VCS Talent Program. Developed distributed backend microservices and gained experience with enterprise-grade security and large-scale system design.",
      skills: ["Go", "Backend Development", "Microservices", "Distributed Systems"]
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-in fade-in duration-700">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-4">
                Experience
              </h1>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                My professional journey through various roles and companies
              </p>
            </div>

            <div className="space-y-6">
              {experiences.map((exp) => (
                <ExperienceCard 
                  key={exp.company} 
                  company={exp.company}
                  position={exp.position}
                  period={exp.period}
                  description={exp.description}
                  skills={exp.skills}
                  achievements={exp.achievements}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
