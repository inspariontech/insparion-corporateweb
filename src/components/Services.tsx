import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { serviceMeta } from '../data/services'
import Reveal, { staggerChild, staggerParent } from './Reveal'
import { useI18n } from '../i18n'

export default function Services() {
  const { c } = useI18n()
  return (
    <section id="services" className="relative overflow-hidden py-24 sm:py-32">
      <div className="bg-grid mask-fade-b pointer-events-none absolute inset-0 opacity-60" />
      <div className="absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-brand-violet/10 blur-[120px]" />

      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-sky">
              {c.services.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              {c.services.titlePre}{' '}
              <span className="gradient-text">{c.services.titleAccent}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg text-white/60">{c.services.subtitle}</p>
          </Reveal>
        </div>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {c.services.items.map((s, i) => {
            const meta = serviceMeta[i]
            const Icon = meta.icon
            return (
              <motion.div
                key={s.title}
                variants={staggerChild}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-brand-blue/0 to-brand-purple/0 blur-2xl transition-all duration-500 group-hover:from-brand-blue/20 group-hover:to-brand-purple/20" />

                <div className="relative flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 text-brand-sky ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-display text-3xl font-bold text-white/10 transition-colors group-hover:text-white/20">
                    {meta.no}
                  </span>
                </div>

                <h3 className="relative mt-5 text-lg font-semibold text-white">
                  {s.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-white/55">
                  {s.summary}
                </p>

                <ul className="relative mt-5 space-y-2 border-t border-white/10 pt-5">
                  {s.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-start gap-2.5 text-sm text-white/70"
                    >
                      <Check className="mt-0.5 h-4 w-4 flex-none text-brand-sky" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
