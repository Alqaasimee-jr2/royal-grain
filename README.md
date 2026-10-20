<div align="center">

# Royal Grain Interior & Furniture

**Where Raw Elegance Meets Art.**

The portfolio and lead generation site for Royal Grain, a heritage-driven furniture and interiors atelier in Mokola, Ibadan, Nigeria. Hand-turned pieces in African Mahogany, Iroko, Zuma Granite and full-grain leather.

[**Live Site**](https://royal-grain.vercel.app) · [**Portfolio**](https://royal-grain.vercel.app/portfolio) · [**Showroom**](https://royal-grain.vercel.app/showroom) · [**Our Craft**](https://royal-grain.vercel.app/craft) · [**Book a Consultation**](https://royal-grain.vercel.app/consultation)

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)

</div>

---

## Overview

Royal Grain sits between traditional West African craftsmanship and contemporary luxury design. The brief was to give a premium furniture maker a digital home that feels as tactile as the work itself, and to position the business as a modern atelier rather than a local workshop.

Two goals shaped every decision:

1. **Brand positioning.** The site has to speak to buyers who value local heritage but expect international luxury standards. The visual direction is "Raw Elegance": earthy mahogany tones against soft creams, editorial typography, and a "manuscript of wood" metaphor that runs through the copy.
2. **Lead conversion.** Instead of a cold contact form, the primary action is a **Private Viewing** workflow built around WhatsApp. That is how high-value buyers in this market actually start a conversation, so the site is designed to get them there in one tap.

## Features

- **Artisanal storytelling**: a home page built around the "Mokola Studio" experience, where local hardwoods meet architectural precision
- **Curated Narratives gallery**: a responsive bento grid of featured projects (for example *The Nordic Retreat*, *Urban Harvest*, *Silent Chambers*) that collapses cleanly from a multi-column desktop layout to a stacked mobile view
- **Material showcase**: African Mahogany, Zuma Granite and Full-Grain Leather presented as part of the brand story, alongside ethical sourcing and precision joinery
- **Dedicated pages** for Portfolio, Showroom, Our Craft and Consultation
- **WhatsApp-integrated lead capture** with a floating status trigger and CTAs written for a premium audience ("Book a Private Viewing")
- **Subtle motion** with Framer Motion, including hover transitions on the gallery and material selectors
- **SEO and sharing metadata**: Open Graph and Twitter cards, `en_NG` locale, and keywords targeting luxury furniture, bespoke furniture and interior design in Ibadan and Nigeria

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 with custom Material-3 style design tokens |
| Motion | Framer Motion 12 |
| Icons | Google Material Symbols |
| Linting | ESLint 9 with `eslint-config-next` |
| Hosting | Vercel |

The dependency list is intentionally short. There is no UI kit and no state library, so the bundle stays small and the design system stays fully custom.

## Performance approach

Furniture photography is heavy, and Nigerian traffic is mostly mobile, so image handling matters most:

- `next/image` with priority loading on hero sections
- WebP for gallery imagery
- Deferred rendering for the bento grid and material sections

## Getting started

**Requirements:** Node.js 20+ (Next.js 16 and React 19) and npm.

```bash
# clone (default branch is master)
git clone https://github.com/Alqaasimee-jr2/royal-grain.git
cd royal-grain

# install
npm install

# run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project structure

```
royal-grain/
├── src/
│   ├── app/            # App Router pages (Home, Portfolio, Showroom, Craft, Consultation)
│   └── components/     # UI components (Navbar, bento grid, floating WhatsApp status, and more)
├── public/             # Optimised imagery and static assets
├── AGENTS.md           # Guidance for AI coding agents
├── CLAUDE.md           # Claude Code project instructions
├── CASE_STUDY.md       # Design and engineering write-up
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
└── tsconfig.json
```

### Routes

| Route | Purpose |
|---|---|
| `/` | Home: philosophy, curated narratives, materials, consultation CTA |
| `/portfolio` | Full project gallery |
| `/showroom` | Collections and showroom |
| `/craft` | The artisanal process and materials |
| `/consultation` | Private viewing and bespoke commission enquiries |

## Working with AI agents

The repo includes `AGENTS.md` and `CLAUDE.md` at the root. If you use an AI coding agent, point it at those first so it follows the project's conventions.

## Deployment

Deployed on Vercel at [royal-grain.vercel.app](https://royal-grain.vercel.app), with `https://royalgrain.ng` set as the canonical URL in page metadata. Pushes to `master` deploy through Vercel's Git integration. To self-host, run `npm run build` then `npm run start` on any Node host.

## Further reading

See [`CASE_STUDY.md`](./CASE_STUDY.md) for the full design philosophy, visual language and engineering decisions behind the build.

## Contributing

This is a client project, so changes are scoped and reviewed before they ship. Bug reports and small fixes are welcome. Open an issue first for anything larger, and run `npm run lint` and `npm run build` before opening a pull request.

## Author

Designed and built by **Abdullah Qaasim-Falade**, [NIT7ER Studio](https://nit7er.vercel.app), Lagos, Nigeria.

[GitHub](https://github.com/Alqaasimee-jr2) · [LinkedIn](https://www.linkedin.com/in/abdullahqaasimf001)

## License

© 2026 Royal Grain Interior & Furniture. All rights reserved.
