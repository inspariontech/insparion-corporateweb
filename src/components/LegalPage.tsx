import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Logo from './Logo'
import Footer from './Footer'
import { useI18n } from '../i18n'
import { legalContent, type LegalKey } from '../legalContent'

function LangSwitch() {
  const { lang, setLang } = useI18n()
  return (
    <div className="flex items-center rounded-full border border-white/10 bg-white/[0.04] p-0.5 text-xs font-semibold">
      {(['tr', 'en'] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
            lang === l ? 'bg-white text-ink-900' : 'text-white/60 hover:text-white'
          }`}
          aria-pressed={lang === l}
        >
          {l}
        </button>
      ))}
    </div>
  )
}

export default function LegalPage({ doc }: { doc: LegalKey }) {
  const { lang } = useI18n()
  const data = legalContent[lang][doc]
  const other = doc === 'privacy' ? 'kvkk' : 'privacy'
  const otherDoc = legalContent[lang][other]
  const backLabel = lang === 'tr' ? 'Siteye dön' : 'Back to site'

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = `${data.title} — INSPARION`
  }, [data.title])

  return (
    <div className="relative min-h-screen bg-ink-900">
      {/* Slim header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-900/70 backdrop-blur-xl">
        <div className="container-x flex items-center justify-between py-4">
          <Link to="/" aria-label="INSPARION">
            <Logo variant="white" className="h-12 w-auto sm:h-14" />
          </Link>
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">{backLabel}</span>
            </Link>
            <LangSwitch />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-brand-blue/10 blur-[130px]" />
        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-brand-purple/10 blur-[130px]" />

        <article className="container-x relative max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-sky">
            INSPARION
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {data.title}
          </h1>
          <p className="mt-3 text-sm text-white/40">{data.updated}</p>
          <p className="mt-8 text-lg leading-relaxed text-white/70">{data.intro}</p>

          <div className="mt-12 space-y-10">
            {data.sections.map((s) => (
              <section key={s.h}>
                <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">
                  {s.h}
                </h2>
                {s.p?.map((para, i) => (
                  <p
                    key={i}
                    className="mt-3 text-base leading-relaxed text-white/65"
                  >
                    {para}
                  </p>
                ))}
                {s.list && (
                  <ul className="mt-4 space-y-2.5">
                    {s.list.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-base leading-relaxed text-white/65"
                      >
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-r from-brand-sky to-brand-fuchsia" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* Cross link */}
          <div className="mt-14 flex flex-col items-start gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <Link
              to={`/${otherDoc.slug}`}
              className="group inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {otherDoc.title}
              <ArrowLeft className="h-4 w-4 rotate-180 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="mailto:tech@insparion.com.tr"
              className="text-sm text-white/50 transition-colors hover:text-white/80"
            >
              tech@insparion.com.tr
            </a>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
