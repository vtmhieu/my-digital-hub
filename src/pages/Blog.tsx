import { Navigation } from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { getPublishedBlogPosts } from "@/content/blogPosts";

const Blog = () => {
  const posts = getPublishedBlogPosts();

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />

      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12 animate-in fade-in duration-700">
            <Badge variant="secondary" className="mb-4">
              Notes
            </Badge>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-4">
              Blog
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl">
              Technical notes and personal reflections on cloud infrastructure,
              Kubernetes, distributed systems, and my engineering journey.
            </p>
          </div>

          <div className="space-y-6">
            {posts.map((post) => (
              <Card key={post.slug} className="shadow-soft hover:shadow-medium transition-shadow">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center gap-3 text-sm text-foreground/60">
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays className="h-4 w-4" />
                          {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="h-4 w-4" />
                          {post.readingTime}
                        </span>
                        <Badge variant="outline">{post.category}</Badge>
                      </div>

                      <div>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-3">
                          {post.title}
                        </h2>
                        <p className="text-foreground/70 leading-relaxed max-w-3xl">
                          {post.summary}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button asChild variant="outline" className="md:mt-1 shrink-0">
                      <Link to={`/blog/${post.slug}`}>
                        Read
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
