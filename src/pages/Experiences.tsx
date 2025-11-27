import { Navigation } from "@/components/Navigation";
import { ExperienceCard } from "@/components/ExperienceCard";

const Experiences = () => {
  const experiences = [
    {
      company: "Tech Company Inc.",
      position: "Senior Frontend Developer",
      period: "2022 - Present",
      description: "Leading frontend development for multiple products, mentoring junior developers, and architecting scalable solutions.",
      skills: ["React", "TypeScript", "Next.js", "Team Leadership"]
    },
    {
      company: "Digital Agency",
      position: "Full Stack Developer",
      period: "2020 - 2022",
      description: "Developed client websites and web applications using modern tech stack. Collaborated with designers and project managers.",
      skills: ["React", "Node.js", "MongoDB", "AWS"]
    },
    {
      company: "Startup Co.",
      position: "Junior Developer",
      period: "2018 - 2020",
      description: "Started my professional journey building features for a SaaS product. Learned industry best practices and agile methodology.",
      skills: ["JavaScript", "Vue.js", "Python", "Docker"]
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
                <ExperienceCard key={exp.company} {...exp} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
