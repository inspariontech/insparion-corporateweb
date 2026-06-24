import { motion } from 'framer-motion'
import { Layers, Repeat, Rocket, Users } from 'lucide-react'
import Reveal from './Reveal'
import { useI18n } from '../i18n'

const icons = [Layers, Users, Rocket, Repeat]

export default function About() {
  const { c } = useI18n()
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-brand-blue/15 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-brand-purple/15 blur-[120px]" />

      <div className="container-x relative">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left: heading + image */}
          <div>
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-sky">
                {c.about.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                {c.about.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">
                {c.about.body}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="group relative mt-10 overflow-hidden rounded-3xl border border-white/10">
                <motion.img
                  src="/images/about-dev.jpg"
                  alt="INSPARION — ürün geliştirme"
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-80"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <p className="max-w-xs text-sm text-white/85">
                    {c.about.imageCaption}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: pillars */}
          <div className="grid gap-5 sm:grid-cols-2 lg:content-center">
            {c.about.pillars.map((p, i) => {
              const Icon = icons[i]
              return (
                <Reveal key={p.title} delay={i * 0.08} className="h-full">
                  <div className="group h-full rounded-2xl glass p-6 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.07]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/25 to-brand-purple/25 text-brand-sky ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-white">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      {p.text}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
