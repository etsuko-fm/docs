import DefaultTheme from 'vitepress/theme'
import CrossLink from './CrossLink.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('CrossLink', CrossLink)
  }
}
