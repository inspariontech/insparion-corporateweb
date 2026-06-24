import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, MapPin, Send } from 'lucide-react'
import Reveal from './Reveal'
import { useI18n } from '../i18n'

type Status = 'idle' | 'sending' | 'sent' | 'error'

// Web3Forms access key — .env içindeki VITE_WEB3FORMS_ACCESS_KEY'den okunur.
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as
  | string
  | undefined

export default function Contact() {
  const { c } = useI18n()
  const f = c.contact.form
  const [status, setStatus] = useState<Status>('idle')
  const sent = status === 'sent'

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === 'sending' || status === 'sent') return
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>
    // Bal küpü (honeypot) doluysa: bot — sessizce başarı göster, gönderme.
    if (data['bot-field']) {
      setStatus('sent')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: 'INSPARION — Yeni iletişim formu',
          from_name: 'INSPARION Web',
          name: data.name,
          email: data.email,
          company: data.company || '—',
          message: data.message,
        }),
      })
      const json = await res.json()
      if (!json.success) throw new Error(json.message || 'Gönderim başarısız')
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-brand-blue/15 blur-[120px]" />
      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-brand-purple/15 blur-[120px]" />

      <div className="container-x relative">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02]">
          <div className="grid lg:grid-cols-2">
            {/* Left: pitch */}
            <div className="relative p-8 sm:p-12 lg:p-14">
              <Reveal>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-sky">
                  {c.contact.eyebrow}
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                  {c.contact.titlePre}{' '}
                  <span className="gradient-text">{c.contact.titleAccent}</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-white/65">
                  {c.contact.body}
                </p>
              </Reveal>

              <div className="mt-10 space-y-4">
                <a
                  href="mailto:info@insparion.com.tr"
                  className="group flex items-center gap-4 text-white/80 transition-colors hover:text-white"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <Mail className="h-5 w-5 text-brand-sky" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-white/40">
                      {c.contact.emailLabel}
                    </span>
                    info@insparion.com.tr
                  </span>
                </a>
                <div className="flex items-center gap-4 text-white/80">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <MapPin className="h-5 w-5 text-brand-sky" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-white/40">
                      {c.contact.locationLabel}
                    </span>
                    {c.contact.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="border-t border-white/10 bg-ink-900/40 p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-14">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Spam koruması: bal küpü (honeypot) — gizli, botlar doldurur */}
                <p className="hidden">
                  <label>
                    Doldurmayın: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                  </label>
                </p>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label={f.name} name="name" placeholder={f.namePh} />
                  <Field
                    label={f.email}
                    name="email"
                    type="email"
                    placeholder={f.emailPh}
                  />
                </div>
                <Field
                  label={f.company}
                  name="company"
                  placeholder={f.companyPh}
                  required={false}
                />
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/70">
                    {f.project}
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder={f.projectPh}
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder:text-white/30 outline-none transition-colors focus:border-brand-sky/60 focus:bg-white/[0.06]"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'sending' || sent}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink-900 transition-colors hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === 'sending' ? (
                    f.sending
                  ) : sent ? (
                    f.sent
                  ) : (
                    <>
                      {f.submit}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </motion.button>
                {sent && (
                  <p className="flex items-center justify-center gap-2 text-sm text-brand-sky">
                    <Send className="h-4 w-4" /> {f.sentNote}
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-center text-sm text-red-400">{f.error}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  required = true,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-white/70">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder:text-white/30 outline-none transition-colors focus:border-brand-sky/60 focus:bg-white/[0.06]"
      />
    </div>
  )
}
