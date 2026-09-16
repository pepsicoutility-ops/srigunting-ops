import { motion } from 'framer-motion'
import { useI18n } from '../i18n/LanguageContext.jsx'
import Reveal, { RevealGroup, revealChild } from '../components/Reveal.jsx'

const sectionTitle = 'font-display text-[clamp(1.6rem,2.4vw,2.25rem)] font-light tracking-tight text-white'

export default function VisionMission() {
  const { t } = useI18n()
  const commitment = t('visionMission.commitment')
  const mission = t('visionMission.mission')
  // Only the Indonesian dictionary carries a translation of the vision.
  const visionTranslation = t('visionMission.visionTranslation')

  return (
    <section id="vision" className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(95%_70%_at_20%_0%,#123a26_0%,transparent_62%)]" />
        <div className="absolute inset-0 bg-grain opacity-[0.14] mix-blend-overlay" />
      </div>

      <div className="container-x">
        {/* ---- Commitment ---- */}
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-emerald-400" />
            <h2 className={sectionTitle}>{t('visionMission.commitmentTitle')}</h2>
          </div>
        </Reveal>

        <RevealGroup className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5" stagger={0.08}>
          {commitment.map((item, i) => (
            <motion.article
              key={item.title}
              variants={revealChild}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors duration-300 hover:border-emerald-500/40 hover:bg-white/[0.07]"
            >
              <span className="font-display text-[13px] text-emerald-400">0{i + 1}</span>
              <h3 className="mt-4 text-[12px] font-semibold uppercase tracking-eyebrow text-white">{item.title}</h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-white/65 transition-colors duration-300 group-hover:text-white/85">
                {item.body}
              </p>
            </motion.article>
          ))}
        </RevealGroup>

        <div className="mt-20 grid gap-14 border-t border-white/10 pt-16 sm:mt-24 lg:grid-cols-12 lg:gap-16">
          {/* ---- Vision ---- */}
          <div className="lg:col-span-5">
            <Reveal delay={0.08}>
              <h2 className={sectionTitle}>{t('visionMission.visionTitle')}</h2>
            </Reveal>

            <Reveal delay={0.16}>
              <figure className="mt-7 rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm">
                <svg
                  className="h-7 w-7 text-emerald-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M1.5 12S5.5 5 12 5s10.5 7 10.5 7-4 7-10.5 7S1.5 12 1.5 12Z"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="12" r="3.2" strokeWidth="1.5" />
                </svg>
                <blockquote className="mt-5 font-display text-[clamp(1.25rem,1.9vw,1.75rem)] font-light italic leading-[1.4] text-white">
                  {t('visionMission.vision')}
                </blockquote>
                {visionTranslation && (
                  <p className="mt-5 border-t border-white/10 pt-5 text-[14.5px] leading-relaxed text-white/60">
                    {visionTranslation}
                  </p>
                )}
              </figure>
            </Reveal>
          </div>

          {/* ---- Mission ---- */}
          <div className="lg:col-span-7">
            <Reveal delay={0.12}>
              <h2 className={sectionTitle}>{t('visionMission.missionTitle')}</h2>
            </Reveal>

            <RevealGroup className="mt-7 space-y-0" stagger={0.1}>
              {mission.map((item, i) => (
                <motion.div
                  key={item}
                  variants={revealChild}
                  className="group flex items-start gap-5 border-t border-white/10 py-5 last:border-b"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-500/10 font-display text-[13px] text-emerald-300 transition-colors duration-300 group-hover:bg-emerald-500 group-hover:text-white">
                    {i + 1}
                  </span>
                  <p className="text-[14.5px] leading-relaxed text-white/75 transition-colors duration-300 group-hover:text-white sm:text-[15.5px]">
                    {item}
                  </p>
                </motion.div>
              ))}
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  )
}
