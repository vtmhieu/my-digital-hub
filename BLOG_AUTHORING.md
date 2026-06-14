# Blog Authoring

The blog is source-controlled and has no public editor. Only people with write access to this repository can change posts.

## Edit Posts

Blog posts live in:

```txt
src/content/blogPosts.ts
```

Each post has:

```ts
{
  slug: "operator-design-notes",
  title: "Operator Design Notes: Make Reconciliation Boring",
  summary: "...",
  publishedAt: "2026-06-14",
  readingTime: "4 min read",
  category: "Engineering",
  tags: ["Kubernetes", "Operators"],
  content: ["Paragraph one.", "Paragraph two."]
}
```

After editing, push to `main`. GitHub Actions deploys the updated site to GitHub Pages.
