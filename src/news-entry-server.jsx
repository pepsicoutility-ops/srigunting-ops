import { renderToStaticMarkup } from 'react-dom/server'
import News from './pages/News.jsx'
import { LanguageProvider } from './i18n/LanguageContext.jsx'

/** Build-time render of /news. See scripts/prerender.mjs. */
export function render() {
  return renderToStaticMarkup(
    <LanguageProvider initialLang="id">
      <News />
    </LanguageProvider>,
  )
}
