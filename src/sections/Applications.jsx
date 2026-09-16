import { motion } from 'framer-motion'
import { useI18n } from '../i18n/LanguageContext.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal, { RevealGroup, revealChild } from '../components/Reveal.jsx'

const IMAGES = [
  '/assets/applications/dessert.jpg',
  '/assets/applications/beverage.jpg',
  '/assets/applications/confectionery.jpg',
  '/assets/applications/technical.jpg',
]

/** "Our Product — Agar-Agar": what agar-agar is and the industries it serves. */
export default function Applications() {
  const { t } = useI18n()
  const items = t('applications.items')
  const alts = t('applications.alts')

  return (
    <section id="applications" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* ---- Copy + industry list ---- */}
          <div className="lg:order-2 lg:col-span-7">
            <SectionHeading
              eyebrow={t('applications.eyebrow')}
              title={t('applications.title')}
              lead={t('applications.lead')}
              maxWidth="max-w-2xl"
            />

            <Reveal delay={0.2}>
              <p className="mt-8 max-w-2xl text-[15px] leading-[1.8] text-ink-500 sm:text-[16.5px]">
                {t('applications.intro')}
              </p>
            </Reveal>

            <RevealGroup role="list" className="mt-7 grid gap-3 sm:grid-cols-2" stagger={0.06}>
              {items.map((item, i) => (
                <motion.div
                  key={item}
                  role="listitem"
                  variants={revealChild}
                  className="card-lift group flex items-center gap-4 rounded-xl border border-ink/8 bg-white px-5 py-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[11px] font-bold text-emerald-600 transition-colors duration-300 group-hover:bg-emerald-500 group-hover:text-white">
                    0{i + 1}
                  </span>
                  <span className="text-[14.5px] font-semibold leading-snug text-ink">{item}</span>
                </motion.div>
              ))}
            </RevealGroup>

            <Reveal y={30} delay={0.1}>
              <p className="mt-8 rounded-2xl border-l-2 border-emerald-500 bg-white p-7 text-[15px] leading-[1.8] text-ink-600 sm:text-[16px]">
                {t('applications.closing')}
              </p>
            </Reveal>
          </div>

          {/* ---- Photo mosaic: two columns, the right one dropped for a staggered edge ---- */}
          <div className="lg:order-1 lg:col-span-5">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:sticky lg:top-28">
              {[0, 1].map((column) => (
                <div key={column} className={`space-y-3 sm:space-y-4 ${column === 1 ? 'pt-8 sm:pt-12' : ''}`}>
                  {IMAGES.map((src, i) =>
                    i % 2 === column ? (
                      <Reveal key={src} y={34} delay={i * 0.08} className="overflow-hidden rounded-2xl bg-ink">
                        <img
                          src={src}
                          alt={alts[i]}
                          loading="lazy"
                          className="aspect-[4/5] w-full object-cover transition-transform duration-[1.1s] ease-out hover:scale-105"
                        />
                      </Reveal>
                    ) : null,
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
