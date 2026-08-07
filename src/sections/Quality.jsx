import { motion } from 'framer-motion'
import { useI18n } from '../i18n/LanguageContext.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal, { RevealGroup, revealChild } from '../components/Reveal.jsx'

const ICONS = [
  // Internal quality testing — flask
  <path
    key="a"
    d="M9 2.5h6M10.5 2.5v6.2L5.2 17.4A1.6 1.6 0 0 0 6.6 20h10.8a1.6 1.6 0 0 0 1.4-2.6l-5.3-8.7V2.5"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />,
  // Batch consistency — repeating layers
  <path
    key="b"
    d="M12 3 4 7l8 4 8-4-8-4Zm8 8-8 4-8-4m16 4.5-8 4-8-4"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />,
  // Scalable production — ascending bars
  <path
    key="c"
    d="M4 20V13m5 7V8m5 12V11m5 9V4"
    strokeWidth="1.7"
    strokeLinecap="round"
  />,
]

const BADGES = ['BPOM RI', 'Halal Indonesia', 'Food Grade', 'Gracilaria']

export default function Quality() {
  const { t } = useI18n()
  const items = t('quality.items')

  return (
    <section id="quality" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow={t('quality.eyebrow')}
          title={t('quality.title')}
          lead={t('quality.lead')}
          align="center"
          maxWidth="max-w-3xl"
        />

        {/* ---- Three capability pillars ---- */}
        <RevealGroup className="mt-16 grid gap-5 md:grid-cols-3" stagger={0.12}>
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              variants={revealChild}
              className="card-lift group relative overflow-hidden rounded-2xl border border-ink/8 bg-cream-100 p-8"
            >
              <span className="absolute right-6 top-6 font-display text-5xl font-light text-ink/[0.06] transition-colors duration-500 group-hover:text-emerald-500/15">
                0{i + 1}
              </span>

              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-emerald-600 ring-1 ring-ink/8 transition-colors duration-300 group-hover:bg-emerald-500 group-hover:text-white group-hover:ring-emerald-500">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6">
                  {ICONS[i]}
                </svg>
              </span>

              <h3 className="mt-6 font-display text-xl font-normal tracking-tight text-ink">{item.title}</h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-ink-500">{item.body}</p>
            </motion.article>
          ))}
        </RevealGroup>

        {/* ---- Compliance + packaging ---- */}
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <Reveal y={30}>
            <figure className="h-full rounded-2xl border-l-2 border-emerald-500 bg-cream-100 p-8">
              <figcaption className="eyebrow text-emerald-600">{t('quality.statementTitle')}</figcaption>
              <blockquote className="mt-4 font-display text-[18px] font-light italic leading-relaxed text-ink">
                &ldquo;{t('quality.statement')}&rdquo;
              </blockquote>
            </figure>
          </Reveal>

          <Reveal y={30} delay={0.1}>
            <div className="h-full rounded-2xl bg-ink p-8 text-white">
              <h3 className="eyebrow text-emerald-300">{t('quality.packagingTitle')}</h3>
              <p className="mt-4 text-[14px] leading-relaxed text-white/70">{t('quality.packagingBody')}</p>

              <div className="mt-7 flex flex-wrap gap-2 border-t border-white/10 pt-6">
                {BADGES.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.07] px-3 py-1.5 text-[11.5px] font-semibold text-white/85 ring-1 ring-white/10"
                  >
                    <svg viewBox="0 0 14 14" fill="none" className="h-3 w-3 text-emerald-400" aria-hidden="true">
                      <path d="m3 7.2 2.6 2.6L11 4.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
