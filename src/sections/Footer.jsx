import { motion } from 'framer-motion'
import { useI18n } from '../i18n/LanguageContext.jsx'
import { COMPANY, FOOTER_NAV, FOOTER_PRODUCTS } from '../data/company.js'
import LanguageToggle from '../components/LanguageToggle.jsx'

export default function Footer() {
  const { t } = useI18n()
  const docs = t('footer.docs')
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10 bg-ink text-white">
      <div aria-hidden="true" className="hairline-emerald h-px w-full opacity-60" />

      <div className="container-x py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand block */}
          <div className="lg:col-span-4">
            <a href="#top" className="flex items-center gap-3.5">
              <img
                src="/assets/brand/logo.png"
                alt=""
                className="h-12 w-12 rounded-full bg-white object-contain p-0.5"
              />
              <span>
                <span className="block font-display text-lg font-semibold tracking-tight">
                  {COMPANY.shortName}
                </span>
                <span className="mt-1 block text-[9px] font-semibold uppercase tracking-eyebrow text-emerald-400">
                  Est. Malang · Indonesia
                </span>
              </span>
            </a>

            <p className="mt-6 max-w-xs text-[13.5px] leading-relaxed text-white/45">{t('footer.tagline')}</p>

            <div className="mt-7">
              <LanguageToggle tone="light" />
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            <nav aria-label={t('footer.nav')}>
              <h3 className="eyebrow text-white/35">{t('footer.nav')}</h3>
              <ul className="mt-5 space-y-2.5">
                {FOOTER_NAV.map(({ id, key }) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="text-[13.5px] text-white/65 transition-colors duration-300 hover:text-emerald-400"
                    >
                      {t(key)}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h3 className="eyebrow text-white/35">{t('footer.products')}</h3>
              <ul className="mt-5 space-y-2.5">
                {FOOTER_PRODUCTS.map((product) => (
                  <li key={product}>
                    <a
                      href="#products"
                      className="text-[13.5px] text-white/65 transition-colors duration-300 hover:text-emerald-400"
                    >
                      {product}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="eyebrow text-white/35">{t('footer.documents')}</h3>
              <ul className="mt-5 space-y-2.5">
                {docs.map((doc) => (
                  <li key={doc.file}>
                    <a
                      href={doc.file}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-start gap-1.5 text-[13.5px] text-white/65 transition-colors duration-300 hover:text-emerald-400"
                    >
                      <svg
                        className="mt-1 h-3 w-3 shrink-0 opacity-60 transition-transform duration-300 group-hover:translate-y-0.5"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path d="M8 2v8m0 0 3.2-3.2M8 10 4.8 6.8M2.5 12.5h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {doc.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <address className="not-italic">
              <h3 className="eyebrow text-white/35">{t('footer.contact')}</h3>
              <ul className="mt-5 space-y-3 text-[13.5px] text-white/65">
                <li className="leading-relaxed">{COMPANY.address}</li>
                <li>
                  <a href={`tel:${COMPANY.phoneRaw}`} className="transition-colors hover:text-emerald-400">
                    {COMPANY.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`https://${COMPANY.website}`}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-emerald-400"
                  >
                    {COMPANY.website}
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center">
          <p className="text-[12px] text-white/35">
            © {year} {COMPANY.legalName}. {t('footer.rights')}
          </p>
          <p className="text-[12px] text-white/25">{t('footer.legal')}</p>
        </div>
      </div>

      {/* Oversized watermark wordmark */}
      <div aria-hidden="true" className="pointer-events-none select-none overflow-hidden">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="whitespace-nowrap text-center font-display text-[clamp(3.2rem,13.5vw,12rem)] font-light leading-[0.8] tracking-tight text-white/[0.045]"
        >
          SRI GUNTING
        </motion.p>
      </div>
    </footer>
  )
}
