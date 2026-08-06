import { motion } from 'framer-motion'
import { useI18n } from '../i18n/LanguageContext.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal, { RevealGroup, revealChild } from '../components/Reveal.jsx'

export default function ExportReadiness() {
  const { t } = useI18n()
  const items = t('exportSec.items')

  return (
    <section id="export" className="relative bg-white py-24 sm:py-32">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow={t('exportSec.eyebrow')}
              title={t('exportSec.title')}
              lead={t('exportSec.lead')}
              maxWidth="max-w-lg"
            />

            <Reveal delay={0.24}>
              <div className="mt-10 max-w-lg rounded-2xl bg-ink p-7 text-white">
                <h3 className="eyebrow text-emerald-300">{t('exportSec.packagingTitle')}</h3>
                <p className="mt-4 text-[14px] leading-relaxed text-white/70">{t('exportSec.packagingBody')}</p>

                <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-6">
                  <img
                    src="/assets/products/carton-6g.png"
                    alt=""
                    loading="lazy"
                    className="h-14 w-auto object-contain"
                  />
                  <img
                    src="/assets/products/bulk-25kg.png"
                    alt=""
                    loading="lazy"
                    className="h-16 w-auto object-contain"
                  />
                  <p className="text-[12px] leading-snug text-white/50">
                    Retail carton &amp; 25 kg industrial sack
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ---- Checklist ---- */}
          <div className="lg:col-span-7">
            <RevealGroup className="grid gap-3 sm:grid-cols-2" stagger={0.075}>
              {items.map((item, i) => (
                <motion.div
                  key={item}
                  variants={revealChild}
                  className="group flex items-start gap-4 rounded-xl border border-ink/8 bg-cream-100 p-5 transition-all duration-400 hover:border-emerald-500/40 hover:bg-emerald-50/40"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-emerald-500 text-white shadow-[0_4px_12px_-4px_rgba(15,169,88,0.8)]">
                    <svg viewBox="0 0 14 14" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
                      <motion.path
                        d="m3 7.2 2.6 2.6L11 4.4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.075, duration: 0.45, ease: 'easeOut' }}
                      />
                    </svg>
                  </span>
                  <span className="text-[14px] font-medium leading-snug text-ink-600 transition-colors group-hover:text-ink">
                    {item}
                  </span>
                </motion.div>
              ))}
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  )
}

