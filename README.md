# kaila-site

Marketing site for [KailaEdit](https://github.com/tuyenhm68/KomfyEdit). Astro + Tailwind v4,
static output, bilingual (`/` English, `/vi/` Vietnamese).

This folder is **deliberately outside the KailaEdit repository** — it has its own git history and
publishes to `github.com/kailahq/kailahq.github.io`.

## Commands

| Command | What it does |
|---|---|
| `pnpm dev` | Dev server on http://localhost:4321 |
| `pnpm build` | Static build into `dist/` |
| `pnpm preview` | Serve the built `dist/` |

## Where things live

- `src/data/content.ts` — **all copy, both languages**. Change wording here, not in components.
- `src/components/` — one component per band of the page.
- `src/styles/global.css` — theme tokens (mirrored from the app's own `frontend/index.css`),
  the timeline-ruler and screenshot-frame motifs, grain, scroll-reveal.
- `public/shots/` — app screenshots. Currently placeholders; see below.

## Screenshots

`public/shots/*.png` are placeholders copied out of the KailaEdit repo. They are replaced with
real captures taken from the running app at a fixed 1920×1200 viewport:

| File | Shows |
|---|---|
| `hero.png` | Full editor — program monitor, timeline, properties |
| `timeline.png` | Multi-track timeline, tools, waveforms, colour labels |
| `color.png` | Colour correction panel |
| `audio.png` | Audio track with waveform + styled subtitle track |
| `export.png` | Export dialog |
| `editpilot.png` | EditPilot agent panel |

## Deploy

Publishes to the org user page, so the site is served from the domain root and needs no `base`.

```bash
pnpm build
./deploy.ps1
```

`deploy.ps1` pushes `dist/` to the `gh-pages` branch of `kailahq/kailahq.github.io`.
In the repo's **Settings → Pages**, set Source to *Deploy from a branch* → `gh-pages` / `/ (root)`.
