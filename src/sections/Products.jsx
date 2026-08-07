import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useI18n } from '../i18n/LanguageContext.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import { PRODUCTS } from '../data/company.js'

const VARIANTS = [
  { src: '/assets/products/var-6g-putih.jpg', label: '6 g · Plain' },
  { src: '/assets/products/var-6g-hijau.jpg', label: '6 g · Green' },
  { src: '/assets/products/var-6g-merah.jpg', label: '6 g · Red' },
  { src: '/assets/products/var-6g-coklat.jpg', label: '6 g · Brown' },
  { src: '/assets/products/var-8g-hijau.jpg', label: '8 g · Green' },
  { src: '/assets/products/var-8g-merah.jpg', label: '8 g · Red' },
  { src: '/assets/products/var-8g-coklat.jpg', label: '8 g · Brown' },
]

const FILTERS = ['all', 'agar', 'jelly']

export default function Products() {
  const { t } = useI18n()
  const [filter, setFilter] = useState('all')
  const labels = t('products.labels')

  const visible = PRODUCTS.filter((p) => filter === 'all' || p.category === filter)

  return (
    <section id="products" className="relative bg-white py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow={t('products.eyebrow')}
          title={t('products.title')}
          lead={t('products.lead')}
          align="center"
          maxWidth="max-w-3xl"
        />

        {/* ---- Category filter, mirroring the old site's product filter ---- */}
        <Reveal delay={0.16} className="mt-10 flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-1 rounded-full border border-ink/10 bg-cream-100 p-1.5">
            {FILTERS.map((key) => {
              const active = filter === key
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setFilter(key)}
                  aria-pressed={active}
                  // z-10 keeps the sliding pill (-z-10) inside this button's
                  // stacking context instead of behind the parent background
                  className={`relative z-10 rounded-full px-4 py-2 text-[12.5px] font-semibold transition-colors duration-300 sm:px-5 sm:text-[13px] ${
                    active ? 'text-white' : 'text-ink-500 hover:text-ink'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="product-filter-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-emerald-500"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  {t(`products.filters.${key}`)}
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* ---- Product grid ---- */}
        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((product) => {
              const copy = t(`products.items.${product.id}`)
              return (
                <motion.article
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.94, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className={`card-lift group flex flex-col overflow-hidden rounded-2xl border border-ink/8 bg-cream-100 ${
                    product.featured ? 'sm:col-span-2 xl:col-span-1' : ''
                  }`}
                >
                  {/* Media panel */}
                  <div className={`relative overflow-hidden bg-gradient-to-br ${product.tint} p-8 sm:p-10`}>
                    <span className="absolute left-5 top-5 z-10 rounded-full bg-ink/85 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                      {copy.category}
                    </span>
                    <div className="flex h-52 items-center justify-center sm:h-60 xl:h-64">
                      <img
                        src={product.image}
                        alt={copy.name}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.22)] transition-transform duration-[900ms] ease-out group-hover:-translate-y-2 group-hover:scale-[1.06]"
                      />
                    </div>
                  </div>

                  {/* Copy */}
                  <div className="flex flex-1 flex-col p-7 sm:p-8">
                    <h3 className="font-display text-[21px] font-normal leading-snug tracking-tight text-ink">
                      {copy.name}
                    </h3>
                    <p className="mt-3 flex-1 text-[14px] leading-relaxed text-ink-500">{copy.desc}</p>

                    <dl className="mt-6 space-y-2 border-t border-ink/10 pt-5 text-[12.5px]">
                      {[
                        [labels.weight, copy.weight],
                        [labels.packaging, copy.packaging],
                        [labels.variant, copy.variant],
                      ].map(([label, value]) => (
                        <div key={label} className="flex gap-3">
                          <dt className="w-24 shrink-0 text-ink-500/70">{label}</dt>
                          <dd className="font-medium text-ink">{value}</dd>
                        </div>
                      ))}
                    </dl>

                    <a
                      href="#contact"
                      className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-emerald-600 transition-colors hover:text-emerald-700"
                    >
                      {t('products.cta')}
                      <svg
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </motion.article>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* ---- Sachet colour variants ---- */}
        <div className="mt-20">
          <Reveal className="flex items-center gap-4">
            <h3 className="shrink-0 font-display text-lg font-normal text-ink sm:text-xl">
              {t('products.variantsTitle')}
            </h3>
            <span className="h-px flex-1 bg-ink/10" />
          </Reveal>

          {/* Label artwork is ~2.5:1, so it is shown whole in a marquee rather
              than cropped into a grid. Track is duplicated for a seamless loop
              and pauses on hover so a sheet can be read. */}
          <Reveal delay={0.1} className="group relative mt-7">
            <div className="mask-fade-x -mx-5 flex overflow-hidden sm:mx-0">
              {[0, 1].map((copy) => (
                <ul
                  key={copy}
                  aria-hidden={copy === 1 || undefined}
                  className="flex shrink-0 animate-marquee-slow items-end gap-4 pr-4 group-hover:[animation-play-state:paused] sm:gap-6 sm:pr-6"
                >
                  {VARIANTS.map((variant) => (
                    <li key={variant.label} className="shrink-0">
                      <figure>
                        <div className="overflow-hidden rounded-xl border border-ink/8 bg-white p-2 shadow-[0_10px_30px_-18px_rgba(11,16,13,0.45)]">
                          <img
                            src={variant.src}
                            alt={variant.label}
                            loading="lazy"
                            className="h-32 w-auto max-w-none object-contain sm:h-40 lg:h-44"
                          />
                        </div>
                        <figcaption className="mt-2.5 text-[11.5px] font-medium tracking-wide text-ink-500">
                          {variant.label}
                        </figcaption>
                      </figure>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
