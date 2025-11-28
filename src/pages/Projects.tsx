import { Navigation } from "@/components/Navigation";
import { ProjectCard } from "@/components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Cluster Hibernation & Resume Automation",
      description: "Designed workflows to hibernate Kubernetes clusters (scale nodes to 0) and restore on demand using custom controllers. Reduced infrastructure cost for customers by up to 30%.",
      tags: ["Kubernetes", "Operators", "OpenStack", "Automation", "Cost Optimization"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      details: [
        "Designed and implemented declarative automation workflows using Kubernetes reconciliation patterns",
        "Developed custom controllers to manage cluster lifecycle (hibernate/resume)",
        "Implemented scale-to-zero functionality for worker nodes during inactivity",
        "Created self-service configuration for customers to manage hibernation schedules",
        "Integrated with OpenStack APIs for VM lifecycle management",
        "Built monitoring and alerting for hibernation/resume operations"
      ],
      technologies: ["Kubernetes", "Golang", "Kubernetes Operators", "CRDs", "OpenStack APIs", "Prometheus", "Grafana"],
      results: [
        "Reduced infrastructure costs by up to 30% for customers with intermittent workloads",
        "Enabled automatic cost optimization without manual intervention",
        "Improved resource utilization across 500+ customer clusters",
        "Zero-downtime resume operations with proper health checks"
      ]
    },
    {
      title: "Automated Kubernetes Version Upgrade System",
      description: "Built upgrade pipelines to automatically update control-plane and worker nodes in sync with upstream releases. Integrated version compatibility checks and rollback logic across 500+ deployments.",
      tags: ["Kubernetes", "Automation", "Upgrades", "Version Management", "Rollback"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      details: [
        "Designed automated upgrade pipelines for Kubernetes control-plane and worker nodes",
        "Implemented version compatibility checks before initiating upgrades",
        "Built rollback mechanisms with automated health validation",
        "Created operator-based upgrade orchestration for zero-downtime deployments",
        "Integrated with community Kubernetes releases (up to v1.32)",
        "Developed pre-upgrade validation checks and post-upgrade verification",
        "Automated VM template refreshes and image updates"
      ],
      technologies: ["Kubernetes", "Golang", "Kubernetes Operators", "ArgoCD", "Helm", "Terraform", "Ansible"],
      results: [
        "Delivered quarterly Kubernetes upgrades aligned with community releases",
        "Maintained zero-downtime upgrades across 500+ production clusters",
        "Reduced manual upgrade operations by 95%",
        "Implemented automated rollback reducing MTTR from hours to minutes",
        "Ensured security compliance with timely patch updates"
      ]
    },
    {
      title: "Backup & Restore Operator for OpenStack",
      description: "Developed a Golang-based Kubernetes Operator with CRDs to back up and restore cluster configurations and persistent volumes.",
      tags: ["Kubernetes", "Golang", "Operators", "CRDs", "OpenStack", "Backup"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      details: [
        "Architected and developed a Kubernetes Operator using Golang",
        "Created custom CRDs (Custom Resource Definitions) for backup/restore configurations",
        "Implemented automated backup workflows for persistent volumes on OpenStack",
        "Built backup scheduling with retention policies and lifecycle management",
        "Developed restore operations with point-in-time recovery support",
        "Created operational dashboards to monitor backup health and compliance",
        "Integrated with OpenStack Cinder APIs for volume snapshots and backups",
        "Implemented encryption and compression for backup data"
      ],
      technologies: ["Kubernetes", "Golang", "Kubernetes Operators", "CRDs", "OpenStack Cinder", "Prometheus", "Grafana"],
      results: [
        "Automated backup operations ensuring data integrity and disaster recovery readiness",
        "Reduced backup management overhead by 80%",
        "Enabled point-in-time recovery for critical workloads",
        "Improved RTO (Recovery Time Objective) from hours to minutes",
        "Achieved 99.9% backup success rate across all customer clusters"
      ]
    },
    {
      title: "Multi-Cloud Networking Enhancements",
      description: "Extended Machine Controller Manager (MCM) and Load Balancer integrations with Cilium CNI, Proxy Protocol, and multi-zone HA support.",
      tags: ["Kubernetes", "Cilium", "eBPF", "Networking", "Multi-Cloud", "High Availability"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
      details: [
        "Extended Machine Controller Manager (MCM) for multi-cloud node management",
        "Integrated Cilium CNI for eBPF-based networking and security",
        "Developed advanced Load Balancer features including Proxy Protocol support",
        "Implemented Layer 7 HTTPS routing with SSL termination",
        "Built health check mechanisms for Load Balancer backends",
        "Designed highly available ingress architecture for kube-apiserver",
        "Implemented multi-zone failover ensuring resilient control plane operations",
        "Enhanced network policies and security with eBPF-based enforcement"
      ],
      technologies: ["Kubernetes", "Cilium", "eBPF", "Golang", "OpenStack", "VMware", "Network Policies", "Load Balancing"],
      results: [
        "Improved network performance with eBPF-based data plane",
        "Achieved zero-downtime control plane upgrades with multi-zone HA",
        "Enhanced security with network policy enforcement at kernel level",
        "Reduced latency with optimized load balancing algorithms",
        "Enabled seamless multi-cloud networking across OpenStack and VMware"
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="animate-in fade-in duration-700">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-4">
                Projects & Open Source
              </h1>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                A collection of my work on Kubernetes, cloud infrastructure, and open-source contributions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
