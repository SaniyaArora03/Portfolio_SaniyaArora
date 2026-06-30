# Saniya Arora — Portfolio

A modern developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion.
Live project stats (stars/forks) are fetched in real time from the GitHub API.

## Run locally

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`.

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

## Deploy on Vercel

**Option A — via GitHub (recommended)**
1. Push this project to a new GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Vite — leave the defaults (Build Command: `npm run build`, Output: `dist`).
4. Click Deploy. Done in ~1 minute.

**Option B — via CLI**
```bash
npm install -g vercel
vercel
```
Follow the prompts; it will detect the Vite config automatically.

## Editing content

All resume content (projects, skills, experience, education, achievements)
lives in a single file: `src/data.js`. Edit that file to update anything on
the site — no need to touch components.

To change which 4 projects are "Featured" at the top, edit the
`FEATURED_ORDER` array in `src/data.js`.

## Notes

- GitHub stats (`src/useGithubStats.js`) call the public GitHub REST API
  client-side with no auth token, which has a 60 requests/hour rate limit per
  IP. This is enough for normal portfolio traffic. If you later add a token,
  do it via a serverless function — never expose a token in client code.
- All images are CSS-based placeholders (no external image hosting required).
  Replace the gradient blocks in `ProjectCard.jsx` with real screenshots
  whenever you have them — drop images in `/public` and reference them.
