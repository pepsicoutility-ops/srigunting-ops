import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

// useLayoutEffect warns during the build-time prerender, where effects never
// run anyway. In the browser it stays a layout effect so the reset to 0 lands
// before paint and the final figure is never briefly visible.
const useResetEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

/** Counts up to `value` once the element scrolls into view. */
export default function Counter({ value, suffix = '', duration = 1600, className = '' }) {
  const ref = useRef(null)
  // Bottom-only margin: a bare `-40px` would also shrink the root
  // horizontally, and narrow figures sitting in the left gutter would
  // then never register as intersecting.
  const inView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' })
  const reduceMotion = useReducedMotion()
  // Start at the real figure so the build-time prerender puts "1200" — not
  // "0" — into the static HTML a crawler reads. The browser resets it to 0
  // in a layout effect before paint, so the count-up still runs on screen.
  const [display, setDisplay] = useState(value)

  useResetEffect(() => {
    setDisplay(0)
  }, [])

  useEffect(() => {
    if (!inView) return
    if (reduceMotion) {
      setDisplay(value)
      return
    }

    let frame
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      // easeOutExpo — fast lead-in, gentle settle
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setDisplay(Math.round(eased * value))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value, duration, reduceMotion])

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  )
}
