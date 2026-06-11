---
name: write-post
description: Draft a new Fern blog post. Use whenever the user says "write a post", "draft a blog post", "/write-post", "new blog about X", or asks for a blog-length piece for buildwithfern.com. Produces an MDX file under content/blog/<slug>.mdx with valid frontmatter, applies the Fern marketing voice from AGENTS.md by default, and stops short of committing. Only applies Kapil's voice when explicitly requested.
---

# Write a Fern blog post

You are drafting a new blog post for [buildwithfern.com](https://buildwithfern.com). Output: one MDX file at `content/blog/<slug>.mdx` with valid frontmatter and clean prose.

## Step 0 — Pick the voice

**Default:** the Fern marketing voice from the "Writing style" section of [AGENTS.md](../../../AGENTS.md). Clear, developer-friendly, direct, no em-dashes, no future hedging. This is the voice for every post unless the user says otherwise.

**Kapil's voice:** only when the user explicitly asks for it ("in Kapil's voice", "as Kapil", "use my voice", "Kapil-style", or the post author is being framed as Kapil for a personal/first-person piece). If and only if explicit, read [voice-kapil.md](./voice-kapil.md) before drafting and treat it as the style contract.

If unsure, ask one quick question: "Default Fern marketing voice, or Kapil-style?" Then proceed.

## Step 1 — Gather the brief in one message

If the user hasn't already given you what's below, ask in ONE short message (don't pepper them):

1. **Topic / angle** — what's the post about and what's the takeaway?
2. **Audience** — enterprise API team? agentic dev? startup founder? (defaults to enterprise API team)
3. **Anchor points** — any links, customers, numbers, quotes to weave in
4. **Length** — short (300–500 words) / medium (600–900) / long (1000+). Default medium.

If they're vague but excited ("write something about X"), don't stall. Draft a medium-length take and let them redirect.

## Step 2 — Pick frontmatter

The schema lives in [src/lib/posts.ts](../../../src/lib/posts.ts). Required: `title`, `date`, `description`. Almost-always-set: `tags`, `author`, `draft`.

| Field | How to fill |
|---|---|
| `title` | Headline in Kapil's voice. Short, declarative, no colons-with-subtitles unless the subtitle earns it. |
| `date` | Today, ISO format: run `date +%Y-%m-%d`. Wrap in quotes. |
| `description` | One sentence, 15–30 words. The TL;DR that shows up in search, social cards, and `/blog`. |
| `tags` | Lowercase strings. Reuse existing tags where possible (`strategy`, `company`, `product`, `sdks`, `docs-sdks`, `engineering`). |
| `author` | Slug from [src/lib/authors.ts](../../../src/lib/authors.ts). Default `kapil-gowru` unless told otherwise. |
| `draft` | `false` once it's worth a review. Use `true` while iterating if the user wants the file in the repo but not live. |
| `audio` | Omit (default true) for prose-heavy posts. Set `false` for posts that are mostly code, dense lists, or short announcements. |
| `image` | Skip unless the user provides one or asks you to source one. Posts work without it; the default OG image renders. |
| `hidden` / `secondary` | Skip unless the user explicitly asks for an unlisted or long-tail post. See [docs/long-form-articles.md](../../../docs/long-form-articles.md). |

## Step 3 — Pick a slug

Kebab-case. Descriptive but evergreen. Drop dates and version numbers. Drop filler words ("the", "a", "for") when they don't earn the space. Examples:

- "Rebuilding the Fern site" → `rebuilding-the-fern-site`
- "Why we built Replay" → `fern-replay` (the product name is the slug)
- "How we built the Fern site" → `fern-site`

Check `content/blog/` for collisions before writing. If the slug is taken, ask before overwriting.

## Step 4 — Write the post

Apply the voice picked in Step 0.

Universal rules (default voice and Kapil voice both):

- **Open with the news, not the setup.** First paragraph states what's happening. Skip throat-clearing.
- **H2s do work.** Each one is a stake in the ground, not a generic label ("Background", "Introduction" are weak).
- **Short paragraphs.** 1–3 sentences.
- **Bold leading clauses for list-style sections.** When pillars or reasons stack, lead each with a bold one-liner, then a sentence or two of substance.
- **No em-dashes.** Use periods, commas, colons, parens. Colons are fine for "Practically: X, Y, Z" intros.
- **Drop hedge words.** Replace "can", "may", "is designed to" with present indicative.
- **Concrete proof points.** Real numbers, customers, tool names. Use the proof-point list in AGENTS.md → "Proof points".
- **Close with an action.** A link to try it, a DM invitation, a hiring nudge. Never a recap.
- **Don't let AGENTS.md write the post.** Its "Writing style" section governs site copy, not blog prose. Don't echo its rule phrasing back as sentences ("lead with the outcome", "proof point instead of an adjective"), don't reach for its recurring vocabulary (drift, sync, source of truth) outside product contexts, and don't default to its aphoristic "X, or Y happens" cadence. Posts should sound like a person telling a story, not the style guide quoting itself.

If Kapil-style was requested in Step 0, layer the additional rules from [voice-kapil.md](./voice-kapil.md) on top (compressed paragraphs, fragments, taste-driven framing, first-person nudges).

### MDX components available

The component registry is in [src/lib/mdx.tsx](../../../src/lib/mdx.tsx). The non-standard tags you can use in post MDX:

| Tag | Use |
|---|---|
| `<Eyebrow>` | Small uppercase label above a heading |
| `<Quote author="…" role="…">` | Pull-quote with green left rule + attribution |
| `<RawHTML html={\`…\`} />` | Escape hatch for hand-authored HTML — avoid for new posts |
| Markdown tables | Auto-styled via shadcn `Table` (via `remark-gfm`) |

Fenced code blocks with `title="filename"` render a filename bar. Don't invent other MDX tags.

### Internal link targets

Common internal links to reach for:

- `/` — homepage
- `/post/<slug>` — another blog post
- `/customers/<slug>` — a case study
- `/post/fern-site` — Kapil's original site-launch post
- `/post/postman-acquires-fern` — the Postman announcement
- `/careers` — hiring
- `/contact` — get in touch

## Step 5 — Write the file

Write to `content/blog/<slug>.mdx`. Use the Write tool. Do not also write a draft to `.context/` or anywhere else; one file, one source of truth.

If the user asked for a draft they can iterate on without it going live, set `draft: true` in the frontmatter. Otherwise leave `draft: false`.

## Step 6 — Hand back

Reply with:

- The file path you wrote
- The slug (so the user can preview at `/post/<slug>`)
- One sentence on word count and the angle you took
- A nudge to run `npm run dev` and open `/post/<slug>` to preview

Keep it terse. The user wants to read the post, not your summary of it.

## Hard rules

- **Default to the AGENTS.md marketing voice.** Only load [voice-kapil.md](./voice-kapil.md) when the user explicitly asks for Kapil's voice. Don't apply Kapil-style framing, first-person, or DM-me sign-offs by default.
- **Never em-dash.** No exceptions in posts produced by this skill.
- **Never write a summary or "in conclusion" paragraph.** Close with action.
- **Never invent customers or numbers.** If you don't have a proof point, omit it.
- **Don't commit.** Write the file. Stop. The user reviews and commits when they're ready.
- **Don't touch other pages.** This skill writes one MDX file. Site changes are a separate task.
