# UI Context — Marking® Portfolio Website

## Overview
A premium dark-mode creative agency/marketing portfolio website. The design language is editorial, minimalist, and high-contrast with a sophisticated monochromatic palette accented by warm beige/taupe tones. The aesthetic balances Swiss-style grid discipline with fluid, organic 3D visual elements.

---

## Color System

### Primary Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | `#0A0A0A` | Main background, hero, sections |
| `--bg-secondary` | `#111111` | Card backgrounds, elevated surfaces |
| `--bg-tertiary` | `#1A1A1A` | Input fields, subtle containers |
| `--surface-hover` | `#1F1F1F` | Hover states on dark surfaces |

### Text Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `--text-primary` | `#FFFFFF` | Headlines, primary text |
| `--text-secondary` | `#A3A3A3` | Body text, descriptions |
| `--text-muted` | `#666666` | Labels, metadata, captions |
| `--text-tertiary` | `#404040` | Subtle dividers, inactive states |

### Accent Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `--accent-warm` | `#C4B5A0` | Beige/taupe accent — tags, highlights |
| `--accent-warm-light` | `#D4C5B0` | Hover states on warm elements |
| `--border-subtle` | `#262626` | Dividers, card borders |
| `--border-active` | `#404040` | Active/focus borders |

---

## Typography System

### Font Family
- **Primary**: `Inter` or `Neue Montreal` / `Helvetica Neue` — Clean, geometric sans-serif
- **Display**: Same family, tightly tracked for large headlines
- **Fallback**: `system-ui, -apple-system, sans-serif`

### Type Scale
| Token | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| `display-xl` | 120-160px | 400 | 0.9 | -0.04em | Hero logo/wordmark |
| `display-lg` | 64-80px | 400 | 1.0 | -0.03em | Section headlines |
| `display-md` | 40-48px | 400 | 1.1 | -0.02em | Sub-section titles |
| `heading-lg` | 32px | 500 | 1.2 | -0.01em | Card titles, names |
| `heading-md` | 24px | 500 | 1.3 | 0 | Feature titles |
| `body-lg` | 18px | 400 | 1.6 | 0 | Lead paragraphs |
| `body` | 16px | 400 | 1.6 | 0 | Standard body text |
| `body-sm` | 14px | 400 | 1.5 | 0 | Descriptions, captions |
| `caption` | 12px | 400 | 1.4 | 0.02em | Labels, metadata, tags |
| `micro` | 11px | 500 | 1.3 | 0.05em | Uppercase labels, nav |

### Typography Patterns
- **Headlines**: Tight negative letter-spacing, light weight (400-500)
- **Labels/Tags**: Uppercase, wide letter-spacing (0.05em), small size
- **Numbers/Stats**: Large display size, light weight, tabular figures
- **Body**: Comfortable line-height (1.6), neutral weight

---

## Spacing System

### Base Unit: 4px

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Micro gaps |
| `space-2` | 8px | Tight element spacing |
| `space-3` | 12px | Inline element gaps |
| `space-4` | 16px | Standard component padding |
| `space-5` | 20px | Card internal padding |
| `space-6` | 24px | Section element spacing |
| `space-8` | 32px | Component groups |
| `space-10` | 40px | Sub-section padding |
| `space-12` | 48px | Section internal padding |
| `space-16` | 64px | Medium section spacing |
| `space-20` | 80px | Large section gaps |
| `space-24` | 96px | Major section breaks |
| `space-32` | 128px | Hero/major section padding |

### Layout Grid
- **Max Width**: 1280px (container)
- **Columns**: 12-column grid
- **Gutter**: 24px (desktop), 16px (mobile)
- **Page Padding**: 24px (desktop), 16px (mobile)

---

## Component Library

### Buttons

#### Primary Button (Arrow CTA)
- Size: 48px × 48px circle
- Background: transparent
- Border: 1px solid `--text-muted`
- Icon: Arrow diagonal (↗), 16px, `--text-primary`
- Hover: Border brightens to `--text-primary`, slight scale(1.05)
- Transition: 300ms ease

#### Text Link
- Font: `caption` size, uppercase
- Color: `--text-secondary`
- Hover: `--text-primary`, underline offset
- Used in: "Write to email", "Write to WA"

