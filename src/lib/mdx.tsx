import remarkGfm from "remark-gfm";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import { Eyebrow } from "@/components/eyebrow";
import { Quote } from "@/components/quote";

// The component registry every MDX article renders through. The real site
// also wires rehype-pretty-code (dual-theme Shiki highlighting), a styled
// table mapping, and the bespoke post components (Frame, Collage, Stats,
// FileTree, playgrounds). Add a component here to expose it to all posts.
export const mdxOptions: MDXRemoteProps["options"] = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
  },
  parseFrontmatter: false,
};

export const articleMdxComponents: MDXRemoteProps["components"] = {
  Eyebrow,
  Quote,
};
