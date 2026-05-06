# Feature 01: Core Design Components

This document outlines the implementation plan and specifications for the core UI components required to build the premium, dark-mode portfolio based on `ui-context.md`.

## 1. Buttons & Tags
- **Primary Arrow CTA:** 48x48px circle, transparent background, thin border, diagonal arrow. Scales (1.05) and border brightens on hover.
- **Text Link:** Small uppercase text with animated underline offset.
- **Tag/Pill:** Full rounded border, subtle text, becomes warm-accented when active.
- **Submit Button:** Pill-shaped, icon inline, hover state changes background to secondary.

## 2. Cards & Rows
- **Project Card:** 4:5 or 1:1 aspect ratio, image scales up (1.03) on hover, dark bottom gradient, metadata layered on top.
- **Service Card:** Full-width row with index, stat, and title separated by thin subtle borders.
- **Testimonial Card:** Image left, large quote and author details right.
- **Award Row:** Table-like row with index, name, category, and year. Hover effect highlights the row background.

## 3. Progress & Status Indicators
- **Scroll Progress:** A minimal, fixed 2px progress bar at the very top of the screen that tracks reading progress as the user scrolls.
- **Status Pill:** Small pill reading "Available for project" accompanied by a pulsating 4px green dot.

## 4. Form Elements
- **Text Input & Textarea:** Minimalist editorial inputs with only a bottom border. Focus state animates the border color smoothly.
- **Checkbox:** Minimalist square checkbox with custom checkmark styling.

## Technical Implementation Notes
To achieve the premium look and feel efficiently, we will rely on:
1. **`framer-motion`**: For the scroll progress bar, smooth page transitions, and hover micro-animations.
2. **`lucide-react`**: For the minimal geometric icons (diagonal arrows, menu).
3. **`clsx` & `tailwind-merge`**: For composing clean and conflict-free dynamic Tailwind class strings.
