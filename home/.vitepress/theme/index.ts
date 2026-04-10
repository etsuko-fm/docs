import DefaultTheme from 'vitepress/theme'
import './custom.css'

const PRODUCT_PATHS = /^\/(eterna)/

export default {
  extends: DefaultTheme,
  enhanceApp({ router }) {
    // VitePress registers its click handler on window with capture:true, so element-level
    // handlers can't intercept first. Patch router.go instead to force full page loads
    // for cross-instance product links.
    const originalGo = router.go.bind(router)
    router.go = (href?: string) => {
      if (href && PRODUCT_PATHS.test(href)) {
        window.location.href = href
        return Promise.resolve()
      }
      return originalGo(href)
    }
  }
}
