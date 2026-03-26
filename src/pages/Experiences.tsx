import { Navigation } from "@/components/Navigation";
import { ExperienceCard } from "@/components/ExperienceCard";

const Experiences = () => {
  const experiences = [
    {
      company: "FPT Smart Cloud",
      position: "Cloud Platform Engineer",
      period: "Aug 2023 – Aug 2025",
      description: "Core engineer at a public cloud provider, building the Managed FPT Kubernetes Engine (M-FKE). Engineered the underlying control-plane infrastructure to provide Kubernetes as a managed service (similar to AWS EKS) to 100+ enterprise customers, powering 500+ customer clusters across Vietnam and Japan.",
      achievements: [
        "Owned and engineered a Kubebuilder-based Kubernetes Operator from the ground up to automate persistent volume (PVC) backups and cluster-state recovery. Architected custom CRDs and complex reconciliation loops to orchestrate cron-scheduled snapshots, enforce retention policies, and manage on-demand restoration across OpenStack shoot clusters, directly unlocking contracts with compliance-heavy clients (Go, Kubebuilder, Cinder CSI, etcd).",
        "Engineered cluster hibernation workflows within the M-FKE control plane, automating node scaling to zero and reducing compute overhead costs by 30% for cost-conscious enterprise clients. (Go, Kubernetes, OpenStack)",
        "Orchestrated the refactoring of Gardener-based MCM/CCM with Terraform, automating hybrid-cloud lifecycle management across OpenStack and VMware vSphere while reducing VM cluster join times by 20%. (Go, Terraform, Gardener)",
        "Integrated Cilium (eBPF-based networking) and implemented Layer 4/Layer 7 load balancing to meet strict enterprise security requirements, providing customers with multi-zone high availability and advanced network policies (Cilium, eBPF, Proxy Protocol).",
        "Orchestrated zero-downtime quarterly Kubernetes upgrades (up to v1.32) across multi-site environments, maintaining continuous platform stability for our client base (Kubernetes, GitOps, CRDs).",
        "Partnered with enterprise customers to migrate their staging and production environments from AWS to the Managed FPT Kubernetes Engine, ensuring minimal downtime and seamless architectural transitions (AWS, Kubernetes, Helm, Terraform)."
      ],
      skills: ["Go", "Kubernetes", "Operators", "OpenStack", "VMware", "Terraform", "Cilium", "eBPF", "Prometheus", "Grafana", "Loki", "Docker"]
    },
    {
      company: "Viettel Cyber Security",
      position: "Backend Developer Intern",
      period: "Jun 2022 – Nov 2022",
      description: "Selected for the competitive VCS Talent Program.",
      achievements: [
        "Created and launched a backend application to manage internal company servers, providing a centralized system for tracking and managing infrastructure resources (Go, PostgreSQL, Docker).",
        "Implemented role-based access control (RBAC) and secure RESTful APIs to manage user permissions, and containerized the application services to ensure consistent deployment (Docker, REST APIs)."
      ],
      skills: ["Go", "PostgreSQL", "Docker", "REST APIs", "RBAC"]
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
