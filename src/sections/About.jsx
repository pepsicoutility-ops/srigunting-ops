import { motion } from 'framer-motion'
import { useI18n } from '../i18n/LanguageContext.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal, { RevealGroup, revealChild } from '../components/Reveal.jsx'

const PILLAR_ICONS = [
  // Process stability — waveform inside a frame
  <path key="a" d="M3 12h3l2.5-6 3 12L14 9l2 3h3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />,
  // Consistent quality — shield with check
  <path
    key="b"
    d="M11 2.5 4 5.5v5.2c0 4.3 2.9 8.2 7 9.3 4.1-1.1 7-5 7-9.3V5.5L11 2.5Zm-2.6 9.1 2.1 2.1 4.2-4.2"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  />,
  // Industrial reliability — stacked layers
  <path
    key="c"
    d="M11 3 3 7l8 4 8-4-8-4Zm8 8-8 4-8-4m16 4.5-8 4-8-4"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  />,
]

export default function About() {
  const { t } = useI18n()
  const body = t('about.body')
  const pillars = t('about.pillars')
  const brands = t('about.brands')

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
                  <p className="text-[15px] leading-[1.75] text-ink-500 sm:text-base">{paragraph}</p>
                </Reveal>
              ))}
            </div>

            {/* Brand ladder */}
            <Reveal delay={0.3} className="mt-12 max-w-2xl">
              <h3 className="font-display text-xl font-normal text-ink">{t('about.brandsTitle')}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">{t('about.brandsBody')}</p>

              <ul className="mt-7 space-y-0">
                {brands.map((brand, i) => (
                  <motion.li
                    key={brand.name}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '0px 0px -60px 0px' }}
                    transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="group flex items-baseline gap-5 border-t border-ink/10 py-4 last:border-b"
                  >
                    <span className="font-display text-sm text-emerald-600">0{i + 1}</span>
                    <span className="flex-1">
                      <span className="block text-[15px] font-semibold text-ink">{brand.name}</span>
                      <span className="mt-0.5 block text-[13px] text-ink-500">{brand.role}</span>
                    </span>
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ink/15 transition-colors duration-300 group-hover:bg-emerald-500" />
                  </motion.li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* ---- Visual + pillars ---- */}
          <div className="lg:col-span-6">
            <Reveal y={40} duration={0.9} className="relative">
              <div className="relative overflow-hidden rounded-2xl bg-ink shadow-[0_40px_80px_-40px_rgba(11,16,13,0.5)]">
                <img
                  src="/assets/facility/yard-drying.jpg"
                  alt={t('facility.captions.yard-drying')}
                  className="aspect-[4/3] w-full object-cover opacity-90 transition-transform duration-[1.2s] ease-out hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="eyebrow text-emerald-300">Randuagung · Singosari</span>
                  <p className="mt-2 font-display text-xl font-light text-white">Malang, East Java — Indonesia</p>
                </div>
              </div>

              {/* Floating logo badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -left-4 -top-6 hidden h-24 w-24 items-center justify-center rounded-full bg-white shadow-[0_20px_40px_-16px_rgba(11,16,13,0.4)] ring-1 ring-ink/5 sm:flex"
              >
                <img src="/assets/brand/logo.png" alt="" className="h-16 w-16 object-contain" />
              </motion.div>
            </Reveal>

            <RevealGroup className="mt-8 space-y-3" stagger={0.12}>
              {pillars.map((pillar, i) => (
                <motion.article
                  key={pillar.title}
                  variants={revealChild}
                  className="card-lift group flex gap-5 rounded-xl border border-ink/8 bg-white p-6"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 transition-colors duration-300 group-hover:bg-emerald-500 group-hover:text-white">
                    <svg viewBox="0 0 22 22" fill="none" stroke="currentColor" className="h-5 w-5">
                      {PILLAR_ICONS[i]}
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-[15px] font-semibold text-ink">{pillar.title}</h4>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-500">{pillar.body}</p>
                  </div>
                </motion.article>
              ))}
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  )
}
