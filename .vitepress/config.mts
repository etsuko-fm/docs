import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "markdown",
  base: '/docs/',
  title: "eterna / documentation",
  description: "guides for products from etsuko.fm",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Reference',
        items: [
          { text: 'Compatibility', link: '/reference/Compatibility' },
          { text: 'Audio File Requirements', link: '/reference/audio_file_requirements' },
          {
            text: 'Pages',
            items: [
              { text: 'Sample', link: '/reference/pages/1_sample' },
              { text: 'Slice', link: '/reference/pages/2_slice' },
              { text: 'Envelopes', link: '/reference/pages/3_envelopes' },
              { text: 'Playback Rates', link: '/reference/pages/4_playback_rates' },
              { text: 'Panning', link: '/reference/pages/5_panning' },
              { text: 'Levels', link: '/reference/pages/6_levels' },
              { text: 'Sequencer', link: '/reference/pages/7_sequencer' },
              { text: 'Sequence Control', link: '/reference/pages/8_sequence_control' },
              { text: 'Lowpass Filter', link: '/reference/pages/9_lpf' },
              { text: 'Lowpass LFO', link: '/reference/pages/10_lpf_lfo' },
              { text: 'Highpass Filter', link: '/reference/pages/11_hpf' },
              { text: 'Highpass LFO', link: '/reference/pages/12_hpf_lfo' },
              { text: 'Echo', link: '/reference/pages/13_echo' },
              { text: 'Master', link: '/reference/pages/14_master' },
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/etsuko-fm/eterna' }
    ]
  }
})
