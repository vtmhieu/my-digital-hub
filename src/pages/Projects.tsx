import { Navigation } from "@/components/Navigation";
import { ProjectCard } from "@/components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Cluster Hibernation & Sustainability",
      description: "Designed workflows to hibernate cloud resources during inactivity, demonstrating a commitment to sustainable tech by reducing energy waste. Reduced infrastructure energy consumption and costs by 30%.",
      tags: ["Kubernetes", "OpenStack", "Automation", "Sustainability", "Infrastructure"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    },
    {
      title: "Automated Infrastructure Upgrade System",
      description: "Built CI/CD pipelines to automatically update infrastructure components, ensuring long-term maintainability. Delivered quarterly Kubernetes upgrades (up to v1.32) utilizing automation to ensure zero-downtime and security compliance.",
      tags: ["CI/CD", "Kubernetes", "Terraform", "GitOps", "ArgoCD"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
    {
      title: "Backup & Restore Operator",
      description: "Developed a custom Kubernetes Operator with CRDs (Golang) to secure cluster configurations and data, ensuring business continuity. Built automated workflows and operational dashboards to monitor backup health and retention compliance.",
      tags: ["Kubernetes", "Golang", "Operators", "CRDs", "Backup"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    },
    {
      title: "Multi-Cloud Networking Enhancements",
      description: "Extended Cloud Controller Managers with Cilium CNI and Layer-7 routing to improve network performance. Enhanced cloud networking by developing advanced Load Balancer features (Proxy Protocol, Layer 7 HTTPS routing).",
      tags: ["Kubernetes", "Cilium CNI", "eBPF", "Networking", "Load Balancing"],
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
                My Projects
              </h1>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                A collection of my work ranging from web applications to open-source contributions
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
