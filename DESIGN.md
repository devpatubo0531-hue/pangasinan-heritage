# Design Plan — Pangasinan Heritage Digital Showcase (Home Screen)

Kept here so nothing gets lost before the Atomic Design System Manual is written up.

## Color
Palette pulled from the provincial tourism map/badge artwork (dominant teal `#077A7D`),
paired with a warm sand/gold accent evoking the Hundred Islands coastline.

| Token | Hex | Role |
|---|---|---|
| `--color-primary` | `#077A7D` | Brand teal — header, primary surfaces |
| `--color-primary-dark` | `#054E50` | Hover/active states, footer-weight text |
| `--color-primary-light` | `#4FA8AA` | Secondary illustration tone |
| `--color-accent` | `#F2A93B` | Primary CTA, highlights |
| `--color-accent-dark` | `#C77F1E` | Accent hover |
| `--color-bg` | `#FBF8F3` | Page background (warm sand-white, not pure white) |
| `--color-text` | `#0B2E2E` | Body text (deep teal-black, not pure black) |

## Type
- **Fraunces** (serif, display) — headings only. Gives the brand warmth/character.
- **Work Sans** (sans) — body copy and UI labels. Clean at small sizes on mobile.
- Two families, clearly distinct roles — no default single-sans-does-everything.

## Layout
Mobile-first, single column, left-aligned text (not centered — reads faster while scanning
on a phone). Sticky header → full-bleed hero → overlapping search card → responsive grid
(1 col mobile / 2 col tablet / 3 col desktop).

```
[Header: logo + nav/hamburger]
[Hero: SVG coastline illustration + headline + CTA]
      [Search card overlapping hero's bottom edge]
[Heritage grid: cards, 1→2→3 columns]
```

## Principle
One bold move — the overlapping search card plus the hand-drawn island/lighthouse/hot-spring
SVG illustrations — everything else stays restrained: no card-shadow-soup, no
rounded-corner-everything, no stock icon set. Illustrations are original (not stock photos),
which also keeps the bundle tiny for 3G/4G users.
