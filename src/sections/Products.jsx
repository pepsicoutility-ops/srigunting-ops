import { motion } from 'framer-motion'
import { useI18n } from '../i18n/LanguageContext.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal, { RevealGroup, revealChild } from '../components/Reveal.jsx'

/** Static (language-independent) product media, index-aligned with the copy array. */
const MEDIA = [
  { img: '/assets/products/bulk-25kg.png', tint: 'from-[#EFE7DA] to-[#DFD2BC]' },
  { img: '/assets/products/wisespoon-agar-pouch.png', tint: 'from-[#E8F2EA] to-[#CFE3D5]' },
  { img: '/assets/products/ekonomis-6g.png', tint: 'from-[#FBF3D9] to-[#F3E3B4]' },
  { img: '/assets/products/wisespoon-vitjell.png', tint: 'from-[#F3E9F6] to-[#E2D3EC]' },
]

const VARIANTS = [
  { src: '/assets/products/var-6g-putih.jpg', label: '6 g · Putih' },
  { src: '/assets/products/var-6g-hijau.jpg', label: '6 g · Hijau' },
  { src: '/assets/products/var-6g-merah.jpg', label: '6 g · Merah' },
  { src: '/assets/products/var-6g-coklat.jpg', label: '6 g · Coklat' },
  { src: '/assets/products/var-8g-hijau.jpg', label: '8 g · Hijau' },
  { src: '/assets/products/var-8g-merah.jpg', label: '8 g · Merah' },
  { src: '/assets/products/var-8g-coklat.jpg', label: '8 g · Coklat' },
]

export default function Products() {
  const { t } = useI18n()
  const items = t('products.items')

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

        <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2" stagger={0.12}>
          {items.map((item, i) => (
            <motion.article
              key={item.name}
              variants={revealChild}
              className="card-lift group flex flex-col overflow-hidden rounded-2xl border border-ink/8 bg-cream-100"
            >
              {/* Media panel */}
              <div className={`relative overflow-hidden bg-gradient-to-br ${MEDIA[i].tint} p-8 sm:p-10`}>
                <span className="absolute left-5 top-5 z-10 rounded-full bg-ink/85 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                  {item.tag}
                </span>
                <div className="flex h-52 items-center justify-center sm:h-60 xl:h-72 2xl:h-80">
                  <img
                    src={MEDIA[i].img}
                    alt={item.name}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.22)] transition-transform duration-[900ms] ease-out group-hover:-translate-y-2 group-hover:scale-[1.06]"
                  />
                </div>
              </div>

              {/* Copy */}
              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <h3 className="font-display text-[22px] font-normal leading-snug tracking-tight text-ink">
                  {item.name}
                </h3>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-ink-500">{item.desc}</p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {item.specs.map((spec) => (
                    <li
                      key={spec}
                      className="rounded-full border border-ink/10 bg-white px-3 py-1.5 text-[11.5px] font-medium text-ink-600"
                    >
                      {spec}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-2 text-[13px] font-semibold text-emerald-600 transition-colors hover:text-emerald-700"
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
          ))}
        </RevealGroup>

        {/* ---- Ekonomis colour variants ---- */}
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
