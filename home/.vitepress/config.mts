import { defineConfig } from 'vitepress'

export default defineConfig({
  srcDir: 'markdown',
  base: '/',
  // cross-site links to other product VitePress instances appear dead to this build
  ignoreDeadLinks: [/^\/eterna/],
  vite: {
    server: {
      proxy: {
        '/eterna': 'http://localhost:5174'
      }
    }
  },
  title: 'docs.etsuko.fm',
  description: 'Documentation for products by etsuko.fm',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/etsuko-black-round.png' }],
    ['meta', { name: 'algolia-site-verification', content: '8DE75908EF2994B4' }],
  ],
  themeConfig: {
    sidebar: [
      {
        text: 'Products',
        items: [
          { text: 'eterna', link: '/' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'instagram', link: 'https://instagram.com/etsuko.fm' },
    ]
  }
})
