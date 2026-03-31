# Fonts — Lumina Dental

## Current Setup (Google Fonts CDN)

Fonts are loaded via Google Fonts in `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600;1,700&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
```

## Self-Hosting (Optional)

For better performance and privacy, download and self-host:

1. Download fonts from [Google Fonts](https://fonts.google.com/)
2. Place `.woff2` files in this folder
3. Add `@font-face` declarations to `css/variables.css`
4. Remove the Google Fonts `<link>` tags from HTML

### Example @font-face

```css
@font-face {
  font-family: 'Cormorant Garamond';
  src: url('../fonts/CormorantGaramond-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'DM Sans';
  src: url('../fonts/DMSans-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

## Font Weights Used

| Font               | Weights              | Usage                          |
|-------------------|----------------------|--------------------------------|
| Cormorant Garamond | 400, 500, 600, 700  | Headlines, doctor names, prices |
| DM Sans            | 300, 400, 500, 600  | Body text, buttons, labels     |
