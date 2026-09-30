import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Badge } from "@/components/ui/badge";
import { formatPostDate, getBlogPostBySlug } from "@/content/blogPosts";
import NotFound from "./NotFound";

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <NotFound />;
  }

  return (
    <SiteLayout>
      <article className="container-page max-w-3xl pt-10 md:pt-16">
        <Link
          to="/blog"
          className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" strokeWidth={1.75} />
          Blog
        </Link>

        <header className="enter mt-10">
          <p className="font-mono text-sm text-muted-foreground">
            <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>, {post.readingTime}
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tighter md:text-5xl">{post.title}</h1>
          <p className="mt-5 text-xl leading-relaxed text-muted-foreground">{post.summary}</p>
          <div className="mt-6 flex flex-wrap gap-1.5">
            <Badge variant="outline" className="font-normal">
              {post.category}
            </Badge>
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-normal">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        <div className="mt-12 space-y-6 border-t border-border pt-10 text-lg leading-8 text-foreground/85">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </SiteLayout>
  );
};

export default BlogPost;
