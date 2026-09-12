# Project Architecture Context for Agents

Welcome to the React Router 8 Template! This document provides context on how this project is structured so that you, as an AI agent, can correctly implement features, place files in the right directories, and follow the project's conventions.

## Tech Stack
- **Framework:** React 19, React Router v8 (Server-side rendering enabled by default).
- **Build Tool:** Vite.
- **Styling:** Tailwind CSS v4 (configured in `app/app.css` via `@import "tailwindcss";`).
- **Language:** TypeScript.
- **Package Manager:** pnpm.
- **State Management:** Zustand.
- **Forms & Validation:** React Hook Form + Zod (`@hookform/resolvers`).
- **HTTP Client:** Axios.
- **Linting:** ESLint.

## Directory Structure

All source code is located inside the `app/` directory:

- **`app/routes/`**: Route modules for React Router. Use this directory for defining the application's routes and their data loaders/actions. Ensure you register new routes in `app/routes.ts` if not using the filesystem routing automatically.
- **`app/components/`**: Reusable UI components. They should be modular, generic, and ideally stateless when possible.
- **`app/pages/`**: Used for grouping page-level components or larger compositions of components that represent a full view, keeping the route files in `app/routes/` thin.
- **`app/hooks/`**: Custom React hooks (`useFeature.ts`, etc.).
- **`app/stores/`**: Global state management modules built with Zustand.
- **`app/assets/`**: Static assets like images, icons, and global fonts.

## Key Files

- `app/routes.ts`: Where the routes are defined and mapped to files in `app/routes/`.
- `app/root.tsx`: The root layout of the application, including the `<html />` shell, meta tags, links, and the main `<Outlet />`.
- `react-router.config.ts`: React router configuration (controls SSR and SPA modes).
- `app/app.css`: The main stylesheet that initializes Tailwind CSS.

## Agent Guidelines
- When generating new components, prefer placing them in `app/components/` and ensure they are exported correctly.
- Always use TypeScript (`.ts` / `.tsx`).
- Keep `app/routes/` files focused on routing, loaders, actions, and meta tags. Delegate complex UI to `app/pages/` or `app/components/`.
- Since Tailwind v4 is used, prefer utility classes and avoid creating standalone CSS modules unless strictly necessary.
- **Forms:** Always use `react-hook-form` paired with `zod` for form state and validation. Use `@hookform/resolvers/zod` to bind them.
- **State:** Use `zustand` for any global state. Keep stores small and modular inside `app/stores/`.
- **API Calls:** Use `axios` for external requests.
- Before considering your task complete, ensure there are no import errors by running `pnpm run typecheck` and `pnpm run lint`.
