import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Calendar } from "lucide-react";

interface StoryCardProps {
  title: string;
  date: string;
  excerpt: string;
  image?: string;
}

export const StoryCard = ({ title, date, excerpt, image }: StoryCardProps) => {
  return (
    <Card className="group hover:shadow-medium transition-all duration-300 cursor-pointer">
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
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Calendar className="w-4 h-4" />
          <span>{date}</span>
        </div>
        <CardTitle className="group-hover:text-accent transition-colors">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{excerpt}</CardDescription>
      </CardContent>
    </Card>
  );
};
