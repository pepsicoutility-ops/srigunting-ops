import { useI18n } from '../i18n/LanguageContext.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Carousel from '../components/Carousel.jsx'
import { NEWS_SORTED } from '../data/news.js'

const MONTHS = {
  id: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
}

/** 2026-08-24 -> "24 Agustus 2026" / "24 August 2026". */
export function formatDate(iso, lang) {
  const [y, m, d] = iso.split('-').map(Number)
  return `${d} ${(MONTHS[lang] ?? MONTHS.en)[m - 1]} ${y}`
}

/**
 * Latest news, told in one screen: the write-up on the left, every photo from
 * the day in a carousel on the right. The carousel is what keeps this section
 * short — seven photos in the footprint of one.
 *
 * Only the newest entry in data/news.js is written out in full. Anything older
 * becomes a dated line under it, so past items stay on the page without
 * growing the section.
 */
export default function News() {
  const { t, lang } = useI18n()
  const [post, ...older] = NEWS_SORTED

  if (!post) return null

  const pick = (field) => field[lang] ?? field.en

  const slides = [post.cover, ...post.gallery].map((photo) => ({
    src: photo.src,
    alt: pick(photo.alt),
  }))

  return (
    <section id="news" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute -right-40 top-10 h-[26rem] w-[26rem] rounded-full bg-emerald-500/[0.05] blur-3xl"
      />

      <div className="container-x relative">
        <SectionHeading
          eyebrow={t('news.eyebrow')}
          title={t('news.title')}
          lead={t('news.lead')}
          maxWidth="max-w-2xl"
        />

        <div className="mt-14 grid items-start gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-14">
          {/* ---- The write-up ---- */}
          <div className="lg:col-span-6 xl:col-span-5">
            <Reveal>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[12.5px] text-ink-500">
                <time dateTime={post.date} className="font-semibold text-emerald-600">
                  {formatDate(post.date, lang)}
                </time>
                {post.location && (
                  <>
                    <span aria-hidden="true" className="h-1 w-1 rounded-full bg-ink/25" />
                    <span>{post.location}</span>
                  </>
                )}
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h3 className="mt-3 font-display text-[clamp(1.5rem,2.4vw,2.15rem)] font-light leading-[1.12] tracking-tight text-ink">
                {pick(post.title)}
              </h3>
            </Reveal>

            <div className="mt-6 space-y-4">
              {pick(post.body).map((paragraph, i) => (
                <Reveal key={paragraph} delay={0.14 + i * 0.05}>
                  <p className="text-[14.5px] leading-relaxed text-ink-500 sm:text-[15px]">{paragraph}</p>
                </Reveal>
              ))}
            </div>

            {older.length > 0 && (
              <Reveal delay={0.24}>
                <div className="mt-8 border-t border-ink/10 pt-6">
                  <h4 className="eyebrow text-ink-500/70">{t('news.archiveTitle')}</h4>
                  <ul className="mt-3 space-y-2">
                    {older.map((item) => (
                      <li key={item.slug} className="text-[13.5px] leading-snug text-ink-500">
                        <span className="text-ink/45">{formatDate(item.date, lang)}</span>
                        <span aria-hidden="true" className="mx-2 text-ink/25">·</span>
                        {pick(item.title)}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}
          </div>

          {/* ---- Every photo from the day ---- */}
          <Reveal delay={0.12} className="lg:col-span-6 lg:col-start-7 xl:col-span-7">
            <Carousel
              slides={slides}
              aspect="aspect-[4/3]"
              labels={t('news.carousel')}
              className="mx-auto max-w-2xl lg:max-w-none"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
