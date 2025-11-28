import { Navigation } from "@/components/Navigation";
import { ExperienceCard } from "@/components/ExperienceCard";

const Experiences = () => {
  const experiences = [
    {
      company: "FPT Smart Cloud",
      position: "Cloud Platform Engineer",
      period: "Aug 2023 – Aug 2025",
      description: "Core member of the Managed FPT Kubernetes Engine (M-FKE) team, building and maintaining production-grade Kubernetes infrastructure serving 500+ customer clusters across multiple sites in Vietnam and Japan.",
      achievements: [
        "Designed declarative automation workflows using Kubernetes reconciliation patterns and operator-based architecture, improving reliability and reducing manual operations",
        "Developed and maintained infrastructure controllers (Cloud Controller Manager, Machine Controller Manager), ensuring seamless integration between Kubernetes and underlying OpenStack/VMware infrastructure",
        "Implemented self-service configuration for autoscaler parameters and hibernation workflows (scale-to-zero), reducing infrastructure costs by up to 30%",
        "Delivered quarterly Kubernetes upgrades (up to v1.32), aligned with community releases, including operator updates and VM template refreshes",
        "Implemented full-stack observability with Grafana, Loki, and Prometheus for proactive incident detection and reduced MTTR",
        "Developed advanced Load Balancer features (Proxy Protocol, Layer 7 HTTPS routing, health checks) and integrated Cilium CNI for eBPF-based networking",
        "Designed a highly available ingress architecture for kube-apiserver, ensuring resilient multi-zone failover and zero-downtime control plane upgrades",
        "Architected a Kubernetes Operator (Golang) with custom CRDs for automated backup and restore of persistent volumes and cluster configurations on OpenStack",
        "Architected Private Cluster endpoints and integrated automated vulnerability scanning (Trivy) and runtime threat detection (Falco)",
        "Delivered Tier-3 technical support and incident response, collaborating cross-functionally on feature development and resource tagging for billing automation"
      ],
      skills: ["Kubernetes", "Operators", "OpenStack", "VMware", "Go", "Python", "Terraform", "Ansible", "ArgoCD", "Helm", "Prometheus", "Grafana", "Loki", "Cilium", "Trivy", "Falco"]
    },
    {
      company: "Viettel Cyber Security",
      position: "Backend Developer Intern",
      period: "Jun 2022 – Nov 2022",
      description: "Selected for the competitive VCS Talent Internship Program. Developed backend microservices and gained experience in enterprise security solutions and distributed backend systems.",
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
