# Lumina Dental — Complete Landing Page

A production-ready luxury dental clinic landing page. Dark obsidian + champagne gold palette, Cormorant Garamond + DM Sans typography, crafted for high-end cosmetic dentistry positioning.

---

## 📁 Project Structure

```
lumina-dental/
│
├── index.html                   ← Main landing page (entry point)
├── README.md                    ← This file
│
├── css/
│   ├── variables.css            ← All design tokens & CSS custom properties
│   ├── reset.css                ← CSS reset, base styles, utility classes, grain overlay
│   ├── components.css           ← Buttons, cards, forms, accordion, all UI components
│   └── layout.css               ← Nav, hero, all sections, footer, responsive grid
│
├── js/
│   ├── main.js                  ← Nav, scroll reveal, accordion, counters, form, filter
│   └── data.js                  ← All site content (services, team, reviews, FAQs, pricing)
│
├── pages/
│   ├── services.html            ← Full services listing page
│   ├── about.html               ← About the Lumina Studio page
│   ├── team.html                ← Meet the doctors page
│   ├── new-patient.html         ← New patient information page
│   └── contact.html             ← Contact & directions page
│
├── components/
│   ├── nav.html                 ← Navigation HTML snippet (for inner pages)
│   ├── footer.html              ← Footer HTML snippet (for inner pages)
│   ├── hero.html                ← Hero section template (annotated)
│   ├── service-card.html        ← Service card component examples
│   └── doctor-card.html         ← Doctor card component examples
│
├── images/
│   └── README.md                ← Image specs and naming guide
│
└── fonts/
    └── README.md                ← Font loading & self-hosting guide
```

---

## 🚀 Quick Start

No build tools required. Open `index.html` in a browser:

```bash
# Option 1 — Direct open
open index.html

# Option 2 — Local dev server (recommended for font loading)
npx serve .
# or
python3 -m http.server 8080
# Visit: http://localhost:8080
```

---

## 🎨 Design System

### Design Concept
**Dark Luxury** — Obsidian backgrounds, champagne gold accents, serif display type.
Think: fine jewelry boutique meets private members' club.

### Color Palette
| Variable          | Hex / Value                  | Usage                                  |
|------------------|------------------------------|----------------------------------------|
| `--obsidian`      | `#070A0F`                    | Page background                        |
| `--obsidian-card` | `#111620`                    | Card surfaces                          |
| `--obsidian-lift` | `#161C28`                    | Elevated surfaces, form inputs         |
| `--obsidian-edge` | `#1D2436`                    | Borders, subtle dividers               |
| `--gold-500`      | `#C9A84C`                    | Primary accent, CTA buttons            |
| `--gold-400`      | `#DDB96A`                    | Hover states, star ratings             |
| `--gold-300`      | `#EDD08C`                    | Highlight text, active states          |
| `--gold-glow`     | `rgba(201,168,76,0.18)`      | Card glows, radial highlights          |
| `--teal`          | `#2ABFAD`                    | Status indicators, CTA secondary       |
| `--ivory`         | `#F7F3EE`                    | Primary text color                     |
| `--ivory-50`      | `rgba(247,243,238,0.50)`     | Body text, muted content               |
| `--ivory-30`      | `rgba(247,243,238,0.30)`     | Captions, labels                       |

### Typography
```css
--font-display: 'Cormorant Garamond', Georgia, serif;   /* Headlines, doctor names, prices */
--font-body:    'DM Sans', 'Helvetica Neue', sans-serif; /* Body text, buttons, labels */
```

**Why these fonts:**
- Cormorant Garamond brings editorial luxury — the kind you see in Vogue or Architectural Digest
- DM Sans is clean, modern, and pairs perfectly without competing

### Shadows
```css
--shadow-card: 0 2px 16px rgba(0,0,0,0.35)   /* Default card depth */
--shadow-gold: 0 6px 32px rgba(201,168,76,0.20) /* Gold accent glow */
--shadow-lift: 0 16px 56px rgba(0,0,0,0.5)   /* Hover lift effect */
```

---

## 📋 Page Sections (index.html)

| Section        | ID           | Description                                        |
|---------------|--------------|---------------------------------------------------|
| Navigation    | `.nav`       | Dark sticky nav, gold logo, active link underline  |
| Hero          | `#hero`      | 4-checkpoint split · dark sidebar card stack       |
| Stat Strip    | —            | 4-stat gold-number bar with animated counters      |
| Services      | `#services`  | 9 services, category filter, gold hover border     |
| About         | `#about`     | 2-col, visual frame with gold glow + float badge   |
| Team          | `#team`      | 4-doctor grid with gradient avatars                |
| Reviews       | `#reviews`   | 6 cards with decorative quote marks + score box    |
| Pricing       | `#pricing`   | 3-tier cards, featured card with gold border glow  |
| FAQ           | `#faq`       | 2-col accordion (7 questions)                      |
| Contact       | `#contact`   | Booking form + contact info + animated map         |
| CTA Banner    | —            | Dark surface with radial gold/teal glows            |
| Footer        | `.footer`    | 4-col dark footer with gold-rule divider           |

