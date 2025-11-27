import { Navigation } from "@/components/Navigation";
import { ExperienceCard } from "@/components/ExperienceCard";

const Experiences = () => {
  const experiences = [
    {
      company: "FPT Smart Cloud",
      position: "Cloud Platform Engineer",
      period: "Aug 2023 – Aug 2025",
      description: "Core member of the Cloud Foundation Team, building and maintaining production-grade Kubernetes infrastructure serving 500+ customer clusters across multiple sites.",
      achievements: [
        "Designed declarative automation workflows using Infrastructure as Code (IaC) and reconciliation patterns, replacing manual operations to ensure long-term stability",
        "Developed and refactored infrastructure controllers (Cloud Controller Manager, Machine Controller Manager), ensuring seamless integration between Kubernetes and underlying cloud infrastructure (OpenStack/VMware)",
        "Sustainability Focus: Designed and implemented a cluster hibernation/resume workflow (scaling nodes to zero), reducing infrastructure energy consumption and costs by 30%",
        "Implemented self-service configuration for autoscalers, enabling customers to optimize their own scaling behavior",
        "Delivered quarterly Kubernetes upgrades (up to v1.32) utilizing automation to ensure zero-downtime and security compliance",
        "Supported high-performance computing needs by deploying specialized VM templates optimized for NVIDIA GPU workloads",
        "Enhanced cloud networking by developing advanced Load Balancer features (Proxy Protocol, Layer 7 HTTPS routing) and integrating Cilium CNI for eBPF-based security",
        "Architected a Kubernetes Operator (Golang/CRDs) for automated backup and restore of persistent volumes, ensuring data integrity and disaster recovery readiness"
      ],
      skills: ["Kubernetes", "OpenStack", "Terraform", "Ansible", "Go", "Python", "GitOps", "ArgoCD", "Helm", "Docker", "Prometheus", "Grafana", "Cilium CNI"]
    },
    {
      company: "Viettel Cyber Security",
      position: "Backend Developer Intern",
      period: "Jun 2022 – Nov 2022",
      description: "Selected for the competitive VCS Talent Internship Program. Gained experience in developing secure backend microservices for enterprise security solutions.",
      skills: ["Backend Development", "Microservices", "Security"]
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
