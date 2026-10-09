<p align="center"><img src="public/brand/logo-dark.svg" alt="mode.dev" width="260" /></p>

<p align="center"><b>mode.dev</b> — the portfolio of Mohammed Abdul Salam, full-stack developer.<br/>
Web, mobile and Windows products, designed and built with care.</p>

<p align="center"><a href="https://modedev.vercel.app">modedev.vercel.app</a></p>

---

## Features

- Arabic-first, bilingual (AR / EN) with full RTL support
- Dark and light themes
- Interactive command palette that searches the project list
- Live product demos (رَدّ, نَسَق and more), work and download pages
- Motion with Framer Motion, respecting `prefers-reduced-motion`
- SEO: Open Graph image, structured data, sitemap and robots

## Stack

React 19 · Vite · Framer Motion · i18next · lucide-react

## Run locally

```bash
npm install
npm run dev
```

Build for production with `npm run build` (output in `dist/`).

## Structure

- `src/components/Hero.jsx`: hero and command palette
- `src/components/Home.jsx`: home sections and footer
- `src/components/WorkPage.jsx`: work page
- `src/components/DownloadsPage.jsx`: download center
- `src/portfolio.js`: projects, downloads and app icons
- `src/styles/site.css`: design system and themes
- `public/brand/`: logo files

© 2026 Mohammed Abdul Salam
