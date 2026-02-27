# Amazing Nepal

A modern, responsive website for **Amazing Nepal** — a UK-based travel specialist for Nepal and the Himalayas. The site showcases destinations, treks, tours, travel packages, insurance, immigration services, and lets visitors get in touch via a contact form (with emails sent to your inbox via EmailJS).

**Live focus:** Nepal travel, Everest Base Camp & Annapurna treks, Nepal tours, travel packages, travel insurance, immigration assistance, gallery, and contact.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables (Contact Form / EmailJS)](#environment-variables-contact-form--emailjs)
- [Available Scripts](#available-scripts)
- [Routes](#routes)
- [Data & Content](#data--content)
- [Deployment](#deployment)
- [Learn More](#learn-more)

---

## Features

- **Home**
  - Hero carousel with featured images and “Explore destinations” CTA
  - Explore destinations (destination cards)
  - Top attractions (recommended trips)
  - What we do (treks & tours, travel packages, insurance, immigration)
  - How it works (4-step process)
  - About us (short intro + “Learn more”)
  - Review CTA and write-a-review entry

- **Destinations**
  - List of all destinations with search
  - Detail pages per destination (itinerary, duration, price, images)

- **Recommended / Top attractions**
  - List and detail pages for recommended experiences

- **Services**
  - Travel packages, travel insurance, immigration assistance (cards + detail modals)

- **Explore Nepal**
  - Informational page about Nepal

- **Gallery**
  - Photo gallery with lightbox-style viewing

- **Contact**
  - Contact form (name, email, phone, address, message) that sends emails to your admin address via **EmailJS**
  - Contact person details, address, WhatsApp link

- **About**
  - Company story and “Who we are”

- **FAQ**
  - Frequently asked questions

- **Global**
  - Responsive navbar (mobile: search icon opens full-screen search overlay; desktop: search bar)
  - Footer with links, contact info, WhatsApp
  - In-site WhatsApp chat panel (optional)
  - SEO: per-page titles/descriptions, Open Graph, Twitter cards, JSON-LD where used
  - Light theme only (dark mode disabled)

---

## Tech Stack

| Category   | Technology |
|-----------|------------|
| Framework | React 18   |
| Language  | TypeScript |
| Build     | Create React App (react-scripts 5) |
| Styling   | Tailwind CSS 3, DaisyUI |
| Routing   | React Router v6 |
| Contact   | EmailJS (@emailjs/browser) – form submissions to your email |
| UI        | react-multi-carousel, react-photo-view |
| Testing   | Jest, React Testing Library |

- **Node:** Project targets Node **24.x** (see `package.json` `engines` and `.nvmrc` if present).

---

## Project Structure

```
amazingnepal/
├── public/                    # Static assets, index.html, favicon, images
├── src/
│   ├── App.tsx                # Router, routes, AuthProvider, SEO
│   ├── index.tsx              # Entry, ReactDOM
│   ├── index.css              # Global styles, Tailwind
│   ├── App.css
│   ├── Components/
│   │   ├── layout.tsx         # Navbar + children + Footer
│   │   ├── atoms.tsx          # Input, Button, Modal, Spinner, Alert, etc.
│   │   ├── svg.tsx            # SVG icons
│   │   ├── SEO.tsx            # Per-route document title & meta
│   │   ├── UI/                # Navbar, Footer, Card, Carousel
│   │   └── window/            # Feature sections + their data.js
│   │       ├── About/
│   │       ├── Carousel/      # Home hero carousel (data: slides)
│   │       ├── Contact/       # Contact form (EmailJS), contact person
│   │       ├── Destination/   # Destinations list & details (data: destinations)
│   │       ├── FAQ/
│   │       ├── Gallery/
│   │       ├── HowItWorks/
│   │       ├── home/          # HomeFirstScreen, WhatWeDoStrip
│   │       ├── Nepal/
│   │       ├── Rating/        # Reviews, About section
│   │       ├── Recommended/   # Top attractions (data: recommendData)
│   │       ├── Service/       # Services cards + modals (data: servicesData)
│   │       └── Whywe/
│   ├── Pages/                 # One per route (home, destination, contact, etc.)
│   └── Lib/
│       ├── Context/           # AuthContext (if used)
│       ├── contact.ts         # Phone, email, WhatsApp URLs
│       ├── colors.cjs         # Theme colors for Tailwind
│       ├── seo.ts             # Per-route SEO titles/descriptions
│       └── types.ts           # Shared types
├── .env.example               # Env var names for EmailJS (no secrets)
├── .env.local                 # Your EmailJS keys (create from .env.example; not committed)
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## Getting Started

### Prerequisites

- **Node.js 24.x** (see `engines` in `package.json`)
- npm (or yarn)

### Install and run

```bash
# Clone the repo (if applicable)
git clone <repo-url>
cd amazingnepal

# Install dependencies
npm install

# Start development server
npm start
```

The app runs at **http://localhost:3000**.

---

## Environment Variables (Contact Form / EmailJS)

The contact form sends submissions to your email using [EmailJS](https://www.emailjs.com/). For this to work you must set three environment variables.

### 1. Create `.env.local`

In the **project root** (same folder as `package.json`), create a file named `.env.local`. It is ignored by Git and will not be committed.

### 2. Add your EmailJS credentials

Copy the variable names from `.env.example` and fill in your values from the [EmailJS dashboard](https://dashboard.emailjs.com/):

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

- **Service ID:** Email Services → your service (e.g. Gmail) → Service ID  
- **Template ID:** Email Templates → create/open a template → Template ID (e.g. `template_xxxxx`)  
- **Public Key:** Account (sidebar) → API Keys → Public Key  

Your EmailJS template should use at least these variables (the form sends them): `{{name}}`, `{{email}}`, `{{message}}`. Optional: `{{phone}}`, `{{address}}`.

### 3. Restart the dev server

After editing `.env.local`, stop the app (Ctrl+C) and run `npm start` again so the variables are loaded.

Without these variables, the contact form shows an error asking you to add EmailJS credentials to `.env.local`.

---

## Available Scripts

| Command           | Description |
|-------------------|-------------|
| `npm start`       | Run the app in development at [http://localhost:3000](http://localhost:3000) |
| `npm run build`   | Production build; output in `build/` |
| `npm test`        | Run tests (Jest + React Testing Library) |
| `npm run eject`   | Eject from Create React App (one-way; not needed for normal use) |

---

## Routes

| Path                  | Description |
|-----------------------|-------------|
| `/`                   | Home       |
| `/destination`         | All destinations (with search) |
| `/destination/:id`     | Destination detail |
| `/recommended`        | Top attractions list |
| `/recommended/:id`    | Recommended / attraction detail |
| `/nepal`              | Explore Nepal |
| `/service`            | Services (packages, insurance, immigration) |
| `/gallery`            | Gallery |
| `/contact`            | Contact form + contact info |
| `/about`              | About us |
| `/faq`                | FAQ |
| `*`                   | Fallback to Home |

---

## Data & Content

- **No backend:** All content is static and lives in `data.js` (or similar) files under `src/Components/window/`.
- **Key data files:**
  - `Carousel/data.js` – hero slide image paths
  - `Destination/data.js` – destinations (title, description, images, itinerary, etc.)
  - `Recommended/data.js` – recommended / top attractions
  - `Service/data.js` – services (title, content, details)
- **Contact:** `Lib/contact.ts` holds phone, email, and WhatsApp URLs used in the footer and contact section.
- **Theme:** `Lib/colors.cjs` defines the Tailwind palette (e.g. `ui-primary`, `ui-secondary`).

---

## Deployment

1. Set the same three `REACT_APP_EMAILJS_*` variables in your hosting provider’s environment (e.g. Vercel, Netlify) so the contact form works in production.
2. Build:
   ```bash
   npm run build
   ```
3. Deploy the `build/` folder (or connect your Git repo to your host for automatic builds).

The canonical URL and meta tags in `public/index.html` and `Lib/seo.ts` can be updated to match your production domain (e.g. `https://www.visitamazingnepal.com/`).

---

## Learn More

- [Create React App](https://create-react-app.dev/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [EmailJS](https://www.emailjs.com/docs/)

---

*Amazing Nepal – UK-based Nepal travel specialist for treks, tours, and travel support.*
