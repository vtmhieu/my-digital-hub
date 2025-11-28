import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import avatarImage from "@/assets/avatar.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6 animate-in fade-in duration-700">
            <div className="mb-8">
              <img 
                src={avatarImage} 
                alt="Hieu Vu Tong Minh" 
                className="w-32 h-32 rounded-full mx-auto shadow-medium border-4 border-accent/20 object-cover"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary leading-tight">
              Hieu Vu Tong Minh
              <span className="block bg-gradient-warm bg-clip-text text-transparent">
                Cloud Native Engineer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto">
              Kubernetes Platform Engineer passionate about open source. Designing scalable control planes and building cloud infrastructure. MSc Student at KTH.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-gradient-warm hover:opacity-90 transition-opacity">
                <Link to="/projects">
                  View My Work
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">About Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/projects" className="group">
              <div className="p-8 bg-card rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 border border-border">
                <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-accent transition-colors">Projects</h3>
                <p className="text-foreground/70">Explore my latest work and side projects</p>
              </div>
            </Link>
            <Link to="/experiences" className="group">
              <div className="p-8 bg-card rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 border border-border">
                <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-accent transition-colors">Experience</h3>
                <p className="text-foreground/70">My professional journey and achievements</p>
              </div>
            </Link>
            <Link to="/stories" className="group">
              <div className="p-8 bg-card rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 border border-border">
                <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-accent transition-colors">Stories</h3>
                <p className="text-foreground/70">Daily reflections and learnings</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Let's Connect</h2>
          <p className="text-lg text-foreground/70 mb-8">
            I'm always open to new opportunities and collaborations
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              variant="outline" 
              size="icon" 
              className="hover:bg-accent hover:text-accent-foreground transition-colors"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="hover:bg-accent hover:text-accent-foreground transition-colors"
              asChild
            >
              <a href="https://www.linkedin.com/in/hieu-vu-tong-minh/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="hover:bg-accent hover:text-accent-foreground transition-colors"
              asChild
            >
              <a href="mailto:hieuvtm@kth.se">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
