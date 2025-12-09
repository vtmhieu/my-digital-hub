import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Github, Info, FileText } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  architectureImage?: string;
  liveUrl?: string;
  githubUrl?: string;
  reportUrl?: string;
  featured?: boolean;
  details?: string[];
  technologies?: string[];
  results?: string[];
}

export const ProjectCard = ({ 
  title, 
  description, 
  tags, 
  image, 
  architectureImage,
  liveUrl, 
  githubUrl,
  reportUrl,
  featured,
  details,
  technologies,
  results
}: ProjectCardProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className={`group hover:shadow-medium transition-all duration-300 overflow-hidden cursor-pointer ${featured ? "border-2 border-accent/60 shadow-lg shadow-accent/20" : ""}`}>
          {image && (
            <div className="overflow-hidden h-48 bg-muted">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
          <CardHeader>
            {featured && (
              <Badge variant="secondary" className="w-fit mb-2 bg-gradient-warm text-white border-0">
                Favorite
              </Badge>
            )}
            <CardTitle className="group-hover:text-accent transition-colors">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
            <Button variant="outline" size="sm" className="w-full">
              <Info className="w-4 h-4 mr-2" />
              View Details
            </Button>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{title}</DialogTitle>
          <DialogDescription className="text-base">{description}</DialogDescription>
        </DialogHeader>
        <div className="space-y-6 py-4">
          {architectureImage && (
            <div>
              <h3 className="font-semibold text-lg mb-3 text-accent">Architecture</h3>
              <div className="rounded-lg overflow-hidden border border-border">
                <img 
                  src={architectureImage} 
                  alt={`${title} Architecture`}
                  className="w-full h-auto"
                />
              </div>
            </div>
          )}
          
          {details && details.length > 0 && (
            <div>
              <h3 className="font-semibold text-lg mb-3 text-accent">What I Did</h3>
              <ul className="space-y-2">
                {details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span className="text-foreground/80">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {technologies && technologies.length > 0 && (
            <div>
              <h3 className="font-semibold text-lg mb-3 text-accent">Technologies & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </div>
          )}
          
          {results && results.length > 0 && (
            <div>
              <h3 className="font-semibold text-lg mb-3 text-accent">Results & Impact</h3>
              <ul className="space-y-2">
                {results.map((result, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span className="text-foreground/80">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="flex gap-2 pt-4 border-t flex-wrap">
          {liveUrl && (
            <Button variant="default" size="sm" asChild className="flex-1 min-w-[120px]">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button variant="outline" size="sm" asChild className="flex-1 min-w-[120px]">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View Code
              </a>
            </Button>
          )}
          {reportUrl && (
            <Button variant="outline" size="sm" asChild className="flex-1 min-w-[120px]">
              <a href={reportUrl} target="_blank" rel="noopener noreferrer" download>
                <FileText className="w-4 h-4 mr-2" />
                View Report
              </a>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
