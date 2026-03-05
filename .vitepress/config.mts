import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "markdown",
  base: '/docs/',
  rewrites: {
    'reference/pages/1_sample.md': 'reference/pages/sample.md',
    'reference/pages/2_slice.md': 'reference/pages/slice.md',
    'reference/pages/3_envelopes.md': 'reference/pages/envelopes.md',
    'reference/pages/4_playback_rates.md': 'reference/pages/playback_rates.md',
    'reference/pages/5_panning.md': 'reference/pages/panning.md',
    'reference/pages/6_levels.md': 'reference/pages/levels.md',
    'reference/pages/7_sequencer.md': 'reference/pages/sequencer.md',
    'reference/pages/8_sequence_control.md': 'reference/pages/sequence_control.md',
    'reference/pages/9_lpf.md': 'reference/pages/lpf.md',
    'reference/pages/10_lpf_lfo.md': 'reference/pages/lpf_lfo.md',
    'reference/pages/11_hpf.md': 'reference/pages/hpf.md',
    'reference/pages/12_hpf_lfo.md': 'reference/pages/hpf_lfo.md',
    'reference/pages/13_echo.md': 'reference/pages/echo.md',
    'reference/pages/14_master.md': 'reference/pages/master.md',
  },
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
              { text: 'Sample', link: '/reference/pages/sample' },
              { text: 'Slice', link: '/reference/pages/slice' },
              { text: 'Envelopes', link: '/reference/pages/envelopes' },
              { text: 'Playback Rates', link: '/reference/pages/playback_rates' },
              { text: 'Panning', link: '/reference/pages/panning' },
              { text: 'Levels', link: '/reference/pages/levels' },
              { text: 'Sequencer', link: '/reference/pages/sequencer' },
              { text: 'Sequence Control', link: '/reference/pages/sequence_control' },
              { text: 'Lowpass Filter', link: '/reference/pages/lpf' },
              { text: 'Lowpass LFO', link: '/reference/pages/lpf_lfo' },
              { text: 'Highpass Filter', link: '/reference/pages/hpf' },
              { text: 'Highpass LFO', link: '/reference/pages/hpf_lfo' },
              { text: 'Echo', link: '/reference/pages/echo' },
              { text: 'Master', link: '/reference/pages/master' },
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
