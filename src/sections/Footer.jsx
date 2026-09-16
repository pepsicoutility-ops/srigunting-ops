import { motion } from 'framer-motion'
import { useI18n } from '../i18n/LanguageContext.jsx'
import { COMPANY, SOCIALS, DOWNLOADS, NAV_LINKS } from '../data/company.js'
import LanguageToggle from '../components/LanguageToggle.jsx'

const SOCIAL_PATHS = {
  whatsapp:
    'M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm5.1 14c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .1-1.6-.1-3-1.2-5-4.2-5.1-4.4-.2-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.2-.3.5-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 2c.1.2 0 .4-.1.5l-.4.5c-.1.2-.3.3-.1.6.1.3.6 1.1 1.3 1.7.9.8 1.6 1 1.9 1.2.2.1.4.1.5-.1l.7-.8c.2-.2.3-.2.6-.1l1.9.9c.3.1.5.2.5.4v1.3Z',
  instagram:
    'M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 3.2A6.6 6.6 0 1 0 18.6 12 6.6 6.6 0 0 0 12 5.4Zm0 10.9A4.3 4.3 0 1 1 16.3 12 4.3 4.3 0 0 1 12 16.3Zm6.9-11.1a1.5 1.5 0 1 1-1.5-1.5 1.5 1.5 0 0 1 1.5 1.5Z',
  facebook:
    'M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z',
  twitter:
    'M18.2 2.3h3.3l-7.2 8.3 8.5 11.1h-6.7l-5.2-6.8-6 6.8H1.6l7.7-8.8L1.2 2.3H8l4.7 6.2 5.5-6.2Zm-1.2 17.5h1.8L7.1 4.1H5.2l11.8 15.7Z',
}

export default function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10 bg-ink text-white">
      <div aria-hidden="true" className="hairline-emerald h-px w-full opacity-60" />

      <div className="container-x py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand block */}
          <div className="lg:col-span-4">
            <a href="#top" className="flex items-center gap-3.5">
              <img src="/assets/brand/logo.png" alt="" className="h-12 w-12 rounded-full bg-white object-contain p-0.5" />
              <span>
                <span className="block font-display text-lg font-semibold tracking-tight">{COMPANY.legalName}</span>
                <span className="mt-1 block text-[9px] font-semibold uppercase tracking-eyebrow text-emerald-400">
                  {COMPANY.descriptor} | {COMPANY.country}
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
            <nav aria-label={t('footer.usefulLinks')}>
              <h2 className="eyebrow text-white/35">{t('footer.usefulLinks')}</h2>
              <ul className="mt-5 space-y-2.5">
                {NAV_LINKS.map(({ id, key }) => (
                  <li key={id}>
                    <a href={`#${id}`} className="text-[13.5px] text-white/65 transition-colors duration-300 hover:text-emerald-400">
                      {t(key)}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="eyebrow text-white/35">{t('footer.services')}</h2>
              <ul className="mt-5 space-y-2.5">
                {t('footer.servicesList').map((service) => (
                  <li key={service}>
                    <a href="#products" className="text-[13.5px] text-white/65 transition-colors duration-300 hover:text-emerald-400">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="eyebrow text-white/35">{t('downloads.eyebrow')}</h2>
              <ul className="mt-5 space-y-2.5">
                {DOWNLOADS.map((doc) => (
                  <li key={doc.key}>
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
                      {t(`downloads.items.${doc.key}.title`)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <address className="not-italic">
              <h2 className="eyebrow text-white/35">{t('footer.contact')}</h2>
              <ul className="mt-5 space-y-3 text-[13.5px] text-white/65">
                <li className="leading-relaxed">{COMPANY.address}</li>
                <li>
                  <a href={`tel:${COMPANY.phoneRaw}`} className="transition-colors hover:text-emerald-400">
                    {COMPANY.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${COMPANY.email}`} className="break-words transition-colors hover:text-emerald-400">
                    {COMPANY.email}
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </div>

        {/* Socials + copyright */}
        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-7 sm:flex-row sm:items-center">
          <p className="text-[12px] text-white/35">
            © {year} {COMPANY.legalName}. {t('footer.rights')}
          </p>

          <div className="flex items-center gap-3">
            <span className="sr-only">{t('footer.socials')}</span>
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.07] text-white/70 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-500 hover:text-white hover:ring-emerald-500"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path d={SOCIAL_PATHS[social.icon]} />
                </svg>
              </a>
            ))}
          </div>
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
