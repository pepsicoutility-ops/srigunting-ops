import { motion } from 'framer-motion'
import { useI18n } from '../i18n/LanguageContext.jsx'

/**
 * Sliding EN / ID pill. `tone` matches it to a dark or light header.
 */
export default function LanguageToggle({ tone = 'light', className = '' }) {
  const { lang, setLang, t } = useI18n()
  const isLight = tone === 'light' // light = sits on a dark surface

  return (
    <div
      role="group"
      aria-label={t('common.langSwitch')}
      className={`relative flex items-center rounded-full p-1 ${
        isLight ? 'bg-white/10 ring-1 ring-white/20' : 'bg-ink/5 ring-1 ring-ink/10'
      } ${className}`}
    >
      {['en', 'id'].map((code) => {
        const active = lang === code
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            className={`relative z-10 rounded-full px-2.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors duration-300 sm:px-3.5 ${
              active
                ? 'text-white'
                : isLight
                  ? 'text-white/55 hover:text-white/85'
                  : 'text-ink-500 hover:text-ink'
            }`}
          >
            {active && (
              <motion.span
                layoutId="lang-pill"
                className="absolute inset-0 -z-10 rounded-full bg-emerald-500"
                transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              />
            )}
            {code}
          </button>
        )
      })}
    </div>
  )
}
