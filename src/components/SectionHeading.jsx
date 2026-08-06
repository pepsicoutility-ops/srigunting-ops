import Reveal from './Reveal.jsx'

/**
 * Shared section header: eyebrow rule + display title + optional lead.
 * `tone` swaps the palette for use on dark sections.
 */
export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  tone = 'dark', // 'dark' = dark text on light bg, 'light' = light text on dark bg
  className = '',
  maxWidth = 'max-w-3xl',
}) {
  const isLight = tone === 'light'
  const centered = align === 'center'

  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} ${maxWidth} ${className}`}>
      {eyebrow && (
        <Reveal>
          <div className={`flex items-center gap-3 ${centered ? 'justify-center' : ''}`}>
            <span className={`h-px w-8 ${isLight ? 'bg-emerald-400' : 'bg-emerald-500'}`} />
            <span className={`eyebrow ${isLight ? 'text-emerald-300' : 'text-emerald-600'}`}>{eyebrow}</span>
          </div>
        </Reveal>
      )}

      <Reveal delay={0.08}>
        <h2
          className={`mt-5 font-display text-[clamp(2rem,3.6vw,4rem)] font-light leading-[1.08] tracking-[-0.02em] ${
            isLight ? 'text-white' : 'text-ink'
          }`}
        >
          {title}
        </h2>
      </Reveal>

      {lead && (
        <Reveal delay={0.16}>
          <p
            className={`mt-6 text-base leading-relaxed sm:text-lg ${
              isLight ? 'text-white/60' : 'text-ink-500'
            }`}
          >
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  )
}
