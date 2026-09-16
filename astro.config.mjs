// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

// The site is served from the org user-page repo `kailahq/kailahq.github.io`,
// so it lives at the domain root — no `base` prefix.
export default defineConfig({
  site: 'https://kailahq.github.io',
  trailingSlash: 'ignore',
  vite: { plugins: [tailwindcss()] },
})
