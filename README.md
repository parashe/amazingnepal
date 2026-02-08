# Amazing Nepal

A React + TypeScript tourism/travel website for **Amazing Nepal**, showcasing destinations, services, gallery, and contact information. The app is built with Create React App, Tailwind CSS, and React Router.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure & Architecture](#project-structure--architecture)
- [Development Quality & Rating](#development-quality--rating)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Libraries Used](#libraries-used)
- [Learn More](#learn-more)

---

## Tech Stack

| Category        | Technology                          |
|----------------|-------------------------------------|
| Framework      | React 18                            |
| Language       | TypeScript 4.9                      |
| Build          | Create React App (react-scripts 5)  |
| Styling        | Tailwind CSS 3.4, DaisyUI 4.7      |
| Routing        | React Router DOM 6.22               |
| UI / UX        | react-multi-carousel, react-photo-view |
| Testing        | Jest, React Testing Library         |

---

## Project Structure & Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         index.tsx                                 │
│                    (ReactDOM, StrictMode)                         │
└───────────────────────────────┬─────────────────────────────────┘
                                │
┌───────────────────────────────▼─────────────────────────────────┐
│                          App.tsx                                  │
│  AuthProvider → BrowserRouter → Routes (page-level components)   │
└───────────────────────────────┬─────────────────────────────────┘
                                │
        ┌───────────────────────┼───────────────────────┐
        │                       │                       │
        ▼                       ▼                       ▼
   Pages/*.tsx            Layout (Navbar + children + Footer)    Lib/
   (route targets)        window/* (section components)          Context, types, colors
```

- **Entry**: `index.tsx` mounts `App` inside `React.StrictMode`.
- **App**: Wraps the app in `AuthProvider`, then `BrowserRouter`, and defines all `Route`s. Each route renders a **Page** component.
- **Pages**: Thin wrappers that compose `Layout` + `Breadcrumb` (where used) + **window** (section) components. They handle scroll-to-top and sometimes a loading skeleton.
- **Layout**: Shared shell — `Navbar`, main content (`children`), `Footer`.
- **Components**:
  - **UI**: Reusable building blocks (`Navbar`, `Footer`, `Card`, `Carousel`, etc.).
  - **window**: Feature/section components (Destination, Gallery, Contact, Rating, Recommended, Whywe, etc.) used inside pages.
  - **atoms**: Small primitives (Button, Input, Modal, Spinner, RatingStars, skeletons, etc.).
- **Lib**: Shared utilities — `Context` (Auth), `types.ts` (e.g. `DestinationType`), `colors.cjs` (theme palette for Tailwind).
- **Data**: Content lives in `.js` files under `Components/window/*/data.js` (e.g. `Destination/data.js`, `Carousel/data.js`, `Gallery/data.js`, etc.). No backend; data is static and imported where needed.

### Directory Layout (Summary)

```
amazingnepal/
├── public/                 # Static assets (images, favicon, index.html, etc.)
├── src/
│   ├── App.tsx             # Root: AuthProvider, Router, Routes
│   ├── index.tsx           # Entry point
│   ├── App.css / index.css # Global styles
│   ├── Components/
│   │   ├── layout.tsx      # Navbar + children + Footer
│   │   ├── atoms.tsx       # Buttons, inputs, modals, spinners, skeletons
│   │   ├── svg.tsx         # SVG icons
│   │   ├── UI/             # Navbar, Footer, Card, Carousel
│   │   └── window/         # Feature sections (Destination, Gallery, Contact, etc. + data.js)
│   ├── Pages/              # One file per route (home, destination, contact, etc.)
│   └── Lib/
│       ├── Context/        # Authcontext.tsx
│       ├── types.ts        # Shared TypeScript types
│       └── colors.cjs      # Theme colors for Tailwind
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

### Routing

| Path                  | Page / Purpose              |
|-----------------------|-----------------------------|
| `/`                   | Home                        |
| `/destination`        | All destinations            |
| `/destination/:id`    | Destination detail          |
| `/recommended/:id`    | Recommended trip detail     |
| `/nepal`              | Explore Nepal               |
| `/service`            | Services                    |
| `/gallery`            | Gallery                     |
| `/contact`            | Contact                     |
| `/about`              | About                       |
| `*` (catch-all)       | Redirects to Home           |

### Data Flow

- **No API layer**: All content is in local `data.js` files (or similar) under `Components/window/`.
- **State**: Local React state (`useState`) and one global context (`AuthContext` for `isLoggedIn` / `login` / `logout`). Auth is provided but not yet used by any feature.
- **Types**: `Lib/types.ts` defines domain types (e.g. `DestinationType`); some components use inline interfaces.

---

## Development Quality & Rating

### Overall Rating: **7.2 / 10**

*(Good for a content-focused marketing/travel site; clear structure and modern stack with some inconsistencies and unused pieces.)*

### Rating Breakdown

| Area                | Score (out of 10) | Notes |
|---------------------|-------------------|--------|
| **Architecture**    | 7.5               | Clear separation: Pages → Layout → window/UI. Reusable layout and atoms. Data colocated in feature folders. |
| **Code organization** | 7.0             | Logical grouping (Pages, Components/UI, window, Lib). Mix of `.tsx` and `.js` for data; some duplication. |
| **TypeScript usage** | 6.5              | Types in `Lib/types.ts`, interfaces on components. Data files are JS (no typing for content). |
| **UI/UX**           | 7.5               | Loading skeletons, responsive Navbar with dropdown, breadcrumbs, photo viewer, carousels, Tailwind + DaisyUI. |
| **Maintainability** | 7.0               | Consistent patterns (Layout, Breadcrumb). Large `data.js` files and some long components could be split. |
| **Consistency**     | 6.5               | Naming and file patterns mostly consistent; Auth present but unused; one Footer link points to `/services` (route is `/service`). |

### Strengths

1. **Clear page/section split**: Pages are thin and delegate to window components; layout is centralized.
2. **Reusable building blocks**: Layout, Navbar, Footer, Card, Carousel, and atoms (Button, Input, Modal, Spinner, skeletons) support consistency.
3. **Modern stack**: React 18, TypeScript, Tailwind, React Router v6.
4. **Good UX touches**: Loading skeletons, scroll-to-top on navigation, responsive nav with dropdown, breadcrumbs, photo viewer for galleries.
5. **Design system**: Central `colors.cjs` and Tailwind config give a consistent palette (e.g. `ui-primary`, `ui-secondary`).
6. **Strict mode**: App runs in `React.StrictMode` for better development-time checks.

### Areas for Improvement

1. **AuthContext**: Implemented and provided in `App` but never consumed; either use it (e.g. protected UI, login) or remove to avoid confusion.
2. **Data layer**: All content in `.js` files with no types; consider moving to `.ts`/`.tsx` and typing with `DestinationType` (and similar) for safer refactors.
3. **Footer link**: “Services” links to `/services`; the actual route is `/service` — fix href to match route.
4. **Large files**: Some components (e.g. destination details) and data files are very long; splitting would improve readability and reuse.
5. **Comment cleanup**: Remove or fix dead code (e.g. `useEffect` that only `return`s in Navbar) and commented blocks.
6. **Tests**: No custom tests beyond CRA defaults; adding a few for critical flows would help.

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm (or yarn)

### Install and run

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm start
```

---

## Available Scripts

| Command         | Description |
|----------------|-------------|
| `npm start`    | Runs the app in development mode at [http://localhost:3000](http://localhost:3000). |
| `npm test`     | Launches the test runner (Jest + React Testing Library). |
| `npm run build`| Production build (output in `build/`). |
| `npm run eject`| One-way eject from Create React App (not required for normal use). |

---

## Libraries Used

- **react-router-dom** – Client-side routing.
- **tailwindcss** – Utility-first CSS.
- **daisyui** – Tailwind-based component themes.
- **react-multi-carousel** – Carousels for destinations/content.
- **react-photo-view** – Photo viewing (e.g. gallery).
- **TypeScript** – Typing and tooling.
- **@testing-library/react**, **jest** – Testing (CRA default setup).

---

## Learn More

- [Create React App](https://github.com/facebook/create-react-app)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)

---

*README includes an architecture overview and development quality assessment. No application source code was modified.*
