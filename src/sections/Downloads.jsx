import { motion } from 'framer-motion'
import { useI18n } from '../i18n/LanguageContext.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { RevealGroup, revealChild } from '../components/Reveal.jsx'
import { DOWNLOADS } from '../data/company.js'

export default function Downloads() {
  const { t } = useI18n()

  return (
    <section id="downloads" className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(90%_65%_at_80%_0%,#0f3a25_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-grain opacity-[0.14] mix-blend-overlay" />
      </div>

      <div className="container-x">
        <SectionHeading
          eyebrow={t('downloads.eyebrow')}
          title={t('downloads.title')}
          lead={t('downloads.lead')}
          tone="light"
          align="center"
          maxWidth="max-w-2xl"
        />

        <RevealGroup className="mt-14 grid gap-5 md:grid-cols-3" stagger={0.12}>
          {DOWNLOADS.map((doc) => {
            const copy = t(`downloads.items.${doc.key}`)
            return (
              <motion.a
                key={doc.key}
                href={doc.file}
                target="_blank"
                rel="noreferrer"
                variants={revealChild}
                className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.035] p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-emerald-500/40 hover:bg-white/[0.07]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/25 transition-colors duration-300 group-hover:bg-emerald-500 group-hover:text-white">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
                    <path
                      d="M14 2.5H7a1.8 1.8 0 0 0-1.8 1.8v15.4A1.8 1.8 0 0 0 7 21.5h10a1.8 1.8 0 0 0 1.8-1.8V7.3L14 2.5Z"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path d="M13.8 2.6v4.8h4.9" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                </span>

                <h3 className="mt-6 font-display text-[19px] font-normal leading-snug tracking-tight text-white">
                  {copy.title}
                </h3>
                <p className="mt-2.5 flex-1 text-[13.5px] leading-relaxed text-white/55">{copy.desc}</p>

                <span className="mt-7 inline-flex items-center gap-2 text-[13px] font-semibold text-emerald-400 transition-colors group-hover:text-emerald-300">
                  <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M8 2v8m0 0 3.2-3.2M8 10 4.8 6.8M2.5 12.5h11"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {t('downloads.button')}
                </span>
              </motion.a>
            )
          })}
        </RevealGroup>
      </div>
    </section>
  )
}
