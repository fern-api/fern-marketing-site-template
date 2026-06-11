import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";

// Frontmatter is validated with Zod so a bad field fails the build instead
// of shipping a broken card. The real site's schema also covers author slugs
// (validated against an authors registry), hero media, listing flags
// (hidden/secondary), and the article-audio opt-out.
export const postFrontmatterSchema = z.object({
  title: z.string(),
  date: z
    .union([z.string(), z.date()])
    .transform((v) => (typeof v === "string" ? v : v.toISOString().slice(0, 10))),
  description: z.string(),
  tags: z
    .array(z.string())
    .default([])
    .transform((tags) => tags.map((t) => t.toLowerCase())),
  author: z.string().optional(),
  authors: z.array(z.string()).optional(),
  draft: z.boolean().default(false),
});

export type PostFrontmatter = z.infer<typeof postFrontmatterSchema>;

export type Post = {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
};

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return { slug, frontmatter: postFrontmatterSchema.parse(data), content };
}

export function getAllPosts(): Post[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => getPostBySlug(file.replace(/\.mdx$/, ""))!)
    // Drafts stay visible in dev and disappear from production builds.
    .filter((post) => process.env.NODE_ENV !== "production" || !post.frontmatter.draft)
    .sort((a, b) => b.frontmatter.date.localeCompare(a.frontmatter.date));
}