#### Tag/Pill
- Background: transparent
- Border: 1px solid `--border-subtle`
- Border-radius: 9999px (full rounded)
- Padding: 8px 16px
- Font: `caption` size, regular weight
- Color: `--text-secondary`
- Active state: Border `--accent-warm`, text `--accent-warm`

### Cards

#### Service Card
- Layout: Horizontal row, full-width
- Left: Index number (01, 02, 03) — `caption` style
- Center: Metric/stat (e.g., "50+") — `heading-md`, `--text-muted`
- Right: Service title — `heading-md`, `--text-primary`
- Divider: 1px solid `--border-subtle` below each card
- Hover: Subtle background lighten

#### Project Card
- Aspect ratio: 4:5 or 1:1 (square)
- Image: Full cover, slight desaturation
- Overlay: Gradient from transparent to `--bg-primary` at bottom
- Title: Bottom-left, `heading-md`, white
- Category: Below title, `caption`, `--text-secondary`
- Arrow CTA: Top-right corner
- Hover: Image scale(1.03), overlay darkens slightly

#### Testimonial Card
- Layout: Horizontal split (image left, content right)
- Image: Portrait, 1:1.2 ratio, grayscale or muted
- Name: `heading-lg`, `--text-primary`
- Role/Company: `body-sm`, `--text-muted`
- Quote: `body`, `--text-secondary`
- Index: `(01)`, `(02)` prefix in `--text-muted`

#### Award Row
- Layout: Full-width table-like row
- Columns: Index | Award Name | Project | Category | Year
- Font: `body-sm` for content, `caption` for index
- Color: `--text-secondary` default, `--text-primary` on award name
- Divider: 1px solid `--border-subtle`
- Hover: Background `--bg-secondary`

### Forms

#### Text Input
- Background: `--bg-tertiary`
- Border: none (bottom border only, 1px solid `--border-subtle`)
- Border-radius: 0
- Padding: 16px 0
- Font: `body`, `--text-primary`
- Placeholder: `--text-muted`
- Focus: Bottom border transitions to `--text-secondary`
- Label: Above input, `caption`, uppercase, `--text-muted`

#### Textarea
- Same as text input
- Min-height: 120px
- Resize: vertical

#### Checkbox
- Size: 16px × 16px
- Border: 1px solid `--border-subtle`
- Background: transparent
- Checked: Fill `--text-primary`, checkmark `--bg-primary`
- Label: `caption`, `--text-muted`

#### Submit Button
- Background: transparent
- Border: 1px solid `--border-subtle`
- Border-radius: 9999px
- Padding: 12px 32px
- Font: `body-sm`, `--text-primary`
- Icon: Arrow right, inline
- Hover: Background `--bg-secondary`, border `--text-muted`

### Navigation

#### Top Nav
- Position: Fixed, top
- Background: Transparent (no blur, solid `--bg-primary` on scroll)
- Height: 64px
- Left: Logo "marking®" — `display-md` size, light weight
- Right: Status pill ("Available for project") + Time + Menu icon
- Status pill: Green dot (4px) + `caption` text, `--text-secondary`

#### Footer
- Large logo: `display-xl`, `--text-primary`, cropped at bottom
- Links: `caption`, uppercase, `--text-muted`
- Copyright: `micro`, `--text-tertiary`

---

## Layout Patterns

### Hero Section
- Height: 100vh minimum
- Background: `--bg-primary`
- Center: Large 3D abstract chrome/metallic fluid shape (organic, reflective)
- Top-left: Small label — `micro`, uppercase, `--text-muted`
- Bottom: Large "© 2025" — `display-lg`, `--text-primary`
- Arrow CTA: Bottom-left

### Stats Bar
- Layout: Horizontal flex, evenly distributed
- Background: `--bg-primary`
- Border-top: 1px solid `--border-subtle`
- Each stat: Number (`display-md`) + Label (`caption`, uppercase)
- Right side: Small logo + tagline

### Section Header
- Layout: Flex between
- Left: Section title — `display-lg`
- Right: Description — `body-lg`, `--text-secondary`, max-width 400px
- Bottom: Full-width divider

