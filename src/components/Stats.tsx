import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView } from 'framer-motion'
import { useI18n } from '../i18n'

interface StatProps {
  value: number
  suffix?: string
  prefix?: string
}

function Counter({ value, prefix = '', suffix = '' }: StatProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value])

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const { c } = useI18n()
  return (
    <section className="relative py-20">
      <div className="container-x">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] lg:grid-cols-4">
          {c.stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-ink-900/40 p-8 text-center sm:p-10"
            >
              <div className="font-display text-5xl font-bold tracking-tight gradient-text sm:text-6xl">
                <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <p className="mt-3 text-sm text-white/60">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
