# Apex Dental — Complete Editorial Landing Page

A production-ready dental clinic landing page with a **bold editorial / magazine** aesthetic. Off-white paper backgrounds, deep ink tones, signal red accents, oversized display type — the visual language of a design-forward print publication, applied to the web.

---

## 📁 Project Structure

```
apex-dental/
│
├── index.html                   ← Main landing page (entry point)
├── README.md                    ← This file
│
├── css/
│   ├── variables.css            ← All design tokens & CSS custom properties
│   ├── reset.css                ← CSS reset, base styles, utility classes
│   ├── components.css           ← Buttons, cards, forms, accordion, all UI components
│   └── layout.css               ← Nav, hero, all sections, footer, responsive grid
│
├── js/
│   ├── main.js                  ← Nav, scroll reveal, accordion, counters, form, filter
│   └── data.js                  ← All site content (services, team, reviews, FAQs, pricing)
│
├── pages/
│   ├── services.html            ← Full services listing page
│   ├── about.html               ← About / practice page
│   ├── team.html                ← Meet the doctors page
│   ├── new-patient.html         ← New patient info page
│   └── contact.html             ← Contact & directions page
│
├── components/
│   ├── nav.html                 ← Navigation HTML snippet (for inner pages)
│   ├── footer.html              ← Footer HTML snippet
│   ├── hero.html                ← Hero section template (annotated)
│   ├── service-card.html        ← Service card examples
│   └── doctor-card.html         ← Doctor card examples
│
├── images/
│   └── README.md                ← Image specs, style guide, alt text guidance
│
└── fonts/
    └── README.md                ← Font loading & self-hosting guide
```

---

## 🚀 Quick Start

No build tools required:

```bash
# Direct open
open index.html

# Local server (recommended)
npx serve .
# or
python3 -m http.server 8080
```

---

## 🎨 Design System

### Concept: Bold Editorial / Magazine
The design takes its cues from print editorial — think Vogue, Wallpaper*, or The New Yorker. Off-white paper stock, deep ink type, signal red as the one bold accent. Typography is the hero: oversized Bebas Neue display type, Playfair Display for serif elegance, Work Sans for clean body text. Ruled borders, halftone dot texture, and square-edged geometry instead of rounded softness.

### Colour Palette
| Variable        | Hex                        | Usage                           |
|----------------|----------------------------|---------------------------------|
| `--paper-cream` | `#FAF7F2`                  | Page background                 |
| `--paper`       | `#F5F0E8`                  | Alternate surfaces, sidebar     |
| `--paper-warm`  | `#EDE6D6`                  | Hover states on paper elements  |
| `--ink`         | `#0A0A08`                  | Primary text, nav, headlines    |
| `--red-600`     | `#C41C1C`                  | Primary CTA, accent             |
| `--red-500`     | `#E0251E`                  | Hover state                     |
| `--ochre`       | `#BF8C20`                  | Star ratings, tertiary accent   |
| `--sage`        | `#4A7060`                  | Status indicators, success      |
| `--white`       | `#FFFFFF`                  | Card surfaces                   |

### Typography
```css
--font-display:  'Bebas Neue', Impact, Anton, sans-serif;   /* Hero big type, stats, banner */
--font-headline: 'Playfair Display', Georgia, serif;        /* Section titles, doctor names */
--font-body:     'Work Sans', Helvetica Neue, sans-serif;   /* All body, buttons, labels */
```

**What makes this editorial:**
- `Bebas Neue` at 60–320px for oversized magazine-style headings
- `letter-spacing: 0.04em` + `text-transform: uppercase` on display type
- Background ghost type (faded SMILE / BOOK in hero and CTA banner)
- Hard rules and borders instead of soft shadows
- Square-edged radius (`--r-xs: 2px`) instead of pill-shaped softness

---

## 📋 Page Sections

| Section     | ID          | Key Design Feature                                    |
|------------|-------------|-------------------------------------------------------|
| Nav        | `.nav`      | Double rule bottom: 2px ink + 2px red shadow          |
| Hero       | `#hero`     | Giant ghost "SMILE" bg type; numbered square checkpoints |
| Stat Strip | —           | Ink bg, red bottom border, display number type        |
| Services   | `#services` | Ghost number in service card corner (transitions red) |
| About      | `#about`    | Paper bg, red-bordered visual frame                   |
| Team       | `#team`     | Square photo avatars with colour-coded team badges    |
| Reviews    | `#reviews`  | Red left border on review cards, serif italic quotes  |
| Pricing    | `#pricing`  | Ink dark card for featured tier (inverted)            |
| FAQ        | `#faq`      | Red active accordion highlight                        |
| Contact    | `#contact`  | Red focus rings on form inputs                        |
| CTA Banner | —           | Ghost "BOOK" bg type, ink bg, red top border          |
| Footer     | `.footer`   | Ink bg, red top border, column rule dividers          |

---

## 🔧 Customisation

### Change practice name
Find/replace `Apex Dental` throughout `index.html`. Update `<title>`, `<meta description>`, and `js/data.js`.

### Change primary colour (red → another accent)
```css
/* css/variables.css */
:root {
  --red-600: #1A5C9A;   /* → Navy blue */
  --red-500: #2172BE;
  --red-400: #3E8DD6;
  --red-dim: rgba(26,92,154,0.10);
  --red-line:rgba(26,92,154,0.25);
}
```

### Change to dark editorial (ink pages)
```css
/* Override body in reset.css */
body { background: var(--ink); color: var(--paper); }
.section--white { background: #111; }
.section--paper { background: #0E0E0C; }
```

### Make hero even more impactful
Increase the giant background type in `layout.css`:
```css
.hero__bg-type { font-size: clamp(200px, 28vw, 420px); }
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Width   | Key Changes                                          |
|-----------|---------|------------------------------------------------------|
| Desktop   | >1100px | Full 2-col hero, team 4-col, sidebar visible         |
| Tablet L  | ≤1100px | Hero sidebar 340px, team 2-col                       |
| Tablet    | ≤900px  | Hero sidebar hidden, bg type hidden, services 2-col  |
| Mobile    | ≤600px  | Everything 1-col, stacked forms                      |

---

## ✅ Features

- [x] Bold editorial aesthetic — ink + paper + signal red
- [x] Bebas Neue + Playfair Display + Work Sans
- [x] Giant ghost background display text in hero & CTA banner
- [x] Halftone dot-grid background texture
- [x] Hard border nav with red drop-shadow line
- [x] Numbered square checkpoint cards in hero
- [x] Ghost number in service card corners (transitions on hover)
- [x] Red left-border rule on review cards
- [x] Ink-dark featured pricing card
- [x] Animated stat counters (IntersectionObserver)
- [x] Scroll reveal on all sections
- [x] 9 service cards with category filter
- [x] 4-doctor team with colour-coded avatars
- [x] 6 reviews + overall rating score box
- [x] 3-tier pricing with featured dark card
- [x] Accordion FAQ with red active states
- [x] Form validation + sage green success state
- [x] Animated map pin placeholder
- [x] CTA banner with ghost background type
- [x] Full ink dark footer with red rule
- [x] No build tools, no dependencies
- [x] Fully responsive (4 breakpoints)
- [x] ARIA labels throughout, keyboard navigable
- [x] HIPAA-aware footer links

---

## 📸 Photography Style

Unlike the luxury Lumina project, Apex's editorial aesthetic works well with:
- High-contrast documentary-style photography
- Black & white or muted palette shots
- Clean clinical photography with warm paper-tone backgrounds
- Doctor portraits with simple light grey or warm white backgrounds

---

## 📄 License
Free to use and adapt for any dental practice website.
