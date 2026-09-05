/**
 * Bakes the Indonesian markup into each built page after `vite build`.
 *
 * Why: the page is client-rendered, and a crawler that arrives with an `en-*`
 * Accept-Language header (Googlebot does) runs the app and gets the English
 * copy. Indonesian is the market the site is trying to rank in, so the static
 * HTML now carries the Indonesian version — no JavaScript required to read it.
 *
 * This is NOT a hydration payload. main.jsx still mounts with createRoot(),
 * which replaces this DOM wholesale, so there is no server/client contract to
 * keep in sync and no hydration mismatch to worry about.
 *
 * Run via `npm run build`; see package.json.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')

/**
 * Drop the entrance states framer-motion emits for its `initial` prop.
 *
 * Every scroll-reveal element renders as `opacity:0` with a translate offset,
 * which would ship the whole page as invisible markup — read as hidden content
 * by a crawler, and useless as a first paint. Only `opacity:0` and `transform`
 * are removed; the ring sizing (`width`/`height`/`margin-*`) is real layout and
 * stays. The browser bundle is untouched, so the animations still run for
 * visitors exactly as before.
 */
function stripEntranceStyles(html) {
  return html.replace(/ style="([^"]*)"/g, (whole, css) => {
    const kept = css
      .split(';')
      .map((d) => d.trim())
      .filter(Boolean)
      .filter((d) => {
        const [prop, ...rest] = d.split(':')
        const name = prop.trim().toLowerCase()
        const value = rest.join(':').trim().toLowerCase()
        if (name === 'transform') return false
        if (name === 'opacity' && value === '0') return false
        return true
      })
    return kept.length ? ` style="${kept.join(';')}"` : ''
  })
}

/**
 * Runs before paint, right after the prerendered markup. Visitors whose
 * language resolves to anything but Indonesian would otherwise see the
 * Indonesian page flash before React swapped it out, so for them the
 * prerendered DOM is dropped and the app mounts into an empty root — exactly
 * the behaviour the site had before prerendering. Kept in step with
 * detectInitialLanguage() in src/i18n/LanguageContext.jsx.
 */
const LANG_GUARD = `<script>(function(){try{var s=localStorage.getItem('sgp-lang');var l=s==='id'||s==='en'?s:((navigator.language||'').toLowerCase().indexOf('id')===0?'id':'en');if(l!=='id'){var r=document.getElementById('root');if(r)r.textContent='';}}catch(e){}})();</script>`

/** Each static page: its SSR bundle and the HTML file to inject into. */
const PAGES = [{ name: 'index.html', ssr: 'dist-ssr/home/entry-server.js', html: 'dist/index.html' }]

const ROOT_DIV = '<div id="root"></div>'

for (const page of PAGES) {
  // pathToFileURL: a bare absolute path is not a valid ESM specifier on Windows
  const { render } = await import(pathToFileURL(resolve(root, page.ssr)).href)
  const body = stripEntranceStyles(render())

  const htmlPath = resolve(root, page.html)
  const html = readFileSync(htmlPath, 'utf8')
  if (!html.includes(ROOT_DIV)) {
    throw new Error(`prerender: could not find ${ROOT_DIV} in ${page.html}`)
  }

  writeFileSync(htmlPath, html.replace(ROOT_DIV, `<div id="root">${body}</div>${LANG_GUARD}`), 'utf8')

  const hidden = (body.match(/opacity:\s*0[;"]/g) || []).length
  if (hidden > 0) throw new Error(`prerender: ${hidden} elements still ship as opacity:0 in ${page.name}`)

  console.log(`prerendered ${(body.length / 1024).toFixed(0)} kB of Indonesian markup into ${page.html}`)
}
