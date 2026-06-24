import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import ShinyText from './ShinyText'
import { useI18n } from '../i18n'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4'

export default function Hero() {
  const { c } = useI18n()
  return (
    <section id="top" className="relative h-screen min-h-[680px] w-full overflow-hidden bg-black">
      {/* Video background */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/abstract.jpg"
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      {/* Overlays for legibility */}
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900/70 via-transparent to-ink-900" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-900/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        <div className="container-x flex flex-1 flex-col justify-center pt-32 sm:pt-36">
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mb-7 inline-flex w-fit items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/70 md:text-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-sky" />
            {c.hero.eyebrow}
          </motion.span>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl font-medium leading-[1.32] tracking-tightest text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {c.hero.line1}
            <br />
            <ShinyText text={c.hero.shiny} />
            <br />
            <span className="text-white">{c.hero.line3}</span>
          </motion.h1>

          {/* Supporting line — grounded with vertical accent */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-10 flex items-center gap-3.5"
          >
            <span className="h-9 w-[3px] flex-none rounded-full bg-gradient-to-b from-brand-sky to-brand-fuchsia" />
            <p className="text-sm text-white/75 md:text-base">
              <span className="gradient-text font-semibold">{c.hero.stat}</span>
              <span className="text-white/35"> — </span>
              {c.hero.statSub}
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mt-11 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink-900 transition-all duration-300 hover:bg-white/90 md:px-8 md:py-4"
            >
              {c.hero.ctaPrimary}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/10 md:px-8 md:py-4"
            >
              {c.hero.ctaSecondary}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="container-x pb-8"
        >
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/50">
            <span className="relative flex h-9 w-5 items-start justify-center rounded-full border border-white/30 p-1">
              <motion.span
                className="h-1.5 w-1.5 rounded-full bg-white"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              />
            </span>
            {c.hero.scroll}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
