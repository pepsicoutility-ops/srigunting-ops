import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useI18n } from '../i18n/LanguageContext.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'

/**
 * Facility section rendered as a site plan plus stage cards.
 *
 * The photographs previously shown here are being reshot (an aerial is in
 * progress). They remain in /assets/facility/ — to bring them back, drop an
 * <img src={`/assets/facility/${s.key}.jpg`}> into each stage card and swap
 * the plan tile for the aerial. The grid spans below are already sized for it.
 */

/** Zone rectangles in the plan's 340x420 viewBox, keyed to the stage cards. */
const ZONES = {
  'extraction-line': { x: 64, y: 24, w: 180, h: 70 },
  'press-line': { x: 64, y: 98, w: 180, h: 58 },
  'milling-room': { x: 256, y: 24, w: 68, h: 132 },
  'yard-drying': { x: 64, y: 172, w: 260, h: 118 },
  warehouse: { x: 64, y: 302, w: 170, h: 94 },
  office: { x: 246, y: 302, w: 78, h: 94 },
}

const STAGES = [
  { key: 'extraction-line', n: '01' },
  { key: 'press-line', n: '02' },
  { key: 'yard-drying', n: '03' },
  { key: 'milling-room', n: '04' },
  { key: 'warehouse', n: '05' },
  { key: 'office', n: '06' },
]