---

## 🔧 Customization Guide

### Change Practice Name
1. Find/replace `Lumina Dental` throughout `index.html`
2. Update `<title>` and `<meta name="description">`
3. Update `data.js` → `SITE.business.name`

### Change Colors (e.g. silver/platinum instead of gold)
```css
/* css/variables.css */
:root {
  --gold-500: #8B9BB8;  /* → Cool platinum */
  --gold-400: #A8B4CC;
  --gold-300: #C4CCDB;
  --gold-glow: rgba(139,155,184,0.18);
  --gold-line: rgba(139,155,184,0.22);
  --gold-dim:  rgba(139,155,184,0.10);
}
```

### Change to Light Mode
Override body background and text:
```css
/* Add to end of reset.css */
body { background: #F8F6F2; color: #0F172A; }
body::before, body::after { display: none; }
.card { background: #fff; border-color: #E2E8F0; }
```

### Add Google Analytics
```html
<!-- Before </head> in index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Replace Map Placeholder
```html
<!-- Replace .map-placeholder div with: -->
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
  width="100%" height="200"
  style="border:0;border-radius:16px;filter:invert(0.9) hue-rotate(180deg);"
  allowfullscreen loading="lazy">
</iframe>
```
> Tip: `filter: invert(0.9) hue-rotate(180deg)` gives Google Maps a dark theme to match the design.

---

## 📱 Responsive Breakpoints

| Breakpoint | Width    | Key Changes                                          |
|-----------|----------|------------------------------------------------------|
| Desktop   | >1100px  | Full 2-col hero, team 4-col, footer 4-col            |
| Tablet L  | ≤1100px  | Hero sidebar narrower, team 2-col, footer 3-col      |
| Tablet    | ≤900px   | Hero sidebar hidden, services 2-col, hamburger menu  |
| Mobile    | ≤600px   | Everything 1-col, stacked forms, compact padding     |

---

## ✅ Features Checklist

- [x] Dark luxury aesthetic — obsidian + champagne gold
- [x] Cormorant Garamond serif + DM Sans body
- [x] Grain texture overlay via SVG data URI
- [x] Radial gold glow in hero area
- [x] Sticky nav with gold underline active links
- [x] Mobile hamburger with slide-down drawer
- [x] 4-checkpoint split-screen hero with gold sidebar
- [x] Animated stat counters (IntersectionObserver)
- [x] Scroll reveal on all sections
- [x] 9 service cards with category filter
- [x] Gold top-border reveal on service card hover
- [x] 4-doctor team grid with gradient avatars
- [x] Review cards with large decorative quote marks
- [x] 3-tier pricing — featured card with gold glow
- [x] Accordion FAQ with gold active states
- [x] Form validation + teal success state
- [x] Dark-styled map placeholder with animated gold pin
- [x] CTA banner with dual radial glows
- [x] 4-col footer with gold-rule divider
- [x] No build tools, no dependencies
- [x] Fully accessible — ARIA labels throughout
- [x] HIPAA-aware footer links

---

## 📸 Images Needed

| Filename               | Size         | Usage                                  |
|-----------------------|--------------|----------------------------------------|
| `og-image.jpg`         | 1200×630     | Social sharing preview                 |
| `favicon.ico`          | 32×32        | Browser tab                            |
| `apple-touch-icon.png` | 180×180      | iOS home screen                        |
| `studio-hero.jpg`      | 1920×1080    | Optional hero background               |
| `studio-interior.jpg`  | 900×700      | About section frame                    |
| `dr-voss.jpg`          | 400×400      | Dr. Alexandra Voss portrait            |
| `dr-kim.jpg`           | 400×400      | Dr. Rafael Kim portrait                |
| `dr-sato.jpg`          | 400×400      | Dr. Naomi Sato portrait                |
| `dr-levy.jpg`          | 400×400      | Dr. Marcus Levy portrait               |

**Photography style guide:** Low-key studio lighting, dark or neutral backgrounds, professional attire. Avoid bright clinical whites — they conflict with the dark design aesthetic.

---

## 📄 License
Free to use and adapt for any dental practice website.
