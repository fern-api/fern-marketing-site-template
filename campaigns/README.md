# Campaigns

Paid acquisition campaigns for buildwithfern.com. Each campaign lives in its own folder with copy, creative briefs, and performance data.

## Layout

```
campaigns/
├── _template/                # Copy this when starting a new campaign
└── <campaign-slug>/
    ├── brief.md              # Goals, audience, value props, KPIs, UTM scheme
    ├── copy/
    │   ├── linkedin.md       # All LinkedIn ad variants
    │   └── google.md         # All Google Ads variants
    ├── creative/
    │   ├── README.md         # Slot sizes, prompt template, repo asset references
    │   ├── <variant_id>.md   # One brief per ad variant
    │   └── exports/          # Final PNGs land here
    └── results/
        ├── README.md         # How to log results
        ├── performance.csv   # Weekly performance data, one row per variant per day
        └── learnings.md      # Running list of what to keep, cut, and test next
```

## Conventions

### Variant IDs

Every ad variant gets a stable, **globally unique** ID. Copy, creative, and results all reference the same ID. The ID is `<CAMPAIGN>-<SLOT>-NN` so a variant is unambiguous in any report or CSV row, even before joining on the `campaign` column.

| Slot prefix | Meaning |
|---|---|
| `LI-SI-NN` | LinkedIn Single Image |
| `LI-TA-NN` | LinkedIn Text Ad |
| `LI-CONV-NN` | LinkedIn Conversation Ad |
| `GS-RSA-NN` | Google Search Responsive Ad |
| `GS-SL-<label>` | Google Search Sitelink |
| `GD-LS-NN` | Google Display Landscape |
| `GD-SQ-NN` | Google Display Square |

Each campaign gets a short uppercase prefix derived from its slug:

| Campaign | Prefix | Example |
|---|---|---|
| `leave-stainless` | `LS-` | `LS-LI-SI-01` |
| `fern-vs-speakeasy` | `FVS-` | `FVS-LI-SI-01` |
| `agent-ready` | `AR-` | `AR-LI-SI-01` |
| `consolidate-stack` | `CS-` | `CS-LI-SI-01` |
| `enterprise` | `E-` | `E-LI-SI-01` |

Conversation ad replies append `-a` / `-b` to the variant ID (`LS-LI-CONV-01-a`).

Numbering starts at `01` per campaign per slot. Never recycle an ID — when a variant is retired, archive it in `learnings.md` and start a new ID.

### UTMs

Every link uses the same query shape:

```
?utm_source={linkedin|google}
&utm_medium=cpc
&utm_campaign={campaign-slug}
&utm_content={variant_id}
```

`utm_content` is the variant ID. That is the join key between ad platforms and `performance.csv`.

### Writing style

All copy follows the Writing Style section of [AGENTS.md](../AGENTS.md). The short version: no em-dashes, second-person to the reader, first-person plural for Fern, present indicative, no future hedging, named AI features only, named customers only, verb-led CTAs.

## Starting a campaign

Copy `_template/` to `campaigns/<your-slug>/` and fill in `brief.md` first. The `/launch-campaign` skill in `.claude/skills/launch-campaign/` scaffolds the whole tree for you from one short prompt.
