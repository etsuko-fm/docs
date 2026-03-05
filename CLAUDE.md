# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a VitePress documentation site that documents Eterna (a 6-voice sampler and sequencer for monome norns). All documentation source files live in the `markdown/` directory (configured as `srcDir` in VitePress). 

## Commands

```bash
npm run docs:dev      # Start local dev server
npm run docs:build    # Build for production
npm run docs:preview  # Preview production build locally
```

## Structure

- `markdown/` — All documentation source files (VitePress `srcDir`)
  - `index.md` — Home page (uses VitePress home layout)
- `.vitepress/config.mts` — Site config: title, nav, sidebar, theme settings

## Key Conventions

- New pages go in `markdown/` and must be registered in the `sidebar` and/or `nav` arrays in `.vitepress/config.mts`.
- The home page (`markdown/index.md`) uses VitePress frontmatter with `layout: home` and `features` for product listings.

## Git conventions
- All commits start with `new:` (feature), `opt:` (refactor or optimization), `fix:` (bugfix) or `break:` (breaking change, but as this is an end-user website, typically irrelevant). Don't include the co-authored-by claude message.