---
name: skeptio_design_system
description: Skeptio actual design system — colors, fonts, constraints, current component state
type: project
---

# Actual Current State (verified 2026-04-07)

## Colors (globals.css @theme — NOT the navy/crimson/gold palette from old memory)
Two-color palette:
- `--color-background: #f9f9f6` (off-white warm)
- `--color-foreground: #000000` (pure black)
- Surface scale: surface-low #f4f4f1, surface-dim #dadad7, surface-high #e8e8e5, surface-highest #e2e3e0

## Fonts
- Display/headings: Bricolage Grotesque (variable: --font-bricolage)
- Body: Plus Jakarta Sans (variable: --font-jakarta)

## Hard Design Rules
- NO border-radius anywhere (`* { border-radius: 0 !important }`)
- NO gradients
- Selection: foreground bg, background text (inverted)
- Scrollbar: 6px, foreground thumb

## Services.tsx current state
- 3-column grid (md:grid-cols-3) with border-l/border-t outer, border-r/border-b per cell
- Each card: number (display black), title (display bold xl), description (foreground/50 sm), tags (bordered, uppercase, tracking)
- Hover: very subtle bg change + title color shift
- Tags use border border-dark/30 pill-less rectangles
- All static — no expand/collapse interaction

## Design Language
- Typography-driven, grid-based, sharp edges
- Border lines as structure (no shadow, no radius, no fill variation)
- Class references use "dark" and "navy" in component files but actual CSS vars are foreground/background — likely Tailwind mapping these
