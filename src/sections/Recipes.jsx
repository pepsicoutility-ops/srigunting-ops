import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useI18n } from '../i18n/LanguageContext.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal, { RevealGroup, revealChild } from '../components/Reveal.jsx'
import { COMPANY } from '../data/company.js'

/**
 * Gallery tiles, in the same order as `recipes.gallery` in the dictionaries —
 * the caption at index i is both the visible caption and the alt text for
 * IMAGES[i]. Every file is cropped to 4:5 so the grid stays flush at every
 * breakpoint (2 columns on mobile, 4 from md up — always exactly full rows).
 */
const GALLERY = [
  '/assets/recipes/tray-layered.jpg',
  '/assets/recipes/agar-shapes.jpg',
  '/assets/recipes/panna-berry.jpg',
  '/assets/recipes/layered-glasses.jpg',
  '/assets/recipes/caramel-flan.jpg',
  '/assets/recipes/sliced-set.jpg',
  '/assets/recipes/coupe-pudding.jpg',
  '/assets/recipes/plated-berry.jpg',
]

/** Card images, in the same order as `recipes.cards`. */
const CARD_IMAGES = [
  '/assets/recipes/recipe-santan.jpg',
  '/assets/recipes/recipe-lapis.jpg',
  '/assets/recipes/recipe-cokelat.jpg',
  '/assets/recipes/recipe-jellycup.jpg',
]

const META_ICONS = {
  time: <path d="M8 4.2v4l2.6 1.6M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0Z" strokeWidth="1.4" strokeLinecap="round" />,
  serves: (
    <>
      <circle cx="8" cy="5.4" r="2.4" strokeWidth="1.4" />
      <path d="M3.2 13.4a4.8 4.8 0 0 1 9.6 0" strokeWidth="1.4" strokeLinecap="round" />
    </>
  ),
  level: <path d="M2.6 12.4 6 6.8l2.6 3 2-2.6 2.8 5.2H2.6Z" strokeWidth="1.4" strokeLinejoin="round" />,
}

function MetaChip({ kind, label, value }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[11.5px] text-white/55">
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true">
        {META_ICONS[kind]}
      </svg>
      <span className="sr-only">{label}: </span>
      {value}
    </span>
  )
}

