import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useI18n } from '../i18n/LanguageContext.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Faq() {
  const { t } = useI18n()
  const items = t('faq.items')
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute -left-40 bottom-10 h-[26rem] w-[26rem] rounded-full bg-emerald-500/[0.05] blur-3xl"
      />

      <div className="container-x relative grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow={t('faq.eyebrow')}
            title={t('faq.title')}
            lead={t('faq.lead')}
            maxWidth="max-w-md"
          />

          <Reveal delay={0.28} className="mt-9 hidden lg:block">
            <img
              src="/assets/products/wisespoon-agar-pouch.png"
              alt={t('faq.imageAlt')}
              loading="lazy"
              className="w-full max-w-[19rem] object-contain drop-shadow-[0_25px_45px_rgba(11,16,13,0.18)]"
            />
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <Reveal y={30}>
            <ul className="overflow-hidden rounded-2xl border border-ink/10 bg-white">
              {items.map((item, i) => {
                const isOpen = open === i
                return (
                  <li key={item.q} className="border-b border-ink/8 last:border-0">
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? -1 : i)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${i}`}
                        className="flex w-full items-start gap-4 px-6 py-5 text-left transition-colors duration-300 hover:bg-cream-100 sm:px-8 sm:py-6"
                      >
                        <span
                          className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[12px] font-bold transition-colors duration-300 ${
                            isOpen ? 'bg-emerald-500 text-white' : 'bg-emerald-50 text-emerald-600'
                          }`}
                        >
                          {i + 1}
                        </span>

                        <span className="flex-1 font-display text-[17px] font-normal leading-snug tracking-tight text-ink sm:text-[19px]">
                          {item.q}
                        </span>

                        <motion.span
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="mt-1 shrink-0 text-ink-500"
                          aria-hidden="true"
                        >
                          <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4">
                            <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                          </svg>
                        </motion.span>
                      </button>
                    </h3>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-panel-${i}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-6 pl-[4.25rem] text-[14px] leading-[1.8] text-ink-500 sm:px-8 sm:pb-7 sm:pl-[4.75rem] sm:text-[14.5px]">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                )
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
