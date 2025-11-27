import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Linkedin, Mail } from "lucide-react";
import avatarImage from "@/assets/avatar.jpg";

const About = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js",
    "Python", "SQL", "Git", "Docker",
    "AWS", "UI/UX Design", "Agile"
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-in fade-in duration-700 space-y-8">
            <div className="text-center mb-12">
              <img 
                src={avatarImage} 
                alt="Hieu Vu Tong Minh" 
                className="w-40 h-40 rounded-full mx-auto mb-6 shadow-medium border-4 border-accent/20 object-cover"
              />
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-4">
                Hieu Vu Tong Minh
              </h1>
              <p className="text-xl text-foreground/70 mb-6">
                Developer, Designer, and Lifelong Learner
              </p>
              <div className="flex gap-3 justify-center mb-6">
                <Button 
                  variant="outline" 
                  size="sm"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/hieu-vu-tong-minh/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  asChild
                >
                  <a href="mailto:vtmhieu111@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </a>
                </Button>
              </div>
              <Button 
                className="bg-gradient-warm hover:opacity-90 transition-opacity"
                asChild
              >
                <a href="/HieuVTM_CV.pdf" download="HieuVTM_CV.pdf">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </a>
              </Button>
            </div>

            <Card className="shadow-medium">
              <CardContent className="p-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-serif font-bold mb-4 text-accent">Bio</h2>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Hello! I'm Hieu Vu Tong Minh, a passionate developer and designer with a love for creating beautiful, 
                    functional digital experiences. With years of experience in web development and a 
                    keen eye for design, I strive to build products that make a difference.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    When I'm not coding, you can find me exploring new technologies, reading about design 
                    principles, or sharing my learnings through blog posts and community contributions.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold mb-4 text-accent">Education</h2>
                  <div className="space-y-3">
                    <div className="border-l-4 border-accent pl-4">
                      <h3 className="font-semibold text-lg">Computer Science Degree</h3>
                      <p className="text-foreground/70">University Name • 2018 - 2022</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold mb-4 text-accent">Skills</h2>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold mb-4 text-accent">Interests</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    Web Development • UI/UX Design • Open Source • Photography • Writing • Travel
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
