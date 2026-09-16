import { useI18n } from '../i18n/LanguageContext.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import { COMPANY } from '../data/company.js'

/** "Looking for a reliable agar-agar supplier? Let's grow together." — the closing call to action. */
export default function Partnership() {
  const { t } = useI18n()
  const credo = t('partnership.credo')

  return (
    <section id="partnership" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/[0.06] blur-3xl"
      />

      <div className="container-x relative">
        <SectionHeading
          eyebrow={t('partnership.eyebrow')}
          title={t('partnership.title')}
          lead={t('partnership.body')}
          align="center"
          maxWidth="max-w-3xl"
        />

        <Reveal delay={0.2}>
          <ul className="mx-auto mt-12 flex max-w-3xl flex-col items-center gap-1.5 text-center font-display text-[clamp(1.25rem,2vw,1.75rem)] font-light italic leading-snug text-ink">
            {credo.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.28} className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#contact" className="btn-primary group">
            {t('nav.cta')}
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href={COMPANY.whatsapp} target="_blank" rel="noreferrer" className="btn-ghost-dark">
            {t('contact.form.whatsapp')}
          </a>
        </Reveal>

        {/* ---- Sign-off ---- */}
        <Reveal delay={0.1}>
          <div className="mx-auto mt-16 flex max-w-md flex-col items-center border-t border-ink/10 pt-10 text-center">
            <img src="/assets/brand/logo.png" alt="" className="h-14 w-14 object-contain" />
            <p className="mt-4 font-display text-xl font-semibold uppercase tracking-[0.04em] text-ink">
              {COMPANY.legalName}
            </p>
            <p className="mt-2 text-[10.5px] font-semibold uppercase tracking-eyebrow text-emerald-600">
              {COMPANY.descriptor} | {COMPANY.country}
            </p>
            <p className="mt-1.5 text-[10.5px] font-semibold uppercase tracking-eyebrow text-ink-500/70">
              {t('common.established')}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
