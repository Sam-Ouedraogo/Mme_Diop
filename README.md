# Bijoux Dorée — West African Jewelry Website

A fast, modern, and cost-optimized website for a West African jewelry business. Built with Astro, styled with Tailwind CSS, content managed via Decap CMS, and deployed for free on Cloudflare Pages.

**Total running cost: ~$12/year** (domain name only — everything else is free).

---

## Tech Stack

| Layer | Tool | Cost |
|-------|------|------|
| Framework | [Astro 4](https://astro.build) | Free |
| Styling | [Tailwind CSS v3](https://tailwindcss.com) | Free |
| CMS | [Decap CMS](https://decapcms.org) | Free |
| Hosting | [Cloudflare Pages](https://pages.cloudflare.com) | Free |
| Domain | Any registrar (.com) | ~$12/year |

---

## Prerequisites

- [Node.js](https://nodejs.org) v18 or higher
- npm v9 or higher
- A GitHub account (for CMS authentication)

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

The site will be available at `http://localhost:4321`.

### 3. Build for production

```bash
npm run build
```

The static output is generated in the `dist/` folder — ready to deploy anywhere.

### 4. Preview the production build locally

```bash
npm run preview
```

Serves the `dist/` folder at `http://localhost:4321` to verify the production build before deploying.

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local development server with hot reload |
| `npm run build` | Build the static site to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run astro` | Run Astro CLI directly (e.g. `npm run astro -- check`) |
