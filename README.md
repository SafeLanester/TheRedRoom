This file provides guidance when working with code in this repository. The README.md should ALWAYS serve as an accurate, comprehensive piece of documentation for this project. It should describe the broader goals and purpose of this repository along with the technical implementation details. If any aspect of the project changes, the README.md should be updated to reflect that.

# Project Notes

## The Red Room - Club & Bar Landing Page

A sophisticated, dark-themed landing page designed to drive traffic to The Red Room cabaret and cocktail lounge. Built with React, Tailwind CSS, and shadcn/ui components.

### Purpose

This site serves as the digital front door for The Red Room, an underground cabaret and cocktail lounge experience. The design focuses on:

- **Attracting guests** through an immersive, moody visual experience
- **Driving reservations** with prominent CTAs for table bookings
- **Promoting events** with an upcoming events calendar
- **Building a guest list** for marketing and VIP access
- **Establishing brand identity** as a premium nightlife destination

### Target Audience

- 21+ nightlife enthusiasts
- Cocktail aficionados
- Music lovers (jazz, house, electronic)
- Groups looking for VIP table experiences
- Professionals seeking after-work drinks

### Key Features

1. **Hero Section** - Full-screen immersive experience with animated background effects
2. **Event Calendar** - Upcoming events with ticket links and details
3. **Guest List Signup** - Email capture for marketing and line skipping
4. **Testimonials** - Social proof from satisfied guests
5. **Contact/Location** - Address, hours, and reservation info
6. **Mobile-First Design** - Optimized for the 85%+ mobile traffic expected

### Design System

- **Primary Color**: Red tones (red-500 to red-900) - evokes passion, energy, nightlife
- **Background**: Deep black with red gradient overlays
- **Typography**: Clean sans-serif with tracking-wide for headers
- **Aesthetic**: Underground speakeasy meets modern luxury

### File Structure

```
src/
├── pages/
│   └── RedRoomLanding.tsx    # Main landing page component
├── App.tsx                    # Router setup (HashRouter for GitHub Pages)
├── main.tsx                   # React entry point
├── components/ui/             # shadcn/ui components
└── styles.css                 # Global styles + Tailwind
```

### SEO Configuration

- Title: "The Red Room | Underground Cocktail Lounge & Nightclub"
- Meta description optimized for local nightlife searches
- Open Graph tags for social sharing
- Keywords: nightclub, cocktail lounge, bar, speakeasy, live music, nightlife

---

# Documentation

This is a **static React + Vite site** - a client-side only web application designed for deployment to GitHub Pages.

## Architecture

### File Structure

```
.
├── index.html              # HTML entry point
├── vite.config.ts          # Vite configuration
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── components.json         # shadcn/ui configuration
├── public/                 # Static assets (images, fonts, favicon)
│   ├── favicon.svg
│   └── images/
└── src/
    ├── main.tsx           # React entry point
    ├── App.tsx            # Router setup (HashRouter)
    ├── styles.css         # Global styles
    ├── pages/             # Page components
    ├── components/        # React components
    ├── hooks/             # Custom hooks
    └── lib/               # Utilities
```

### Key Technologies

- **React 19** - UI components and state management
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first styling
- **shadcn/ui** - Pre-built accessible components
- **React Router DOM** - Client-side routing (HashRouter for GitHub Pages)
- **Lucide React** - Icons

### GitHub Pages Deployment

This site is configured for **GitHub Pages** deployment:

1. **Static Export**: `vite build` generates static files to `dist/`
2. **HashRouter**: Uses `/#/` paths instead of `/` paths for client-side routing
3. **Relative Paths**: `base: "./"` in vite.config.ts ensures assets load correctly

**To deploy to GitHub Pages:**

```bash
# Install dependencies
npm install

# Build the site
npm run build

# Deploy dist/ folder to GitHub Pages
# (via GitHub Actions or manual upload)
```

### Development

**Development Mode** (`npm run dev`):
- Vite dev server with HMR (Hot Module Replacement)
- Default port: 5173

**Production Build** (`npm run build`):
- Builds static files to `dist/` folder
- Optimized and minified for production

**Preview** (`npm run preview`):
- Preview the production build locally

### Static Assets

#### The `public/` Folder

Place files in the `public/` directory. They're served at the root URL path.

```
public/
├── favicon.svg
└── images/
    └── hero.jpg
```

Reference them with absolute paths:

```tsx
<img src="/favicon.svg" alt="Logo" />
```

#### Import in Components (Bundled Assets)

Import assets directly in your React components. Vite handles bundling and optimization.

```tsx
import heroImage from '@/assets/hero.png';
<img src={heroImage} alt="Hero" />
```

### React Router (HashRouter)

GitHub Pages doesn't support server-side redirects for SPA routing. We use **HashRouter** which adds `/#/` to URLs:

- `https://username.github.io/the-red-room/#/` - Home
- `https://username.github.io/the-red-room/#/about` - About page (if added)

This allows client-side routing to work without server configuration.

### Adding Routes

Add routes in `src/App.tsx`:

```tsx
import { HashRouter, Route, Routes } from "react-router-dom";
import NewPage from "./pages/NewPage";

<HashRouter>
  <Routes>
    <Route path="/" element={<RedRoomLanding />} />
    <Route path="/new-page" element={<NewPage />} />
  </Routes>
</HashRouter>
```

### Adding Components

Create components in `src/components/`:

```tsx
// src/components/MyComponent.tsx
export default function MyComponent() {
  return <div>Hello</div>;
}
```

### UI Components (shadcn/ui)

This project uses shadcn/ui components. Add new components with:

```bash
npx shadcn@latest add button
```

Available components: https://ui.shadcn.com/docs/components

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npx tsc --noEmit` - Type check

## Important Notes

### Client-Side Only

- This is a **purely static** site with no backend
- All data must be fetched from client-side APIs or embedded in the code
- No server-side rendering or API routes

### Environment Variables

- Variables prefixed with `VITE_` are exposed to client-side code
- Access via `import.meta.env.VITE_VAR_NAME`

### Deployment Checklist

Before deploying to GitHub Pages:

1. ✅ Run `npm run build` successfully
2. ✅ Verify `dist/` folder contains all assets
3. ✅ Check that all images load correctly
4. ✅ Test all links and navigation
5. ✅ Ensure `base: "./"` is set in vite.config.ts for project pages

## GitHub Pages Setup

### Repository Settings

1. Go to **Settings > Pages** in your GitHub repository
2. Set **Source** to "Deploy from a branch"
3. Select the branch (e.g., `gh-pages` or `main` with `/root` or `/docs`)

### Custom Domain (Optional)

1. Add a `CNAME` file to the `public/` folder with your domain
2. Configure DNS settings with your provider
3. Enable "Enforce HTTPS" in GitHub Pages settings

### GitHub Actions (Auto Deploy)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist
```

---

## Safe-Lane Context

This site was created as part of Safe-Lane's web presence offerings. For questions or modifications, contact the development team.

**Last Updated**: March 2026  
**Status**: Static React + Vite build (GitHub Pages compatible)
