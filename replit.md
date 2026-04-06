# NaijaKoblas - React Storefront

## Overview
A React-based storefront/landing page for NaijaKoblas, a brand that brings Nigerian craftsmanship to the world. Features a dark/light mode toggle and product showcase.

## Tech Stack
- **Frontend:** React 19 with JSX
- **Build Tool:** Vite 8
- **Styling:** Tailwind CSS 4
- **Package Manager:** npm

## Project Structure
```
├── public/images/       # Product images (bags, boots, loafers, logo)
├── src/
│   ├── components/      # UI components (Hero, Navbar, ProductGrid, etc.)
│   ├── context/         # ThemeContext for dark/light mode
│   ├── App.jsx          # Root component
│   ├── index.css        # Global styles with Tailwind
│   └── main.jsx         # Entry point
├── index.html
├── vite.config.js       # Vite config (port 5000, host 0.0.0.0, allowedHosts: true)
└── package.json
```

## Development
- Run: `npm run dev` (starts on port 5000)
- Build: `npm run build` (outputs to `dist/`)

## Deployment
- Target: Static site
- Build command: `npm run build`
- Public directory: `dist`
