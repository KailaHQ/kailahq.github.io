// Generates the numbered screenshot placeholders for the Kaila site.
// Uses @resvg/resvg-js out of the app repo's node_modules — no new dependency
// on the site, and it is deleted from the site repo once real captures land.
import { Resvg } from 'file:///H:/WorkSpace/vibe-project/KomfyEdit/node_modules/@resvg/resvg-js/index.js'
import { writeFileSync, mkdirSync } from 'node:fs'

const OUT = 'H:/WorkSpace/vibe-project/kaila-site/public/shots'
mkdirSync(OUT, { recursive: true })

const W = 1920
const H = 1200

const shots = [
  { n: '01', file: '01-hero.png', title: 'HERO', what: 'Toàn cảnh cửa sổ editor' },
  { n: '02', file: '02-timeline.png', title: 'TIMELINE', what: 'Timeline đa track, công cụ, waveform' },
  { n: '03', file: '03-color.png', title: 'COLOUR', what: 'Bảng chỉnh màu đang mở' },
  { n: '04', file: '04-audio.png', title: 'AUDIO + SUBS', what: 'Track âm thanh và track phụ đề' },
  { n: '05', file: '05-export.png', title: 'EXPORT', what: 'Hộp thoại xuất bản' },
  { n: '06', file: '06-editpilot.png', title: 'EDITPILOT', what: 'Bảng agent EditPilot' },
]

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;')

for (const s of shots) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="#131315"/>
  <g stroke="#ffffff" stroke-opacity="0.04">
    ${Array.from({ length: Math.ceil(W / 80) }, (_, i) => `<line x1="${i * 80}" y1="0" x2="${i * 80}" y2="${H}"/>`).join('')}
    ${Array.from({ length: Math.ceil(H / 80) }, (_, i) => `<line x1="0" y1="${i * 80}" x2="${W}" y2="${i * 80}"/>`).join('')}
  </g>
  <rect x="24" y="24" width="${W - 48}" height="${H - 48}" rx="18"
        fill="none" stroke="#22dddd" stroke-opacity="0.45" stroke-width="3" stroke-dasharray="18 14"/>
  <text x="${W / 2}" y="${H / 2 - 120}" text-anchor="middle"
        font-family="Segoe UI, Arial, sans-serif" font-size="300" font-weight="700"
        fill="#22dddd" fill-opacity="0.9" letter-spacing="10">${s.n}</text>
  <text x="${W / 2}" y="${H / 2 + 10}" text-anchor="middle"
        font-family="Segoe UI, Arial, sans-serif" font-size="74" font-weight="600"
        fill="#ededf1" letter-spacing="6">${esc(s.title)}</text>
  <text x="${W / 2}" y="${H / 2 + 90}" text-anchor="middle"
        font-family="Segoe UI, Arial, sans-serif" font-size="40" fill="#9a9aa4">${esc(s.what)}</text>
  <text x="${W / 2}" y="${H / 2 + 200}" text-anchor="middle"
        font-family="Consolas, monospace" font-size="30" fill="#75757f" letter-spacing="3">${s.file}  ·  ${W} x ${H}</text>
  <text x="${W / 2}" y="${H - 70}" text-anchor="middle"
        font-family="Consolas, monospace" font-size="28" fill="#ff7a45" letter-spacing="4">CHUA CO ANH THAT — REPLACE BEFORE PUBLISHING</text>
</svg>`

  const png = new Resvg(svg, { fitTo: { mode: 'width', value: W } }).render().asPng()
  writeFileSync(`${OUT}/${s.file}`, png)
  console.log(`${s.file}  ${(png.length / 1024).toFixed(0)} KB`)
}
