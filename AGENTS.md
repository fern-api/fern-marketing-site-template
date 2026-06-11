# AGENTS.md

The file every coding agent reads on every task. This is the example copy from the Fern marketing site repo: the authoring rules that keep the code consistent, and the writing style that keeps the copy consistent. The internal sections (first-time setup, deploy config, deep-guide index) are stripped; the parts that do the most work are below.

Some file paths reference the full site repo (`src/app/globals.css`, `src/lib/utils.ts`). They illustrate the pattern: rules point at real files so agents can verify instead of guess.

# Authoring rules

> Project-specific rules for new code. Generic best practices (server components, next/image, accessibility minimums, browser-verifying UI changes) are assumed and not duplicated here.

## 1. Design tokens, not raw values

Use the tokens defined in [globals.css](src/app/globals.css) — semantic colors (`bg-background`, `text-muted-foreground`, `border-border`), the type scale (`text-h2`, `text-p`), the radius scale, the grid width (`max-w-(--grid-max-w)`).

Don't write `bg-[#f9f9f9]`, `text-3xl font-semibold`, or arbitrary hex/rem values when a token exists. If you genuinely need a new value, add it as a token in globals.css and use it from there — the design system shouldn't have escape hatches sprinkled across files.

## 2. Use `cn()` for conditional classes

`cn()` from [@/lib/utils](src/lib/utils.ts) is the only way to build conditional classNames. Don't use template strings or array joins.

```tsx
// Good
<div className={cn("p-4", active && "bg-muted", className)}>

// Bad
<div className={`p-4 ${active ? "bg-muted" : ""} ${className}`}>
```

## 3. Every page exports metadata; URL structure is sacred

Every `page.tsx` exports `metadata` (or `generateMetadata` for dynamic routes) with at minimum `title` and `description`.

URLs match the existing sitemap. Notably: blog posts live at `/post/[slug]`, **not** `/blog/[slug]`. Don't rename or restructure URLs without explicit approval — they're indexed.

## 4. Don't add a new dependency without asking

shadcn + Tailwind v4 + Next + lucide-react + next-themes + next-mdx-remote already cover most of what a marketing site needs. New deps need explicit approval — what they do that the existing stack doesn't, and why a small in-repo solution wouldn't work. Prefer headless/composable libraries (Radix, Base UI, headlessui) over pre-styled component kits.

# Writing style

> The voice for all marketing copy on the site. Applies to new pages, headlines, feature card bodies, CTAs, testimonials, and any user-facing prose. Doesn't apply to legal pages (`/privacy-policy`, `/terms-of-service`) or blog/case-study MDX, which are author-controlled.

## Principles
1. Clear, developer-friendly language. Technical terms are fine (OpenAPI, MCP, llms.txt, idempotency). Plain framing around them.
2. Lead with why. Every section answers: what problem does this solve, or what outcome does it unlock?
3. Direct, confident, developer-oriented voice. Marketing is welcome when it earns its place. A concrete behavior or proof point beats an empty adjective.
4. No em-dashes.

## Voice & tense
- Second-person to the reader, first-person plural for Fern, imperative for CTAs.
- Present indicative. No future hedging ("can", "may", "is designed to").
- Never third-person self-reference.

## Rhythm
- Feature bodies: 8–18 words, one declarative sentence.
- Hero subheads: one or two complete sentences that explain the value plainly. Don't stack telegraphic fragments. "Open source generators. Postman-backed. We migrate you in a week." reads as marketing rhythm and forces the reader to assemble the meaning. Write a full sentence with the same proof points connected: "Our SDK generators are open source and backed by Postman, and a Fern engineer leads your migration in about a week."
- Fragments are fine for narrow asides where there's no argument to carry — a form-helper "No sales pitch. No spam." or a CTA secondary line. They're not fine for the line that has to communicate the offer.

## Punctuation
- No em-dashes. Use periods, commas, colons, parens, or rephrase.
- Contractions free. Oxford comma. Ampersand only in tight headings.

## Feature framing
- Pattern: **[verb] [object] so [outcome].** "SDKs stay fault-tolerant as your API evolves, so old clients keep working."
- If you can't write the "why" line, the feature isn't ready.

## CTAs
Verb-led, low-friction: "Start for free", "Book a demo", "Migrate to Fern". Secondary actions arrow-tailed.

## Anti-patterns
- AI features are always named (Ask Fern, Fern Writer, MCP server, llms.txt), never abstracted as "AI-powered".
- No "10x faster" without a number, no "trusted by", no future hedging.
- Em-dashes anywhere.
- Stacked-fragment subheads. "Open source generators. Postman-backed. We migrate you in a week." is rhythm, not communication. Use a full sentence (or two) that connects the proof points.

## Recurring vocabulary
Spec, source of truth, agents, idioms, drift, sync. Verbs: generate, ship, publish, regenerate, expose. Engineering: deterministic, auditable, fault-tolerant, forward-compatible.

## Proof points
Brooklyn HQ, YC-backed, Postman company, $12M+ raised, SOC 2 Type II, 99.9% uptime SLA, 9 SDK languages. Customers: NVIDIA, Adobe, ElevenLabs, Twilio, Cohere, OpenRouter, Square.
