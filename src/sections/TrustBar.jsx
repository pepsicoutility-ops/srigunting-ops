import { useI18n } from '../i18n/LanguageContext.jsx'

function Diamond() {
  return (
    <svg className="h-2 w-2 shrink-0 text-emerald-500" viewBox="0 0 8 8" fill="currentColor" aria-hidden="true">
      <path d="M4 0 8 4 4 8 0 4z" />
    </svg>
  )
}

/**
 * Infinite credential marquee. The item list is duplicated so the
 * -50% keyframe loops seamlessly; the copy is hidden from screen readers.
 */
export default function TrustBar() {
  const { t } = useI18n()
  const items = t('trust.items')

  return (
    <section className="relative z-10 border-y border-ink/8 bg-cream-100 py-6">
      <div className="container-x mb-5 flex justify-center">
        <span className="eyebrow text-ink-500/60">{t('trust.label')}</span>
      </div>

      <div className="mask-fade-x relative flex overflow-hidden">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1 || undefined}
            className="flex shrink-0 animate-marquee items-center gap-10 pr-10 sm:gap-14 sm:pr-14"
          >
            {items.map((item) => (
              <li key={item} className="flex shrink-0 items-center gap-4">
                <Diamond />
                <span className="whitespace-nowrap text-sm font-medium tracking-wide text-ink-600 sm:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  )
}
