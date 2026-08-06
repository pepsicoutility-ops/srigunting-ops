import { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react'
import en from './en.js'
import id from './id.js'

const DICTIONARIES = { en, id }
const STORAGE_KEY = 'sgp-lang'

const LanguageContext = createContext(null)

function detectInitialLanguage() {
  if (typeof window === 'undefined') return 'en'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored && DICTIONARIES[stored]) return stored
  const browser = window.navigator.language?.toLowerCase() ?? ''
  return browser.startsWith('id') ? 'id' : 'en'
}

/**
 * Resolves a dot-path such as `hero.stats` against the active dictionary.
 * Falls back to English so a missing key never renders as a blank node.
 */
function resolve(dict, path) {
  return path.split('.').reduce((acc, key) => (acc == null ? undefined : acc[key]), dict)
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectInitialLanguage)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = DICTIONARIES[lang].meta.htmlLang
  }, [lang])

  const t = useCallback(
    (path) => {
      const value = resolve(DICTIONARIES[lang], path)
      if (value !== undefined) return value
      const fallback = resolve(DICTIONARIES.en, path)
      if (fallback !== undefined) return fallback
      if (import.meta.env.DEV) console.warn(`[i18n] missing key: ${path}`)
      return path
    },
    [lang],
  )

  const toggleLanguage = useCallback(() => {
    setLang((current) => (current === 'en' ? 'id' : 'en'))
  }, [])

  const value = useMemo(
    () => ({ lang, setLang, toggleLanguage, t, languages: Object.keys(DICTIONARIES) }),
    [lang, toggleLanguage, t],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useI18n() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useI18n must be used within a LanguageProvider')
  return ctx
}
