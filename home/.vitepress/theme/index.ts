import DefaultTheme from 'vitepress/theme'
import './custom.css'

const PRODUCT_PATHS = /^\/(eterna)/

export default {
  extends: DefaultTheme,
  enhanceApp() {
    if (typeof window === 'undefined') return
    // VitePress's click handler bypasses router.go and calls history.pushState directly,
    // so intercept there to force full page loads for cross-instance product links.
    const originalPushState = history.pushState.bind(history)
    history.pushState = function (state, title, url) {
      if (typeof url === 'string' && PRODUCT_PATHS.test(url)) {
        window.location.href = url
        return
      }
      return originalPushState(state, title, url)
    }
    // Back/forward navigation fires popstate instead of pushState, so intercept that too.
    // Capture phase runs before Vue Router's bubble-phase listener, preventing the flash.
    window.addEventListener('popstate', (e) => {
      if (PRODUCT_PATHS.test(window.location.pathname)) {
        e.stopPropagation()
        window.location.reload()
      }
    }, true)
  }
}
