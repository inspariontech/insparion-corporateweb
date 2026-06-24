import { useI18n } from '../i18n'

export default function Marquee() {
  const { c } = useI18n()
  const row = [...c.marquee, ...c.marquee]
  return (
    <div className="relative border-y border-white/10 bg-ink-800/50 py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-900 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-900 to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-10 px-5">
        {row.map((w, i) => (
          <div key={i} className="flex items-center gap-10">
            <span className="whitespace-nowrap text-lg font-medium text-white/55">
              {w}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand-sky to-brand-fuchsia" />
          </div>
        ))}
      </div>
    </div>
  )
}
