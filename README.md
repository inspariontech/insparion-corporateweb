# INSPARION — Kurumsal Web Sitesi

Dijital ürünleri fikirden küresel ölçeklenmeye taşıyan uçtan uca ürün stüdyosu için
hareketli (motion), modern ve kurumsal tek sayfa web sitesi.

## Teknoloji

- **React 18 + TypeScript**
- **Vite** (build & dev server)
- **Tailwind CSS** (tasarım sistemi & responsive)
- **Framer Motion** (animasyon & motion)
- **Lucide React** (ikonlar)
- **Inter** + **Plus Jakarta Sans** (Google Fonts)

## Çalıştırma

```bash
npm install      # bağımlılıklar (kuruldu)
npm run dev      # http://localhost:5173
npm run build    # üretim derlemesi -> dist/
npm run preview  # derlemeyi önizle
```

## Dil Desteği (TR / EN)

- Tüm metinler `src/i18n.tsx` içindeki `content` sözlüğünde TR ve EN olarak tutulur.
- `LanguageProvider` + `useI18n()` ile yönetilir; seçim `localStorage`'a yazılır
  (varsayılan **TR**), `<html lang>` otomatik güncellenir.
- Navbar'daki **TR / EN** anahtarı ile anında geçiş yapılır.
- Metinler, referans Insparion sitesinin (TR & EN) ton ve diline göre uyarlanmıştır.

## Yapı

```
src/
  App.tsx                # LanguageProvider + bölümlerin akışı + scroll progress bar
  i18n.tsx               # TR/EN tüm site metinleri + dil context'i
  components/
    Logo.tsx             # SVG logo (color / white / dark varyantları)
    Navbar.tsx           # yapışkan nav, pill menü, mobil hamburger
    Hero.tsx             # tam ekran CloudFront video + ShinyText başlık
    ShinyText.tsx        # framer-motion ile akan parlak gradient yazı
    Marquee.tsx          # sonsuz kayan yetkinlik şeridi
    About.tsx            # biz kimiz + 4 sütun + görsel
    Stats.tsx            # animasyonlu sayaçlar
    Manifesto.tsx        # açık zeminli band (sade SİYAH logo)
    Services.tsx         # 12 hizmet kartı (hover/stagger animasyon)
    Approach.tsx         # 4 adımlı süreç (görsel kartlar)
    Lifecycle.tsx        # uçtan uca yaşam döngüsü + yörünge animasyonu
    Contact.tsx          # iletişim + form
    Footer.tsx           # footer (beyaz logo)
  data/services.ts       # 12 hizmet kategorisi içeriği
public/
  favicon.svg           # logo işareti
  images/               # Unsplash görselleri (indirildi)
```

## Logo Kullanımı

`<Logo variant="white|dark|color" withOrbit />`

- **white** — koyu zeminlerde (nav, footer, lifecycle)
- **dark** — açık zeminlerde (manifesto bandı)
- **color** — gradyan markalı (beyaz/açık zeminlerde)

Logo, ölçeklenebilir SVG olarak yeniden üretildi; "A" harfi gradient üçgen tepe,
çevresinde mavi→mor yörünge yayları ile.

## Notlar

- Hero video arka planı verilen CloudFront URL'sinden gelir (autoplay, loop, muted, inline).
- Tüm bölümler `prefers-reduced-motion` desteğine sahiptir.
- Renk paleti logodan türetildi: mavi `#38BDF8` → mor `#A855F7`, koyu lacivert `#0A1124`.
