---
name: file-bug
description: File a structured bug report during the Fern marketing site testing session. Use this whenever a tester says "I found a bug", "file a bug", "report this issue", "log a defect", or runs /file-bug. Walks the tester through capturing repro steps, expected vs. observed behavior, optional screenshot, then writes a JSON report under `testing/bugs/<tester>/<slug>.json`, copies the screenshot into `testing/screenshots/<tester>/<slug>.png`, commits, and pushes.
---

# File a bug — Fern marketing site testing session

You are helping a tester log a bug they just found on the Fern marketing site. The goal: produce one well-structured JSON file per bug, with the schema documented in `testing/README.md`.

## Step 1 — Gather context

If the tester hasn't already given you all of the following, ask in ONE short message (don't pepper them with separate questions):

1. **What were you doing, and what did you expect?** (1–3 sentences — combined intent + expected outcome)
2. **URL?**
3. **Screenshot?** (optional — they can drag a file in or paste a path)

That's it. Three questions max. Skip any they've already answered. Be concise — these are engineers, not customers.

Derive `observed` from their description of what they were doing (the implicit contrast against the expected outcome is enough). If the contrast isn't clear, ask ONE follow-up: "And what actually happened?" Otherwise infer.

## Step 2 — Auto-fill the rest

You fill in everything else without asking:

| Field | How to fill |
|---|---|
| `id` | Short kebab-case slug derived from the bug title. Keep ≤ 40 chars. |
| `tester` | Read from the current branch: `git branch --show-current` → strip `testing/` prefix. If the branch is `main` or anything else, ASK them their name once at the very start and remember it for the session. |
| `reportedAt` | Current ISO 8601 UTC: `new Date().toISOString()` equivalent — run `date -u +%Y-%m-%dT%H:%M:%SZ` if needed. |
| `viewport` | If they don't say, default to `1440x900`. Don't ask. |
| `browser` | If they don't say, default to `Chrome (current)`. Don't ask. |
| `theme` | Infer from the URL or context (e.g. "dark mode" mentioned → `dark`); otherwise `either`. |
| `severity` | Pick using the rubric in `testing/README.md`. Lean toward `medium` if unsure. |
| `category` | Infer from the bug description. One of: `visual`, `broken`, `copy`, `accessibility`, `perf`, `seo`, `other`. |
| `title` | Headline you write. Short and specific. |
| `summary` | 1–2 sentences. |
| `steps` | Bullets you derive from "what were you doing". |
| `expected` | From their input. |
| `observed` | From their input. |
| `screenshotPath` | If they gave a screenshot, copy it to `testing/screenshots/<tester>/<slug>.png` and reference that relative path. If no screenshot, omit the field. |
| `branch` | `git branch --show-current`. |
| `commit` | `git rev-parse --short HEAD`. |

## Step 3 — Write the file

Create `testing/bugs/<tester>/<slug>.json`. Make the directory if it doesn't exist. Match the schema in `testing/README.md` exactly. Keep keys in the order shown in the template (`testing/bugs/_template.json`).

If a file with the same slug already exists, append a `-2` (or `-3`, etc.) to the slug so you don't overwrite.

## Step 4 — Handle the screenshot

If `screenshotPath` was provided:

1. Make sure `testing/screenshots/<tester>/` exists.
2. Copy the source file to `testing/screenshots/<tester>/<slug>.png` (or keep the original extension if it's `.jpg` / `.webp`).
3. Reference that relative path in the JSON (NOT the source path on the tester's filesystem).

Use `cp` via the Bash tool. Don't try to read the screenshot — just copy it.

## Step 5 — Commit & push

Run, in order:

```bash
git add testing/bugs/<tester>/<slug>.json testing/screenshots/<tester>/<slug>.{png,jpg,webp}
git commit -m "bug(<tester>): <title>"
git push -u origin "$(git branch --show-current)"
```

The first push on a new branch needs `-u`. After that, `git push` is fine — the script above handles both since `-u` is idempotent.

If the branch isn't a `testing/<name>` branch, gently nudge: "You're on `<branch>` — want me to create `testing/<your-name>` first?"

## Step 6 — Confirm

Reply to the tester with:

- ✅ "Filed: `<title>`"
- File path
- Severity + category you assigned
- One-sentence summary of what happens next ("pushed to `testing/<tester>` — log another whenever you're ready")

Keep it terse. They're going to file more.

## Hard rules

- **Don't ask follow-up questions unless something material is missing.** If the tester gave you a URL, expected, observed — that's enough. Fill the rest.
- **Never edit application code from this skill.** You're logging bugs, not fixing them.
- **Don't touch other testers' folders** — only write to `testing/bugs/<this-tester>/` and `testing/screenshots/<this-tester>/`.
- **One bug, one file.** If they describe two issues in one message, write two files.
- **Don't force-push.** If a push is rejected, pull --rebase and retry once. If that fails, ask.

## Reference

- Schema, severity rubric, category guide: `testing/README.md`
- Filled example: `testing/bugs/_template.json`
