import { motion } from 'framer-motion'
import { useI18n } from '../i18n/LanguageContext.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Quality() {
  const { t } = useI18n()
  const rows = t('quality.rows')
  const head = t('quality.tableHead')

  return (
    <section id="quality" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute -right-32 top-1/3 h-[26rem] w-[26rem] rounded-full bg-gold/[0.06] blur-3xl"
      />

      <div className="container-x relative grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow={t('quality.eyebrow')} title={t('quality.title')} maxWidth="max-w-lg" />

          <Reveal delay={0.18}>
            <p className="mt-7 max-w-lg text-[15px] leading-[1.75] text-ink-500">{t('quality.body')}</p>
          </Reveal>

          <Reveal delay={0.26}>
            <figure className="mt-9 max-w-lg rounded-2xl border-l-2 border-emerald-500 bg-cream-100 p-6">
              <figcaption className="eyebrow text-emerald-600">{t('quality.statementTitle')}</figcaption>
              <blockquote className="mt-3 font-display text-[17px] font-light italic leading-relaxed text-ink">
                &ldquo;{t('quality.statement')}&rdquo;
              </blockquote>
            </figure>
          </Reveal>

          <Reveal delay={0.32}>
            <a
              href="/docs/qc-datasheet-checklist.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost-dark mt-7 w-full sm:w-auto"
            >
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M8 2v8m0 0 3.2-3.2M8 10 4.8 6.8M2.5 12.5h11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {t('quality.download')}
            </a>
          </Reveal>
        </div>

        {/* ---- QC parameter cards ---- */}
        <div className="lg:col-span-7">
          <Reveal y={34}>
            <div className="grid grid-cols-[1fr,1fr] gap-px overflow-hidden rounded-2xl bg-ink/8 ring-1 ring-ink/8">
              <div className="bg-cream-100 px-5 py-4 sm:px-7">
                <span className="eyebrow text-ink-500/70">{head.parameter}</span>
              </div>
              <div className="bg-cream-100 px-5 py-4 sm:px-7">
                <span className="eyebrow text-ink-500/70">{head.method}</span>
              </div>

              {rows.map(([param, method], i) => (
                <motion.div
                  key={param}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: '0px 0px -50px 0px' }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="contents"
                >
                  <div className="group flex items-center gap-3.5 bg-white px-5 py-6 transition-colors duration-300 hover:bg-cream-100 sm:px-7">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 transition-colors duration-300 group-hover:bg-emerald-500 group-hover:text-white">
                      <svg viewBox="0 0 14 14" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
                        <path
                          d="m3 7.2 2.6 2.6L11 4.4"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-[14px] font-semibold text-ink">{param}</span>
                  </div>
                  <div className="flex items-center bg-white px-5 py-6 text-[13.5px] text-ink-500 sm:px-7">
                    {method}
                  </div>
                </motion.div>
              ))}
            </div>
          </Reveal>

          {/* Certification badges */}
          <Reveal delay={0.25} className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {['Halal Indonesia', 'BPOM RI', 'Food Grade', 'Non-GMO'].map((badge) => (
              <div
                key={badge}
                className="flex flex-col items-center gap-2.5 rounded-xl border border-ink/8 bg-cream-100 px-3 py-5 text-center transition-colors duration-300 hover:border-emerald-500/35 hover:bg-emerald-50/50"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white ring-1 ring-ink/8">
                  <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 text-emerald-600" aria-hidden="true">
                    <path
                      d="M10 1.8 3.6 4.5v4.7c0 3.9 2.6 7.4 6.4 8.4 3.8-1 6.4-4.5 6.4-8.4V4.5L10 1.8Z"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinejoin="round"
                    />
                    <path
                      d="m7.5 10 1.9 1.9 3.4-3.6"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-[11.5px] font-semibold leading-tight text-ink-600">{badge}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

