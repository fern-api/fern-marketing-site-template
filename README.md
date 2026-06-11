# Fern marketing site: the structure we give away

This is the repo structure behind [buildwithfern.com](https://buildwithfern.com), extracted from the real site. The full story is in [How 2 designers built the Fern site with Claude Code](https://buildwithfern.com/post/building-fern-site).

## What's inside

```
.claude/skills/        # Reusable Claude skills, one folder per job
  write-post/          #   Draft a blog post in the house voice
    SKILL.md           #   The instructions Claude reads on every run
    voice-kapil.md     #   A personal voice file, layered on by request
  write-case-study/    #   Turn interview notes into a case study
  write-employee-profile/
  launch-campaign/     #   Scaffold a full paid campaign folder
  seo-blog-writer/     #   First drafts from an SEO ideas queue
  seo-blog-editor/     #   The editing pass that follows
  file-bug/            #   Structured bug reports during testing sessions
campaigns/             # One folder per paid campaign
  README.md            #   Variant IDs, UTM scheme, conventions
  _template/           #   Copy this to start a new campaign
    brief.md           #   Audience, goals, value props, KPIs
    copy/              #   LinkedIn and Google ad copy
    creative/          #   One brief per ad variant
    results/           #   performance.csv + learnings.md, fed back in
content/
  blog/example-post.mdx              # Annotated frontmatter + every MDX component
  case-studies/example-company.mdx   # The case study format, with a fictional customer
src/                   # The seed site (see below)
  app/                 #   Layout, homepage, /post/[slug]
  components/          #   Eyebrow, Quote, theme provider
  lib/                 #   posts.ts (Zod-validated MDX), mdx.tsx, cn()
AGENTS.md              # The voice and rules every agent reads, every task
package.json           # The stack: Next.js, Tailwind v4, MDX, Zod
```

## Run the seed

```
npm install
npm run dev
```

Open <http://localhost:3000>. The homepage lists everything in `content/blog/`, and each post renders at `/post/<slug>` through the MDX pipeline. `npm run build` validates every post's frontmatter with Zod, so a bad field fails the build instead of shipping.

The seed mirrors the real site's structure in miniature:

- **Design tokens in `src/app/globals.css`.** Semantic colors, the radius scale, and the type scale (`text-h2`, `text-p`) as Tailwind v4 theme tokens. The values are the real site's. This is what AGENTS.md rule 1 points at.
- **`cn()` in `src/lib/utils.ts`.** The only way conditional classNames get built (rule 2), with the custom type scale registered so tailwind-merge doesn't eat it.
- **Posts at `/post/[slug]`, not `/blog/[slug]`** (rule 3). Frontmatter schema in `src/lib/posts.ts`, component registry in `src/lib/mdx.tsx`.
- **What's deliberately missing:** the real site layers on shadcn primitives, rehype-pretty-code with dual-theme Shiki, the bespoke post components (Frame, Collage, Stats, FileTree), gutter patterns, and the case study route (`/customers/[slug]`, same pattern as posts). The seed is the skeleton those hang off.

## How to use it

1. **Start with `AGENTS.md`.** It is the highest-leverage file in the repo. Agents read it on every task, so the authoring rules and writing style stay enforced without anyone re-explaining the brief. Rewrite the voice sections for your company; keep the structure.
2. **Copy `.claude/skills/` into your repo.** Each skill is a folder with a `SKILL.md` that Claude Code picks up automatically. They encode a repeatable job: the steps, the output format, the voice, and the hard rules. Ours reference paths in the full site repo (`seo/`, `testing/`); point them at your own equivalents.
3. **Copy `campaigns/` when you run paid acquisition from the repo.** The conventions in its README (stable variant IDs, one UTM scheme, results fed back into `learnings.md`) are what make campaign performance legible to agents on the next pass.
4. **Use the content examples as your format reference.** The blog post shows the frontmatter schema and MDX components; the case study shows the problem → solution → result shape.
5. **Grow the seed instead of scaffolding fresh.** The tokens, the `cn()` helper, and the MDX pipeline are the parts agents touch on every task. Everything else on the real site grew out of this skeleton, one pull request at a time.
