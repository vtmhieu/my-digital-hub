import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageHeader, SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { formatPostDate, getPublishedBlogPosts } from "@/content/blogPosts";

const Blog = () => {
  const posts = getPublishedBlogPosts();

  return (
    <SiteLayout>
      <PageHeader
        title="Blog"
        description="Technical notes and personal reflections on cloud infrastructure, Kubernetes, distributed systems, and my engineering journey."
      />

      <div className="container-page pt-14 md:pt-20">
        {posts.length === 0 && (
          <p className="border-t border-border py-12 text-muted-foreground">No posts yet. The first one is being written.</p>
        )}
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 70}>
            <Link
              to={`/blog/${post.slug}`}
              className="group grid gap-4 border-t border-border py-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:grid-cols-12 md:gap-8"
            >
              <div className="font-mono text-sm text-muted-foreground md:col-span-3">
                <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
                <p className="mt-1">{post.readingTime}</p>
              </div>
              <div className="md:col-span-9">
                <p className="text-sm font-medium text-primary">{post.category}</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight transition-colors group-hover:text-primary md:text-3xl">
                  {post.title}
                </h2>
                <p className="mt-3 max-w-[62ch] leading-relaxed text-muted-foreground">{post.summary}</p>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                    Read
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={1.75} />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </SiteLayout>
  );
};

export default Blog;
