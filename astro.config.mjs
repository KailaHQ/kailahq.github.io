// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

// The site is served from the org user-page repo `komfyedit/komfyedit.github.io`,
// so it lives at the domain root — no `base` prefix.
export default defineConfig({
  site: 'https://komfyedit.github.io',
  trailingSlash: 'ignore',
  vite: { plugins: [tailwindcss()] },
})
