import { motion, useReducedMotion } from 'framer-motion'
import { useI18n } from '../i18n/LanguageContext.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'

/** "For Domestic & International Market — Indonesia to the World". */
export default function Market() {
  const { t } = useI18n()
  const reduceMotion = useReducedMotion()
  const body = t('market.body')
  const partners = t('market.partners')

  return (
    <section id="market" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute -right-40 top-10 h-[30rem] w-[30rem] rounded-full bg-emerald-500/[0.06] blur-3xl"
      />

      <div className="container-x relative">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeading eyebrow={t('market.eyebrow')} title={t('market.title')} maxWidth="max-w-2xl" />

            <div className="mt-8 max-w-2xl space-y-5">
              {body.map((paragraph, i) => (
                <Reveal key={i} delay={0.16 + i * 0.08}>
                  <p className="text-[15px] leading-[1.8] text-ink-500 sm:text-[16.5px]">{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <Reveal y={40} duration={0.9}>
              <div className="relative isolate overflow-hidden rounded-2xl bg-ink p-8 text-white shadow-[0_40px_80px_-40px_rgba(11,16,13,0.5)] sm:p-11">
                <div aria-hidden="true" className="absolute inset-0 -z-10">
                  <div className="absolute inset-0 bg-[radial-gradient(100%_80%_at_100%_0%,#123a26_0%,transparent_62%)]" />
                  <div className="absolute inset-0 bg-grain opacity-[0.14] mix-blend-overlay" />
                </div>

                {/* Concentric rings echoing the seaweed circle in the mark */}
                <div aria-hidden="true" className="absolute -right-24 -top-24 -z-10">
                  {[200, 300, 400].map((size, i) => (
                    <motion.div
                      key={size}
                      animate={reduceMotion ? {} : { rotate: i % 2 === 0 ? 360 : -360 }}
                      transition={{ duration: 80 + i * 26, repeat: Infinity, ease: 'linear' }}
                      style={{ width: size, height: size, marginLeft: -size / 2, marginTop: -size / 2 }}
                      className="absolute rounded-full border border-dashed border-white/[0.09]"
                    />
                  ))}
                </div>

                <h3 className="eyebrow text-emerald-300">{t('market.partnersLabel')}</h3>

                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {partners.map((partner) => (
                    <li
                      key={partner}
                      className="inline-flex items-center gap-2 rounded-full bg-white/[0.07] px-4 py-2 text-[13.5px] font-semibold text-white/90 ring-1 ring-white/10"
                    >
                      <svg viewBox="0 0 8 8" fill="currentColor" className="h-1.5 w-1.5 text-emerald-400" aria-hidden="true">
                        <path d="M4 0 8 4 4 8 0 4z" />
                      </svg>
                      {partner}
                    </li>
                  ))}
                </ul>

                <p className="mt-8 border-t border-white/10 pt-7 text-[15px] leading-relaxed text-white/70">
                  {t('market.closing')}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
