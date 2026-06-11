import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/posts";

// Every page exports metadata (AGENTS.md rule 3).
export const metadata: Metadata = {
  title: "Marketing site example",
  description:
    "A minimal seed of the Fern marketing site structure: MDX content, design tokens, and skills agents operate.",
};

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-(--grid-max-w) px-6 py-24">
      <p className="text-p-x-small text-muted-foreground font-medium uppercase tracking-wide">
        Example seed
      </p>
      <h1 className="text-display mt-4 max-w-3xl">
        A marketing site agents can operate.
      </h1>
      <p className="text-p text-muted-foreground mt-6 max-w-2xl">
        Content lives in the repo as MDX, validated at build time. A new page
        or post is a pull request, reviewed and preview-deployed like any code
        change. The skills in .claude/skills do the repeatable work.
      </p>

      <h2 className="text-h2 mt-24">From the blog</h2>
      <ul className="divide-border mt-8 divide-y border-y">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/post/${post.slug}`}
              className="group flex items-center justify-between gap-6 py-6"
            >
              <div>
                <h3 className="text-h3 group-hover:text-brand">
                  {post.frontmatter.title}
                </h3>
                <p className="text-p-small text-muted-foreground mt-2">
                  {post.frontmatter.description}
                </p>
              </div>
              <ArrowRight className="text-muted-foreground size-5 shrink-0" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
