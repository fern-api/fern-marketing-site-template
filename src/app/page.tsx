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
      <h1 className="text-display max-w-3xl">
        A template marketing site for agents
      </h1>
      <p className="text-p text-muted-foreground mt-6 max-w-2xl">
        Content lives in the repo as MDX, validated at build time. Every new
        page or post ships as a pull request — reviewed and preview-deployed
        like any code change — and the skills in .claude/skills handle the
        repeatable work.
      </p>
      <a
        href="https://buildwithfern.com/post/building-fern-site"
        target="_blank"
        rel="noopener noreferrer"
        className="text-p-small text-brand mt-8 inline-flex items-center gap-2 font-medium hover:underline"
      >
        How 2 designers built the Fern site with Claude Code
        <ArrowRight className="size-4" />
      </a>

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
