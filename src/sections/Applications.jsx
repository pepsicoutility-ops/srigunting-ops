import { motion } from 'framer-motion'
import { useI18n } from '../i18n/LanguageContext.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { RevealGroup, revealChild } from '../components/Reveal.jsx'

const IMAGES = [
  '/assets/applications/dessert.jpg',
  '/assets/applications/beverage.jpg',
  '/assets/applications/confectionery.jpg',
  '/assets/applications/technical.jpg',
]

export default function Applications() {
  const { t } = useI18n()
  const items = t('applications.items')

  return (
    <section id="applications" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow={t('applications.eyebrow')}
          title={t('applications.title')}
          lead={t('applications.lead')}
          align="center"
          maxWidth="max-w-3xl"
        />

        <RevealGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              variants={revealChild}
              className="group relative isolate overflow-hidden rounded-2xl bg-ink"
            >
              <img
                src={IMAGES[i]}
                alt=""
                loading="lazy"
                className="absolute inset-0 -z-10 h-full w-full object-cover opacity-75 transition-[transform,opacity] duration-[1.1s] ease-out group-hover:scale-110 group-hover:opacity-90"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/70 to-ink/10" />

              <div className="flex min-h-[22rem] flex-col justify-end p-7 lg:min-h-[26rem]">
                <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-[11px] font-bold text-white/80 transition-colors duration-500 group-hover:border-emerald-400 group-hover:bg-emerald-500 group-hover:text-white">
                  0{i + 1}
                </span>
                <h3 className="font-display text-[22px] font-normal leading-tight tracking-tight text-white">
                  {item.title}
                </h3>
                {/* Body reveals on hover at desktop widths; always visible on touch */}
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-white/65 lg:max-h-0 lg:overflow-hidden lg:opacity-0 lg:transition-all lg:duration-500 lg:group-hover:max-h-40 lg:group-hover:opacity-100">
                  {item.body}
                </p>
                <span
                  aria-hidden="true"
                  className="mt-5 h-px w-10 origin-left bg-emerald-500 transition-transform duration-500 group-hover:scale-x-[3.5]"
                />
              </div>
            </motion.article>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
