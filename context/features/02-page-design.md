# Feature 02: Page Design & Structure

This document outlines the high-level sections for the home page and their specific technical implementation details.

## 1. Hero Section (Smooth Scroll Frame Animation)
- **Visuals:** A premium, frame-by-frame canvas scroll animation.
- **Source:** Image sequence located in `public/frames_space` (`frame_000000.jpg` to `frame_000240.jpg`).
- **Implementation:** Uses a React Client Component with a `<canvas>` element. As the user scrolls, `framer-motion` tracks the scroll progress and draws the corresponding frame to the canvas, creating a 3D scrub-on-scroll effect.

## 2. Stats Bar Section
- **Visuals:** Full width layout separated by subtle borders. Shows key metrics (e.g., 50+ Projects, 10+ Awards, Years of Experience).

## 3. About Section
- **Visuals:** Large typography, simple grid. Explains the creative direction and designer background. Follows the strict Swiss-style grid.

## 4. Projects Section
- **Visuals:** Grid of the premium `ProjectCard` components.
- **Interactions:** Subtle hover scales, image overlays, and text reveals.

## 5. Experience/Timeline Section
- **Visuals:** Chronological list of past roles and education. Minimal lines and dots to represent the timeline.

## 6. Marquee Section
- **Visuals:** Huge outline text (transparent fill, subtle stroke) scrolling infinitely across the screen horizontally.
- **Implementation:** CSS keyframes or `framer-motion` infinite loop.

## 7. Contact Section
- **Visuals:** Minimalist input forms (Text Input, Textarea) with bottom borders. Includes the custom Submit button.
