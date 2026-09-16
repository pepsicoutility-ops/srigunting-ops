import { motion } from 'framer-motion'
import { useI18n } from '../i18n/LanguageContext.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { RevealGroup, revealChild } from '../components/Reveal.jsx'

/** "Why Sri Gunting Pratama?" — the six reasons from the company profile. */
export default function WhyUs() {
  const { t } = useI18n()
  const items = t('why.items')

  return (
    <section id="why" className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(90%_65%_at_80%_0%,#10402a_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-grain opacity-[0.14] mix-blend-overlay" />
      </div>

      <div className="container-x">
        <SectionHeading title={t('why.title')} tone="light" align="center" maxWidth="max-w-3xl" />

        <RevealGroup className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              variants={revealChild}
              className="group relative bg-ink p-8 transition-colors duration-500 hover:bg-ink-800 sm:p-10"
            >
              <span className="font-display text-5xl font-light text-white/15 transition-colors duration-500 group-hover:text-emerald-400">
                0{i + 1}
              </span>
              <h3 className="mt-6 text-[13px] font-semibold uppercase tracking-eyebrow text-emerald-300">{item.title}</h3>
              <p className="mt-3.5 text-[14.5px] leading-relaxed text-white/65 transition-colors duration-300 group-hover:text-white/85">
                {item.body}
              </p>
            </motion.article>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
