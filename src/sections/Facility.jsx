import { motion } from 'framer-motion'
import { useI18n } from '../i18n/LanguageContext.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { RevealGroup, revealChild } from '../components/Reveal.jsx'

/**
 * `span` drives the bento layout at lg and up. Six tiles fill a 4-column
 * grid exactly: 2+2 / 1+1 / 2+2 across three rows.
 */
const GALLERY = [
  { key: 'extraction-line', src: '/assets/facility/extraction-line.jpg', span: 'lg:col-span-2 lg:row-span-2' },
  { key: 'yard-drying', src: '/assets/facility/yard-drying.jpg', span: 'lg:col-span-2' },
  { key: 'milling-room', src: '/assets/facility/milling-room.jpg', span: '' },
  { key: 'press-line', src: '/assets/facility/press-line.jpg', span: '' },
  { key: 'warehouse', src: '/assets/facility/warehouse.jpg', span: 'lg:col-span-2' },
  { key: 'office', src: '/assets/facility/office.jpg', span: 'lg:col-span-2' },
]

export default function Facility() {
  const { t } = useI18n()

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

        <RevealGroup
          className="mt-16 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:gap-4 lg:grid-cols-4"
          stagger={0.09}
        >
          {GALLERY.map(({ key, src, span }) => (
            <motion.figure
              key={key}
              variants={revealChild}
              className={`group relative overflow-hidden rounded-xl bg-ink-800 ring-1 ring-white/10 ${span}`}
            >
              <img
                src={src}
                alt={t(`facility.captions.${key}`)}
                loading="lazy"
                className="h-full w-full object-cover opacity-80 transition-[transform,opacity] duration-[1.1s] ease-out group-hover:scale-110 group-hover:opacity-100"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-1 p-4 text-[11.5px] font-medium leading-snug text-white/0 transition-all duration-500 group-hover:translate-y-0 group-hover:text-white/90 sm:text-xs">
                {t(`facility.captions.${key}`)}
              </figcaption>
            </motion.figure>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
