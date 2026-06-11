# Creative briefs

One markdown brief per ad variant, named `<variant_id>.md`. Final exported PNGs land in `exports/`.

## Each brief has three sections

1. **Spec** — platform, dimensions, file format, paired copy variant ID, paired UTM.
2. **Technical asset outline** — Mermaid diagram or Figma-style line description (boxes, arrows, grid placement) for any layout, code, comparison table, or product UI inside the ad. Concrete enough that a designer can rebuild it without ambiguity.
3. **Background imagery** — Midjourney prompt in the house style, tailored to the ad's emotional hook.

## House Midjourney prompt template

```
[scene description in Hiroshi Yoshida landscape style], atmospheric [weather], long-exposure smoothing motion, muted earthy colors, tactile analog grain --v 7.0 --p xbmuohp --raw --exp 100 --ar {ratio}
```

## Ad slot sizes and aspect ratios

| Slot | Dimensions | Midjourney `--ar` |
|---|---|---|
| LinkedIn Single Image | 1200×627 | `2:1` |
| LinkedIn 1:1 crop | 1200×1200 | `1:1` |
| LinkedIn Conversation banner | 300×250 | `6:5` |
| Google Display landscape | 1200×628 | `2:1` |
| Google Display square | 1200×1200 | `1:1` |
| Google Display banner | 1200×300 | `4:1` |

## Repo brand assets to reuse

- Fern wordmark: `/public/fern-wordmark.svg`
- Fern leaf mark: `/public/fern-leaf.svg`
- Customer logos: `/public/customers/{name}/` (light + dark + monochrome variants)
- Brand green: `#008700` (light) / `#9CDD8D` (dark) — from `src/app/globals.css`
- Existing landing page OG images for typography reference: `/public/og-*.jpg`
