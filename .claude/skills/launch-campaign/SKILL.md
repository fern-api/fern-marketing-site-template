---
name: launch-campaign
description: Scaffold a paid acquisition campaign for a Fern landing page under `campaigns/<slug>/`. Use whenever the user says "create a campaign for X", "launch a campaign on /lp/X", "spin up paid ads for X", or "/launch-campaign". Mirrors the leave-stainless / agent-ready / fern-vs-speakeasy structure with brief, LinkedIn + Google copy, creative briefs in the Hiroshi Yoshida house style, results scaffolding, and a prefix entry in `campaigns/README.md`. Stops short of committing.
---

# Launch a Fern paid acquisition campaign

You are scaffolding a new campaign folder under `campaigns/<slug>/` that drives traffic to a single landing page. Output: a complete `campaigns/<slug>/` tree (brief + copy + creative briefs + results scaffolding) plus a prefix entry in `campaigns/README.md`. Reference shape: `campaigns/leave-stainless/` and `campaigns/agent-ready/`.

## Step 0 — Establish the spine

If the user hasn't already given you all of this, ask in ONE short message:

1. **Slug** — kebab-case folder name (e.g. `agent-ready`, `leave-stainless`). This is also the `utm_campaign` value.
2. **LP path** — usually `/lp/<slug>`. Confirm the page exists at `src/app/lp/<slug>/page.tsx`.
3. **One-line wedge** — the angle that distinguishes this campaign from the others (e.g. "offense on the invisible-audience problem", "defense against a competitor wind-down", "side-by-side evaluation").
4. **Anything stable about audience or proof points** they want locked in (named customers, specific quotes, a stat).

That's it. Don't pepper them. Derive everything else from the LP page and the AGENTS.md writing style.

## Step 1 — Read the source of truth

Before writing any campaign file, read in parallel:

