export type Lang = 'en' | 'vi'

export const LANGS: Lang[] = ['en', 'vi']

/** Bumped at release time; the download section also asks the GitHub API at runtime. */
export const APP_VERSION = '1.0.4'
export const REPO = 'tuyenhm68/KomfyEdit'
export const REPO_URL = `https://github.com/${REPO}`
export const RELEASES_URL = `${REPO_URL}/releases/latest`
export const DOCS_URL = `${REPO_URL}/tree/main/docs`

export interface Feature {
  tc: string
  kicker: string
  title: string
  body: string
  bullets: string[]
  shot: string
  shotAlt: string
}

export interface Copy {
  htmlLang: string
  meta: { title: string; description: string }
  nav: { features: string; editpilot: string; download: string; docs: string; altLang: string; altHref: string }
  hero: {
    badge: string
    title: string[]
    lede: string
    ctaPrimary: string
    ctaSecondary: string
    versionNote: string
    shotAlt: string
  }
  trust: { value: string; label: string }[]
  featuresIntro: { tc: string; title: string; body: string }
  features: Feature[]
  editpilot: {
    tc: string
    title: string
    body: string
    points: { title: string; body: string }[]
    note: string
    shot: string
    shotAlt: string
  }
  compare: {
    tc: string
    title: string
    body: string
    cols: string[]
    rows: { label: string; cells: (string | boolean)[] }[]
  }
  download: {
    tc: string
    title: string
    body: string
    platforms: { os: string; file: string; note: string }[]
    reqTitle: string
    reqs: string[]
    build: string
  }
  footer: { tagline: string; docs: string; guideEn: string; guideVi: string; changelog: string; license: string; rights: string }
}

