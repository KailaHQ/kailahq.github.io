# kaila-site

Marketing site for [KailaEdit](https://github.com/tuyenhm68/KomfyEdit). Astro + Tailwind v4,
static output, bilingual (`/` English, `/vi/` Vietnamese).

This folder is **deliberately outside the KailaEdit repository** — it has its own git history and
publishes to `github.com/KailaHQ/kailahq.github.io`.

## Commands

| Command | What it does |
|---|---|
| `pnpm dev` | Dev server on http://localhost:4321 |
| `pnpm build` | Static build into `dist/` |
| `pnpm preview` | Serve the built `dist/` |

pnpm 11 refuses to run esbuild's and sharp's install scripts without an interactive approval, and
that then fails `pnpm build` over a deps check — `pnpm-workspace.yaml` carries
`onlyBuiltDependencies` and `verifyDepsBeforeRun: false` to settle both. Renaming this folder
breaks pnpm's symlinks; delete `node_modules` and reinstall after any move.

## Where things live

- `src/data/content.ts` — **all copy, both languages**. Change wording here, not in components.
- `src/components/` — one component per band of the page.
- `src/styles/global.css` — theme tokens (mirrored from the app's own `frontend/index.css`),
  the timeline-ruler and screenshot-frame motifs, grain, scroll-reveal.

## Deploy

Pushing to `main` is the deploy: `.github/workflows/deploy.yml` builds the site and publishes it
through GitHub Pages. Pages' source is set to **GitHub Actions**, so there is no `gh-pages` branch
to keep in sync.

Live at https://kailahq.github.io/ — the org user page, served from the domain root, which is why
`astro.config.mjs` sets no `base`. A custom domain can be added later by dropping a `CNAME` file in
`public/` and pointing DNS at it; GitHub then redirects the github.io URL to the custom domain, so
no existing link breaks.

## Screenshots — still to come

The feature sections are laid out as text on purpose. The only real capture on hand still showed
the old KomfyEdit wordmark in its title bar and a nearly empty timeline, so shipping it would have
advertised the wrong name. `TimelineArt.astro` stands in on the hero — a drawing in the app's
palette, clearly not a screenshot and not pretending to be one.

When real captures exist, reintroduce an image column on the feature cards and a hero shot. Take
them at a fixed 1920×1200 viewport from a demo project with several video tracks, clip colour
labels, an audio waveform, a subtitle track and a text overlay:

| Wanted | Shows |
|---|---|
| `hero` | Full editor — program monitor, timeline, properties |
| `timeline` | Multi-track timeline, tools, waveforms, colour labels |
| `color` | Colour correction panel |
| `audio` | Audio track with waveform + styled subtitle track |
| `export` | Export dialog |
| `editpilot` | EditPilot agent panel |

The `shot` and `shotAlt` fields are still carried on every feature in `src/data/content.ts` for
exactly this.
