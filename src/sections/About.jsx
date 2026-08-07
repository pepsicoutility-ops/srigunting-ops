import { motion, useReducedMotion } from 'framer-motion'
import { useI18n } from '../i18n/LanguageContext.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal, { RevealGroup, revealChild } from '../components/Reveal.jsx'
import { COMPANY } from '../data/company.js'

const ICONS = [
  // Quality consistency — shield with check
  <path
    key="a"
    d="M11 2.5 4 5.5v5.2c0 4.3 2.9 8.2 7 9.3 4.1-1.1 7-5 7-9.3V5.5L11 2.5Zm-2.6 9.1 2.1 2.1 4.2-4.2"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  />,
  // Process stability — waveform
  <path key="b" d="M3 12h3l2.5-6 3 12L14 9l2 3h3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />,
  // Sustainable supply — leaf
  <path
    key="c"
    d="M4 18C3 12 6.5 5 18 4c1 8-3.5 13-9 13-1.8 0-3.4-.4-5-1Zm0 0c2-4 5-7 9.5-9"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  />,
]

export default function About() {
  const { t } = useI18n()
  const reduceMotion = useReducedMotion()
  const body = t('about.body')
  const highlights = t('about.highlights')

  return (
    <section id="about" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute -left-40 top-24 h-[30rem] w-[30rem] rounded-full bg-emerald-500/[0.05] blur-3xl"
      />

      <div className="container-x relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeading eyebrow={t('about.eyebrow')} title={t('about.title')} maxWidth="max-w-2xl" />

            <div className="mt-8 max-w-2xl space-y-5">
              {body.map((paragraph, i) => (
                <Reveal key={i} delay={0.2 + i * 0.08}>
                  <p className="text-[15px] leading-[1.8] text-ink-500 sm:text-[16.5px]">{paragraph}</p>
                </Reveal>
              ))}
            </div>

            <RevealGroup className="mt-10 max-w-2xl space-y-3" stagger={0.12}>
              {highlights.map((item, i) => (
                <motion.article
                  key={item.title}
                  variants={revealChild}
                  className="card-lift group flex gap-5 rounded-xl border border-ink/8 bg-white p-6"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 transition-colors duration-300 group-hover:bg-emerald-500 group-hover:text-white">
                    <svg viewBox="0 0 22 22" fill="none" stroke="currentColor" className="h-5 w-5">
                      {ICONS[i]}
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-[15px] font-semibold text-ink">{item.title}</h3>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-500">{item.body}</p>
                  </div>
                </motion.article>
              ))}
            </RevealGroup>
          </div>

          {/* ---- Facility visual ---- */}
          <div className="lg:col-span-6">
            {/* Branded panel standing in for the facility photo until a
                final image is chosen. Swap the inner block back to an <img>
                when the photo is ready — the frame and caption stay as-is. */}
            <Reveal y={40} duration={0.9} className="relative lg:sticky lg:top-28">
              <div className="relative isolate flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-ink shadow-[0_40px_80px_-40px_rgba(11,16,13,0.5)]">
                <div aria-hidden="true" className="absolute inset-0 -z-10">
                  <div className="absolute inset-0 bg-[radial-gradient(110%_85%_at_50%_18%,#123a26_0%,#0B100D_62%)]" />
                  <div className="absolute inset-0 bg-grain opacity-[0.16] mix-blend-overlay" />
                </div>

                {/* Concentric rings echoing the seaweed circle in the mark */}
                <div aria-hidden="true" className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2">
                  {[220, 330, 450].map((size, i) => (
                    <motion.div
                      key={size}
                      animate={reduceMotion ? {} : { rotate: i % 2 === 0 ? 360 : -360 }}
                      transition={{ duration: 80 + i * 26, repeat: Infinity, ease: 'linear' }}
                      style={{ width: size, height: size, marginLeft: -size / 2, marginTop: -size / 2 }}
                      className="absolute rounded-full border border-dashed border-white/[0.09]"
                    />
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.86 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="relative -mt-8 flex flex-col items-center px-8 text-center"
                >
                  <span className="flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-[0_24px_50px_-18px_rgba(0,0,0,0.6)] sm:h-40 sm:w-40">
                    <img
                      src="/assets/brand/logo.png"
                      alt={COMPANY.legalName}
                      className="h-24 w-24 object-contain sm:h-28 sm:w-28"
                    />
                  </span>
                  <p className="mt-6 font-display text-2xl font-light tracking-tight text-white sm:text-[28px]">
                    {COMPANY.legalName}
                  </p>
                  <span className="mt-2 text-[10px] font-semibold uppercase tracking-eyebrow text-emerald-400">
                    Agar &amp; Seaweed Extract
                  </span>
                </motion.div>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="eyebrow text-emerald-300">{t('about.locationLabel')}</span>
                  <p className="mt-2 font-display text-xl font-light text-white">{t('about.locationValue')}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
