# KisanSaathi — CSS3 Styling (Experiment 2)

> A static, multi-page web portal for an AI-based smart irrigation advisory system,
> styled end-to-end with CSS3 — inline, internal, and external.

**Course:** Web Development Laboratory (`316U01L306`) · Semester III
**Experiment No:** 2 — *Design Web Portal using CSS3*
**Use Case:** KJS-AGR-01 — AI-Based Smart Irrigation Advisory System
**Builds on:** Experiment 1 (the unstyled HTML5 portal)

---

## Aim

To apply CSS3 style sheets to an existing HTML5 web portal in order to enhance layout,
responsiveness, visual aesthetics, and user interaction using modern CSS3 features.

---

## Running It

No build step, no dependencies — it is plain HTML and CSS.

**Open directly in a browser**

```bash
open Exp-2/public/index.html
```

**Or serve it locally** (recommended — `<iframe>` and media behave the same as in production):

```bash
python3 -m http.server 8000 --directory Exp-2/public
```

Then visit <http://localhost:8000>.

---

## Deployment

Deployed as a static site on **Vercel**. Configuration lives in [`vercel.json`](vercel.json).

| Vercel setting | Value |
|---|---|
| Root Directory | `Exp-2` |
| Framework Preset | Other / None |
| Output Directory | `public` (set in `vercel.json`) |

`cleanUrls` is on, so `/registration.html` is served as `/registration`. Internal links keep
their `.html` extension on purpose — that way the same files work when opened straight from
disk *and* on Vercel, which redirects them to the clean URL.

> **Note:** the asset folder is `Assets/` with a capital **A**. macOS ignores filename case but
> Vercel's Linux build does not, so any new `<img>` or `<source>` path must match that casing exactly.

---

## Tasks Implemented

| # | Task | CSS Type | Where |
|---|------|----------|-------|
| 1 | Homepage header styling | Inline (`style=`) | [`index.html:102`](public/index.html) |
| 2 | Navigation menu styling | Internal (`<style>`) | [`index.html:15-38`](public/index.html) |
| 3 | Website-wide theme | External (`<link>`) | [`css/style.css`](public/css/style.css) |
| 4 | Categories sidebar as a card | Internal (`<style>`) | [`farm-info.html:13-34`](public/farm-info.html) |
| 5 | Feature cards (box model) | Internal (`<style>`) | [`index.html:40-71`](public/index.html) |
| 6 | Image gallery with hover zoom | Internal (`<style>`) | [`gallery.html:8-98`](public/gallery.html) |
| 7 | Table styling (zebra striping) | External | [`css/table.css`](public/css/table.css) |
| 8 | Registration form styling | External | [`css/form.css`](public/css/form.css) |
| 9 | Page layout (sidebar + content) | External | [`css/layout.css`](public/css/layout.css) |
| 10 | Animated highlight box | Internal (`@keyframes`) | [`index.html:73-96`](public/index.html) |

---

## CSS3 Concepts Covered

**All three ways of applying CSS**
- Inline `style=""` on the homepage header (Task 1)
- Internal `<style>` blocks for page-specific rules (Tasks 2, 4, 5, 6, 10)
- External stylesheets shared across every page (Tasks 3, 7, 8, 9)

**Box model** — `margin`, `padding`, `border`, `width` / `height`, and a global
`box-sizing: border-box` reset so fixed-width cards size predictably.

**Layout** — Flexbox `.page-wrapper` puts a fixed `220px` sidebar beside a `flex: 1`
main column; `flex-shrink: 0` keeps the sidebar from collapsing on narrow screens.

**Selectors & pseudo-classes** — attribute selectors (`input[type="submit"]`),
structural selectors (`tbody tr:nth-child(even)` for zebra striping), and interaction
states (`:hover` on nav items, cards, and buttons; `:focus` on form fields).

**Transitions & transforms** — gallery thumbnails scale on hover via
`transition` + `transform: scale()`.

**Animations** — a `@keyframes glow` loop pulses the advisory highlight box.

**Visual effects** — `box-shadow`, `text-shadow`, `border-radius`, and
`border-collapse` for flat table borders.

**Responsive media** — `img { max-width: 100%; height: auto; }` and a full-width
`iframe` so the embedded gallery scales with its container.

---

## Pages

| Page | What it demonstrates |
|------|----------------------|
| `index.html` | Homepage — inline header, nav, feature cards, animated box, embedded gallery |
| `farm-info.html` | Categories sidebar card + in-page anchors (workflow, sensors, crop stages) |
| `advisory.html` | Irrigation advisory content |
| `irrigation-table.html` | Dashboard table — zebra striping, styled `caption`, `thead` / `tfoot` |
| `registration.html` | Farm registration form — `fieldset`, `legend`, focus/hover states |
| `gallery.html` | Standalone gallery partial, embedded into `index.html` via `<iframe>` |
| `media.html` | `<video>` and `<audio>` players |
| `weather.html` | Live weather data + embedded Google Maps location |
| `plot-map.html` | Clickable plot selector linking to the three plot pages |
| `plot-a/b/c.html` | Per-plot detail pages |

`gallery.html` is deliberately chrome-free (transparent background, no header or nav) —
it is designed to be embedded, not visited directly.

---

## Colour Palette

| Token | Hex | Used for |
|-------|-----|----------|
| Primary green | `#2e7d32` | Header, footer, headings, table header, buttons |
| Dark green | `#1b5e20` | Borders and hover/active states |
| Light green | `#e8f5e9` | Hover highlight, zebra rows, advisory box |
| Page background | `#f4f6f4` | `body` |
| Surface | `#ffffff` | Cards, sidebar, form fields, table body |
| Body text | `#333333` | Default text colour |

---

## File Structure

```
Exp-2/
├── vercel.json             ← Vercel static-site config
├── README.md
└── public/                 ← deployed output directory
    ├── index.html          ← Tasks 1, 2, 5, 10
    ├── farm-info.html      ← Tasks 4, 9
    ├── gallery.html        ← Task 6 (embedded via iframe)
    ├── irrigation-table.html  ← Task 7
    ├── registration.html   ← Task 8
    ├── advisory.html
    ├── media.html
    ├── weather.html
    ├── plot-map.html
    ├── plot-a.html
    ├── plot-b.html
    ├── plot-c.html
    ├── css/
    │   ├── style.css       ← Task 3 — site-wide theme
    │   ├── layout.css      ← Task 9 — flexbox sidebar + content
    │   ├── table.css       ← Task 7 — table styling
    │   └── form.css        ← Task 8 — form styling
    └── Assets/             ← images, video, audio
        ├── sugarcane_crop.png
        ├── drip_irrigation.png
        ├── soil_sensor.png
        ├── weather_station.png
        ├── farm_map.png
        ├── smart-irrigation.mp4
        └── water-conservation.mp3
```

---

## Course Outcome

**CO1:** Use CSS to prepare the layout of web pages.

---

## Team

**Student Contributors:** Arav Arun · Mrudul Bhagwat · Mohammed Attar · Eshika Arya
