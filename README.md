# New Moons

Personal website for the New Moons Foundation, a small student-run group building open-source software. A static, hand-built site (no framework, no build step) with scroll-driven animations using [GSAP](https://greensock.com/gsap/).

## Structure

- `index.html` - page markup and content (about, team, contact, join)
- `style.css` - styling
- `app.js` - scroll transitions, the nav "up" button, the typewriter effect, and the background photo swap/attribution
- `js/` - local copies of GSAP core and its `ScrollTrigger`, `ScrollToPlugin`, and `TextPlugin` plugins, plus `vibrant.js` (samples colors from the background photo)
- `assets/` - images used on the page

## Running locally

Open `index.html` directly, or serve the folder so relative paths behave the same as when deployed:

```bash
python -m http.server
```

then visit `http://localhost:8000`.

## Dependencies

[GSAP](https://greensock.com/gsap/) and its `ScrollTrigger`, `ScrollToPlugin`, and `TextPlugin` plugins, loaded from the local `js/` folder rather than a CDN. [node-vibrant](https://github.com/Vibrant-Colors/node-vibrant) (`js/vibrant.js`) pulls an accent color from the current background photo.
