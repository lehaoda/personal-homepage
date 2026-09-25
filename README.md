# Haoda Le — Personal Site

Single-page personal site, redesigned in an **apple.com-inspired** style:
SF-style typography, frosted-glass sticky nav, cinematic dark hero with
animated gradient blobs and a floating "Legacy → Cloud" glass card,
half-width promo tiles, scroll-reveal animations, and a light Apple-style footer.

## Files

- `index.html` — page structure and copy
- `styles.css` — all styling, responsive down to mobile
- `script.js` — smooth anchors, nav scroll state, IntersectionObserver reveals, hero parallax

## Preview

Open `index.html` directly in a browser, or serve locally:

```bash
cd /path/to/lehaoda_personal
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Notes

- No build step, no dependencies beyond the Inter webfont.
- Respects `prefers-reduced-motion` for accessibility.
- Contact links use `mailto:lehaoda@gmail.com`; GitHub/LinkedIn URLs are in the footer.