const en: Copy = {
  htmlLang: 'en',
  meta: {
    title: 'KomfyEdit — the offline desktop video editor',
    description:
      'A multi-track desktop video editor that runs fully offline. No account, no API key, no GPU, no network calls. Import, cut, grade, subtitle and export with bundled ffmpeg. Free and open source.',
  },
  nav: {
    features: 'Features',
    editpilot: 'EditPilot',
    download: 'Download',
    docs: 'Docs',
    altLang: 'Tiếng Việt',
    altHref: '/vi/',
  },
  hero: {
    badge: 'Free · Open source · Apache-2.0',
    title: ['Cut the whole film', 'with the network off.'],
    lede:
      'KomfyEdit is a desktop video editor that never phones home. Multi-track timeline, ripple and roll trims, colour, titles, subtitles — exported by the ffmpeg that ships inside the app. No account. No subscription. No watermark.',
    ctaPrimary: 'Download for Windows',
    ctaSecondary: 'View source',
    versionNote: 'Version {v} · Windows & macOS',
    shotAlt: 'The KomfyEdit editor: program monitor, multi-track timeline and properties panel',
  },
  trust: [
    { value: '100%', label: 'Offline. Every frame stays on your disk' },
    { value: '0', label: 'Accounts, API keys or telemetry' },
    { value: 'No GPU', label: 'Runs on a plain laptop CPU' },
    { value: 'Apache-2.0', label: 'Source open, forks welcome' },
  ],
  featuresIntro: {
    tc: 'The cut',
    title: 'An editor built like an editor,\nnot like a web app.',
    body:
      'Tools, keys and timeline semantics borrowed from the NLEs people already know — implemented natively in a desktop app that opens in seconds.',
  },
  features: [
    {
      tc: '00:01',
      kicker: 'Timeline',
      title: 'Blade, ripple, roll, slip, slide.',
      body:
        'A real multi-track timeline with the six tools you actually reach for, snapping that respects linked A/V, gap detection with one-key Close Gap, and snapshot undo across the whole session.',
      bullets: [
        'Multiple named timelines per project',
        'Insert and overwrite edits from the source monitor',
        'Match frame, in/out marks, split at playhead',
        'Clip colour labels, track lock / mute / solo, adjustment layers',
      ],
      shot: '/shots/timeline.png',
      shotAlt: 'Multi-track timeline with clips, waveforms and colour labels',
    },
    {
      tc: '00:02',
      kicker: 'Colour & effects',
      title: 'Grade it without leaving the clip.',
      body:
        'Brightness, contrast, saturation, temperature, tint, exposure, highlights and shadows on every clip, with speed, reverse, opacity and flips one panel away. Keyframe whatever should move.',
      bullets: [
        'Transitions: dissolve, fade to black or white, wipes',
        'Letterbox with preset and custom aspect ratios',
        'Text overlays with presets and full typography controls',
        'LUTs, stickers and sound effects bundled in',
      ],
      shot: '/shots/color.png',
      shotAlt: 'Colour correction panel open beside the program monitor',
    },
    {
      tc: '00:03',
      kicker: 'Audio & subtitles',
      title: 'Waveforms, levels, and SRT that round-trips.',
      body:
        'Per-clip volume and mute against a drawn waveform, mixed down through a look-ahead limiter so an export never clips. Dedicated subtitle tracks carry their own styling.',
      bullets: [
        'Import and export SRT',
        'Per-track subtitle styling, burned in on export',
        'Track solo and mute while you balance',
      ],
      shot: '/shots/audio.png',
      shotAlt: 'Audio track with waveform and a styled subtitle track',
    },
    {
      tc: '00:04',
      kicker: 'Deliver',
      title: 'H.264, ProRes or VP9 — from the ffmpeg inside.',
      body:
        'Pick a resolution, frame rate and quality, then hand it to the bundled encoder. Nothing uploads, nothing queues, nothing expires.',
      bullets: [
        'Burned-in subtitles on export',
        'Timeline XML export for round-tripping',
        'Local project storage with autosave',
      ],
      shot: '/shots/export.png',
      shotAlt: 'Export dialog showing format, resolution and quality settings',
    },
  ],
  editpilot: {
    tc: '00:05',
    title: 'EditPilot drives the timeline.\nYour CLI. Your machine.',
    body:
      'EditPilot is the agent panel inside the editor. It runs the AI CLI you already have — Claude Code, Codex or Antigravity — and reaches the project only through KomfyEdit’s own MCP server. Ask it to cut the silence out of a forty-minute take, then watch the clips move.',
    points: [
      {
        title: 'No hidden model',
        body: 'KomfyEdit ships no API key and no model. It starts the CLI you installed, under your own account.',
      },
      {
        title: 'A narrow door',
        body: 'The agent acts through MCP tools only. Its own file and shell tools are blocked at the runner.',
      },
      {
        title: 'Reviewable moves',
        body: 'Every change lands as an edit on the timeline — inspect it, or undo it like any other cut.',
      },
    ],
    note: 'Optional. The editor is complete without it.',
    shot: '/shots/editpilot.png',
    shotAlt: 'EditPilot agent panel open next to the timeline',
  },
  compare: {
    tc: '00:06',
    title: 'What you give up by going offline: nothing.',
    body: 'A blunt comparison with the tools most people arrive from.',
    cols: ['KomfyEdit', 'CapCut', 'Premiere Pro'],
    rows: [
      { label: 'Works with no internet', cells: [true, false, false] },
      { label: 'No account required', cells: [true, false, false] },
      { label: 'No watermark, no export cap', cells: [true, 'Paid tier', true] },
      { label: 'Price', cells: ['Free', 'Freemium', 'Subscription'] },
      { label: 'Source available', cells: [true, false, false] },
      { label: 'Runs without a GPU', cells: [true, true, 'Degraded'] },
    ],
  },
  download: {
    tc: '00:07',
    title: 'Take it home.',
    body:
      'One installer, and no sign-in screen on first run. Media you import is copied into the project folder on your own disk.',
    platforms: [
      { os: 'Windows', file: 'KomfyEdit-Setup-{v}.exe', note: 'Windows 10 or 11, 64-bit' },
      { os: 'macOS', file: 'KomfyEdit-{v}.dmg', note: 'macOS 12+, Apple silicon & Intel' },
    ],
    reqTitle: 'What it needs',
    reqs: [
      '4 GB RAM (8 GB is comfortable)',
      'No dedicated GPU',
      'Disk space for your media',
      'Nothing else — ffmpeg is bundled',
    ],
    build: 'Or build it yourself: clone the repo, pnpm install, pnpm build.',
  },
  footer: {
    tagline: 'An offline desktop video editor.',
    docs: 'Documentation',
    guideEn: 'User guide (EN)',
    guideVi: 'Hướng dẫn (VI)',
    changelog: 'Changelog',
    license: 'Apache-2.0 licence',
    rights: 'Released under Apache-2.0. ffmpeg ships under its own licence — see NOTICES.',
  },
}

