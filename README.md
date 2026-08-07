# gio200023.github.io

My personal site, built with [Astro](https://astro.build) on the [Spectre](https://github.com/louisescher/spectre) theme (MIT-licensed, terminal-inspired). Deploys straight to GitHub Pages via GitHub Actions.

## Local development

```bash
pnpm install
pnpm dev       # http://localhost:4321
pnpm build     # outputs to ./dist
pnpm preview   # serve the built ./dist locally
```

(npm/yarn also work, but the lockfile here is pnpm's.)

## Deploying

Every push to `master` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it via GitHub Pages.

**One-time setup:** in this repo's GitHub settings, go to **Settings → Pages → Build and deployment → Source** and select **"GitHub Actions"** (it currently defaults to "Deploy from a branch", which won't pick up the workflow). After that, pushes just work.

## Before it's actually "live"

- [ ] Replace `src/assets/pfp.png` with a real photo — square, ~500x500px, same filename. See the `TODO(gio)` comment in `src/pages/index.astro`.
- [ ] Replace the placeholder image in each `src/content/projects/*.mdx` file (currently all reuse the theme's ghost mascot as a stand-in) — any image works, ~1200x675px looks good, same field name.
- [ ] Skim `src/content/other/about.mdx`, `src/content/work.json`, `src/content/projects/*.mdx` and `src/content/socials.json` for anything you'd word differently — all of it was drafted from your CV, not gospel.
- [ ] The blog (`/blog`) is empty on purpose — write a post whenever, or ignore it entirely.

## Structure cheat sheet

| What | Where |
|---|---|
| Bio | `src/content/other/about.mdx` |
| Work history | `src/content/work.json` |
| Projects | `src/content/projects/*.mdx` |
| Quick facts (sidebar) | `src/content/info.json` |
| Social links | `src/content/socials.json` |
| Site config, theme colour, OG tags | `astro.config.ts` |

Comments turned off (`giscus: false` in `astro.config.ts`) — that's what let this run as a plain static site with no server needed. Flip it back on by following [Spectre's own instructions](https://github.com/louisescher/spectre#turning-off-giscus) in reverse if you ever want them.
