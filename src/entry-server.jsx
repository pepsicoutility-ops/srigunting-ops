import { renderToStaticMarkup } from 'react-dom/server'
import { MotionConfig } from 'framer-motion'
import App from './App.jsx'
import { LanguageProvider } from './i18n/LanguageContext.jsx'

/**
 * Build-time render used by scripts/prerender.mjs. Static markup, not a
 * hydration payload: the browser bundle still mounts with createRoot() and
 * replaces this DOM, so there is no hydration contract to keep in sync.
 */
export function render() {
  // `isStatic` stops motion components from emitting their `initial` state.
  // Without it every scroll-reveal element ships as `opacity:0`, which reads
  // as hidden content to a crawler and defeats the point of prerendering.
  return renderToStaticMarkup(
    <MotionConfig isStatic>
      <LanguageProvider initialLang="id">
        <App />
      </LanguageProvider>
    </MotionConfig>,
  )
}
