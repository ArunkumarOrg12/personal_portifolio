# Feature 03: Hero Section Updates

This document outlines the specific text and interactive updates for the Hero Section.

## 1. Scroll Reveal Text
- **Text:** "Hai welcome to my world"
- **Animation Strategy:** Use `framer-motion` to create a smooth staggered scroll reveal. The text will animate smoothly into view based on the scroll progress of the hero section.

## 2. Call-to-Action Buttons
- Two new buttons are added to the bottom left of the Hero Section:
  - **"myworks"**: Primary button.
  - **"my experience"**: Secondary button.

## 3. 3D Sequence Frames
- Complete frames are available in the `frames_space` directory.
- The hero section should scroll through these frames before going to the next section.
- Implementation requires a tall scroll container (e.g., `h-[300vh]`) with a sticky internal container so that the canvas finishes its sequence and then proceeds to the next section organically.


