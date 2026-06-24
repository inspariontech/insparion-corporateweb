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
        sending: 'Gönderiliyor...',
        sent: 'Teşekkürler! En kısa sürede dönüş yapacağız.',
        sentNote: 'İletiniz alındı.',
        error:
          'Bir hata oluştu. Lütfen tekrar deneyin ya da info@insparion.com.tr adresine yazın.',
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
            { label: 'Ürün Keşfi & Strateji', href: '/#product-discovery-strategy' },
            { label: 'Tasarım & UX', href: '/#design-ux' },
            { label: 'Yazılım Mühendisliği', href: '/#software-engineering' },
            { label: 'Veri & Yapay Zekâ', href: '/#data-ai' },
            { label: 'Pazarlama & Büyüme', href: '/#marketing-growth' },
          ],
        },
        {
          title: 'Şirket',
          links: [
            { label: 'Hakkımızda', href: '/#about' },
            { label: 'Yaklaşımımız', href: '/#approach' },
            { label: 'Yaşam Döngüsü', href: '/#lifecycle' },
            { label: 'İletişim', href: '/#contact' },
          ],
        },
      ],
      rights: 'Tüm hakları saklıdır.',
      legal: [
        { label: 'Gizlilik', href: '/gizlilik' },
        { label: 'KVKK', href: '/kvkk' },
      ],
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
      title: 'We deliver business outcomes, not just software.',
      body: 'We bring strategy, design, engineering and operations together under one team, so your product ships faster, performs in production and keeps improving as it grows.',
      pillars: [
        {
          title: 'One integrated team',
          text: 'Strategy, design, engineering and operations in a single team — not a chain of separate vendors.',
        },
        {
          title: 'A single point of accountability',
          text: 'One partner answerable for the result, instead of coordinating consultants, designers and agencies.',
        },
        {
          title: 'Measured on results',
          text: 'We are measured on revenue, growth and investment readiness — not just deliverables.',
        },
        {
          title: 'End-to-end ownership',
          text: 'We own the work from opportunity definition to build and post-launch growth.',
        },
      ],
      imageCaption: 'From first idea to scale, delivered by one team.',
    },
    stats: [
      { value: 12, prefix: '', suffix: '', label: 'End-to-end service disciplines' },
      { value: 100, prefix: '', suffix: '%', label: 'Ownership, end to end' },
      { value: 360, prefix: '', suffix: '°', label: 'Product lifecycle coverage' },
      { value: 1, prefix: '#', suffix: '', label: 'One team, one accountability' },
    ],
    manifesto: {
      quotePre: '“Not a chain of vendors — from strategy to code, from design to growth,',
      quoteAccent: 'one team.”',
      sub: 'We run every stage, from first idea to global scale, as your single accountable partner.',
    },
    services: {
      eyebrow: 'Our Services',
      titlePre: 'Every capability',
      titleAccent: 'a product needs',
      subtitle:
        'From strategy to code and design to growth — twelve disciplines inside one team.',
      items: [
        {
          title: 'Product Discovery & Strategy',
          summary: 'We define what to build and how it wins, backed by market and user research.',
          items: [
            'Market, competitor & user research',
            'Product strategy & roadmap',
            'Revenue model & go-to-market',
          ],
        },
        {
          title: 'Design & User Experience',
          summary: 'We design interfaces that are clear to use and built to convert.',
          items: [
            'UX research & UX/UI design',
            'Design system & prototyping',
            'Usability & conversion optimization',
          ],
        },
        {
          title: 'Technology & Software Engineering',
          summary: 'We build secure, scalable mobile, web and platform products.',
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
          summary: 'We put data and AI to work in everyday operations and decisions.',
          items: [
            'BI & dashboard design',
            'Recommendation, matching & scoring',
            'Forecasting & AI applications',
          ],
        },
        {
          title: 'Operations & Business Processes',
          summary: 'We design and run operations that scale without losing efficiency.',
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
          summary: 'Growth across the funnel, from brand strategy to performance marketing.',
          items: [
            'Brand & digital marketing strategy',
            'SEO / ASO & performance marketing',
            'CRM, loyalty & community',
          ],
        },
        {
          title: 'Creative, Media & Communication',
          summary: 'Brand, content and production across every customer touchpoint.',
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
          summary: 'We protect what you build through patent, trademark and licensing.',
          items: [
            'Patent & trademark registration',
            'Copyright & license management',
            'Source code & IP protection',
          ],
        },
        {
          title: 'End-to-End Product Lifecycle',
          summary: 'We run the full product lifecycle, from first idea to scale.',
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
      note: 'Clear communication and measurable progress at every stage, from discovery through to growth.',
      steps: [
        { title: 'Discover', text: 'We pin down the real opportunity and align on market and product direction.' },
        { title: 'Design', text: 'We shape the experience, interface and design system into a working prototype.' },
        { title: 'Engineer', text: 'We build the product to production standards, ready for performance and scale.' },
        { title: 'Grow', text: 'We operate the product and grow it with data, marketing and steady iteration.' },
      ],
    },
    lifecycle: {
      eyebrow: 'End-to-End Lifecycle',
      titlePre: 'From first idea to a',
      titleAccent: 'scalable business',
      titlePost: '.',
      body: 'One team runs, manages and coordinates every stage — discovery, build, launch, operations, growth and investment readiness.',
      phases: [
        { label: 'Discover', desc: 'We pin down the real opportunity.' },
        { label: 'Define', desc: 'We set the direction and scope.' },
        { label: 'Design', desc: 'We shape the product and its experience.' },
        { label: 'Engineer', desc: 'We build for performance and scale.' },
        { label: 'Operate', desc: 'We run it reliably in production.' },
        { label: 'Grow', desc: 'We grow the product after launch.' },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      titlePre: "Let's build your next product",
      titleAccent: 'together.',
      body: 'Tell us about your idea, your current product or your growth goal, and we will put the right team on it.',
      emailLabel: 'Email',
      locationLabel: 'Location',
      location: 'Türkiye · Working with clients globally',
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
        sending: 'Sending...',
        sent: "Thank you! We'll get back to you shortly.",
        sentNote: 'Your message has been received.',
        error:
          'Something went wrong. Please try again or email info@insparion.com.tr.',
      },
    },
    footer: {
      tagline:
        'An end-to-end technology partner for building, scaling and transforming digital businesses.',
      slogan: 'From idea to technology, from technology to value.',
      cols: [
        {
          title: 'Services',
          links: [
            { label: 'Product Discovery & Strategy', href: '/#product-discovery-strategy' },
            { label: 'Design & UX', href: '/#design-ux' },
            { label: 'Software Engineering', href: '/#software-engineering' },
            { label: 'Data & AI', href: '/#data-ai' },
            { label: 'Marketing & Growth', href: '/#marketing-growth' },
          ],
        },
        {
          title: 'Company',
          links: [
            { label: 'About', href: '/#about' },
            { label: 'Approach', href: '/#approach' },
            { label: 'Lifecycle', href: '/#lifecycle' },
            { label: 'Contact', href: '/#contact' },
          ],
        },
      ],
      rights: 'All rights reserved.',
      legal: [
        { label: 'Privacy', href: '/privacy' },
        { label: 'KVKK', href: '/kvkk' },
      ],
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
  // Site tek dilli: İngilizce. Dil değiştirme kaldırıldı.
  const [lang, setLang] = useState<Lang>('en')

  useEffect(() => {
    document.documentElement.lang = 'en'
  }, [])

  const value: I18nCtx = {
    lang,
    setLang,
    toggle: () => setLang('en'),
    c: content[lang] as Content,
  }

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useI18n(): I18nCtx {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useI18n must be used within LanguageProvider')
  return ctx
}
