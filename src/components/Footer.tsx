import { ArrowUpRight } from 'lucide-react'
import Logo from './Logo'
import { useI18n } from '../i18n'

export default function Footer() {
  const { c } = useI18n()
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-900">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo variant="white" className="h-[7.5rem] w-auto" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/55">
              {c.footer.tagline}
            </p>
            <p className="mt-4 max-w-sm text-sm font-medium gradient-text">
              {c.footer.slogan}
            </p>
            <a
              href="mailto:tech@insparion.com.tr"
              className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              tech@insparion.com.tr
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {c.footer.cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#services"
                      className="text-sm text-white/65 transition-colors hover:text-white"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} INSPARION. {c.footer.rights}
          </p>
          <div className="flex items-center gap-6 text-sm text-white/40">
            {c.footer.legal.map((l) => (
              <a key={l} href="#" className="transition-colors hover:text-white/70">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
