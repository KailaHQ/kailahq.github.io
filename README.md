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

Pushing to  is the deploy:  builds the site and publishes it
through GitHub Pages (Pages source is set to **GitHub Actions**, so there is no  branch).

Live at https://kailahq.github.io/ — the org user page, served from the domain root, which is why
 sets no . A custom domain can be added later by dropping a  file
in  and pointing DNS at it; GitHub then redirects the github.io URL to it.

## Screenshots — still to come

The feature sections are laid out as text on purpose. The only real capture available showed the
old KomfyEdit branding and a nearly empty timeline, so shipping it would have advertised the wrong
name.  stands in on the hero: a drawing, clearly not a screenshot.

When real captures exist (fixed 1920x1200 viewport, a demo project with several tracks, colour
labels, waveforms, subtitles and a text overlay), reintroduce an image column on the feature cards
and a hero shot. The  /  fields are still carried in  for
exactly that.
