import { motion } from 'framer-motion'
import { Search, Target, PenTool, Code2, Settings, LineChart } from 'lucide-react'
import Logo from './Logo'
import Reveal from './Reveal'
import { useI18n } from '../i18n'

const icons = [Search, Target, PenTool, Code2, Settings, LineChart]

export default function Lifecycle() {
  const { c } = useI18n()
  return (
    <section id="lifecycle" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-800/0 via-ink-800/40 to-ink-800/0" />
      <div className="container-x relative">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 sm:p-12 lg:p-16">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Reveal>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-sky">
                  {c.lifecycle.eyebrow}
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                  {c.lifecycle.titlePre}{' '}
                  <span className="gradient-text">
                    {c.lifecycle.titleAccent}
                  </span>
                  {c.lifecycle.titlePost}
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/65">
                  {c.lifecycle.body}
                </p>
              </Reveal>

              <div className="mt-10 space-y-3">
                {c.lifecycle.phases.map((p, i) => {
                  const Icon = icons[i]
                  return (
                    <Reveal key={p.label} delay={0.1 + i * 0.06}>
                      <div className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-3 pr-5 transition-colors hover:border-white/15 hover:bg-white/[0.05]">
                        <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gradient-to-br from-brand-blue/25 to-brand-purple/25 text-brand-sky ring-1 ring-white/10">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="text-sm font-medium uppercase tracking-wider text-white/45">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="min-w-[5.5rem] text-base font-medium text-white">
                          {p.label}
                        </span>
                        <span className="hidden flex-1 text-sm text-white/45 sm:block">
                          {p.desc}
                        </span>
                        <motion.span
                          className="ml-auto h-2 w-2 flex-none rounded-full bg-brand-sky"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.25,
                          }}
                        />
                      </div>
                    </Reveal>
                  )
                })}
              </div>
            </div>

            {/* Orbiting logo visual */}
            <Reveal delay={0.2}>
              <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-blue/15 to-brand-purple/15 blur-3xl" />
                {[0, 1, 2].map((ring) => (
                  <motion.div
                    key={ring}
                    className="absolute rounded-full border border-white/10"
                    style={{ inset: `${ring * 14}%` }}
                    animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
                    transition={{
                      duration: 28 + ring * 8,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-brand-sky to-brand-fuchsia shadow-[0_0_18px_rgba(56,189,248,0.7)]" />
                  </motion.div>
                ))}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative z-10 flex h-52 w-52 items-center justify-center rounded-full border border-white/10 bg-ink-900/60 backdrop-blur-xl sm:h-60 sm:w-60"
                >
                  <Logo variant="white" className="h-auto w-40 sm:w-48" />
                </motion.div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