const vi: Copy = {
  htmlLang: 'vi',
  meta: {
    title: 'KomfyEdit — trình dựng phim desktop chạy offline',
    description:
      'Trình dựng phim đa track trên desktop, chạy hoàn toàn offline. Không tài khoản, không API key, không cần GPU, không gọi mạng. Nhập liệu, cắt dựng, chỉnh màu, làm phụ đề và xuất bản bằng ffmpeg đi kèm. Miễn phí, mã nguồn mở.',
  },
  nav: {
    features: 'Tính năng',
    editpilot: 'EditPilot',
    download: 'Tải về',
    docs: 'Tài liệu',
    altLang: 'English',
    altHref: '/',
  },
  hero: {
    badge: 'Miễn phí · Mã nguồn mở · Apache-2.0',
    title: ['Dựng xong cả bộ phim', 'khi đã ngắt mạng.'],
    lede:
      'KomfyEdit là trình dựng phim desktop không bao giờ gửi dữ liệu đi đâu. Timeline đa track, trim ripple và roll, chỉnh màu, tiêu đề, phụ đề — xuất bản bằng chính ffmpeg nằm trong ứng dụng. Không tài khoản. Không thuê bao. Không watermark.',
    ctaPrimary: 'Tải cho Windows',
    ctaSecondary: 'Xem mã nguồn',
    versionNote: 'Phiên bản {v} · Windows & macOS',
    shotAlt: 'Giao diện KomfyEdit: màn hình chương trình, timeline đa track và bảng thuộc tính',
  },
  trust: [
    { value: '100%', label: 'Offline. Mọi khung hình nằm trên ổ đĩa của bạn' },
    { value: '0', label: 'Tài khoản, API key hay telemetry' },
    { value: 'Không GPU', label: 'Chạy được trên laptop chỉ có CPU' },
    { value: 'Apache-2.0', label: 'Mã nguồn mở, hoan nghênh fork' },
  ],
  featuresIntro: {
    tc: 'Bản dựng',
    title: 'Một phần mềm dựng phim đúng nghĩa,\nkhông phải một web app.',
    body:
      'Bộ công cụ, phím tắt và logic timeline mượn từ những NLE chuyên nghiệp quen thuộc — viết lại nguyên bản trong một ứng dụng desktop mở trong vài giây.',
  },
  features: [
    {
      tc: '00:01',
      kicker: 'Timeline',
      title: 'Blade, ripple, roll, slip, slide.',
      body:
        'Timeline đa track thực thụ với sáu công cụ bạn thực sự dùng tới, snapping tôn trọng clip A/V đã liên kết, phát hiện khoảng trống kèm phím Close Gap, và undo theo snapshot cho cả phiên làm việc.',
      bullets: [
        'Nhiều timeline có tên riêng trong cùng một project',
        'Insert và overwrite từ màn hình nguồn',
        'Match frame, đánh dấu in/out, cắt tại playhead',
        'Nhãn màu cho clip, khoá / tắt tiếng / solo track, adjustment layer',
      ],
      shot: '/shots/timeline.png',
      shotAlt: 'Timeline đa track với clip, waveform và nhãn màu',
    },
    {
      tc: '00:02',
      kicker: 'Màu & hiệu ứng',
      title: 'Chỉnh màu ngay trên clip.',
      body:
        'Độ sáng, tương phản, bão hoà, nhiệt màu, tint, phơi sáng, vùng sáng và vùng tối cho từng clip; tốc độ, tua ngược, độ mờ và lật hình chỉ cách một bảng. Cái gì cần chuyển động thì đặt keyframe.',
      bullets: [
        'Chuyển cảnh: dissolve, fade sang đen hoặc trắng, wipe',
        'Letterbox với tỉ lệ dựng sẵn hoặc tuỳ chỉnh',
        'Text overlay với preset và đầy đủ tuỳ chọn typography',
        'LUT, sticker và hiệu ứng âm thanh đi kèm sẵn',
      ],
      shot: '/shots/color.png',
      shotAlt: 'Bảng chỉnh màu mở cạnh màn hình chương trình',
    },
    {
      tc: '00:03',
      kicker: 'Âm thanh & phụ đề',
      title: 'Waveform, mức tiếng, và SRT đi về hai chiều.',
      body:
        'Âm lượng và mute cho từng clip trên nền waveform được vẽ sẵn, trộn xuống qua limiter look-ahead nên bản xuất không bao giờ vỡ tiếng. Track phụ đề riêng mang style của chính nó.',
      bullets: [
        'Nhập và xuất SRT',
        'Style phụ đề theo từng track, ghi thẳng vào video khi xuất',
        'Solo và mute track trong lúc cân tiếng',
      ],
      shot: '/shots/audio.png',
      shotAlt: 'Track âm thanh với waveform và một track phụ đề đã tạo style',
    },
    {
      tc: '00:04',
      kicker: 'Xuất bản',
      title: 'H.264, ProRes hay VP9 — bằng ffmpeg bên trong.',
      body:
        'Chọn độ phân giải, tốc độ khung hình và chất lượng rồi giao cho bộ mã hoá đi kèm. Không upload, không xếp hàng, không hết hạn.',
      bullets: [
        'Ghi phụ đề thẳng vào video khi xuất',
        'Xuất Timeline XML để mang qua phần mềm khác',
        'Lưu project cục bộ kèm tự động lưu',
      ],
      shot: '/shots/export.png',
      shotAlt: 'Hộp thoại xuất bản với định dạng, độ phân giải và chất lượng',
    },
  ],
  editpilot: {
    tc: '00:05',
    title: 'EditPilot điều khiển timeline.\nCLI của bạn. Máy của bạn.',
    body:
      'EditPilot là bảng agent nằm trong trình dựng. Nó chạy chính CLI AI mà bạn đã cài — Claude Code, Codex hay Antigravity — và chạm tới project chỉ qua MCP server của KomfyEdit. Bảo nó cắt hết khoảng lặng trong một cú quay bốn mươi phút, rồi nhìn các clip tự dịch chuyển.',
    points: [
      {
        title: 'Không có model ẩn',
        body: 'KomfyEdit không kèm API key, không kèm model. Nó khởi chạy CLI bạn tự cài, dưới tài khoản của bạn.',
      },
      {
        title: 'Một cánh cửa hẹp',
        body: 'Agent chỉ hành động qua các MCP tool. Công cụ file và shell của chính CLI bị chặn ngay tại runner.',
      },
      {
        title: 'Xem lại được từng bước',
        body: 'Mọi thay đổi đều đáp xuống timeline như một thao tác dựng — kiểm tra được, hoặc undo như mọi nhát cắt khác.',
      },
    ],
    note: 'Không bắt buộc. Trình dựng vẫn đầy đủ nếu bạn không dùng.',
    shot: '/shots/editpilot.png',
    shotAlt: 'Bảng agent EditPilot mở cạnh timeline',
  },
  compare: {
    tc: '00:06',
    title: 'Chọn offline thì mất gì? Không mất gì cả.',
    body: 'So sánh thẳng thắn với những công cụ mà đa số người dùng đi ra từ đó.',
    cols: ['KomfyEdit', 'CapCut', 'Premiere Pro'],
    rows: [
      { label: 'Chạy được khi không có internet', cells: [true, false, false] },
      { label: 'Không cần tài khoản', cells: [true, false, false] },
      { label: 'Không watermark, không giới hạn xuất', cells: [true, 'Bản trả phí', true] },
      { label: 'Chi phí', cells: ['Miễn phí', 'Freemium', 'Thuê bao'] },
      { label: 'Công khai mã nguồn', cells: [true, false, false] },
      { label: 'Chạy không cần GPU', cells: [true, true, 'Giảm hiệu năng'] },
    ],
  },
  download: {
    tc: '00:07',
    title: 'Mang về máy.',
    body:
      'Một bộ cài, mở lần đầu không có màn hình đăng nhập. Media bạn nhập vào được sao chép vào thư mục project trên ổ đĩa của chính bạn.',
    platforms: [
      { os: 'Windows', file: 'KomfyEdit-Setup-{v}.exe', note: 'Windows 10 hoặc 11, 64-bit' },
      { os: 'macOS', file: 'KomfyEdit-{v}.dmg', note: 'macOS 12 trở lên, Apple silicon & Intel' },
    ],
    reqTitle: 'Yêu cầu hệ thống',
    reqs: [
      '4 GB RAM (8 GB thì thoải mái)',
      'Không cần GPU rời',
      'Dung lượng đĩa cho media của bạn',
      'Không cần gì thêm — ffmpeg đã đi kèm',
    ],
    build: 'Hoặc tự build: clone repo, pnpm install, pnpm build.',
  },
  footer: {
    tagline: 'Trình dựng phim desktop chạy offline.',
    docs: 'Tài liệu',
    guideEn: 'User guide (EN)',
    guideVi: 'Hướng dẫn sử dụng (VI)',
    changelog: 'Nhật ký thay đổi',
    license: 'Giấy phép Apache-2.0',
    rights: 'Phát hành theo Apache-2.0. ffmpeg đi kèm theo giấy phép riêng — xem NOTICES.',
  },
}

export const content: Record<Lang, Copy> = { en, vi }
