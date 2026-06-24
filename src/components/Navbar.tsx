import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import Logo from './Logo'
import { useI18n } from '../i18n'

function LangSwitch({ className = '' }: { className?: string }) {
  const { lang, setLang } = useI18n()
  return (
    <div
      className={`flex items-center rounded-full border border-white/10 bg-white/[0.04] p-0.5 text-xs font-semibold ${className}`}
    >
      {(['tr', 'en'] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
            lang === l
              ? 'bg-white text-ink-900'
              : 'text-white/60 hover:text-white'
          }`}
          aria-pressed={lang === l}
        >
          {l}
        </button>
      ))}
    </div>
  )
}

export default function Navbar() {
  const { c } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? 'border-b border-white/10 bg-ink-900/70 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="container-x flex items-center justify-between py-3.5">
          <a href="#top" className="flex items-center" aria-label="INSPARION">
            <Logo
              variant="white"
              className={`w-auto transition-[height] duration-300 ease-out ${
                scrolled ? 'h-16 sm:h-20' : 'h-20 sm:h-24'
              }`}
            />
          </a>

          {/* Desktop nav pill */}
          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-2 py-1.5 backdrop-blur-xl lg:flex">
            {c.nav.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-2 text-sm text-white/75 transition-colors hover:bg-white/10 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <LangSwitch className="hidden sm:flex" />
            <a
              href="#contact"
              className="group hidden items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink-900 transition-colors hover:bg-white/90 md:inline-flex"
            >
              {c.nav.cta}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white lg:hidden"
              aria-label={open ? c.nav.menuClose : c.nav.menuOpen}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-b border-white/10 bg-ink-900/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-x flex flex-col gap-1 py-4">
              {c.nav.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </a>
              ))}
              <div className="flex items-center justify-between gap-3 px-2 pt-3">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink-900"
                >
                  {c.nav.cta} <ArrowUpRight className="h-4 w-4" />
                </a>
                <LangSwitch />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
