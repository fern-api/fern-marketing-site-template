import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { articleMdxComponents, mdxOptions } from "@/lib/mdx";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

// Posts live at /post/[slug], not /blog/[slug] (AGENTS.md rule 3: URL
// structure is sacred).

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-p-x-small text-muted-foreground">
        {post.frontmatter.date}
      </p>
      <h1 className="text-h1 mt-4">{post.frontmatter.title}</h1>
      <div className="article-prose mt-12">
        <MDXRemote
          source={post.content}
          components={articleMdxComponents}
          options={mdxOptions}
        />
      </div>
    </article>
  );
}