### Marquee/Scroll Text
- Large outline text: `display-xl`, transparent fill, `--border-subtle` stroke
- Content: "PREVIOUS PROJECTS" or similar
- Animation: Infinite horizontal scroll
- Position: Behind project cards (z-index layering)

---

## Effects & Interactions

### Transitions
- **Default**: `all 300ms cubic-bezier(0.4, 0, 0.2, 1)`
- **Smooth**: `all 500ms cubic-bezier(0.4, 0, 0.2, 1)`
- **Quick**: `all 150ms ease-out`

### Hover States
- **Cards**: translateY(-2px), subtle shadow, image scale(1.03)
- **Buttons**: scale(1.05), border color brighten
- **Links**: Color transition to `--text-primary`
- **Rows**: Background `--bg-secondary`

### Scroll Behaviors
- **Parallax**: Hero 3D element moves slower than scroll
- **Fade-in**: Sections fade + translateY(20px) on scroll into view
- **Stagger**: List items animate in sequence (50ms delay each)

### 3D/Visual Elements
- **Hero Shape**: Chrome/metallic fluid simulation, reflective, organic blobs
- **Color**: Monochromatic silver/grey with environment reflections
- **Animation**: Slow, continuous morphing (subtle)

---

## Assets & Imagery

### Photography Style
- **Portraits**: Desaturated, moody lighting, neutral backgrounds
- **Project Images**: Clean mockups, subtle shadows, minimal context
- **Treatment**: Slight desaturation (80-90%), consistent color grading

### Icons
- **Style**: Thin stroke (1.5px), minimal, geometric
- **Set**: Arrow diagonal, Arrow right, Menu (hamburger), Close
- **Size**: 16px (buttons), 20px (inline)

### Logo
- **Wordmark**: "marking" lowercase, light weight, "®" superscript
- **Usage**: Large display in hero/footer, small in stats bar

---

## Responsive Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | < 640px | Single column, stacked layout, reduced type scale (60%) |
| Tablet | 640-1024px | 2-column grids, medium padding |
| Desktop | 1024-1280px | Full layout, max-width container |
| Wide | > 1280px | Centered container, increased whitespace |

---

## Animation Specs

### Page Load Sequence
1. Background fades in (0ms)
2. Logo appears (200ms delay, 600ms duration)
3. Hero 3D element scales from 0.9 to 1.0 (400ms delay)
4. Navigation fades in (600ms delay)
5. Content sections stagger in on scroll

### Scroll Reveal
- **Trigger**: Element enters viewport (threshold 0.1)
- **Effect**: opacity 0→1, translateY(30px)→0
- **Duration**: 600ms
- **Easing**: `cubic-bezier(0.4, 0, 0.2, 1)`

### Micro-interactions
- **Button hover**: 200ms scale + border color
- **Link hover**: 150ms color transition
- **Card hover**: 300ms transform + shadow
- **Input focus**: 200ms border color

---

## Content Patterns

### Numbered Lists
- Format: `(01)`, `(02)`, `(03)` — parentheses, leading zero
- Style: `caption`, `--text-muted`
- Position: Left-aligned, fixed width

### Metadata Rows
- Format: Label + Value pairs
- Style: `caption`, uppercase for labels
- Divider: Dashes or spaces for separation

### Quotes/Testimonials
- Format: Index + Name + Quote
- Name: Large, primary color
- Quote: Medium grey, comfortable line-height
- No quotation marks — clean, editorial

---

## Z-Index Hierarchy

| Layer | Z-Index | Elements |
|-------|---------|----------|
| Background | -1 | Marquee text, decorative elements |
| Base | 0 | Section content, cards |
| Elevated | 10 | Sticky elements, floating CTAs |
| Navigation | 100 | Header, nav overlays |
| Modal | 1000 | Full-screen menus, modals |

---

## Notes

- **Design Philosophy**: "Less but better" — every element serves a purpose
- **Contrast Strategy**: High contrast for readability, subtle gradients for depth
- **Whitespace**: Generous padding is critical — never crowd elements
- **Consistency**: Strict adherence to the 4px grid and type scale
- **Mood**: Premium, confident, editorial, slightly avant-garde
- **Target Audience**: High-end clients, startups, brands seeking sophisticated marketing