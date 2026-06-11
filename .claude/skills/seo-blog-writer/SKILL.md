---
name: seo-blog-writer
description: >
  Write a new SEO blog post from the top idea in the SEO ideas queue (seo/ideas.mdx).
  Use this skill ONLY when the user wants to write an SEO blog post, e.g.
  "write an SEO blog post", "write the next SEO post", "draft the next SEO blog",
  "draft an SEO post", or "/seo-blog-writer". This skill WRITES the first draft;
  the separate seo-blog-editor skill edits it afterward. Do NOT trigger for general blog
  writing, Fern marketing blog posts (use write-post), case studies, or other writing tasks.
---

# SEO Blog Writer

Write a new SEO blog post. These are promotional SEO posts for Fern, optimized primarily for AI results and search ranking, with human readers as a secondary audience. This skill produces the first draft. The [seo-blog-editor](../seo-blog-editor/SKILL.md) skill reviews and polishes it afterward, so the goal here is a complete, accurate, well-structured draft, not a final-polished one.

## Inputs — read these first, every time

Before writing anything, read the full SEO context in `seo/`. These files are the source of truth for voice, facts, keywords, and the topic queue:

| File | What it gives you |
|---|---|
| [seo/ideas.mdx](../../../seo/ideas.mdx) | The topic queue. A markdown table of post titles and primary target keywords. **The top data row is the post to write.** |
| [seo/context/brand.mdx](../../../seo/context/brand.mdx) | The voice and the hard rules. This governs tone, not AGENTS.md. |
| [seo/context/company-info.mdx](../../../seo/context/company-info.mdx) | Authoritative facts about Fern: features, supported languages, proof points. Use for any Fern claim. |
| [seo/context/glossary-terms.mdx](../../../seo/context/glossary-terms.mdx) | Definitions for technical terms. Use for accuracy and for "what is X" framing. |
| [seo/keywords/target-keywords.mdx](../../../seo/keywords/target-keywords.mdx) | Ranking targets, foothold pages, and competitor-gap terms. Use to find secondary keywords and internal-link targets. |
| [seo/battlecards/](../../../seo/battlecards/) | One `.mdx` per competitor (mintlify, readme, gitbook, stoplight, theneo, docusaurus, fumadocs, speakeasy, stainless, apimatic, inkeep). The source of angles, differentiators, proof points, and named customers for any post that names or compares a competitor. **Read the relevant card only when the topic is competitive** (you don't need all of them for a generic explainer). Internal positioning — verify external claims before publishing (see Step 3). |

## Workflow

### Step 1 — Pick the topic

Read [seo/ideas.mdx](../../../seo/ideas.mdx). Take the **first data row** of the table (the row directly under the `| --- | --- |` separator). That row gives you:

- **Title** — the working title / angle for the post
- **Primary target keywords** — the comma-separated keywords this post must target

Do NOT delete or reorder the row. (Removal on publish is handled by separate automation; this skill only reads.)

If the user names a specific idea or pastes their own title + keywords instead, use that.

### Step 2 — Identify the content type and skeleton

The example posts (the existing SEO posts in `content/blog/`, including the ones listed under each format below) fall into five formats. Identify which one the idea's title signals, then **open the matching example and mirror its skeleton.** Every format shares the same wrapper (intro + `**TLDR:**` at the top, a dedicated Fern section near the end, `## Final thoughts …` with the CTA, then `## FAQ`); what changes is the middle.

**1. Explainer / "what is" guide**
Signals: "What is X", "X explained", "Types of X", "X: a complete guide".
Mirror: [different-types-of-apis-guide.mdx](../../../content/blog/different-types-of-apis-guide.mdx) or [what-is-api-endpoint.mdx](../../../content/blog/what-is-api-endpoint.mdx). Length ~2,000-2,500 words.
Skeleton: define the term (`## What is X?`) → how it works / core components → examples or variants → a contrast section (`## X vs Y`) → adjacent concerns (auth, security, testing) → Fern section → Final thoughts → FAQ.

**2. Comparison / head-to-head**
Signals: "X vs Y", "Fern vs [Competitor]", "X compared".
Mirror: [fern-vs-speakeasy-sdk-generator.mdx](../../../content/blog/fern-vs-speakeasy-sdk-generator.mdx). Length ~1,600-2,000 words.
Skeleton: `## What is [Competitor]?` → `## What is Fern?` → one H2 per comparison dimension that matters for the category (SDK generation, docs integration, code quality, compliance, etc.) → `## Why Fern provides a better [X]` → Final thoughts → FAQ. Apply the brand.mdx competitor rules: evaluate, don't "test"; be fair ("Speakeasy is good for X but has Y limitation"); never go after a competitor.

**3. Listicle / buyer's guide**
Signals: "Best X", "Top N X", "N best X tools", "Best X for [audience]".
Mirror: [best-api-documentation-platforms-enterprise.mdx](../../../content/blog/best-api-documentation-platforms-enterprise.mdx). Length ~2,500-2,900 words (the longest format).
Skeleton: `## What [category] actually do` → `## What makes a great [category] in [year]?` (selection criteria) → one H2 per tool, **Fern first** → `## Feature comparison table of [category]` (markdown table) → `## Why Fern fits [use case]` → Final thoughts → FAQ.

**4. Reviews / pricing / alternatives**
Signals: "[Tool] Reviews, Pricing, and Alternatives", "[Tool] alternatives".
Mirror: [gitbook-reviews-pricing-alternatives.mdx](../../../content/blog/gitbook-reviews-pricing-alternatives.mdx). Length ~1,700-2,000 words.
Skeleton: `## What is [tool] and how does it work?` → `## Why consider [tool] alternatives?` → `## Best [tool] alternatives in [Month Year]` with an H3 per alternative (**Fern first**, labelled "(best overall alternative)") → `## Feature comparison: [tool] vs top alternatives` (table) → `## Why Fern is the best [tool] alternative` → Final thoughts → FAQ.

**5. How-to / playbook**
Signals: "How to X", "A step-by-step guide to X", "playbook".
Mirror: [how-to-build-an-api.mdx](../../../content/blog/how-to-build-an-api.mdx). Length ~1,800-2,400 words.
Skeleton: sequential H2s that walk the process in order (plan → build → secure → test → document → deploy → maintain), with H3 sub-steps where a step has parts → `## Automating [X] with Fern` → Final thoughts → FAQ.

If an idea doesn't fit cleanly, pick the closest format and adapt. When unsure between two, prefer the one whose example post best matches the primary keyword's search intent.

**Competitive topics (formats 2, 3, and 4):** when the idea names or compares a competitor, read that competitor's `seo/battlecards/<competitor>.mdx` before drafting. It's the source for the differentiators, proof points, and named customers to feature (Fern wins, where to acknowledge the competitor's genuine strengths, which gaps matter). For listicles/alternatives that cover several tools, read each named competitor's card. Treat the cards as internal positioning: use them for angles and structure, follow the brand.mdx competitor rules (evaluate, don't "test"; be fair; don't go after competitors), and verify any factual claim about a competitor via web search before it goes in the post (Step 3) — battlecard intel can be stale.

### Step 3 — Gather and verify facts

Accuracy is the priority. Do not ship unverified claims.

- **Fern facts** (features, language count, capabilities): source from [company-info.mdx](../../../seo/context/company-info.mdx). When you need current product detail beyond it, verify against Fern's docs (see "Fern docs access" below). Don't assume a Fern claim is true just because this is a Fern post.
- **Claims about other companies/products** (competitors, "Stripe supports X", "Tool Z lacks Y"): the `seo/battlecards/<competitor>.mdx` cards are the starting source for competitor angles and proof points, but they're internal positioning and can be stale — verify every competitor claim with web search before writing it. If you can't confirm a claim, leave it out.
- **Definitions**: pull from [glossary-terms.mdx](../../../seo/context/glossary-terms.mdx) so terminology stays consistent.

### Step 4 — Apply the voice

[brand.mdx](../../../seo/context/brand.mdx) is the voice contract. Read it and follow it. The hard rules, in brief:

- **Third person only. Never first person.** No "we tested", no "I think". Fern is referred to in the third person.
- **Sentence case for all headings** (H1-H4). Never title case.
- **Technical, developer/technical-writer audience.** Don't over-explain concepts a semi-technical reader knows.
- **"You" means the reader/buyer** (a potential Fern customer), NOT the developer who consumes their docs. Call those people "developers".
- **Marketing is fine when justified.** "Fern is the best choice for [specific technical reason]" beats "Fern has you covered." Avoid bare superlatives.
- **Competitor handling:** "evaluate" competitors, don't "test" them. Direct comparisons are fine ("Fern is better for X"; "Speakeasy is good for X but has Y limitation"). Don't go after competitors. No "Fern has you covered".
- **No generated images** and no image placeholders.

Note: unlike Fern's marketing-site voice in AGENTS.md, these blog posts **allow em-dashes** and are author-controlled prose. Follow brand.mdx, not AGENTS.md, for this content.

### Step 5 — Structure the post

Match the anatomy of the example posts:

**Frontmatter** (mirror the examples exactly, minus the vendor `maintouchId` field):

```yaml
---
title: <Working title> (<Month Year>)
date: "<YYYY-MM-DD>"
description: <One sentence, ~150 chars, leads with the primary keyword, ends with "in <Month Year>".>
tags:
  - educational
  - docs-sdks
author: nathan-lian
draft: false
secondary: true
---
```

- `title` — sentence case, includes the current month and year for freshness (e.g. "(June 2026)").
- `date` — run `date +%Y-%m-%d` for today; wrap the value in quotes.
- `description` — SEO meta description: works in the primary keyword and the month/year.
- `tags` — choose from `educational`, `docs`, `docs-sdks`, `sdks`. Most posts use two. `educational` fits nearly every explainer; add `docs`, `sdks`, or `docs-sdks` by topic.
- `author` — always `nathan-lian`.
- `draft: false`, `secondary: true` — match the examples.
- Do NOT add a `maintouchId` (that field is stamped only on posts from the external SEO vendor; the site ignores it, and posts written by this skill omit it).

**Body**, in order:

1. **Intro paragraph** (no heading): hook the reader, state plainly what the post covers, and include at least one internal link to `https://buildwithfern.com/...`.
2. **`**TLDR:**`** followed by 4-6 bullets summarizing the takeaways. The last bullet ties the topic back to Fern.
3. **H2 sections** (sentence case) following the **content-type skeleton from Step 2**, with **H3 subsections** where useful. Each section answers a real question; avoid generic labels like "Introduction".
4. **Comparison tables** where the content compares options (protocols, tools, tradeoffs). Use markdown tables.
5. **Fern woven in naturally and factually** throughout — what it does, why it solves the problem the section describes. Link internally to relevant `buildwithfern.com/learn/...` pages and externally to authoritative third-party sources.
6. **`## Final thoughts ...`** closing H2 that summarizes and ends with the CTA: a link to `https://buildwithfern.com/book-demo` (the default CTA from brand.mdx).
7. **`## FAQ`** with 3-5 H3 questions and answer paragraphs. Phrase the questions as keyword-variant search queries; answers are 2-4 sentences each.

**Style details:**

- Bullets use a dash plus three spaces: `-   text` (matches the example posts).
- Length: aim for ~1,600-2,900 words; ~2,000 is a good default.
- Bold lead-ins on definitional bullets (`-   **Public APIs** are ...`).

### Step 6 — Slug and write

- **Slug:** kebab-case, descriptive, evergreen. Drop the month/year and filler words. Check `content/blog/` for a collision before writing; if the slug is taken, ask before overwriting.
- **URL structure is sacred:** posts live at `/post/<slug>`. Don't change it.
- Write a single MDX file to `content/blog/<slug>.mdx` with the Write tool.
- **MDX only.** Do not generate a `.schemas.json` sidecar — that JSON-LD is handled separately.

### Step 7 — Hand back

Reply with:

- The file path written and the slug (so the user can preview at `/post/<slug>`)
- The target keywords the post covers
- Word count and the format you chose (explainer / comparison / listicle / how-to)
- A nudge: run the **seo-blog-editor** skill to review and polish, and `npm run dev` to preview at `/post/<slug>`

Keep it terse.

## Fern docs access (for fact-checking Fern claims)

Use the `WebFetch` tool on Fern's llms.txt index or individual page markdown:

- **Page index (llms.txt):** available at any level of the docs hierarchy. Returns a list of pages with titles and descriptions. Use it to find relevant pages to fetch.
  - All docs: `https://buildwithfern.com/learn/llms.txt`
  - SDKs: `https://buildwithfern.com/learn/sdks/llms.txt`
  - Docs product: `https://buildwithfern.com/learn/docs/llms.txt`
  - CLI/API reference: `https://buildwithfern.com/learn/cli-api-reference/llms.txt`
  - Dashboard: `https://buildwithfern.com/learn/dashboard/llms.txt`
  - API definitions: `https://buildwithfern.com/learn/api-definitions/llms.txt`
- **Full content (llms-full.txt):** also available at any level. Returns the full text of all pages in that section in one file. Useful when searching across multiple pages at once (e.g., `https://buildwithfern.com/learn/sdks/llms-full.txt`).
- **Individual page as markdown:** replace the `.mdx` extension with `.md` in any docs URL. Example: `https://buildwithfern.com/learn/docs/getting-started/overview.md`

## Fern quick reference

Fern generates SDKs in 9 languages: TypeScript, Python, Go, Java, C#, PHP, Ruby, Swift, and Rust. Use this to verify language-count claims.

## Hard rules

- **Follow brand.mdx, not AGENTS.md,** for voice. Third person only, sentence-case headings, em-dashes allowed.
- **Never invent Fern features or numbers.** Verify against company-info.mdx or the docs. Omit what you can't confirm.
- **Never invent claims about competitors.** Web-search-verify or leave out.
- **No generated images** or image placeholders.
- **Write one MDX file. No sidecar. No commit.** The user reviews, runs seo-blog-editor, and commits when ready.
- **Don't delete or reorder the ideas.mdx row.** This skill only reads the queue.
- **Don't touch other pages or files.** This skill writes one post.
