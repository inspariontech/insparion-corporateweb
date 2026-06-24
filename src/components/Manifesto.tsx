import { motion } from 'framer-motion'
import Logo from './Logo'
import Globe from './Globe'
import Reveal from './Reveal'
import { useI18n } from '../i18n'

export default function Manifesto() {
  const { c } = useI18n()
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-[#e7eaf4] to-slate-200 py-28 text-ink-900 sm:py-36">
      {/* Rotating brand globe */}
      <Globe className="pointer-events-none absolute inset-0 opacity-95" />
      {/* Soften center for text legibility */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(237,240,248,0.88),rgba(237,240,248,0.35)_55%,transparent_80%)]" />

      <div className="container-x relative z-10 text-center">
        <Reveal>
          {/* sade siyah logo */}
          <Logo variant="dark" className="mx-auto h-32 w-auto sm:h-40" />
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-8 max-w-4xl font-display text-3xl font-semibold leading-snug tracking-tight sm:text-4xl md:text-5xl">
            {c.manifesto.quotePre}{' '}
            <span className="gradient-text">{c.manifesto.quoteAccent}</span>
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-900/65">
            {c.manifesto.sub}
          </p>
        </Reveal>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '6rem' }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-10 h-1 rounded-full bg-gradient-to-r from-brand-sky to-brand-fuchsia"
        />
      </div>
    </section>
  )
}
