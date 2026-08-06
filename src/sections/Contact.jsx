import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useI18n } from '../i18n/LanguageContext.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import { COMPANY } from '../data/company.js'

const EMPTY = { name: '', company: '', email: '', country: '', grade: '', volume: '', message: '' }

function Field({ id, label, required, error, children }) {
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="mb-2 block text-[11px] font-semibold uppercase tracking-eyebrow text-white/45"
      >
        {label}
        {required && <span className="ml-1 text-emerald-400">*</span>}
      </label>
      {children}
      {error && <p className="mt-1.5 text-[11px] font-medium text-red-400">{error}</p>}
    </div>
  )
}

const inputClass =
  'w-full rounded-lg border border-white/12 bg-white/[0.04] px-4 py-3 text-[14px] text-white ' +
  'placeholder:text-white/25 transition-colors duration-300 focus:border-emerald-500 focus:bg-white/[0.07] ' +
  'focus:outline-none focus:ring-1 focus:ring-emerald-500'

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
    // (e.g. Formspree, a serverless function, or the company CRM) to go live.
    await new Promise((resolve) => setTimeout(resolve, 900))
    setStatus('sent')
    setValues(EMPTY)
  }

  const CONTACT_ROWS = [
    { label: info.companyLabel, value: COMPANY.legalName },
    { label: info.addressLabel, value: COMPANY.address },
    { label: info.phoneLabel, value: COMPANY.phone, href: `tel:${COMPANY.phoneRaw}` },
    { label: info.webLabel, value: COMPANY.website, href: `https://${COMPANY.website}` },
    { label: info.hoursLabel, value: info.hours },
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
              <dl className="mt-11 max-w-lg space-y-0">
                {CONTACT_ROWS.map((row) => (
                  <div key={row.label} className="border-t border-white/10 py-4 last:border-b">
                    <dt className="text-[10.5px] font-semibold uppercase tracking-eyebrow text-emerald-400">
                      {row.label}
                    </dt>
                    <dd className="mt-1.5 text-[14.5px] leading-relaxed text-white/85">
                      {row.href ? (
                        <a
                          href={row.href}
                          target={row.href.startsWith('http') ? '_blank' : undefined}
                          rel="noreferrer"
                          className="transition-colors hover:text-emerald-400"
                        >
                          {row.value}
                        </a>
                      ) : (
                        row.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
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
                      className="flex min-h-[26rem] flex-col items-center justify-center text-center"
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
                        &larr; {t('contact.eyebrow')}
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

                      <Field id="company" label={form.company}>
                        <input id="company" type="text" value={values.company} onChange={update('company')} className={inputClass} autoComplete="organization" />
                      </Field>

                      <Field id="email" label={form.email} required error={errors.email}>
                        <input id="email" type="email" value={values.email} onChange={update('email')} className={inputClass} autoComplete="email" />
                      </Field>

                      <Field id="country" label={form.country}>
                        <input id="country" type="text" value={values.country} onChange={update('country')} className={inputClass} autoComplete="country-name" />
                      </Field>

                      <Field id="grade" label={form.grade}>
                        <select id="grade" value={values.grade} onChange={update('grade')} className={`${inputClass} appearance-none`}>
                          <option value="" className="bg-ink">&mdash;</option>
                          {form.gradeOptions.map((opt) => (
                            <option key={opt} value={opt} className="bg-ink">
                              {opt}
                            </option>
                          ))}
                        </select>
                      </Field>

                      <Field id="volume" label={form.volume}>
                        <input id="volume" type="text" value={values.volume} onChange={update('volume')} className={inputClass} placeholder="e.g. 5 ton / month" />
                      </Field>

                      <div className="sm:col-span-2">
                        <Field id="message" label={form.message} required error={errors.message}>
                          <textarea
                            id="message"
                            rows={4}
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

