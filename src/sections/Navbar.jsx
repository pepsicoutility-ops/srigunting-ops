import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { useI18n } from '../i18n/LanguageContext.jsx'
import LanguageToggle from '../components/LanguageToggle.jsx'

const LINKS = [
  { id: 'about', key: 'nav.about' },
  { id: 'products', key: 'nav.products' },
  { id: 'specifications', key: 'nav.specs' },
  { id: 'process', key: 'nav.process' },
  { id: 'quality', key: 'nav.quality' },
  { id: 'facility', key: 'nav.facility' },
]

export default function Navbar() {
  const { t } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the section currently occupying the upper third of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 },
    )
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const solid = scrolled || open

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid ? 'bg-ink/92 shadow-[0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <nav className="container-x flex h-[var(--header-h)] items-center justify-between gap-3 sm:gap-6">
          <a href="#top" className="group flex min-w-0 items-center gap-2.5 sm:gap-3" aria-label="PT Sri Gunting Pratama">
            <img
              src="/assets/brand/logo.png"
              alt=""
              className="h-9 w-9 shrink-0 rounded-full bg-white object-contain p-0.5 ring-1 ring-white/15 transition-transform duration-500 group-hover:scale-105 sm:h-11 sm:w-11"
            />
            <span className="min-w-0 leading-none">
              <span className="block truncate font-display text-[13.5px] font-semibold tracking-tight text-white sm:text-base">
                Sri Gunting Pratama
              </span>
              <span className="mt-1 hidden text-[9px] font-semibold uppercase tracking-eyebrow text-emerald-400 sm:block">
                Agar &amp; Seaweed Extract
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 xl:flex">
            {LINKS.map(({ id, key }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`relative rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors duration-300 ${
                    active === id ? 'text-white' : 'text-white/65 hover:text-white'
                  }`}
                >
                  {t(key)}
                  {active === id && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute inset-x-3.5 -bottom-0.5 h-px bg-emerald-400"
                      transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <LanguageToggle tone="light" />
            <a
              href="#contact"
              className="hidden rounded-full bg-emerald-500 px-5 py-2.5 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-emerald-600 hover:shadow-[0_8px_24px_-8px_rgba(15,169,88,0.8)] lg:inline-flex"
            >
              {t('nav.cta')}
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? t('nav.close') : t('nav.menu')}
              className="relative flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-white/20 transition-colors hover:bg-white/10 xl:hidden"
            >
              <span className="sr-only">{open ? t('nav.close') : t('nav.menu')}</span>
              <span className="relative block h-3.5 w-5">
                <motion.span
                  animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-0 top-0 h-[1.5px] w-5 origin-center bg-white"
                />
                <motion.span
                  animate={open ? { opacity: 0, x: -6 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-[6px] h-[1.5px] w-5 bg-white"
                />
                <motion.span
                  animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-0 top-[12px] h-[1.5px] w-5 origin-center bg-white"
                />
              </span>
            </button>
          </div>
        </nav>

        <motion.div
          style={{ scaleX: progress }}
          className="h-[2px] origin-left bg-gradient-to-r from-emerald-500 via-emerald-400 to-gold"
        />
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-ink/97 backdrop-blur-xl xl:hidden"
          >
            <div className="container-x flex h-full flex-col justify-center pb-16 pt-[var(--header-h)]">
              <ul className="space-y-1">
                {LINKS.map(({ id, key }, i) => (
                  <motion.li
                    key={id}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i + 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <a
                      href={`#${id}`}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-4 border-b border-white/10 py-4 font-display text-3xl font-light text-white transition-colors hover:text-emerald-400 sm:text-4xl"
                    >
                      <span className="text-[11px] font-sans font-semibold tracking-widest text-emerald-500">
                        0{i + 1}
                      </span>
                      {t(key)}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="btn-primary mt-10 w-full py-4 text-base"
              >
                {t('nav.cta')}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
