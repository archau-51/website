# New Moons

Personal website for the New Moons Foundation — a small student-run group building
open-source software. This is a static, hand-built site (no framework, no build step)
with scroll-driven animations powered by [GSAP](https://greensock.com/gsap/).

## Structure

- `index.html` — page markup and content (about, team, contact, join)
- `style.css` — styling
- `app.js` — page behavior: scroll transitions, the nav "up" button, the typewriter
  effect, and swapping/attributing the background photo
- `js/` — local copies of the GSAP core library and its `ScrollTrigger`,
  `ScrollToPlugin`, and `TextPlugin` plugins, plus `vibrant.js` (used to sample
  colors from the background photo)
- `assets/` — images used on the page

## Running locally

No build step is required. Either:

- Open `index.html` directly in a browser, or
- Serve the folder so relative paths behave the same as they would when deployed:

  ```
  python -m http.server
  ```

  then visit `http://localhost:8000`.

## Dependencies

This site depends on [GSAP](https://greensock.com/gsap/) (GreenSock Animation
Platform) and its `ScrollTrigger`, `ScrollToPlugin`, and `TextPlugin` plugins for
animation, loaded from the local `js/` folder rather than a CDN. It also uses
[node-vibrant](https://github.com/Vibrant-Colors/node-vibrant) (`js/vibrant.js`) to
pull an accent color out of the current background photo.
