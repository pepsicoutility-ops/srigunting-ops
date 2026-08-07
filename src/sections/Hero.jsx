import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useI18n } from '../i18n/LanguageContext.jsx'
import Counter from '../components/Counter.jsx'

export default function Hero() {
  const { t, lang } = useI18n()
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '32%'])
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  const stats = t('hero.stats')

  const line = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 34 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.28 + i * 0.11, duration: 0.85, ease: [0.22, 1, 0.36, 1] },
    }),
  }

  return (
    <section id="top" ref={ref} className="relative isolate overflow-hidden bg-ink">
      {/* ---- Ambient background ---- */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_78%_10%,#0d3f27_0%,#0B100D_58%)]" />
        <motion.div
          animate={reduceMotion ? {} : { scale: [1, 1.18, 1], opacity: [0.5, 0.75, 0.5] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -right-24 top-[-12%] h-[34rem] w-[34rem] rounded-full bg-emerald-500/18 blur-[110px]"
        />
        <motion.div
          animate={reduceMotion ? {} : { scale: [1.1, 1, 1.1], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-32 bottom-[-16%] h-[30rem] w-[30rem] rounded-full bg-gold/12 blur-[120px]"
        />
        {/* Concentric rings echoing the seaweed circle in the corporate mark */}
        <div className="absolute right-[6%] top-1/2 hidden -translate-y-1/2 lg:block">
          {[440, 620, 800].map((size, i) => (
            <motion.div
              key={size}
              animate={reduceMotion ? {} : { rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ duration: 90 + i * 30, repeat: Infinity, ease: 'linear' }}
              style={{ width: size, height: size, marginLeft: -size / 2, marginTop: -size / 2 }}
              className="absolute rounded-full border border-dashed border-white/[0.07]"
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-grain opacity-[0.16] mix-blend-overlay" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cream to-transparent" />
      </div>

      <div className="container-x grid min-h-[100svh] grid-cols-1 items-center gap-12 pb-24 pt-[calc(var(--header-h)+3rem)] lg:grid-cols-12 lg:gap-8 lg:pb-32 lg:pt-[var(--header-h)]">
        {/* ---- Copy ---- */}
        <motion.div style={{ y: contentY, opacity: fade }} className="lg:col-span-7 xl:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.06] py-1.5 pl-1.5 pr-4 backdrop-blur-sm"
          >
            <img
              src="/assets/brand/logo.png"
              alt=""
              className="h-7 w-7 rounded-full bg-white object-contain p-0.5"
            />
            <span className="text-[11px] font-medium tracking-wide text-white/75 sm:text-xs">
              {t('hero.eyebrow')}
            </span>
          </motion.div>

          <h1 className="mt-7 font-display text-[clamp(2.3rem,4.4vw,5.5rem)] font-light leading-[1.03] tracking-[-0.03em] text-white">
            {/* Re-keyed on `lang` so the stagger replays when the language changes */}
            <motion.span key={`${lang}-a`} custom={0} variants={line} initial="hidden" animate="show" className="block">
              {t('hero.titleA')}
            </motion.span>
            <motion.span key={`${lang}-b`} custom={1} variants={line} initial="hidden" animate="show" className="block">
              {t('hero.titleB')}
            </motion.span>
            <motion.span key={`${lang}-c`} custom={2} variants={line} initial="hidden" animate="show" className="block">
              {/* pr keeps the italic serif's final glyph from being clipped by bg-clip-text */}
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-gold-light bg-clip-text pr-[0.12em] italic text-transparent">
                {t('hero.titleC')}
              </span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72, duration: 0.8 }}
            className="mt-8 max-w-xl text-[15px] leading-relaxed text-white/60 sm:text-base xl:max-w-2xl xl:text-[17px]"
          >
            {t('hero.lead')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.86, duration: 0.8 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a href="#products" className="btn-primary group">
              {t('hero.primary')}
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="/docs/company-profile.pdf" target="_blank" rel="noreferrer" className="btn-ghost-light">
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M8 2v8m0 0 3.2-3.2M8 10 4.8 6.8M2.5 12.5h11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {t('hero.secondary')}
            </a>
          </motion.div>

          {/* ---- Stats ---- */}
          <motion.dl
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-14 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-white/10 pt-8 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  {/* Prefix and suffix render smaller so long units stay on one line */}
                  <span className="block whitespace-nowrap font-display text-[26px] font-normal tracking-tight text-white sm:text-3xl">
                    {s.prefix && <span className="mr-1 text-[13px] text-white/50">{s.prefix}</span>}
                    <Counter value={s.value} />
                    <span className="ml-0.5 text-[15px] text-white/70 sm:text-base">{s.suffix}</span>
                  </span>
                  <span className="mt-1.5 block text-[11px] leading-snug text-white/45">{s.label}</span>
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* ---- Product visual ---- */}
        <motion.div
          style={{ y: imageY }}
          className="relative hidden lg:col-span-5 lg:block xl:col-span-6"
          aria-hidden="true"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.3, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-fit"
          >
            <div className="absolute inset-x-6 bottom-4 h-20 rounded-[50%] bg-black/55 blur-3xl" />
            <div className="animate-float">
              <img
                src="/assets/products/bulk-25kg.png"
                alt=""
                className="max-h-[56vh] w-auto max-w-full object-contain drop-shadow-[0_45px_70px_rgba(0,0,0,0.55)] 2xl:max-h-[60vh] 2xl:max-w-[34rem]"
                loading="eager"
              />
            </div>

            {/* Floating spec chips — figures from the company's own product page */}
            {[
              { text: 'Super · 900 – 1200 g/cm²', pos: 'left-[-14%] top-[14%]', delay: 1.15 },
              { text: '80 – 120 mesh', pos: 'right-[-12%] top-[46%]', delay: 1.3 },
              { text: 'Nett 25 kg', pos: 'left-[-8%] bottom-[14%]', delay: 1.45 },
            ].map((chip) => (
              <motion.span
                key={chip.text}
                initial={{ opacity: 0, scale: 0.85, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: chip.delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`absolute ${chip.pos} rounded-full border border-white/15 bg-ink/70 px-4 py-2 text-[11px] font-semibold tracking-wide text-white/90 shadow-xl backdrop-blur-md`}
              >
                {chip.text}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ---- Scroll cue ---- */}
      <motion.a
        href="#about"
        style={{ opacity: fade }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2.5 md:flex"
      >
        <span className="text-[10px] font-semibold uppercase tracking-eyebrow text-white/40">
          {t('hero.scroll')}
        </span>
        <span className="relative flex h-9 w-[22px] justify-center rounded-full border border-white/25 pt-2">
          <motion.span
            animate={reduceMotion ? {} : { y: [0, 11, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="h-1.5 w-1 rounded-full bg-emerald-400"
          />
        </span>
      </motion.a>
    </section>
  )
}
