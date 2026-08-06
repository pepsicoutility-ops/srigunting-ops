import { motion } from 'framer-motion'
import { useI18n } from '../i18n/LanguageContext.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal, { RevealGroup, revealChild } from '../components/Reveal.jsx'

export default function Specifications() {
  const { t } = useI18n()
  const rows = t('specs.rows')
  const grades = t('specs.grades')
  const labels = t('specs.gradeLabels')
  const common = t('specs.common')
  const head = t('specs.tableHead')

  return (
    <section id="specifications" className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(100%_70%_at_15%_0%,#123a26_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-grain opacity-[0.14] mix-blend-overlay" />
      </div>

      <div className="container-x">
        {/* Heading row: the grades intro sits beside the section title so the
            top-right of the section is not left empty. */}
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow={t('specs.eyebrow')}
              title={t('specs.title')}
              lead={t('specs.lead')}
              tone="light"
              maxWidth="max-w-2xl"
            />
          </div>

          <Reveal delay={0.18} className="lg:col-span-5 lg:self-end lg:pb-1.5">
            <h3 className="font-display text-2xl font-light text-white">{t('specs.gradesTitle')}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/50">{t('specs.gradesLead')}</p>
          </Reveal>
        </div>

        {/* Content row: both columns stretch to a shared height so neither
            side leaves a gap at the bottom. */}
        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:items-stretch lg:gap-14">
          {/* ---- Parameter table ---- */}
          <Reveal y={34} className="flex flex-col lg:col-span-7">
            {/* flex-1 + h-full lets the rows absorb any extra column height
                instead of leaving a gap above the download button */}
            <div className="flex-1 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-sm">
              <table className="h-full w-full border-collapse text-left">
                <caption className="sr-only">{t('specs.title')}</caption>
                <thead>
                  <tr className="border-b border-white/10">
                    <th scope="col" className="px-5 py-4 text-[11px] font-bold uppercase tracking-eyebrow text-emerald-300 sm:px-7">
                      {head.parameter}
                    </th>
                    <th scope="col" className="px-5 py-4 text-[11px] font-bold uppercase tracking-eyebrow text-emerald-300 sm:px-7">
                      {head.value}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map(([param, value], i) => (
                    <motion.tr
                      key={param}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '0px 0px -40px 0px' }}
                      transition={{ delay: i * 0.055, duration: 0.5, ease: 'easeOut' }}
                      className="border-b border-white/[0.07] transition-colors duration-300 last:border-0 hover:bg-white/[0.05]"
                    >
                      <th
                        scope="row"
                        className="px-5 py-4 align-top text-[13.5px] font-medium text-white/55 sm:px-7 sm:text-sm"
                      >
                        {param}
                      </th>
                      <td className="px-5 py-4 align-top text-[13.5px] font-medium text-white sm:px-7 sm:text-sm">
                        {value}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Reveal delay={0.2} className="mt-6">
              <a
                href="/docs/qc-datasheet-checklist.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost-light w-full sm:w-auto"
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
                {t('specs.download')}
              </a>
            </Reveal>
          </Reveal>

          {/* ---- Grade cards ---- */}
          <div className="lg:col-span-5">
            <RevealGroup className="flex h-full flex-col justify-between gap-4" stagger={0.12}>
              {grades.map((grade, i) => (
                <motion.article
                  key={grade.code}
                  variants={revealChild}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-500 hover:border-emerald-500/40 hover:bg-white/[0.07]"
                >
                  {/* Gel-strength meter — 700 maps to ~78% of the 900 ceiling */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-gradient-to-r from-emerald-500 to-gold transition-transform duration-700"
                    style={{ transform: `scaleX(${0.78 + i * 0.11})` }}
                  />

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-display text-2xl font-normal tracking-tight text-white">{grade.code}</h4>
                      <p className="mt-1 text-[11px] font-semibold uppercase tracking-eyebrow text-emerald-400">
                        {labels.strength}
                      </p>
                      <p className="mt-1 text-lg font-semibold text-white">{grade.strength}</p>
                    </div>
                    <span className="rounded-lg bg-emerald-500/10 px-3 py-2 text-center ring-1 ring-emerald-500/25">
                      <span className="block text-[9px] font-bold uppercase tracking-wider text-emerald-300">
                        {labels.mesh}
                      </span>
                      <span className="mt-0.5 block text-[11px] font-semibold text-white">{common.mesh}</span>
                    </span>
                  </div>

                  <dl className="mt-5 grid grid-cols-[auto,1fr] gap-x-4 gap-y-2 border-t border-white/10 pt-4 text-[12.5px]">
                    <dt className="text-white/45">{labels.moisture}</dt>
                    <dd className="text-white/85">{common.moisture}</dd>
                    <dt className="text-white/45">{labels.use}</dt>
                    <dd className="text-white/85">{grade.use}</dd>
                  </dl>
                </motion.article>
              ))}
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  )
}