function RecipeCard({ card, image, meta, index }) {
  const [open, setOpen] = useState(false)
  const panelId = `recipe-panel-${index}`

  return (
    <motion.article
      variants={revealChild}
      className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-colors duration-500 hover:border-emerald-500/40"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={card.name}
          width="900"
          height="675"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-[1.1s] ease-out hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-ink/75 px-3 py-1 text-[10.5px] font-semibold uppercase tracking-eyebrow text-emerald-300 backdrop-blur-md">
          {card.level}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h4 className="font-display text-[19px] font-normal leading-snug tracking-tight text-white">{card.name}</h4>

        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5">
          <MetaChip kind="time" label={meta.time} value={card.time} />
          <MetaChip kind="serves" label={meta.serves} value={card.serves} />
        </div>

        <p className="mt-4 min-h-[4.125rem] flex-1 text-[13.5px] leading-relaxed text-white/60">{card.blurb}</p>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="mt-5 inline-flex items-center gap-2 self-start text-[12.5px] font-semibold text-emerald-400 transition-colors duration-300 hover:text-emerald-300"
        >
          {open ? meta.close : meta.open}
          <motion.svg
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            viewBox="0 0 16 16"
            fill="none"
            className="h-3.5 w-3.5"
            aria-hidden="true"
          >
            <path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={panelId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-5 border-t border-white/10 pt-5">
                <h5 className="eyebrow text-white/40">{meta.ingredients}</h5>
                <ul className="mt-3 space-y-1.5">
                  {card.ingredients.map((line) => (
                    <li key={line} className="flex gap-2.5 text-[13px] leading-relaxed text-white/70">
                      <span aria-hidden="true" className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-emerald-500" />
                      {line}
                    </li>
                  ))}
                </ul>

                <h5 className="eyebrow mt-6 text-white/40">{meta.steps}</h5>
                <ol className="mt-3 space-y-3">
                  {card.steps.map((step, i) => (
                    <li key={step} className="flex gap-3 text-[13px] leading-relaxed text-white/70">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-[10.5px] font-bold text-emerald-300">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>

                <p className="mt-6 rounded-xl border border-gold/25 bg-gold/[0.07] px-4 py-3 text-[12.5px] leading-relaxed text-white/70">
                  <span className="font-semibold text-gold-light">{meta.tip}: </span>
                  {card.tip}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  )
}

export default function Recipes() {
  const { t } = useI18n()
  const feature = t('recipes.feature')
  const gallery = t('recipes.gallery')
  const meta = t('recipes.meta')
  const cards = t('recipes.cards')
  const cta = t('recipes.cta')

  return (
    <section id="recipes" className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(90%_65%_at_80%_0%,#123a26_0%,transparent_60%)]" />
        <div className="absolute -left-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-gold/[0.07] blur-[130px]" />
        <div className="absolute inset-0 bg-grain opacity-[0.14] mix-blend-overlay" />
      </div>

      <div className="container-x">
        <SectionHeading
          eyebrow={t('recipes.eyebrow')}
          title={t('recipes.title')}
          lead={t('recipes.lead')}
          tone="light"
          align="center"
        />

        {/* ---- Feature: the moulded pudding ---- */}
        <div className="mt-16 grid items-center gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <figure className="relative mx-auto max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-[1.75rem] border border-white/10 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.75)]">
                <img
                  src="/assets/recipes/molded-red.jpg"
                  alt={feature.badge}
                  width="1100"
                  height="1375"
                  loading="lazy"
                  decoding="async"
                  className="w-full object-cover"
                />
              </div>
              <figcaption className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/15 bg-ink/85 px-5 py-2.5 text-[11.5px] font-semibold tracking-wide text-white/85 shadow-xl backdrop-blur-md">
                {feature.badge}
              </figcaption>
            </figure>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <h3 className="font-display text-[clamp(1.5rem,2.3vw,2.15rem)] font-light leading-tight tracking-tight text-white">
                {feature.title}
              </h3>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-white/60 sm:text-base">{feature.body}</p>
            </Reveal>

            <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-3" stagger={0.1} delay={0.24}>
              {feature.facts.map((fact) => (
                <motion.div
                  key={fact.label}
                  variants={revealChild}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm"
                >
                  <span className="block font-display text-2xl font-normal tracking-tight text-emerald-300">
                    {fact.value}
                  </span>
                  <span className="mt-2 block text-[12.5px] leading-snug text-white/50">{fact.label}</span>
                </motion.div>
              ))}
            </RevealGroup>
          </div>
        </div>

        {/* ---- Gallery ---- */}
        <div className="mt-24 sm:mt-32">
          <Reveal>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <h3 className="font-display text-[clamp(1.4rem,2vw,1.9rem)] font-light tracking-tight text-white">
                {t('recipes.galleryTitle')}
              </h3>
              <p className="max-w-md text-[13.5px] leading-relaxed text-white/50">{t('recipes.galleryLead')}</p>
            </div>
          </Reveal>

          <RevealGroup className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4" stagger={0.07}>
            {GALLERY.map((src, i) => (
              <motion.figure
                key={src}
                variants={revealChild}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-ink-800"
              >
                <img
                  src={src}
                  alt={gallery[i]}
                  width="900"
                  height="1125"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.07]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-transparent opacity-55 transition-opacity duration-500 group-hover:opacity-90" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 text-[11.5px] leading-snug text-white/85 opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:text-[12px]">
                  {gallery[i]}
                </figcaption>
              </motion.figure>
            ))}
          </RevealGroup>
        </div>

        {/* ---- Recipe cards ---- */}
        <div className="mt-24 sm:mt-32">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h3 className="font-display text-[clamp(1.4rem,2vw,1.9rem)] font-light tracking-tight text-white">
                {t('recipes.cardsTitle')}
              </h3>
              <p className="mt-4 text-[14.5px] leading-relaxed text-white/55">{t('recipes.cardsLead')}</p>
            </div>
          </Reveal>

          <RevealGroup className="mt-12 grid items-start gap-6 sm:grid-cols-2 xl:grid-cols-4" stagger={0.09}>
            {cards.map((card, i) => (
              <RecipeCard key={card.name} card={card} image={CARD_IMAGES[i]} meta={meta} index={i} />
            ))}
          </RevealGroup>
        </div>

        {/* ---- CTA ---- */}
        <Reveal delay={0.1} className="mt-20">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-emerald-500/25 bg-gradient-to-br from-emerald-900/50 via-ink-800 to-ink px-7 py-10 sm:px-12 sm:py-12">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-emerald-500/15 blur-3xl"
            />
            <div className="relative flex flex-col items-start gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h3 className="font-display text-[clamp(1.35rem,2vw,1.85rem)] font-light tracking-tight text-white">
                  {cta.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-white/60">{cta.body}</p>
              </div>
              <a href={COMPANY.whatsapp} target="_blank" rel="noreferrer" className="btn-primary shrink-0">
                {cta.button}
                <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M2 8h11M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
