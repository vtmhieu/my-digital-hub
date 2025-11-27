import { Navigation } from "@/components/Navigation";
import { StoryCard } from "@/components/StoryCard";

const Stories = () => {
  const stories = [
    {
      title: "Building My First SaaS Product",
      date: "November 15, 2025",
      excerpt: "Reflections on the journey of creating and launching my first software as a service product, including the challenges faced and lessons learned.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80"
    },
    {
      title: "Why I Switched to TypeScript",
      date: "November 10, 2025",
      excerpt: "My experience transitioning from JavaScript to TypeScript and how it improved my code quality and development workflow.",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80"
    },
    {
      title: "Lessons from Failed Projects",
      date: "November 5, 2025",
      excerpt: "Not every project succeeds. Here's what I learned from projects that didn't go as planned and how failure shaped my growth.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80"
    },
    {
      title: "Remote Work: One Year Later",
      date: "October 28, 2025",
      excerpt: "Reflections on a year of remote work, productivity tips, and how I maintain work-life balance while working from home.",
      image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&q=80"
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
                Daily Stories
              </h1>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                Thoughts, experiences, and learnings from my journey as a developer
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {stories.map((story) => (
                <StoryCard key={story.title} {...story} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
