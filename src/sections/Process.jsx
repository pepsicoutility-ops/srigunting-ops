import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useI18n } from '../i18n/LanguageContext.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

const STEP_IMAGES = [
  '/assets/facility/yard-drying.jpg',
  '/assets/facility/process-hall.jpg',
  '/assets/facility/extraction-line.jpg',
  '/assets/facility/press-line.jpg',
  '/assets/facility/yard-drying.jpg',
  '/assets/facility/milling-room.jpg',
]

export default function Process() {
  const { t } = useI18n()
  const steps = t('process.steps')
  const trackRef = useRef(null)

  // The vertical rail fills as the step list scrolls past.
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 70%', 'end 60%'],
  })
  const railScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="process" className="relative bg-cream py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow={t('process.eyebrow')}
          title={t('process.title')}
          lead={t('process.lead')}
          align="center"
          maxWidth="max-w-3xl"
        />

        <div ref={trackRef} className="relative mt-16 sm:mt-20">
          {/* Rail — desktop only, sits behind the cards */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-ink/10 lg:block"
          >
            <motion.div style={{ scaleY: railScale }} className="h-full w-full origin-top bg-emerald-500" />
          </div>

          <ol className="space-y-5 lg:space-y-0">
            {steps.map((step, i) => {
              const flip = i % 2 === 1
              return (
                <li key={step.n} className="relative lg:grid lg:grid-cols-2 lg:gap-16">
                  {/* Rail node */}
                  <span
                    aria-hidden="true"
                    className="absolute left-1/2 top-14 z-10 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-cream ring-[3px] ring-emerald-500 lg:block"
                  />

                  <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '0px 0px -70px 0px' }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className={`card-lift group overflow-hidden rounded-2xl border border-ink/8 bg-white lg:my-6 ${
                      flip ? 'lg:col-start-2' : 'lg:col-start-1'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row">
                      <div className="relative w-full shrink-0 overflow-hidden sm:w-44 lg:w-40">
                        <img
                          src={STEP_IMAGES[i]}
                          alt=""
                          loading="lazy"
                          className="h-40 w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110 sm:h-full"
                        />
                        <span className="absolute inset-0 bg-ink/35 mix-blend-multiply" />
                        <span className="absolute left-4 top-3.5 font-display text-3xl font-light text-white/90">
                          {step.n}
                        </span>
                      </div>

                      <div className="p-6 sm:p-7">
                        <h3 className="font-display text-xl font-normal tracking-tight text-ink">{step.title}</h3>
                        <p className="mt-2.5 text-[13.5px] leading-relaxed text-ink-500">{step.body}</p>
                      </div>
                    </div>
                  </motion.article>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
