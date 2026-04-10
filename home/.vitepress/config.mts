import { defineConfig } from 'vitepress'

export default defineConfig({
  srcDir: 'markdown',
  base: '/',
  title: 'docs.etsuko.fm',
  description: 'Documentation for products by etsuko.fm',
  head: [['link', { rel: 'icon', type: 'image/png', href: '/etsuko-black-round.png' }]],
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
