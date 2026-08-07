import { motion } from 'framer-motion'
import { useI18n } from '../i18n/LanguageContext.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal, { RevealGroup, revealChild } from '../components/Reveal.jsx'

/** Bar width per grade, scaled against the 1200 g/cm² ceiling. */
const METER = [1, 0.71, 0.58]

export default function Specifications() {
  const { t } = useI18n()
  const rows = t('specs.rows')
  const grades = t('specs.grades')
  const labels = t('specs.gradeLabels')
  const head = t('specs.tableHead')

  return (
    <section id="specifications" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute -right-40 top-20 h-[28rem] w-[28rem] rounded-full bg-gold/[0.07] blur-3xl"
      />

      <div className="container-x relative">
        {/* Heading row: the spec-table intro sits beside the section title so
            the top-right of the section is not left empty. */}
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow={t('specs.eyebrow')}
              title={t('specs.title')}
              lead={t('specs.lead')}
              maxWidth="max-w-2xl"
            />
          </div>

          <Reveal delay={0.18} className="lg:col-span-5 lg:self-end lg:pb-1.5">
            <h3 className="font-display text-2xl font-light text-ink">{t('specs.tableTitle')}</h3>
            <div className="mt-4 inline-flex items-center gap-2.5 rounded-full border border-ink/10 bg-white px-4 py-2">
              <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 text-emerald-600" aria-hidden="true">
                <path d="M3 6.5 10 3l7 3.5v7L10 17l-7-3.5v-7Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
              </svg>
              <span className="text-[12.5px] font-semibold text-ink-600">
                {labels.packing}: {t('specs.packing')}
              </span>
            </div>
          </Reveal>
        </div>

        {/* ---- Grade cards ---- */}
        <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-3" stagger={0.12}>
          {grades.map((grade, i) => (
            <motion.article
              key={grade.code}
              variants={revealChild}
              className="card-lift group relative overflow-hidden rounded-2xl border border-ink/8 bg-white p-7"
            >
              <span className="eyebrow text-emerald-600">{labels.tier}</span>
              <h3 className="mt-2 font-display text-[32px] font-normal leading-none tracking-tight text-ink">
                {grade.code}
              </h3>
              <p className="mt-2 text-[12.5px] font-medium text-ink-500">{grade.tier}</p>

              <p className="mt-7 text-[11px] font-semibold uppercase tracking-eyebrow text-ink-500/70">
                {labels.strength}
              </p>
              <p className="mt-1.5 font-display text-xl font-normal text-ink">{grade.strength}</p>

              {/* Relative gel-strength meter */}
              <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-ink/8">
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: METER[i] }}
                  viewport={{ once: true, margin: '0px 0px -60px 0px' }}
                  transition={{ delay: 0.25 + i * 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="block h-full origin-left rounded-full bg-gradient-to-r from-emerald-500 to-gold"
                />
              </div>
            </motion.article>
          ))}
        </RevealGroup>

        {/* ---- Parameter table ---- */}
        <Reveal y={34} className="mt-6">
          <div className="overflow-hidden rounded-2xl border border-ink/8 bg-white">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">{t('specs.tableTitle')}</caption>
              <thead>
                <tr className="border-b border-ink/10 bg-cream-100">
                  <th scope="col" className="px-5 py-4 text-[11px] font-bold uppercase tracking-eyebrow text-emerald-600 sm:px-7">
                    {head.parameter}
                  </th>
                  <th scope="col" className="px-5 py-4 text-[11px] font-bold uppercase tracking-eyebrow text-emerald-600 sm:px-7">
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
                    className="border-b border-ink/[0.07] transition-colors duration-300 last:border-0 hover:bg-cream-100"
                  >
                    <th scope="row" className="px-5 py-4 align-top text-[13.5px] font-medium text-ink-500 sm:px-7 sm:text-sm">
                      {param}
                    </th>
                    <td className="px-5 py-4 align-top text-[13.5px] font-semibold text-ink sm:px-7 sm:text-sm">
                      {value}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
