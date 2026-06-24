import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { useI18n } from '../i18n'

const stepImages = [
  '/images/strategy.jpg',
  '/images/ux-design.jpg',
  '/images/engineering.jpg',
  '/images/marketing.jpg',
]

export default function Approach() {
  const { c } = useI18n()
  return (
    <section id="approach" className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-sky">
                {c.approach.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                {c.approach.titlePre}{' '}
                <span className="gradient-text">{c.approach.titleAccent}</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-white/60">{c.approach.note}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {c.approach.steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10">
                <img
                  src={stepImages[i]}
                  alt={s.title}
                  loading="lazy"
                  className="h-64 w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/70 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm font-bold text-white backdrop-blur">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {s.text}
                  </p>
                </div>
                <motion.div
                  className="absolute left-0 top-0 h-1 bg-gradient-to-r from-brand-sky to-brand-fuchsia"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
