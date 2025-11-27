import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-4">
                About Me
              </h1>
              <p className="text-xl text-foreground/70">
                Developer, Designer, and Lifelong Learner
              </p>
            </div>

            <Card className="shadow-medium">
              <CardContent className="p-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-serif font-bold mb-4 text-accent">Bio</h2>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Hello! I'm a passionate developer and designer with a love for creating beautiful, 
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
