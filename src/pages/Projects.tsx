import { Navigation } from "@/components/Navigation";
import { ProjectCard } from "@/components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Cluster Hibernation & Resume Automation",
      description: "Designed workflows to hibernate Kubernetes clusters (scale nodes to 0) and restore on demand using custom controllers. Reduced infrastructure cost for customers by up to 30%.",
      tags: ["Kubernetes", "Operators", "OpenStack", "Automation", "Cost Optimization"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    },
    {
      title: "Automated Kubernetes Version Upgrade System",
      description: "Built upgrade pipelines to automatically update control-plane and worker nodes in sync with upstream releases. Integrated version compatibility checks and rollback logic across 500+ deployments.",
      tags: ["Kubernetes", "Automation", "Upgrades", "Version Management", "Rollback"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
    {
      title: "Backup & Restore Operator for OpenStack",
      description: "Developed a Golang-based Kubernetes Operator with CRDs to back up and restore cluster configurations and persistent volumes.",
      tags: ["Kubernetes", "Golang", "Operators", "CRDs", "OpenStack", "Backup"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    },
    {
      title: "Multi-Cloud Networking Enhancements",
      description: "Extended Machine Controller Manager (MCM) and Load Balancer integrations with Cilium CNI, Proxy Protocol, and multi-zone HA support.",
      tags: ["Kubernetes", "Cilium", "eBPF", "Networking", "Multi-Cloud", "High Availability"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
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
