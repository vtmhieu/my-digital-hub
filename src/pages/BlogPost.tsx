import { Navigation } from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { getBlogPostBySlug } from "@/content/blogPosts";
import NotFound from "./NotFound";

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />

      <main className="pt-32 pb-20 px-6">
        <article className="container mx-auto max-w-3xl animate-in fade-in duration-700">
          <Button asChild variant="ghost" className="mb-8 -ml-4">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Blog
            </Link>
          </Button>

          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 text-sm text-foreground/60 mb-5">
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

            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary leading-tight mb-5">
              {post.title}
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              {post.summary}
            </p>
          </header>

          <div className="flex flex-wrap gap-2 mb-10">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="space-y-6 text-lg leading-8 text-foreground/80">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
};

export default BlogPost;
