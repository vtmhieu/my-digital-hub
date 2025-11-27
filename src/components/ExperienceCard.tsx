import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

interface ExperienceCardProps {
  company: string;
  position: string;
  period: string;
  description: string;
  skills: string[];
  achievements?: string[];
}

export const ExperienceCard = ({ company, position, period, description, skills, achievements }: ExperienceCardProps) => {
  return (
    <Card className="hover:shadow-medium transition-all duration-300 border-l-4 border-l-accent">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <CardTitle className="text-xl">{position}</CardTitle>
            <CardDescription className="text-lg font-medium text-foreground/70">{company}</CardDescription>
          </div>
          <Badge variant="secondary" className="w-fit">{period}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/80 mb-4">{description}</p>
        {achievements && achievements.length > 0 && (
          <ul className="list-disc list-inside space-y-2 mb-4 text-foreground/80">
            {achievements.map((achievement, index) => (
              <li key={index} className="text-sm">{achievement}</li>
            ))}
          </ul>
        )}
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="outline">{skill}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
