# Portfolio — Project Planning & Architecture

## Overview
A personal portfolio website built with Next.js 15, React 19, TypeScript 5, Tailwind CSS v4, and Motion (Framer Motion successor). The site uses a glassmorphism design language with animated sections and a contact form.

## Tech Stack
- **Framework**: Next.js 15.x (App Router, static export)
- **UI**: React 19.x
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS v4 (CSS-first, `@theme` block in globals.css — no tailwind.config.js)
- **Animation**: Motion (`motion/react`) — Framer Motion v11+ successor
- **Theming**: next-themes (light/dark toggle)
- **Forms**: react-hook-form + zod + @hookform/resolvers
- **Icons**: lucide-react
- **Utilities**: clsx + tailwind-merge (`cn()` helper)

## Project Structure
```
src/
├── app/
│   ├── globals.css       # Tailwind v4 @theme tokens + custom CSS
│   ├── layout.tsx        # Root layout with ThemeProvider, Navbar, Footer
│   └── page.tsx          # Home page — composes section components
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx    # Fixed nav with scroll-aware glass effect
│   │   ├── Footer.tsx    # Simple footer with social links
│   │   └── ThemeToggle.tsx
│   ├── providers/
│   │   └── ThemeProvider.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       ├── GlassCard.tsx
│       ├── BentoGrid.tsx
│       ├── SkillBadge.tsx
│       ├── AnimatedText.tsx  # Typewriter effect
│       ├── SocialLink.tsx
│       └── ContactForm.tsx   # react-hook-form + zod
├── hooks/
│   └── useScrollProgress.ts
├── lib/
│   ├── utils.ts          # cn() helper
│   └── constants/
│       ├── personal.ts   # Personal info, social links
│       ├── skills.ts     # Skill categories
│       └── navigation.ts # Nav items
└── types/
    └── index.ts
```

## Design System
- **Theme**: Glassmorphism — frosted glass cards, animated blobs
- **Colors**: CSS custom properties defined in `@theme` block
- **Dark mode**: `.dark` class selector (next-themes)
- **Typography**: Inter (Google Fonts via `next/font/google`)
- **Animations**: Motion (Framer Motion v11), respects `prefers-reduced-motion`

## Key Design Decisions

### Tailwind CSS v4
No `tailwind.config.js`. All design tokens live in `globals.css` inside an `@theme {}` block. Utility classes are generated from those tokens automatically.

### Static Export
`next.config.ts` sets `output: "export"` — produces a static site in `/out` that can be deployed anywhere (GitHub Pages, Netlify, Vercel, etc.).

### Contact Form
Uses Formspree as backend. Replace `FORMSPREE_ID` in `ContactForm.tsx` with your actual form ID from https://formspree.io.

### Animation Philosophy
- All animations are wrapped with `useReducedMotion()` checks
- `motion/react` (not `framer-motion`) — same API, new package name
- `whileInView` for scroll-triggered animations with `viewport: { once: true }`

## Customization Guide

### Personal Info
Edit `src/lib/constants/personal.ts`:
- Change `PERSONAL.name`, `PERSONAL.titles`, `PERSONAL.bio`, etc.
- Update `SOCIAL_LINKS` with your actual URLs

### Skills
Edit `src/lib/constants/skills.ts` — add/remove skill categories and individual skills.

### Colors / Theme
Edit the `@theme` block in `src/app/globals.css` to change accent color, backgrounds, etc.

### Adding Sections
1. Create `src/components/sections/NewSection.tsx`
2. Import and add to `src/app/page.tsx`
3. Add nav item in `src/lib/constants/navigation.ts`

## Development
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # Static export to /out
npm run lint
```

## Deployment
The `out/` directory (after `npm run build`) can be deployed to:
- **GitHub Pages**: push `out/` to `gh-pages` branch
- **Netlify**: drag & drop `out/` or connect repo
- **Vercel**: works automatically (remove `output: "export"` for Vercel)
