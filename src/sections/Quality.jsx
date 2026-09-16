import { useI18n } from '../i18n/LanguageContext.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Quality() {
  const { t } = useI18n()
  const body = t('quality.body')

  return (
    <section id="quality" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* ---- Copy ---- */}
          <div className="lg:col-span-6">
            <SectionHeading title={t('quality.title')} maxWidth="max-w-2xl" />

            <div className="mt-8 max-w-2xl space-y-5">
              {body.map((paragraph, i) => (
                <Reveal key={i} delay={0.16 + i * 0.08}>
                  <p className="text-[15px] leading-[1.8] text-ink-500 sm:text-[16.5px]">{paragraph}</p>
                </Reveal>
              ))}
              <Reveal delay={0.32}>
                <p className="text-[15px] leading-[1.8] text-ink-500 sm:text-[16.5px]">{t('quality.closing')}</p>
              </Reveal>
            </div>
          </div>

          {/* ---- The promise ---- */}
          <div className="lg:col-span-6">
            <Reveal y={40} duration={0.9}>
              <figure className="relative isolate overflow-hidden rounded-2xl bg-ink p-9 text-white shadow-[0_40px_80px_-40px_rgba(11,16,13,0.5)] sm:p-12">
                <div aria-hidden="true" className="absolute inset-0 -z-10">
                  <div className="absolute inset-0 bg-[radial-gradient(100%_80%_at_85%_0%,#123a26_0%,transparent_60%)]" />
                  <div className="absolute inset-0 bg-grain opacity-[0.14] mix-blend-overlay" />
                </div>

                <svg className="h-9 w-9 text-emerald-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M9.6 6C6.3 7.4 4.5 10 4.5 13.6V18h5.8v-5.8H7.2c0-2 1.1-3.5 3.2-4.4L9.6 6Zm9.3 0c-3.3 1.4-5.1 4-5.1 7.6V18h5.8v-5.8h-3.1c0-2 1.1-3.5 3.2-4.4L18.9 6Z" />
                </svg>

                <p className="eyebrow mt-7 text-emerald-300">{t('quality.promiseLabel')}</p>
                <blockquote className="mt-4 font-display text-[clamp(1.5rem,2.5vw,2.4rem)] font-light italic leading-[1.3] tracking-[-0.01em]">
                  {t('quality.promise')}
                </blockquote>
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
