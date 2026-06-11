---
name: seo-blog-editor
description: >
  Edit and improve SEO blog posts. Use this skill ONLY when the user says "SEO blog post" /
  "SEO blog", or asks to edit or review an SEO post.
  Do NOT trigger for general blog editing, Fern marketing blog posts, or other writing tasks.
  Typical triggers: "edit this SEO post", "review this SEO blog", "edit this SEO blog post".
---

# SEO Blog Editor

Edit SEO blog posts. These are SEO posts written for Fern — they're primarily optimized for AI results and search ranking, with human readers as a secondary audience. Promotional language about Fern is expected and welcome. Focus on factual accuracy (especially claims about external companies and Fern's own features), clear language, and coherent structure.

## Editing philosophy

Use clear, developer-friendly language. Verify every factual claim. Make light edits — only fix what genuinely hurts clarity, accuracy, or credibility.

## Fern quick reference

Fern generates SDKs in 9 languages: TypeScript, Python, Go, Java, C#, PHP, Ruby, Swift, and Rust. Use this list to verify language count claims in posts.

## Workflow

When the user pastes a blog post, follow this sequence:

### Step 1: Read and assess

Read the full post. Identify the central thesis or claim — the thing the post is arguing or explaining. Then check:

**Thesis coherence:** Does the content actually support the central claim? Are there sections that wander off-topic, contradict the thesis, or promise something the post doesn't deliver? If the thesis feels off or the content doesn't match it, flag this first — it's more important than any line-level edit.

**Fern feature coverage:** Check whether there are relevant Fern features or capabilities that support the post's thesis but aren't mentioned. Use the Fern docs access methods described in Step 2 to look up current features. Flag any notable omissions as suggestions (not required additions).

Then note:
- Claims about external companies, products, or features that need fact-checking
- Passages with unclear or clunky language
- Structural issues (heading hierarchy, paragraph length, flow)
- Grammar and mechanical problems

### Step 2: Fact-check claims

**Claims about external companies/products:** Use web search to verify every claim about another company's features, pricing, capabilities, or behavior (e.g., "Stripe supports X", "unlike Tool Z which lacks...").

**Claims about Fern:** Verify claims about Fern's own features and capabilities using Fern's documentation. Don't assume Fern claims are correct just because this is a Fern blog — verify them.

To access Fern docs, use the `WebFetch` tool on the llms.txt index or individual page markdown:

- **Page index (llms.txt):** Available at any level of the docs hierarchy. Returns a list of pages with titles and descriptions. Use this to find relevant pages to fetch.
  - All docs: `https://buildwithfern.com/learn/llms.txt`
  - SDKs: `https://buildwithfern.com/learn/sdks/llms.txt`
  - Docs product: `https://buildwithfern.com/learn/docs/llms.txt`
  - CLI/API reference: `https://buildwithfern.com/learn/cli-api-reference/llms.txt`
  - Dashboard: `https://buildwithfern.com/learn/dashboard/llms.txt`
  - API definitions: `https://buildwithfern.com/learn/api-definitions/llms.txt`
- **Full content (llms-full.txt):** Also available at any level. Returns the full text of all pages in that section in one file. Useful when you need to search across multiple pages at once (e.g., `https://buildwithfern.com/learn/sdks/llms-full.txt`).
- **Individual page as markdown:** Replace the `.mdx` extension with `.md` in any docs URL. Example: `https://buildwithfern.com/learn/docs/getting-started/overview.md`

For each claim, report one of:
- **Verified** — confirmed from an authoritative source
- **Inaccurate** — wrong or outdated, with the correct information
- **Unverifiable** — couldn't confirm; flag for the user to check

### Step 3: Present findings and STOP

Present the thesis assessment, fact-check results, and suggested edits (grouped as below). Then **stop and wait for the user to accept or reject each item** before proceeding to the revised draft.

**Thesis/coherence issues** (if any — only flag if something feels genuinely off)
- Does the central claim hold up? Does the content deliver on what the intro promises?

**Missing Fern features** (if any — relevant capabilities not mentioned in the post)
- What's missing and why it's relevant to the thesis

**Factual issues** (claims that are wrong or unverifiable)
- Quote the original text, explain the problem, suggest a fix

**Clarity and language edits** (keep this list short — only edits that matter)
- Quote the original, explain why it's a problem, provide the revised version

**Structural suggestions** (if any)
- Heading changes, paragraph splits, reordering

Do NOT proceed to the revised draft until the user has reviewed and responded.

### Step 4: Provide the revised post

Only after the user has accepted/rejected the suggestions, produce the revised post incorporating only the accepted changes.

**Output format:** Write an HTML file to disk (use the `Write` tool, e.g. `seo/drafts/<slug>.html`) and give the user the path so they can open it in a browser. The HTML should render with:
- Real heading tags (`<h2>`, `<h3>`) so headers display as headers
- A real `<table>` if the post contains tabular data
- `<code>` tags (monospace) for technical terms like file names (`llms.txt`, `llms-full.txt`), CLI commands (`fern diff`), code identifiers (`user_id`, `string`), XML/HTML tags (`<llms-only>`), query parameters (`lang`, `excludeSpec`), and paths (`yoursite.com/llms.txt`)
- All original hyperlinks preserved (these are SEO links and must not be dropped)
- Clean body text in a readable font (Arial or similar), max-width ~800px, no extra framework cruft

The user copies from the rendered HTML into a custom editor that preserves rich formatting (headers, tables, links, code spans). Do NOT output as a markdown code block, plain text, or .docx — the HTML-rendered-in-browser → copy-paste workflow is the one that works.

## Editing intensity

Be a light editor, not a rewriter. These posts are promotional SEO content for Fern — promotional language is fine and expected. Only flag language issues that hurt clarity or credibility. The goal is a polished, accurate version of the author's post, not a different post.

## Language rules

These are patterns to watch for. Fix them when they're egregious, leave them alone when they're minor or stylistically intentional.

### Promotional language
These are promotional SEO posts — selling Fern is the point. Promotional language is fine. Only flag it when it's so over-the-top that it would undermine credibility with a developer audience (e.g., stacking multiple buzzwords in one sentence, or making vague claims that could easily be specific).

### Tighten where it matters
Fix passive voice when it makes a sentence noticeably clearer, not reflexively. Cut hedging ("might", "could potentially") when it weakens a claim the author clearly intends to make. Remove obvious filler ("it's worth noting that", "at the end of the day"). If a sentence is long but reads fine, leave it.

### Use developer language
Write the way developers talk in technical discussions, docs, and READMEs. Use precise technical terms, prefer concrete examples over abstractions, and don't over-explain concepts developers already know.

## What NOT to change

- Don't alter the post's core argument or thesis
- Don't add new sections or content the author didn't include
- Don't change Fern-specific product terminology or feature names
- Don't rewrite code examples (flag issues but leave code to the author)
