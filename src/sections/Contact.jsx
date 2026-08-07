import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useI18n } from '../i18n/LanguageContext.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import { COMPANY } from '../data/company.js'

const EMPTY = { name: '', email: '', company: '', message: '' }

const inputClass =
  'w-full rounded-lg border border-white/12 bg-white/[0.04] px-4 py-3 text-[14px] text-white ' +
  'placeholder:text-white/25 transition-colors duration-300 focus:border-emerald-500 focus:bg-white/[0.07] ' +
  'focus:outline-none focus:ring-1 focus:ring-emerald-500'

function Field({ id, label, required, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[11px] font-semibold uppercase tracking-eyebrow text-white/45">
        {label}
        {required && <span className="ml-1 text-emerald-400">*</span>}
      </label>
      {children}
      {error && <p className="mt-1.5 text-[11px] font-medium text-red-400">{error}</p>}
    </div>
  )
}

const ICONS = {
  location: (
    <>
      <path d="M10 18.3s6-5 6-9.3a6 6 0 1 0-12 0c0 4.3 6 9.3 6 9.3Z" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="10" cy="9" r="2.2" strokeWidth="1.5" />
    </>
  ),
  email: (
    <>
      <rect x="2.5" y="4.5" width="15" height="11" rx="1.8" strokeWidth="1.5" />
      <path d="m3 6 7 5 7-5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  phone: (
    <path
      d="M6.4 3.5H4.2c-.9 0-1.7.8-1.6 1.7.5 7 5.2 11.7 12.2 12.2.9.1 1.7-.7 1.7-1.6v-2.2c0-.7-.5-1.3-1.2-1.5l-2-.5c-.6-.1-1.2.1-1.5.6l-.6.9a10.6 10.6 0 0 1-4.4-4.4l.9-.6c.5-.3.7-.9.6-1.5l-.5-2c-.2-.7-.8-1.1-1.4-1.1Z"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  ),
}

export default function Contact() {
  const { t } = useI18n()
  const form = t('contact.form')
  const info = t('contact.info')

  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const update = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }))
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const nextErrors = {}
    if (!values.name.trim()) nextErrors.name = form.required
    if (!values.email.trim()) nextErrors.email = form.required
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) nextErrors.email = form.required
    if (!values.message.trim()) nextErrors.message = form.required

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('sending')
    // NOTE: no backend is wired up yet. Point this at your form endpoint
    // (e.g. Formspree, a Cloudflare Worker, or the company CRM) to go live.
    await new Promise((resolve) => setTimeout(resolve, 900))
    setStatus('sent')
    setValues(EMPTY)
  }

  const ROWS = [
    { icon: 'location', label: info.locationLabel, value: COMPANY.address },
    { icon: 'email', label: info.emailLabel, value: COMPANY.email, href: `mailto:${COMPANY.email}` },
    { icon: 'phone', label: info.phoneLabel, value: COMPANY.phone, href: `tel:${COMPANY.phoneRaw}` },
  ]

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(85%_65%_at_20%_0%,#10402a_0%,transparent_58%)]" />
        <div className="absolute inset-0 bg-grain opacity-[0.13] mix-blend-overlay" />
      </div>

      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* ---- Info column ---- */}
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow={t('contact.eyebrow')}
              title={t('contact.title')}
              lead={t('contact.lead')}
              tone="light"
              maxWidth="max-w-lg"
            />

            <Reveal delay={0.24}>
              <ul className="mt-11 max-w-lg space-y-3">
                {ROWS.map((row) => (
                  <li
                    key={row.label}
                    className="group flex gap-4 rounded-xl border border-white/10 bg-white/[0.035] p-5 transition-colors duration-300 hover:border-emerald-500/35 hover:bg-white/[0.06]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/25 transition-colors duration-300 group-hover:bg-emerald-500 group-hover:text-white">
                      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" className="h-5 w-5" aria-hidden="true">
                        {ICONS[row.icon]}
                      </svg>
                    </span>
                    <div className="min-w-0">
                      <p className="text-[10.5px] font-semibold uppercase tracking-eyebrow text-emerald-400">
                        {row.label}
                      </p>
                      <p className="mt-1.5 break-words text-[14px] leading-relaxed text-white/85">
                        {row.href ? (
                          <a href={row.href} className="transition-colors hover:text-emerald-400">
                            {row.value}
                          </a>
                        ) : (
                          row.value
                        )}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.32}>
              <a
                href={COMPANY.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost-light mt-5 w-full sm:w-auto"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm5.1 14c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .1-1.6-.1-3-1.2-5-4.2-5.1-4.4-.2-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.2-.3.5-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 2c.1.2 0 .4-.1.5l-.4.5c-.1.2-.3.3-.1.6.1.3.6 1.1 1.3 1.7.9.8 1.6 1 1.9 1.2.2.1.4.1.5-.1l.7-.8c.2-.2.3-.2.6-.1l1.9.9c.3.1.5.2.5.4v1.3Z" />
                </svg>
                {form.whatsapp}
              </a>
            </Reveal>
          </div>

          {/* ---- Form ---- */}
          <div className="lg:col-span-7">
            <Reveal y={34}>
              <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-9">
                <AnimatePresence mode="wait">
                  {status === 'sent' ? (
                    <motion.div
                      key="sent"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="flex min-h-[24rem] flex-col items-center justify-center text-center"
                    >
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1, type: 'spring', stiffness: 220, damping: 16 }}
                        className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500"
                      >
                        <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-white" aria-hidden="true">
                          <motion.path
                            d="m5 12.5 4.5 4.5L19 7.5"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                          />
                        </svg>
                      </motion.span>
                      <p className="mt-6 max-w-xs font-display text-xl font-light leading-snug text-white">
                        {form.sent}
                      </p>
                      <button
                        type="button"
                        onClick={() => setStatus('idle')}
                        className="mt-6 text-[13px] font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
                      >
                        &larr; {form.back}
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      noValidate
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="grid gap-5 sm:grid-cols-2"
                    >
                      <Field id="name" label={form.name} required error={errors.name}>
                        <input id="name" type="text" value={values.name} onChange={update('name')} className={inputClass} autoComplete="name" />
                      </Field>

                      <Field id="email" label={form.email} required error={errors.email}>
                        <input id="email" type="email" value={values.email} onChange={update('email')} className={inputClass} autoComplete="email" />
                      </Field>

                      <div className="sm:col-span-2">
                        <Field id="company" label={form.company}>
                          <input id="company" type="text" value={values.company} onChange={update('company')} className={inputClass} autoComplete="organization" />
                        </Field>
                      </div>

                      <div className="sm:col-span-2">
                        <Field id="message" label={form.message} required error={errors.message}>
                          <textarea
                            id="message"
                            rows={6}
                            value={values.message}
                            onChange={update('message')}
                            placeholder={form.messagePlaceholder}
                            className={`${inputClass} resize-none`}
                          />
                        </Field>
                      </div>

                      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                        <p className="order-2 text-[11.5px] text-white/35 sm:order-1">{form.note}</p>
                        <button
                          type="submit"
                          disabled={status === 'sending'}
                          className="btn-primary order-1 w-full disabled:cursor-not-allowed disabled:opacity-70 sm:order-2 sm:w-auto"
                        >
                          {status === 'sending' ? (
                            <>
                              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                              {form.sending}
                            </>
                          ) : (
                            <>
                              {form.submit}
                              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                                <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </>
                          )}
                        </button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