- `src/app/lp/<slug>/page.tsx` — for the actual headline, named features, anchors (every `id=` in the JSX), and CTA destinations. The campaign copy must echo the LP's language, not invent new claims.
- `AGENTS.md` — the "Writing style" section. Every line of ad copy obeys it.
- `campaigns/README.md` — for the canonical variant-ID scheme and the list of registered prefixes (so the new prefix doesn't collide).
- `campaigns/leave-stainless/` and `campaigns/agent-ready/` — structural reference for the new files. Match section ordering and header style exactly so the campaigns stay diff-comparable.
- Any blog post the LP cross-links to (e.g. `content/blog/agent-score.mdx`) — for verbatim customer quotes, named stats, and proof points.

## Step 2 — Pick the prefix

Uppercase initials of the slug, with a trailing dash. `leave-stainless` → `LS-`. `agent-ready` → `AR-`. `fern-vs-speakeasy` → `FVS-`. If the natural prefix collides with one already registered in `campaigns/README.md`, pick the next-shortest distinguishing letters and confirm with the user.

## Step 3 — Build the tree

Create exactly this structure (use the `_template/` directory as the placeholder shape, but fill every field from the LP and the user's wedge — do not copy and paste placeholders forward):

```
campaigns/<slug>/
├── brief.md
├── copy/
│   ├── linkedin.md
│   └── google.md
├── creative/
│   ├── README.md
│   ├── <PFX>-LI-SI-01.md          # Lead hook
│   ├── <PFX>-LI-SI-02.md          # Tool / product hook
│   ├── <PFX>-LI-SI-03.md          # Social-proof / testimonial hook
│   ├── <PFX>-LI-SI-04.md          # Data / stat hook
│   ├── <PFX>-LI-CONV-01.md        # Conversation ad banner
│   ├── <PFX>-GD-LS-01.md          # Google Display landscape
│   ├── <PFX>-GD-SQ-01.md          # Google Display square
│   └── exports/.gitkeep
└── results/
    ├── README.md
    ├── performance.csv            # Header row only
    └── learnings.md
```

Four LinkedIn single-image variants is the proven shape. Don't ship fewer (the campaign needs hook diversity for two-week iterations) and don't ship more (more variants split spend before you have signal).

## Step 4 — Brief (`brief.md`)

Sections in order, matching `campaigns/leave-stainless/brief.md`:

1. **Landing page** — URL, full UTM scheme, and a list of every anchor on the LP worth deep-linking (one per `id=` from the JSX).
2. **Audience** — primary, secondary, tertiary. Then LinkedIn targeting (job titles, company filters, group signals, account audiences) and Google targeting (branded terms, category terms, adjacent intent, negative keywords). All keywords lowercase.
3. **Goals** — primary KPI (almost always booked demos via BookDemoForm), secondary KPIs, budget TBD, window TBD.
4. **Value props (priority order)** — 3 to 5, drawn from the LP and the user's wedge.
5. **Proof points to lean on** — customers, stats, quotes, certifications. Pull verbatim from the LP and the cross-linked blog post.
6. **Anti-patterns to avoid** — at minimum: em-dashes anywhere; "AI-powered" without naming the feature; "10x faster" without a source; future hedging; disparaging competitors by name. Add campaign-specific anti-patterns when relevant.

## Step 5 — LinkedIn copy (`copy/linkedin.md`)

Four single-image hooks, two text ads, one conversation ad. Limits at the top of the file (Single Image intro ≤600 max but aim ≤200; headline ≤200 but aim ≤70; description ≤100; text-ad headline ≤25; text-ad description ≤75; conversation ad opening ≤400). For every variant include intro, headline, description, full destination URL with UTMs, and a markdown link to the paired creative brief.

The four single-image hooks should each play a different beat:

- **SI-01 — Lead hook** — the campaign's strongest one-sentence wedge. Urgency or framing.
- **SI-02 — Tool / product hook** — the feature or tool that makes the campaign land. Pair with the deepest LP anchor.
- **SI-03 — Social-proof hook** — a verbatim customer quote with monochrome customer logo. No background imagery; solid brand-green field.
- **SI-04 — Data hook** — one big statistic, one secondary line, one CTA. The number does the work.

Print character counts inline (e.g. `Intro (181 chars):`) so they're easy to QA. Verify each one before committing.

## Step 6 — Google copy (`copy/google.md`)

Two RSA ad groups (a general one and one keyword-tilted to the strongest deep-link), 15 headlines (≤30) and 4 descriptions (≤90) per RSA, sitelinks, callout extensions (≤25 each), structured snippets, and Google Display short headlines / long headline / descriptions. Format as tables with character counts so the QA pass is fast.

## Step 7 — Creative briefs (`creative/<PFX>-*.md`)

Each brief is three sections, matching `campaigns/leave-stainless/creative/`:

1. **Spec** — platform, slot, dimensions, file path, paired copy variant link, paired UTM.
2. **Technical asset outline** — either a Mermaid diagram or a line-diagram showing the actual layout (boxes for headline, logo strip, CTA chip, customer-logo row). Concrete enough that a designer can rebuild without ambiguity. Then a bullet list calling out colors, type sizes, separators.
3. **Background imagery — Midjourney** — one prompt in the house Hiroshi Yoshida template. Pick a scene that maps to the variant's emotional read. Close the brief with a one-line "Emotional read:" callout.

The house Midjourney template:

```
[scene description in Hiroshi Yoshida landscape style], atmospheric [weather], long-exposure smoothing motion, muted earthy colors, tactile analog grain --v 7.0 --p xbmuohp --raw --exp 100 --ar {ratio}
```

Brand asset rules locked across all briefs:

- Fern wordmark at `/public/fern-wordmark.svg`, leaf mark at `/public/fern-leaf.svg`.
- Customer logos at `/public/customers/<slug>/<slug>-monochrome.svg` against imagery or colored fields.
- Brand green `#008700` (light) / `#9CDD8D` (dark).
- Wordmark top-left at 64px equivalent on a 1200-wide canvas, 5% margin.
- Headline ~56pt on a 1200-wide canvas.
- For score readouts or product mocks, render as clean type, not a screenshot of the live product. The live UI changes; the ad shouldn't.

Aspect ratios by slot are documented in the campaign's `creative/README.md`. Copy that table verbatim from `campaigns/leave-stainless/creative/README.md`.

## Step 8 — Results (`results/`)

Three files:

- `README.md` — explain how to log, list data sources (LinkedIn Campaign Manager, Google Ads, GA4), document the CSV schema, and describe the two-week review cadence (sort by cost-per-booking, sort by CTR, update learnings).
- `performance.csv` — header row only: `date,platform,campaign,variant_id,impressions,clicks,ctr,spend,landing_page_views,demo_bookings,cost_per_booking,notes`. Add a campaign-specific secondary conversion column (e.g. `agent_score_runs`) if the LP has one.
- `learnings.md` — empty "Working" and "Cutting" sections, then a "Test next" list of pre-launch hypotheses worth queuing (audience split, CTA copy split, destination test, background-imagery test, etc.).

## Step 9 — Register the prefix

Append two lines to `campaigns/README.md`:

1. A row in the "Campaign | Prefix | Example" table.
2. A bullet under "Active campaigns" describing the LP and the angle.

## Step 10 — Verify

Before reporting done, run these checks in parallel:

- `find campaigns/<slug> -type f | sort` — matches the file tree above exactly.
- `grep -r "utm_content=<PFX>-" campaigns/<slug>` — every variant ID is unique and registered.
- `grep -rE "(^|[^-])—([^-]|$)" campaigns/<slug>/copy` — confirms no em-dashes in the ad copy. (Em-dashes in section headers like `### <PFX>-LI-SI-01 — Headline` are the project convention and OK; em-dashes inside intro / headline / description fields are not.)
- `grep -rE "AI-powered|is designed to" campaigns/<slug>` — no future hedging or unnamed AI features in the copy. (Anti-pattern lines in `brief.md` are expected.)
- Eyeball every LinkedIn intro ≤600 chars, headline ≤200, description ≤100, text-ad headline ≤25, text-ad description ≤75, conversation opener ≤400.
- Eyeball every Google RSA headline ≤30, description ≤90.
- The variant-ID table in `campaigns/README.md` includes the new prefix row.

## Step 11 — Stop

Do not commit. Do not push. Do not open a PR. Show the user the file list and ask whether to commit. They will iterate on copy before launch and prefer to bundle that with the first commit.

## Anti-patterns when running this skill

- Don't invent customer quotes. Pull them verbatim from blog posts, case studies, or the LP. If a campaign needs a quote and none exists in the repo, surface that gap to the user instead of fabricating one.
- Don't invent stats. If the LP says "73% of top API docs sites ship without an `llms.txt`", that's the only stat you have. Don't extrapolate.
- Don't restructure the existing campaign layout to "improve" it. Other campaigns depend on the shape being diff-comparable.
- Don't ship a campaign with fewer than four LinkedIn single-image hooks. The two-week iteration loop needs hook diversity.
- Don't deep-link to an anchor that doesn't exist on the LP. Grep the page for `id=` before linking.