/** Line-art marks, one per stage. 24x24, stroked with currentColor. */
const ICONS = {
  // Extraction vessel with outlet pipe
  'extraction-line': (
    <>
      <path d="M6 8h12v9a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V8Z" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 8V5h6v3M18 11h3v6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  // Hydraulic press: two platens closing
  'press-line': (
    <>
      <rect x="4" y="4" width="16" height="3" rx="1" strokeWidth="1.5" />
      <rect x="4" y="17" width="16" height="3" rx="1" strokeWidth="1.5" />
      <path d="M12 9v5m0 0-2.2-2.2M12 14l2.2-2.2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  // Sun above drying racks
  'yard-drying': (
    <>
      <circle cx="12" cy="7" r="3" strokeWidth="1.5" />
      <path d="M12 1.5v1.5M5.6 7H4M20 7h-1.6M7.4 2.4l1 1M16.6 2.4l-1 1" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M3 15h18M3 18.5h18M3 22h18" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  // Mill hopper narrowing into a sieve
  'milling-room': (
    <>
      <path d="M4 4h16l-5.5 7.5V20l-5 2v-10.5L4 4Z" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M8 7h8" strokeWidth="1.3" strokeLinecap="round" />
    </>
  ),
  // Palletised finished goods
  warehouse: (
    <>
      <path d="M3 21h18" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="5" y="12" width="6" height="6" rx="0.5" strokeWidth="1.5" />
      <rect x="13" y="8" width="6" height="10" rx="0.5" strokeWidth="1.5" />
      <path d="M5 18h6M13 18h6" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  // Order document
  office: (
    <>
      <path d="M6 3h8l4 4v14H6V3Z" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M14 3v4h4M9.5 12h5M9.5 16h3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
}

function SitePlan({ active, onHover }) {
  const { t } = useI18n()
  const reduceMotion = useReducedMotion()

  return (
    <svg
      viewBox="0 0 340 420"
      className="h-full w-full"
      role="img"
      aria-label={`${t('facility.planLabel')} — ${t('facility.title')}`}
    >
      <defs>
        <pattern id="racks" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M0 10 L10 0" stroke="currentColor" strokeWidth="0.6" className="text-emerald-400/25" />
        </pattern>
      </defs>

      {/* Site perimeter */}
      <rect
        x="8"
        y="8"
        width="324"
        height="404"
        rx="10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="5 5"
        className="text-white/20"
      />

      {/* Access road with centre line */}
      <rect x="14" y="14" width="40" height="392" rx="5" className="fill-white/[0.03]" />
      <path
        d="M34 22v384"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="9 9"
        className="text-white/15"
      />

      {/* Drying yard hatch — drawn under the zone outlines */}
      <rect
        x={ZONES['yard-drying'].x}
        y={ZONES['yard-drying'].y}
        width={ZONES['yard-drying'].w}
        height={ZONES['yard-drying'].h}
        rx="3"
        fill="url(#racks)"
      />

      {/* Zones */}
      {STAGES.map((s) => {
        const z = ZONES[s.key]
        const on = active === s.key
        return (
          <g
            key={s.key}
            onMouseEnter={() => onHover(s.key)}
            onMouseLeave={() => onHover(null)}
            className="cursor-default"
          >
            <motion.rect
              x={z.x}
              y={z.y}
              width={z.w}
              height={z.h}
              rx="3"
              stroke="currentColor"
              strokeWidth={on ? 1.6 : 1}
              animate={{ opacity: on ? 1 : 0.8 }}
              transition={{ duration: 0.3 }}
              className={on ? 'fill-emerald-500/15 text-emerald-400' : 'fill-white/[0.07] text-white/45'}
            />
            <circle
              cx={z.x + 17}
              cy={z.y + 17}
              r="10.5"
              className={on ? 'fill-emerald-500' : 'fill-white/10'}
            />
            <text
              x={z.x + 17}
              y={z.y + 20.5}
              textAnchor="middle"
              className={`text-[10px] font-bold ${on ? 'fill-white' : 'fill-white/60'}`}
              style={{ fontFamily: 'inherit' }}
            >
              {s.n}
            </text>
          </g>
        )
      })}

      {/* Gate marker at the road entrance */}
      <g className="text-emerald-400">
        <motion.circle
          cx="34"
          cy="398"
          r="4"
          className="fill-emerald-500"
          animate={reduceMotion ? {} : { opacity: [1, 0.35, 1] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <path d="M22 398h-6M46 398h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </g>

      {/* North arrow */}
      <g className="text-white/40">
        <path d="M312 42v-22m0 0-5 6m5-6 5 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="312" y="56" textAnchor="middle" className="fill-white/40 text-[9px] font-semibold">
          N
        </text>
      </g>
    </svg>
  )
}

export default function Facility() {
  const { t } = useI18n()
  const [active, setActive] = useState(null)

  return (
    <section id="facility" className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(90%_60%_at_85%_100%,#0f3a25_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-grain opacity-[0.14] mix-blend-overlay" />
      </div>

      <div className="container-x">
        <SectionHeading
          eyebrow={t('facility.eyebrow')}
          title={t('facility.title')}
          lead={t('facility.lead')}
          tone="light"
          maxWidth="max-w-3xl"
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[196px]">
          {/* ---- Site plan ---- */}
          <Reveal
            y={34}
            duration={0.9}
            className="sm:col-span-2 lg:col-span-2 lg:row-span-3"
          >
            <figure className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-7">
              <figcaption className="flex items-baseline justify-between gap-4">
                <span className="eyebrow text-emerald-300">{t('facility.planLabel')}</span>
                <span className="text-[11px] text-white/35">{t('facility.planScale')}</span>
              </figcaption>

              <div className="mt-4 min-h-0 flex-1 text-white">
                <SitePlan active={active} onHover={setActive} />
              </div>

              <p className="mt-4 text-[12.5px] leading-relaxed text-white/45">{t('facility.planNote')}</p>
            </figure>
          </Reveal>

          {/* ---- Stage cards ----
              Each card animates itself rather than sitting inside a
              RevealGroup: the grid needs them as direct children, and a
              `display:contents` wrapper has no box for whileInView to
              observe, which would leave every card stuck at opacity 0. */}
          {STAGES.map((s, i) => {
            const on = active === s.key
            return (
                <motion.article
                  key={s.key}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '0px 0px -60px 0px' }}
                  transition={{ delay: i * 0.07, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  onMouseEnter={() => setActive(s.key)}
                  onMouseLeave={() => setActive(null)}
                  className={`group relative flex min-h-[176px] flex-col justify-between overflow-hidden rounded-2xl border p-5 transition-colors duration-300 ${
                    on
                      ? 'border-emerald-500/45 bg-emerald-500/[0.07]'
                      : 'border-white/10 bg-white/[0.035] hover:border-white/20'
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`absolute right-4 top-3 font-display text-4xl font-light transition-colors duration-300 ${
                      on ? 'text-emerald-400/25' : 'text-white/[0.07]'
                    }`}
                  >
                    {s.n}
                  </span>

                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors duration-300 ${
                      on ? 'bg-emerald-500 text-white' : 'bg-white/[0.06] text-emerald-300 ring-1 ring-white/10'
                    }`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5" aria-hidden="true">
                      {ICONS[s.key]}
                    </svg>
                  </span>

                  <div className="mt-5">
                    <h3 className="font-display text-[16.5px] font-normal leading-snug tracking-tight text-white">
                      {t(`facility.captions.${s.key}`)}
                    </h3>
                    <p className="mt-1.5 text-[11.5px] font-medium tracking-wide text-emerald-300/80">
                      {t(`facility.meta.${s.key}`)}
                    </p>
                  </div>
                </motion.article>
              )
            })}
        </div>
      </div>
    </section>
  )
}
