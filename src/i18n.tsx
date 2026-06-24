import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

export type Lang = 'tr' | 'en'

/**
 * Tüm site metinleri. TR ve EN aynı şekle sahiptir.
 * Metinler, referans Insparion sitesinin ton ve diline göre uyarlanmıştır.
 */
const content = {
  tr: {
    nav: {
      links: [
        { label: 'Hakkımızda', href: '#about' },
        { label: 'Hizmetler', href: '#services' },
        { label: 'Yaklaşım', href: '#approach' },
        { label: 'Yaşam Döngüsü', href: '#lifecycle' },
        { label: 'İletişim', href: '#contact' },
      ],
      cta: 'Bizimle çalışın',
      menuOpen: 'Menüyü aç',
      menuClose: 'Menüyü kapat',
      switchTo: 'EN',
    },
    hero: {
      eyebrow: 'Uçtan Uca Dijital Ürün ve Dönüşüm Ortağı',
      line1: 'Ölçeklenmek için tasarlanmış',
      shiny: 'dijital işler',
      line3: 'kuruyoruz.',
      stat: 'Fikirden ölçeğe',
      statSub: 'tek ekip, tek sorumluluk.',
      ctaPrimary: 'Projenizi konuşalım',
      ctaSecondary: 'Hizmetlerimizi keşfedin',
      scroll: 'Keşfetmek için kaydırın',
    },
    marquee: [
      'Ürün Stratejisi',
      'UX / UI',
      'Yazılım Mühendisliği',
      'Yapay Zekâ',
      'DevOps & Güvenlik',
      'Veri & Analitik',
      'Büyüme',
      'Kreatif & Medya',
    ],
    about: {
      eyebrow: 'Yazılım geliştirmenin ötesinde',
      title: 'Teknolojiyi kalıcı bir iş avantajına dönüştürüyoruz.',
      body: 'Strateji, tasarım, mühendislik ve operasyonu uçtan uca tek bir modelde birleştiriyoruz. İlk günden değer üreten ve ölçeklendikçe güçlenen platformlar kuruyoruz.',
      pillars: [
        {
          title: 'Bütünleşik çalışma modeli',
          text: 'Strateji, tasarım, mühendislik ve operasyon — dağınık tedarikçiler yerine tek bir bütün.',
        },
        {
          title: 'Tek sorumlu ekip',
          text: 'Danışman, tasarımcı ve ajanslar arasında bölünmek yerine tek ve sorumlu bir ekip.',
        },
        {
          title: 'Ölçülebilir etki',
          text: 'Sadece ürün değil; gelir, büyüme ve yatırıma hazırlık dahil ölçülebilir sonuçlar.',
        },
        {
          title: 'Uçtan uca sahiplik',
          text: 'Fırsatı tanımlar, ürünü geliştirir ve lansman sonrası büyümeyi yönetiriz.',
        },
      ],
      imageCaption: 'Fikirden ölçeklenmeye — tek ekip, kesintisiz süreç.',
    },
    stats: [
      { value: 12, prefix: '', suffix: '', label: 'Uçtan uca uzmanlık alanı' },
      { value: 100, prefix: '', suffix: '%', label: 'Tek elden yönetim' },
      { value: 360, prefix: '', suffix: '°', label: 'Ürün yaşam döngüsü kapsamı' },
      { value: 1, prefix: '#', suffix: '', label: 'Tek ekip, tek sorumluluk' },
    ],
    manifesto: {
      quotePre: '“Dağınık tedarikçiler değil; stratejiden koda, tasarımdan büyümeye',
      quoteAccent: 'tek bir ekip.”',
      sub: 'Fikirden küresel ölçeklenmeye kadar her adımı tek bir sorumlulukla yürütürüz.',
    },
    services: {
      eyebrow: 'Hizmetlerimiz',
      titlePre: 'Bir ürünün ihtiyaç duyduğu',
      titleAccent: 'her yetkinlik',
      subtitle:
        'Stratejiden koda, tasarımdan büyümeye 12 disiplin — birbirine entegre çalışan tek bir ekip içinde.',
      items: [
        {
          title: 'Ürün Keşfi & Strateji',
          summary: 'Doğru ürün vizyonunu ve büyüme rotasını veriyle kurguluyoruz.',
          items: [
            'Pazar, rekabet ve kullanıcı araştırması',
            'Ürün stratejisi ve yol haritası',
            'Gelir modeli ve pazara giriş',
          ],
        },
        {
          title: 'Tasarım & Kullanıcı Deneyimi',
          summary: 'Anlaşılır, güvenilir ve dönüşüm odaklı deneyimler tasarlıyoruz.',
          items: [
            'UX araştırması ve UX/UI tasarımı',
            'Tasarım sistemi ve prototipleme',
            'Kullanılabilirlik ve dönüşüm optimizasyonu',
          ],
        },
        {
          title: 'Teknoloji & Yazılım Mühendisliği',
          summary: 'Güvenli ve ölçeklenebilir mobil, web ve platform ürünleri geliştiriyoruz.',
          items: [
            'Mobil, web ve platform geliştirme',
            'API, veritabanı ve entegrasyonlar',
            'Test, kalite güvence ve sürüm yönetimi',
          ],
        },
        {
          title: 'Altyapı, DevOps & Güvenlik',
          summary: 'Kesintisiz ve güvenli operasyon için bulut altyapısı ve DevOps.',
          items: [
            'Bulut altyapısı ve CI/CD',
            'Siber güvenlik ve penetrasyon testleri',
            'KVKK ve iş sürekliliği',
          ],
        },
        {
          title: 'Veri, Analitik & Yapay Zekâ',
          summary: 'Veriyi ve yapay zekâyı operasyonel zekâya dönüştürüyoruz.',
          items: [
            'İş zekâsı ve gösterge paneli tasarımı',
            'Öneri, eşleştirme ve puanlama',
            'Tahminleme ve yapay zekâ uygulamaları',
          ],
        },
        {
          title: 'Operasyon & İş Süreçleri',
          summary: 'Süreçleri uçtan uca tasarlayıp operasyonel verimliliği artırıyoruz.',
          items: [
            'Operasyon ve süreç tasarımı',
            'Müşteri hizmetleri ve kalite yönetimi',
            'Raporlama ve performans yönetimi',
          ],
        },
        {
          title: 'Pazaryeri & Ekosistem Yönetimi',
          summary: 'Çok taraflı pazaryerleri için partner ve gelir paylaşımı yönetimi.',
          items: [
            'Partner ve üye işyeri yönetimi',
            'Satıcı kaydı ve mutabakat süreçleri',
            'Hakediş ve komisyon modelleri',
          ],
        },
        {
          title: 'Pazarlama & Büyüme',
          summary: 'Marka stratejisinden performans pazarlamasına sürdürülebilir büyüme.',
          items: [
            'Marka ve dijital pazarlama stratejisi',
            'SEO / ASO ve performans pazarlaması',
            'CRM, sadakat ve topluluk yönetimi',
          ],
        },
        {
          title: 'Kreatif, Medya & İletişim',
          summary: 'Markayı her temas noktasında güçlendiren içerik ve prodüksiyon.',
          items: [
            'Kurumsal kimlik ve grafik tasarım',
            'Video, fotoğraf ve hareketli tasarım',
            'İçerik, medya planlama ve halkla ilişkiler',
          ],
        },
        {
          title: 'İş Geliştirme & Kurumsal Gelişim',
          summary: 'Stratejik ortaklıklar ve yeni gelir modelleri geliştiriyoruz.',
          items: [
            'Stratejik ortaklıklar',
            'Ticari iş birlikleri',
            'Kurumsal satış ve gelir modelleri',
          ],
        },
        {
          title: 'Fikri Mülkiyet & Hak Yönetimi',
          summary: 'Üretilen değeri patent, marka ve lisans süreçleriyle koruyoruz.',
          items: [
            'Patent ve marka tescili',
            'Telif ve lisans yönetimi',
            'Kaynak kod ve fikri mülkiyet koruması',
          ],
        },
        {
          title: 'Uçtan Uca Ürün Yaşam Döngüsü',
          summary: 'Fikirden ölçeklenmeye tüm yaşam döngüsünü tek elden yönetiyoruz.',
          items: [
            'Keşif, tasarım ve geliştirme',
            'Canlıya alma ve operasyon',
            'Büyüme ve uluslararası ölçeklenme',
          ],
        },
      ],
    },
    approach: {
      eyebrow: 'Yaklaşımımız',
      titlePre: 'Net bir süreç,',
      titleAccent: 'öngörülebilir sonuç',
      note: 'Her aşamada şeffaf iletişim ve ölçülebilir çıktılar — keşiften büyümeye kesintisiz bir akış.',
      steps: [
        { title: 'Keşfet', text: 'Gerçek fırsatı ortaya çıkarır; pazarı ve ürün vizyonunu netleştiririz.' },
        { title: 'Tasarla', text: 'Çözümü somutlaştırır; deneyimi ve tasarım sistemini kurgularız.' },
        { title: 'Geliştir', text: 'Ürünü, performans ve ölçeği gözeterek güvenli biçimde geliştiririz.' },
        { title: 'Büyüt', text: 'Ürünü işletir; veri ve pazarlamayla sürdürülebilir büyümeyi sağlarız.' },
      ],
    },
    lifecycle: {
      eyebrow: 'Uçtan Uca Yaşam Döngüsü',
      titlePre: 'Fikirden',
      titleAccent: 'ölçeklenebilir işe',
      titlePost: ' kadar yanınızdayız.',
      body: 'Keşiften operasyona, büyümeden yatırıma hazırlığa kadar ürünün her aşamasını tek bir ekip yürütür, yönetir ve koordine eder.',
      phases: [
        { label: 'Keşfet', desc: 'Gerçek fırsatı ortaya çıkarırız.' },
        { label: 'Tanımla', desc: 'İleriye giden yolu belirleriz.' },
        { label: 'Tasarla', desc: 'Çözümü somut hale getiririz.' },
        { label: 'Geliştir', desc: 'Performans ve ölçek için mühendislik yaparız.' },
        { label: 'İşlet', desc: 'Ürünü gerçek dünyada çalışır kılarız.' },
        { label: 'Büyüt', desc: 'Lansman sonrası işi ileriye taşırız.' },
      ],
    },
    contact: {
      eyebrow: 'İletişim',
      titlePre: 'Bir sonraki ürününüzü',
      titleAccent: 'birlikte geliştirelim.',
      body: 'Fikrinizi, mevcut ürününüzü ya da büyüme hedefinizi anlatın; en uygun ekiple yola çıkalım.',
      emailLabel: 'E-posta',
      locationLabel: 'Lokasyon',
      location: 'Türkiye · Global ölçekte hizmet',
      form: {
        name: 'Ad Soyad',
        namePh: 'Adınız',
        email: 'E-posta',
        emailPh: 'ornek@sirket.com',
        company: 'Şirket',
        companyPh: 'Şirketiniz',
        project: 'Projeniz',
        projectPh: 'Kısaca anlatın...',
        submit: 'Mesaj gönder',
        sent: 'Teşekkürler! En kısa sürede dönüş yapacağız.',
        sentNote: 'İletiniz alındı.',
      },
    },
    footer: {
      tagline:
        'Dijital işleri kurmak, dönüştürmek ve ölçeklendirmek için uçtan uca teknoloji ortağı.',
      slogan: 'Fikirden teknolojiye, teknolojiden değere.',
      cols: [
        {
          title: 'Hizmetler',
          links: [
            'Ürün Keşfi & Strateji',
            'Tasarım & UX',
            'Yazılım Mühendisliği',
            'Veri & Yapay Zekâ',
            'Pazarlama & Büyüme',
          ],
        },
        {
          title: 'Şirket',
          links: ['Hakkımızda', 'Yaklaşımımız', 'Yaşam Döngüsü', 'İletişim'],
        },
      ],
      rights: 'Tüm hakları saklıdır.',
      legal: ['Gizlilik', 'KVKK', 'Şartlar'],
    },
  },

  en: {
    nav: {
      links: [
        { label: 'About', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Approach', href: '#approach' },
        { label: 'Lifecycle', href: '#lifecycle' },
        { label: 'Contact', href: '#contact' },
      ],
      cta: 'Work with us',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
      switchTo: 'TR',
    },
    hero: {
      eyebrow: 'Your End-to-End Digital Product & Transformation Partner',
      line1: 'We build digital businesses',
      shiny: 'designed to',
      line3: 'scale.',
      stat: 'From idea to scale',
      statSub: 'one team, one accountability.',
      ctaPrimary: 'Start a conversation',
      ctaSecondary: 'Explore our capabilities',
      scroll: 'Scroll to explore',
    },
    marquee: [
      'Product Strategy',
      'UX / UI',
      'Software Engineering',
      'Artificial Intelligence',
      'DevOps & Security',
      'Data & Analytics',
      'Growth',
      'Creative & Media',
    ],
    about: {
      eyebrow: 'Beyond software delivery',
      title: 'We turn technology into lasting business advantage.',
      body: 'We unite strategy, design, engineering and operations in one delivery model — building platforms that create value from day one and grow stronger as they scale.',
      pillars: [
        {
          title: 'Connected delivery model',
          text: 'Strategy, design, engineering and operations — one flow, not fragmented vendors.',
        },
        {
          title: 'One accountable team',
          text: 'A single accountable team instead of scattered consultants and agencies.',
        },
        {
          title: 'Measurable impact',
          text: 'Not just a product — measurable outcomes across revenue, growth and investment readiness.',
        },
        {
          title: 'End-to-end ownership',
          text: 'We define the opportunity, build the product and drive post-launch growth.',
        },
      ],
      imageCaption: 'From idea to scale — one team, one continuous process.',
    },
    stats: [
      { value: 12, prefix: '', suffix: '', label: 'End-to-end service disciplines' },
      { value: 100, prefix: '', suffix: '%', label: 'Single-hand ownership' },
      { value: 360, prefix: '', suffix: '°', label: 'Product lifecycle coverage' },
      { value: 1, prefix: '#', suffix: '', label: 'One team, one accountability' },
    ],
    manifesto: {
      quotePre: '“Not fragmented vendors — from strategy to code, from design to growth,',
      quoteAccent: 'one single team.”',
      sub: 'From idea to global scale, we run every step with a single accountability.',
    },
    services: {
      eyebrow: 'Our Services',
      titlePre: 'Every capability',
      titleAccent: 'a product needs',
      subtitle:
        'From strategy to code, from design to growth — 12 disciplines within one integrated team.',
      items: [
        {
          title: 'Product Discovery & Strategy',
          summary: 'We shape the right product vision and growth path with data.',
          items: [
            'Market, competitor & user research',
            'Product strategy & roadmap',
            'Revenue model & go-to-market',
          ],
        },
        {
          title: 'Design & User Experience',
          summary: 'We design clear, trusted, conversion-focused experiences.',
          items: [
            'UX research & UX/UI design',
            'Design System & prototyping',
            'Usability & conversion optimization',
          ],
        },
        {
          title: 'Technology & Software Engineering',
          summary: 'We engineer secure, scalable mobile, web and platform products.',
          items: [
            'Mobile, web & platform development',
            'APIs, databases & integrations',
            'Testing, QA & release management',
          ],
        },
        {
          title: 'Infrastructure, DevOps & Security',
          summary: 'Cloud infrastructure and DevOps for secure, uninterrupted operations.',
          items: [
            'Cloud infrastructure & CI/CD',
            'Cybersecurity & penetration testing',
            'GDPR/KVKK & business continuity',
          ],
        },
        {
          title: 'Data, Analytics & AI',
          summary: 'We turn data and AI into operational intelligence.',
          items: [
            'BI & dashboard design',
            'Recommendation, matching & scoring',
            'Forecasting & AI applications',
          ],
        },
        {
          title: 'Operations & Business Processes',
          summary: 'We design processes end to end to raise operational efficiency.',
          items: [
            'Operation & process design',
            'Customer service & quality management',
            'Reporting & performance management',
          ],
        },
        {
          title: 'Marketplace & Ecosystem Management',
          summary: 'Partner and revenue-share management for multi-sided marketplaces.',
          items: [
            'Partner & merchant management',
            'Onboarding & reconciliation',
            'Settlement & commission models',
          ],
        },
        {
          title: 'Marketing & Growth',
          summary: 'Sustainable growth from brand strategy to performance marketing.',
          items: [
            'Brand & digital marketing strategy',
            'SEO / ASO & performance marketing',
            'CRM, loyalty & community',
          ],
        },
        {
          title: 'Creative, Media & Communication',
          summary: 'Content and production that strengthen the brand at every touchpoint.',
          items: [
            'Corporate identity & graphic design',
            'Video, photography & motion design',
            'Content, media planning & PR',
          ],
        },
        {
          title: 'Business Development & Corporate Growth',
          summary: 'We build strategic partnerships and new revenue models.',
          items: [
            'Strategic partnerships',
            'Commercial collaborations',
            'Corporate sales & revenue models',
          ],
        },
        {
          title: 'Intellectual Property & Rights Management',
          summary: 'We protect created value through patent, trademark and license processes.',
          items: [
            'Patent & trademark registration',
            'Copyright & license management',
            'Source code & IP protection',
          ],
        },
        {
          title: 'End-to-End Product Lifecycle',
          summary: 'We manage the entire lifecycle from idea to scale, from a single hand.',
          items: [
            'Discovery, design & development',
            'Go-live & operations',
            'Growth & international scaling',
          ],
        },
      ],
    },
    approach: {
      eyebrow: 'Our Approach',
      titlePre: 'A clear process,',
      titleAccent: 'predictable outcomes',
      note: 'Transparent communication and measurable outputs at every stage — an uninterrupted flow from discovery to growth.',
      steps: [
        { title: 'Discover', text: 'We uncover the real opportunity and clarify the market and product vision.' },
        { title: 'Design', text: 'We make the solution tangible — shaping the experience and design system.' },
        { title: 'Engineer', text: 'We build the product securely, engineered for performance and scale.' },
        { title: 'Grow', text: 'We run the product and drive sustainable growth with data and marketing.' },
      ],
    },
    lifecycle: {
      eyebrow: 'End-to-End Lifecycle',
      titlePre: 'From ambition to measurable',
      titleAccent: 'impact',
      titlePost: ' — we are with you all the way.',
      body: 'From discovery and operations to growth and investment readiness, one team runs, manages and coordinates every stage of the product.',
      phases: [
        { label: 'Discover', desc: 'We uncover the real opportunity.' },
        { label: 'Define', desc: 'We establish the path forward.' },
        { label: 'Design', desc: 'We make the solution tangible.' },
        { label: 'Engineer', desc: 'We engineer for performance and scale.' },
        { label: 'Operate', desc: 'We make the product work in the real world.' },
        { label: 'Grow', desc: 'We improve what happens after launch.' },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      titlePre: "Let's build your next product",
      titleAccent: 'together.',
      body: 'Tell us about your idea, your current product or your growth goal — and we will set off with the right team.',
      emailLabel: 'Email',
      locationLabel: 'Location',
      location: 'Türkiye · Serving at global scale',
      form: {
        name: 'Full Name',
        namePh: 'Your name',
        email: 'Email',
        emailPh: 'you@company.com',
        company: 'Company',
        companyPh: 'Your company',
        project: 'Your project',
        projectPh: 'Tell us briefly...',
        submit: 'Send message',
        sent: "Thank you! We'll get back to you shortly.",
        sentNote: 'Your message has been received.',
      },
    },
    footer: {
      tagline:
        'An end-to-end technology partner for building, transforming and scaling digital businesses.',
      slogan: 'From ambition to technology. From technology to impact.',
      cols: [
        {
          title: 'Services',
          links: [
            'Product Discovery & Strategy',
            'Design & UX',
            'Software Engineering',
            'Data & AI',
            'Marketing & Growth',
          ],
        },
        {
          title: 'Company',
          links: ['About', 'Approach', 'Lifecycle', 'Contact'],
        },
      ],
      rights: 'All rights reserved.',
      legal: ['Privacy', 'KVKK', 'Terms'],
    },
  },
}

export type Content = (typeof content)['tr']

interface I18nCtx {
  lang: Lang
  setLang: (l: Lang) => void
  toggle: () => void
  c: Content
}

const Ctx = createContext<I18nCtx | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'en'
    return (localStorage.getItem('lang') as Lang) || 'en'
  })

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const value: I18nCtx = {
    lang,
    setLang,
    toggle: () => setLang(lang === 'tr' ? 'en' : 'tr'),
    c: content[lang] as Content,
  }

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useI18n(): I18nCtx {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useI18n must be used within LanguageProvider')
  return ctx
}
