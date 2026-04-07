# Design System: Architectural Minimalism

## 1. Overview & Creative North Star: "The Digital Monolith"
The Creative North Star for this design system is **The Digital Monolith**. This is an editorial-first approach that treats the screen as a physical gallery wall. It rejects the "bubbly" consumer web in favor of a rigid, brutalist authority. 

By utilizing a strict 0px border-radius and a monochrome palette, we move away from "software" and toward "object." We break the template look through **Aggressive Asymmetry** and **Scale Shock**: using massive, intentional whitespace to frame microscopic details, and monolithic typography to command attention. Every element must feel heavy, deliberate, and permanent.

## 2. Colors
The palette is a disciplined study in high-contrast neutrality. We rely on the tension between pure black and a warm, off-white "bone" to create depth without resorting to artificial effects.

*   **Primary (#000000):** Used for primary actions, structural anchors, and bold typography.
*   **Surface (#f9f9f6):** Our foundational "off-white." It is softer than pure white to prevent eye strain and feel like premium cardstock.
*   **The "No-Line" Rule:** 1px solid borders are strictly prohibited for sectioning. Structural boundaries must be achieved through **Tonal Shifting**. To separate sections, transition from `surface` to `surface-container-low` (#f4f4f1). If a section needs to feel "set-in," use `surface-dim` (#dadad7).
*   **Surface Hierarchy & Nesting:** Treat the UI as a series of stacked sheets. A card (`surface-container-lowest`) sitting on a section (`surface-container-high`) creates a natural visual break.
*   **The "Anti-Gradient" Rule:** Despite traditional director's notes on gradients, this specific system **prohibits all color gradients**. To achieve "soul," we use density: heavy blocks of `primary` black juxtaposed against thin, sharp typography.

## 3. Typography
Typography is the primary visual engine. We use **Space Grotesk** for structural impact and **Inter** for clinical clarity.

*   **Display (Space Grotesk):** Set at `3.5rem` with tight letter spacing. These are the "Monoliths." Use them to break the grid, often bleeding off the edge or aligned to unconventional axes.
*   **Headlines (Space Grotesk):** High-contrast anchors. Bold, unapologetic, and always #1A1C1B.
*   **Body (Inter):** The "Curator's Note." Set with generous line-height (1.6+) to ensure the "off-white" background breathes through the text.
*   **Labels:** All-caps, tracked out (+5% to +10%) for a technical, studio-label aesthetic.

## 4. Elevation & Depth: Tonal Layering
In a world without rounded corners or shadows, depth is psychological.

*   **The Layering Principle:** We stack monochromatic tiers. An "elevated" element is not one that casts a shadow, but one that shifts in tone. A `surface-container-highest` (#e2e3e0) element feels closer to the user than a `surface` background.
*   **The "Ghost Border" Fallback:** If a container requires a boundary (e.g., an input field), use the `outline-variant` (#c4c7c7) at **10% opacity**. It should be barely perceptible—a "whisper" of a line.
*   **The Zero-Radius Mandate:** Every token in the `Roundedness Scale` is set to `0px`. No exceptions. This reinforces the architectural, non-organic nature of the studio.

## 5. Components

### Buttons
*   **Primary:** Solid #000000 background, #FFFFFF text. Rectangular (0px radius). High padding (16px top/bottom, 32px sides).
*   **Secondary:** Ghost style. No background, 1px `outline` (#747878) at 20% opacity. Text is #000000.
*   **Interaction:** On hover, Primary buttons invert to `surface-container-highest` with black text. No transitions; the change should be instant and digital.

### Input Fields
*   **Style:** A single bottom border (1px, #1A1C1B) or a full box with a `surface-container-low` background. 
*   **States:** Focus state removes the background and increases the bottom border weight to 2px.

### Cards & Lists
*   **The Divider Rule:** Forbid 1px horizontal lines. Separate list items using `body-lg` padding or subtle background shifts between `surface` and `surface-container-low`.
*   **Imagery:** Images should be treated as architectural elements—full bleed or strictly aligned to the typographic grid.

### Navigation
*   **Header:** No sticky blur effects. A solid `surface` bar that disappears on scroll and reappears on "scroll up." 
*   **Links:** Heavy weight, all-caps `label-md` tokens. No "pill" containers.

## 6. Design System Notes for Stitch Generation
*   Color theme: #1A1A1A
*   Fonts: Space Grotesk (display/headlines), Inter (body)
*   Radius: 0px (Absolute minimalism)
*   Visual Vibe: High contrast, off-white "bone" background (#f9f9f6), heavy ink-black elements.
*   Layout: Aggressive asymmetry, Scale Shock, Monolithic typography.
*   Components: Shadcn/ui-inspired but with strict 0px border-radius and custom monochromatic styling.
