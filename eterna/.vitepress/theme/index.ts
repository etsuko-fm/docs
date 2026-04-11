import DefaultTheme from 'vitepress/theme'
import { onMounted } from 'vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  setup() {
    onMounted(() => {
      document.querySelectorAll('.VPSocialLink[href]').forEach(el => {
        el.setAttribute('title', el.getAttribute('href') ?? '')
      })
    })
  }
}
