import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

/**
 * Auto-advancing image carousel: one slide visible, drag or arrow keys to move.
 *
 * The track animates in pixels rather than percentages because the same `x`
 * motion value is what `drag` writes to — mixing the two units makes the slide
 * jump when a drag ends. The width comes from a ResizeObserver on the viewport,
 * and is 0 during the build-time prerender, which simply leaves slide one in
 * place (the prerender strips transforms anyway).
 *
 * Autoplay stops while the pointer is over the carousel, while anything inside
 * it has focus, while the tab is hidden, and entirely under
 * `prefers-reduced-motion` — motion a reader cannot pause is the thing that
 * makes carousels hostile.
 */
export default function Carousel({
  slides,
  interval = 4500,
  labels,
  aspect = 'aspect-[4/3]',
  className = '',
}) {
  const [index, setIndex] = useState(0)
  const [width, setWidth] = useState(0)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [tabVisible, setTabVisible] = useState(true)

  const viewportRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const count = slides.length

  const go = useCallback((next) => setIndex(((next % count) + count) % count), [count])

  useEffect(() => {
    const el = viewportRef.current
    if (!el) return
    const measure = () => setWidth(el.clientWidth)
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onVisibility = () => setTabVisible(!document.hidden)
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [])

  const playing = count > 1 && !hovered && !focused && tabVisible && !reduceMotion

  useEffect(() => {
    if (!playing) return
    const id = setInterval(() => setIndex((i) => (i + 1) % count), interval)
    return () => clearInterval(id)
  }, [playing, count, interval])

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      go(index - 1)
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      go(index + 1)
    }
  }

  /** Commit a drag to a slide change on either distance or flick velocity. */
  const onDragEnd = (_event, info) => {
    const threshold = Math.min(width * 0.2, 90)
    if (info.offset.x < -threshold || info.velocity.x < -450) go(index + 1)
    else if (info.offset.x > threshold || info.velocity.x > 450) go(index - 1)
  }

  const active = slides[index]

  return (
    <div
      className={className}
      role="group"
      aria-roledescription="carousel"
      aria-label={labels.region}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={() => setFocused(false)}
    >
      <div
        ref={viewportRef}
        tabIndex={0}
        onKeyDown={onKeyDown}
        className={`group relative ${aspect} cursor-grab overflow-hidden rounded-2xl border border-ink/10 bg-cream-200 active:cursor-grabbing focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2`}
      >
        <motion.div
          className="flex h-full"
          animate={{ x: -index * width }}
          transition={{ duration: reduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          drag={count > 1 ? 'x' : false}
          dragConstraints={{ left: -(count - 1) * width, right: 0 }}
          dragElastic={0.14}
          dragMomentum={false}
          onDragEnd={onDragEnd}
        >
          {slides.map((slide, i) => (
            <div
              key={slide.src}
              className="h-full w-full shrink-0"
              aria-hidden={i !== index}
              // Inactive slides stay in the DOM for the crawler but are taken
              // out of the tab order so keyboard focus cannot land off-screen.
              inert={i !== index ? '' : undefined}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                width="900"
                height="1125"
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
                draggable="false"
                className="h-full w-full select-none object-cover"
              />
            </div>
          ))}
        </motion.div>

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label={labels.previous}
              className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-ink/55 text-white opacity-0 backdrop-blur-md transition-all duration-300 hover:bg-ink/80 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white group-hover:opacity-100 max-md:opacity-100"
            >
              <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden="true">
                <path d="M10 3 5 8l5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label={labels.next}
              className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-ink/55 text-white opacity-0 backdrop-blur-md transition-all duration-300 hover:bg-ink/80 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white group-hover:opacity-100 max-md:opacity-100"
            >
              <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden="true">
                <path d="m6 3 5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-ink/60 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
              {index + 1}/{count}
            </span>
          </>
        )}
      </div>

      {/* Caption is a live region so the slide change is announced, but only
          while autoplay is paused — otherwise it would interrupt constantly. */}
      <p aria-live={playing ? 'off' : 'polite'} className="mt-3 min-h-[2.5rem] text-[12.5px] leading-snug text-ink-500">
        {active.alt}
      </p>

      {count > 1 && (
        <div className="mt-1 flex flex-wrap items-center gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => go(i)}
              aria-label={`${labels.goTo} ${i + 1}`}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 ${
                i === index ? 'w-7 bg-emerald-500' : 'w-2.5 bg-ink/20 hover:bg-ink/40'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
