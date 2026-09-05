import { useI18n } from '../i18n/LanguageContext.jsx'
import Reveal, { RevealGroup, revealChild } from '../components/Reveal.jsx'
import LanguageToggle from '../components/LanguageToggle.jsx'
import BackToTop from '../components/BackToTop.jsx'
import Footer from '../sections/Footer.jsx'
import { COMPANY } from '../data/company.js'
import { NEWS_SORTED } from '../data/news.js'
import { motion } from 'framer-motion'

/** 2026-08-24 -> "24 Agustus 2026" / "24 August 2026". */
const MONTHS = {
  id: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
}

export function formatDate(iso, lang) {
  const [y, m, d] = iso.split('-').map(Number)
  return `${d} ${(MONTHS[lang] ?? MONTHS.en)[m - 1]} ${y}`
}

/**
 * Slim header for the sub-page. The main Navbar is built around scroll-spying
 * the one-page sections, none of which exist here — this keeps the brand and
 * the way back without carrying that machinery onto a page it cannot serve.
 */
function NewsHeader({ t }) {
  return (
    <header className="border-b border-white/10 bg-ink">
      <div className="container-x flex h-[var(--header-h)] items-center justify-between gap-3">
        <a href="/" className="group flex min-w-0 items-center gap-2.5 sm:gap-3" aria-label={COMPANY.legalName}>
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

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <LanguageToggle tone="light" />
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-[12.5px] font-semibold text-white/75 transition-colors duration-300 hover:border-white/45 hover:text-white sm:px-5 sm:text-[13px]"
          >
            <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
              <path d="M14 8H3m4-4L3 8l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {t('news.backShort')}
          </a>
        </div>
      </div>
    </header>
  )
}

function MetaLine({ post, lang, className = '' }) {
  return (
    <div className={`flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[12.5px] text-white/50 ${className}`}>
      <time dateTime={post.date}>{formatDate(post.date, lang)}</time>
      {post.location && (
        <>
          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-emerald-500" />
          <span>{post.location}</span>
        </>
      )}
    </div>
  )
}

/** The newest post, rendered in full. */
function FeaturedPost({ post, lang, t }) {
  return (
    <article>
      <Reveal>
        <figure className="overflow-hidden rounded-[1.75rem] border border-white/10 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.75)]">
          <img
            src={post.cover.src}
            alt={post.cover.alt[lang] ?? post.cover.alt.en}
            width={post.cover.width}
            height={post.cover.height}
            loading="eager"
            decoding="async"
            className="w-full object-cover"
          />
        </figure>
      </Reveal>

      <Reveal delay={0.08}>
        <MetaLine post={post} lang={lang} className="mt-8" />
      </Reveal>

      <Reveal delay={0.12}>
        <h2 className="mt-4 max-w-3xl font-display text-[clamp(1.7rem,3vw,2.9rem)] font-light leading-[1.1] tracking-[-0.02em] text-white">
          {post.title[lang] ?? post.title.en}
        </h2>
      </Reveal>

      <div className="mt-8 max-w-3xl space-y-5">
        {(post.body[lang] ?? post.body.en).map((paragraph, i) => (
          <Reveal key={paragraph} delay={0.16 + i * 0.05}>
            <p className="text-[15px] leading-relaxed text-white/65 sm:text-[16.5px]">{paragraph}</p>
          </Reveal>
        ))}
      </div>

      {post.gallery?.length > 0 && (
        <div className="mt-14">
          <Reveal>
            <h3 className="eyebrow text-emerald-300">{t('news.galleryLabel')}</h3>
          </Reveal>

          <RevealGroup className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4" stagger={0.07}>
            {post.gallery.map((photo) => (
              <motion.figure
                key={photo.src}
                variants={revealChild}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-ink-800"
              >
                <img
                  src={photo.src}
                  alt={photo.alt[lang] ?? photo.alt.en}
                  width="900"
                  height="1125"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.07]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-transparent opacity-55 transition-opacity duration-500 group-hover:opacity-90" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 text-[11.5px] leading-snug text-white/85 opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:text-[12px]">
                  {photo.alt[lang] ?? photo.alt.en}
                </figcaption>
              </motion.figure>
            ))}
          </RevealGroup>
        </div>
      )}
    </article>
  )
}

/** Everything older, as cards. Renders nothing while there is only one post. */
function Archive({ posts, lang, t }) {
  if (posts.length === 0) return null

  return (
    <div className="mt-24 border-t border-white/10 pt-16 sm:mt-32">
      <Reveal>
        <h2 className="font-display text-[clamp(1.4rem,2vw,1.9rem)] font-light tracking-tight text-white">
          {t('news.archiveTitle')}
        </h2>
      </Reveal>

      <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.09}>
        {posts.map((post) => (
          <motion.article
            key={post.slug}
            variants={revealChild}
            className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition-colors duration-500 hover:border-emerald-500/40"
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={post.cover.src}
                alt={post.cover.alt[lang] ?? post.cover.alt.en}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-[1.1s] ease-out hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <MetaLine post={post} lang={lang} />
              <h3 className="mt-3 font-display text-[19px] font-normal leading-snug tracking-tight text-white">
                {post.title[lang] ?? post.title.en}
              </h3>
              <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-white/60">
                {post.excerpt[lang] ?? post.excerpt.en}
              </p>
            </div>
          </motion.article>
        ))}
      </RevealGroup>
    </div>
  )
}

export default function News() {
  const { t, lang } = useI18n()
  const [featured, ...older] = NEWS_SORTED

  return (
    <>
      <a
        href="#news-main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-emerald-500 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        {t('news.skip')}
      </a>

      <NewsHeader t={t} />

      <main id="news-main" className="relative isolate overflow-hidden bg-ink pb-24 pt-16 text-white sm:pb-32 sm:pt-20">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(90%_60%_at_80%_0%,#123a26_0%,transparent_60%)]" />
          <div className="absolute -left-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-gold/[0.07] blur-[130px]" />
          <div className="absolute inset-0 bg-grain opacity-[0.14] mix-blend-overlay" />
        </div>

        <div className="container-x">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-emerald-400" />
              <span className="eyebrow text-emerald-300">{t('news.eyebrow')}</span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-5 max-w-4xl font-display text-[clamp(2rem,3.6vw,4rem)] font-light leading-[1.08] tracking-[-0.02em] text-white">
              {t('news.title')}
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg">{t('news.lead')}</p>
          </Reveal>

          {featured ? (
            <div className="mt-14 sm:mt-16">
              <FeaturedPost post={featured} lang={lang} t={t} />
              <Archive posts={older} lang={lang} t={t} />
            </div>
          ) : (
            <p className="mt-14 text-[15px] text-white/50">{t('news.empty')}</p>
          )}

          <Reveal delay={0.1} className="mt-20">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-emerald-500/25 bg-gradient-to-br from-emerald-900/50 via-ink-800 to-ink px-7 py-10 sm:px-12 sm:py-12">
              <div aria-hidden="true" className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-emerald-500/15 blur-3xl" />
              <div className="relative flex flex-col items-start gap-7 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <h2 className="font-display text-[clamp(1.35rem,2vw,1.85rem)] font-light tracking-tight text-white">
                    {t('news.ctaTitle')}
                  </h2>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-white/60">{t('news.ctaBody')}</p>
                </div>
                <a href="/" className="btn-primary shrink-0">
                  {t('news.ctaButton')}
                  <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </main>

      {/* Sub-page: the one-page anchors have to reach back to "/" to resolve */}
      <Footer base="/" />
      <BackToTop />
    </>
  )
}
