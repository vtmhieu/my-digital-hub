export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  readingTime: string;
  category: string;
  tags: string[];
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-i-built-my-digital-hub",
    title: "Why I Built My Digital Hub",
    summary:
      "A short note on why I keep my CV, projects, technical notes, and career story in one place.",
    publishedAt: "2026-06-14",
    readingTime: "3 min read",
    category: "Personal",
    tags: ["Portfolio", "Career", "Cloud Native"],
    content: [
      "I built this digital hub to keep my professional story clear and easy to verify. A CV is useful, but it is limited. A portfolio can show the systems I have built, the tradeoffs I care about, and the way I communicate technical work.",
      "My background is focused on Kubernetes, cloud infrastructure, distributed systems, and automation. Those topics are easier to understand when they are connected to concrete projects, architecture decisions, and lessons learned from implementation.",
      "This blog section gives me a place to write shorter notes about the work behind the projects: debugging stories, system design choices, Kubernetes patterns, cloud-native operations, and the learning path I am following during my MSc at KTH.",
    ],
  },
  {
    slug: "operator-design-notes",
    title: "Operator Design Notes: Make Reconciliation Boring",
    summary:
      "A practical principle I use when thinking about Kubernetes operators and controller behavior.",
    publishedAt: "2026-06-14",
    readingTime: "4 min read",
    category: "Engineering",
    tags: ["Kubernetes", "Operators", "Reliability"],
    content: [
      "A good Kubernetes operator should make repeated reconciliation boring. The controller should be able to observe the current state, compare it with the desired state, make one safe move, and then repeat without relying on hidden assumptions.",
      "That means status conditions matter. They are not only UI details; they are part of the contract between the controller, the user, and any automation that depends on the resource. Clear conditions make failures easier to debug and successful progress easier to trust.",
      "Idempotency is the practical baseline. If a reconcile loop runs twice, restarts halfway through, or sees a partially created external resource, it should converge instead of duplicating work or getting stuck.",
      "This is the part of platform engineering I enjoy: turning operational procedures into predictable software behavior that can survive retries, partial failures, and real production timing.",
    ],
  },
];

export const getPublishedBlogPosts = () =>
  [...blogPosts].sort((left, right) => right.publishedAt.localeCompare(left.publishedAt));

export const getBlogPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);
