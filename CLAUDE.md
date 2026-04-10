# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This repo hosts documentation for multiple instruments by etsuko.fm, deployed to [docs.etsuko.fm](https://docs.etsuko.fm). Each product is a **separate VitePress instance** (npm workspace), so they build and deploy independently but are served under the same domain.

## Structure

```
home/       → docs.etsuko.fm/         (products landing page)
eterna/     → docs.etsuko.fm/eterna/  (eterna docs)
public/     → shared static assets, copied into each build at deploy time
```

Each product workspace contains:
- `.vitepress/config.mts` — VitePress config with its own `base`, nav, sidebar
- `markdown/` — source files (`srcDir`)

## Commands

```bash
npm run home:dev      # Homepage dev server (port 5173)
npm run eterna:dev    # Eterna docs dev server (port 5174)
npm run dev           # Both simultaneously
npm run build         # Build all workspaces
```

## Adding a new product

1. Create a new workspace folder (e.g. `product2/`) mirroring the structure of `eterna/`
2. Set `base: '/product2/'` in its VitePress config
3. Add `"product2"` to the `workspaces` array in the root `package.json`
4. Add dev/build scripts to root `package.json`
5. Add a `cp -r public/. dist/product2/` step to `.github/workflows/deploy.yaml`
6. Add `/^\/product2/` to `ignoreDeadLinks` in `home/.vitepress/config.mts`
7. Add an overview page in `home/markdown/` and a sidebar entry in `home/.vitepress/config.mts`

## Key conventions

- New pages in a product go in `<product>/markdown/` and must be registered in that product's sidebar in `<product>/.vitepress/config.mts`.
- Cross-product links in `home/` (e.g. `/eterna/`) work as normal markdown links. VitePress's router is patched in `home/.vitepress/theme/index.ts` to intercept navigations matching `PRODUCT_PATHS` and force a full page load via `window.location.href` — otherwise Vue Router would try to resolve them internally and fail. When adding a new product, add its path to `PRODUCT_PATHS` in that file.
- Shared static assets (e.g. favicon) go in `public/` at the repo root. They are copied into each product's build output by the CI pipeline, not by VitePress itself.

## Git conventions

- All commits start with `new:` (feature), `opt:` (refactor or optimization), `fix:` (bugfix) or `break:` (breaking change, but as this is an end-user website, typically irrelevant). Don't include the co-authored-by claude message.
