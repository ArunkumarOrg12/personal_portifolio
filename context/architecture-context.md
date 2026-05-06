# Architecture Context — Marking® Portfolio Website

This document defines the system structure, boundaries, data models, and architectural invariants for the Marking® Portfolio Website.

## 1. System Overview
The application is a statically generated and server-rendered web application built using **Next.js 16 (App Router)**. It is designed to be highly performant, visually premium, and SEO-optimized. The architecture strictly separates layout concerns from content and interactive components to ensure maintainability.

## 2. Core Technologies
- **Framework:** Next.js 16 (App Router).
- **Styling:** Tailwind CSS v4.
- **Language:** TypeScript (Strict mode).
- **Animations:** CSS transitions/animations for micro-interactions; potentially Framer Motion or GSAP for complex 3D scroll/reveal effects.
- **Hosting:** Edge-ready (e.g., Vercel) optimized for static delivery.

## 3. Directory Structure & Boundaries

```text
src/
├── app/                  # Next.js App Router (Pages, Layouts, Routes)
│   ├── globals.css       # Tailwind entry and minimal global variables
│   ├── layout.tsx        # Root layout, HTML/Body structure, Nav/Footer injection
│   └── page.tsx          # Homepage composition
├── components/           # Reusable UI Components
│   ├── ui/               # Base UI elements (Buttons, Inputs, Tags)
│   ├── layout/           # Structural blocks (Nav, Footer, Section wrappers)
│   ├── features/         # Complex feature components (ProjectGrid, TestimonialSlider)
│   └── 3d/               # 3D canvas or webGL components (e.g., Hero Shape)
├── lib/                  # Utility functions and shared logic
├── data/                 # Static data layer (JSON/TS files acting as the database)
└── types/                # Global TypeScript definitions
```

### Component Boundaries
- **Server vs. Client Components:** By default, all components must be React Server Components (RSC) to minimize JavaScript bundles. Use `"use client"` strictly at the leaf nodes (e.g., interactive buttons, forms, or animated wrappers) that require state or browser APIs.
- **Data Fetching:** All data fetching or data importing (from `src/data/`) should occur in Server Components and be passed down to Client Components as props.

## 4. Data & Storage Model
Given the scope of the initial release, the application does not use a dynamic external database or CMS.

- **Storage Model:** Static JSON or structured TypeScript objects residing in `src/data/`.
- **Entities:**
  - `projects.ts` (id, title, category, imagePath, description, link)
  - `services.ts` (id, index, stat, title, description)
  - `testimonials.ts` (id, name, role, quote)
  - `awards.ts` (id, year, name, category, project)
- **Invariant:** Content must be fully decoupled from the UI components. Changes to portfolio text or projects should only require editing the files in `src/data/`.

## 5. System Invariants & Constraints
1. **Zero Layout Shifts:** Images and 3D elements must have explicitly defined aspect ratios or dimensions to prevent Cumulative Layout Shift (CLS).
2. **Performance Budget:** Total blocking time (TBT) must remain under 150ms. Animations must not compromise the main thread; prefer CSS transforms (`transform`, `opacity`) over animating layout properties (`width`, `height`, `margin`).
3. **Accessibility (a11y):** Despite the avant-garde design, semantic HTML must be preserved. High contrast must be maintained, and interactive elements must be keyboard navigable.
4. **Theme Lock:** The application is exclusively a Dark Mode experience based on the `ui-context.md`. Light mode is not supported to preserve the "marking®" brand aesthetic.

## 6. Deployment & Environment
- **Build Target:** Static export / Edge-ready build.
- **Environment Variables:** Only necessary for external integrations (e.g., API keys for a contact form submission service like Resend or Formspree).
- **CI/CD:** Automated checks (ESLint, Prettier, TypeScript compilation) must pass before deployment.
