# etsuko.fm / docs

Documentation for instruments by [etsuko.fm](https://etsuko.fm), built with [VitePress](https://vitepress.dev) and deployed to [docs.etsuko.fm](https://docs.etsuko.fm).

## Products

- [eterna](https://docs.etsuko.fm/eterna/) — 6-voice sampler and sequencer for monome norns

## Development

```bash
npm run home:dev      # Homepage dev server
npm run eterna:dev    # Eterna docs dev server
npm run dev           # Both simultaneously (home: 5173, eterna: 5174)
npm run build         # Build all
```

## Structure

Each product is a separate VitePress instance (npm workspace) with its own config, nav, and sidebar:

```
home/       → docs.etsuko.fm/         (products landing page)
eterna/     → docs.etsuko.fm/eterna/  (eterna docs)
public/     → shared static assets, copied into each build at deploy time
```

Since products are separate VitePress instances, Vue Router in `home/` cannot client-side navigate to `/eterna/`. The router is patched in `home/.vitepress/theme/index.ts` to force a full page load for cross-product links — standard markdown links work fine.
