import { PageHeader, SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";

const Experiences = () => {
  const experiences = [
    {
      company: "FPT Smart Cloud",
      position: "Cloud Platform Engineer, Founding Platform Team",
      period: "Aug 2023 - Aug 2025",
      description: "Founding engineer in a 6-person team that built the Managed FPT Kubernetes Engine (M-FKE), a managed Kubernetes service similar to AWS EKS. Built and operated the Kubernetes-on-Kubernetes control plane behind 500+ customer clusters across Vietnam and Japan, running on OpenStack and VMware vSphere.",
      achievements: [
        "Built and operated the Kubernetes-on-Kubernetes control plane behind 500+ customer clusters on OpenStack and VMware vSphere: VM provisioning, cluster bootstrap, CIDR and security groups, API server exposure, and Terraform-based hybrid-cloud provisioning for Gardener MCM/CCM.",
        "Built the cluster hibernate and wake-up workflow: worker nodes scale to zero while etcd state, PVCs, and Services are kept, and the cluster is restored on demand. Reduced infrastructure cost by 30% for enterprise customers. (Go, Kubernetes, OpenStack)",
        "Extended the Cloud Controller Manager to provision L4/L7 load balancers for LoadBalancer Services, with Proxy Protocol and multi-zone high availability. Added Cilium/eBPF as a self-service CNI option at cluster creation.",
        "Owned and engineered a Kubebuilder-based Kubernetes Operator from the ground up to automate persistent volume (PVC) backups and cluster-state recovery. Architected custom CRDs and complex reconciliation loops to orchestrate cron-scheduled snapshots, enforce retention policies, and manage on-demand restoration across OpenStack shoot clusters, directly unlocking contracts with compliance-heavy clients (Go, Kubebuilder, Cinder CSI, etcd).",
        "Ran quarterly zero-downtime Kubernetes upgrades (up to v1.32) across multi-site environments, maintaining continuous platform stability for our client base (Kubernetes, GitOps, CRDs).",
        "Partnered with enterprise customers to migrate their staging and production environments from AWS to the Managed FPT Kubernetes Engine, ensuring minimal downtime and seamless architectural transitions (AWS, Kubernetes, Helm, Terraform)."
      ],
      skills: ["Go", "Kubernetes", "Operators", "Kubebuilder", "Gardener", "OpenStack", "VMware vSphere", "Terraform", "Cilium", "eBPF", "etcd", "Prometheus", "Grafana", "Loki", "Docker"]
    },
    {
      company: "Viettel Cyber Security",
      position: "Backend Developer Intern",
      period: "Jun 2022 - Nov 2022",
      description: "Selected for the competitive VCS Talent Program.",
      achievements: [
        "Created and launched a backend application to manage internal company servers, providing a centralized system for tracking and managing infrastructure resources (Go, PostgreSQL, Docker).",
        "Implemented role-based access control (RBAC) and secure RESTful APIs to manage user permissions, and containerized the application services to ensure consistent deployment (Docker, REST APIs)."
      ],
      skills: ["Go", "PostgreSQL", "Docker", "REST APIs", "RBAC"]
    },
  ];

  return (
    <SiteLayout>
      <PageHeader title="Experience" description="My professional journey through various roles and companies" />

      <div className="container-page pt-14 md:pt-20">
        {experiences.map((exp) => (
          <article key={exp.company} className="grid gap-8 border-t border-border py-12 md:py-16 lg:grid-cols-12 lg:gap-12">
            <Reveal className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <p className="font-mono text-sm text-muted-foreground">{exp.period}</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">{exp.company}</h2>
                <p className="mt-2 text-muted-foreground">{exp.position}</p>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="font-normal">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-8" delay={80}>
              <p className="max-w-[62ch] text-lg leading-relaxed text-foreground/85">{exp.description}</p>
              <ul className="mt-8 space-y-5">
                {exp.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="max-w-[68ch] border-l-2 border-primary/30 pl-5 leading-relaxed text-muted-foreground"
                  >
                    {achievement}
                  </li>
                ))}
              </ul>
            </Reveal>
          </article>
        ))}
      </div>
    </SiteLayout>
  );
};

export default Experiences;
