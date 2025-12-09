import { Navigation } from "@/components/Navigation";
import { ProjectCard } from "@/components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Backup & Restore Operator for OpenStack",
      description: "Kubebuilder-based Kubernetes operator for backing up and restoring PersistentVolumeClaims in OpenStack-based clusters using Cinder CSI. Provides declarative CRDs for PVC inventory, snapshot management, and restore operations across multi-cluster environments.",
      tags: ["Kubernetes", "Golang", "Kubebuilder", "Operators", "CRDs", "OpenStack", "Cinder CSI"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      featured: true,
      githubUrl: "https://github.com/vtmhieu/backup-restore-openstack-mfke",
      details: [
        "Designed and implemented a Kubebuilder-based Kubernetes operator with three custom resources: `Pvc`, `PvSnapshot`, and `RestorePvc`",
        "Built `PvcReconciler` to inventory PVCs in target namespaces across multi-cluster (shoot) environments with periodic refresh",
        "Developed `PvSnapshotReconciler` to create and manage CSI VolumeSnapshots integrated with OpenStack Cinder APIs",
        "Implemented `RestorePvcReconciler` for creating new PVCs from snapshots with validation and idempotency handling",
        "Created `SchedulerSnapshotReconciler` for cron-based automated backups with configurable schedules and time zones",
        "Implemented retention policies to automatically clean up old snapshots while preserving in-use resources",
        "Added finalizers, status conditions, and periodic requeue logic using controller-runtime for robust reconciliation",
        "Built multi-cluster support with dynamic client creation from shoot kubeconfigs for managing remote clusters",
        "Designed installer distribution system using Kustomize to generate single-file `install.yaml` for easy deployment"
      ],
      technologies: ["Kubernetes", "Golang", "Kubebuilder", "Controller-Runtime", "CRDs", "OpenStack Cinder", "CSI", "Kustomize", "Multi-cluster"],
      results: [
        "Enabled declarative backup/restore workflows for OpenStack-based Kubernetes clusters using custom resources",
        "Provided automated snapshot scheduling with cron-like syntax and retention management",
        "Supported multi-cluster operations for inventory and backup across shoot clusters",
        "Created production-ready operator scaffold ready for integration with OpenStack/Kubernetes environments",
        "Designed extensible architecture for implementing custom snapshot and restore flows"
      ]
    },
    {
      title: "Personal Portfolio Website",
      description: "Modern, responsive portfolio website showcasing professional experience, projects, and achievements. Built with React and deployed on AWS CloudFront for optimal performance and global availability.",
      tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "AWS", "CloudFront", "Portfolio"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
      liveUrl: "https://www.hieuvtm.site",
      details: [
        "Designed and developed a modern, responsive portfolio website with React and TypeScript",
        "Implemented component-based architecture using shadcn/ui and Tailwind CSS for a polished UI",
        "Built multi-page navigation with React Router for seamless user experience",
        "Created interactive project cards with detailed dialogs showcasing work and achievements",
        "Integrated CV download functionality and external links to professional profiles",
        "Configured AWS S3 + CloudFront deployment for global CDN distribution",
        "Set up automated CI/CD pipeline with GitHub Actions for seamless deployments",
        "Optimized build configuration with code splitting and asset hashing for performance",
        "Implemented responsive design ensuring optimal viewing across all devices"
      ],
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "React Router", "AWS S3", "AWS CloudFront", "GitHub Actions", "CI/CD"],
      results: [
        "Successfully deployed portfolio website with 99.9% uptime on AWS CloudFront",
        "Achieved fast page load times with global CDN distribution",
        "Streamlined deployment process with automated CI/CD pipeline",
        "Created a professional showcase for CV, projects, and experiences"
      ]
    },
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
    {
      title: "Distributed Messaging System",
      description: "Built a distributed middleware with replication, failure detection, and logical-clock synchronization. Demonstrated consistency and fault-tolerant message routing.",
      tags: ["Erlang/OTP", "Distributed Systems", "Replication", "Failure Detection", "KTH"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      details: [
        "Implemented distributed messaging middleware using Erlang/OTP",
        "Built replication mechanisms for fault tolerance",
        "Developed failure detection algorithms",
        "Implemented logical-clock synchronization",
        "Designed and validated consistency guarantees",
        "Created fault-tolerant message routing system"
      ],
      technologies: ["Erlang/OTP", "Distributed Systems", "Replication", "Failure Detection"],
      results: [
        "Demonstrated consistency in distributed message passing",
        "Achieved fault-tolerant message routing",
        "Validated system behavior under various failure scenarios"
      ]
    },
    {
      title: "Big Data Analytics System",
      description: "Developed clustering, classification, and streaming analytics pipelines on large datasets using Apache Spark and Flink.",
      tags: ["Python", "Apache Spark", "Apache Flink", "Big Data", "Machine Learning", "KTH"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      details: [
        "Implemented clustering algorithms for large-scale data analysis",
        "Developed classification models for pattern recognition",
        "Built batch processing pipelines with Apache Spark",
        "Created streaming analytics with Apache Flink",
        "Designed data processing workflows for large datasets",
        "Analyzed and optimized performance of distributed data processing"
      ],
      technologies: ["Python", "Apache Spark", "Apache Flink", "Batch Processing", "Stream Processing"],
      results: [
        "Successfully processed large-scale datasets",
        "Implemented efficient clustering and classification pipelines",
        "Demonstrated real-time streaming analytics capabilities"
      ]
    },
    {
      title: "Multi-Agent Simulation Platform",
      description: "Implemented negotiation, coordination, and decentralized decision-making using agent-based modeling. Analyzed emergent behavior under different agent architectures.",
      tags: ["GAMA", "Multi-Agent Systems", "Agent-Based Modeling", "AI", "KTH"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
      details: [
        "Implemented multi-agent system using GAMA platform",
        "Developed negotiation protocols between agents",
        "Built coordination mechanisms for decentralized systems",
        "Designed agent architectures with different behavioral patterns",
        "Analyzed emergent behavior in complex systems",
        "Evaluated performance under various agent configurations"
      ],
      technologies: ["GAMA", "Agent-Based Modeling", "Multi-Agent Systems", "Decentralized Decision-Making"],
      results: [
        "Demonstrated effective agent negotiation and coordination",
        "Analyzed emergent behaviors in distributed systems",
        "Evaluated different agent architectures"
      ]
    },
    {
      title: "Adaptive Partitioning for Cesium 3D Tiles",
      description: "Designed adaptive octree partitioning for massive glTF datasets. Improved rendering and memory efficiency for 3D city models.",
      tags: ["Python", "C++", "CesiumJS", "3D Graphics", "Bachelor Thesis", "HUST"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      reportUrl: "/VuTongMinhHieu_DATN_thaygui.pdf",
      details: [
        "Designed adaptive octree partitioning algorithm for 3D tile datasets",
        "Optimized partitioning for massive glTF datasets",
        "Implemented memory-efficient rendering strategies",
        "Improved rendering performance for 3D city models",
        "Developed algorithms to balance detail and performance",
        "Integrated with CesiumJS for visualization"
      ],
      technologies: ["Python", "C++", "CesiumJS", "3D Graphics", "Octree Partitioning", "glTF"],
      results: [
        "Improved rendering efficiency for large 3D models",
        "Reduced memory usage through adaptive partitioning",
        "Achieved better performance for 3D city model visualization",
        "Ranked 1st in graduation thesis defense (9.5/10)"
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
