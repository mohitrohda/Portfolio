# Mohit Rohda — AI/ML Portfolio

A responsive portfolio with a custom WebGL neural core, ten project case studies, a compact expandable gallery, search and filters, interactive AI workflow diagrams, resume download, and direct contact links. Built with HTML, CSS, and JavaScript; no dependencies or build step.

## Run locally

Requires Node.js 18 or newer.

```sh
npm run dev
```

Open http://127.0.0.1:4173. Set `PORT` to use another port. `npm run check` checks JavaScript syntax. Stop the server with Ctrl+C.

## Content

The hero explicitly presents Mohit as an **AI Developer**. `color.css` contains the colorful visual theme; `styles.css` contains the base layout. Three projects are featured initially; visitors can expand all ten or search and filter the collection.


- Edit project notes in `app.js`; edit visible project summaries and profile sections in `index.html`.
- Resume: `assets/Mohit_Rohda_Resume.pdf`.
- Portrait: `assets/mohit-rohda.jpg`.
- Original page URLs redirect to the appropriate section of the new portfolio.

The WebGL scene supports mouse dragging, pause/play, reduced-motion preferences, offscreen pausing, and a perspective-projected Canvas 2D renderer when WebGL is unavailable. Mobile touch gestures scroll the page normally. Google Fonts are optional; local sans-serif fallbacks keep the site usable offline.

Project facts come from the supplied resume and public GitHub repositories. Reported metrics are identified in project details. Project links open source repositories; project applications run separately.

To host as a static site, serve this directory with `index.html` as the entry point. No deployment was performed as part of the local redesign.
