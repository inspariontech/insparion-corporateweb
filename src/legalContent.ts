import type { Lang } from './i18n'

export interface LegalSection {
  h: string
  p?: string[]
  list?: string[]
}

export interface LegalDoc {
  slug: string
  title: string
  updated: string
  intro: string
  sections: LegalSection[]
}

export type LegalKey = 'privacy' | 'kvkk'

/**
 * Kurumsal yasal metinler (KVKK Aydınlatma Metni & Gizlilik Politikası).
 * Not: Bu metinler genel kurumsal şablon niteliğindedir; nihai yayın öncesi
 * hukuk danışmanı tarafından gözden geçirilmesi önerilir.
 */
export const legalContent: Record<Lang, Record<LegalKey, LegalDoc>> = {
  tr: {
    kvkk: {
      slug: 'kvkk',
      title: 'KVKK Aydınlatma Metni',
      updated: 'Son güncelleme: Haziran 2026',
      intro:
        '6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, veri sorumlusu sıfatıyla INSPARION tarafından kişisel verilerinizin işlenmesine ilişkin olarak hazırlanmıştır.',
      sections: [
        {
          h: '1. Veri Sorumlusu',
          p: [
            'Kişisel verileriniz, veri sorumlusu sıfatıyla INSPARION (bundan sonra "INSPARION", "Şirket" veya "biz") tarafından aşağıda açıklanan kapsamda işlenmektedir.',
            'İletişim: tech@insparion.com.tr — insparion.com.tr',
          ],
        },
        {
          h: '2. İşlenen Kişisel Veriler',
          p: ['Hizmetlerimiz ve web sitemiz aracılığıyla aşağıdaki veri kategorileri işlenebilir:'],
          list: [
            'Kimlik bilgileri: ad, soyad',
            'İletişim bilgileri: e-posta adresi, telefon, şirket adı',
            'Müşteri işlem bilgileri: iletişim formu ve talep/mesaj içerikleri',
            'İşlem güvenliği bilgileri: IP adresi, log kayıtları, çerez ve kullanım verileri',
          ],
        },
        {
          h: '3. Kişisel Verilerin İşlenme Amaçları',
          list: [
            'İletişim ve bilgi taleplerinizin yanıtlanması',
            'Hizmetlerimizin sunulması, yürütülmesi ve sözleşme süreçlerinin yönetimi',
            'İş geliştirme, teklif ve iş birliği süreçlerinin yürütülmesi',
            'Web sitesinin güvenliğinin sağlanması ve hizmet kalitesinin iyileştirilmesi',
            'Hukuki yükümlülüklerimizin yerine getirilmesi',
          ],
        },
        {
          h: '4. İşlemenin Hukuki Sebepleri',
          p: ['Kişisel verileriniz KVKK m.5 kapsamında aşağıdaki hukuki sebeplere dayanılarak işlenir:'],
          list: [
            'Açık rızanızın bulunması',
            'Bir sözleşmenin kurulması veya ifası için gerekli olması',
            'Şirketimizin hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması',
            'Temel hak ve özgürlüklerinize zarar vermemek kaydıyla meşru menfaatlerimiz için gerekli olması',
          ],
        },
        {
          h: '5. Kişisel Verilerin Aktarılması',
          p: [
            'Kişisel verileriniz, yukarıdaki amaçlarla sınırlı olarak; hizmet aldığımız tedarikçilere (barındırma/hosting, e-posta, form ve analitik hizmetleri), iş ortaklarımıza ve yasal olarak yetkili kamu kurum ve kuruluşlarına aktarılabilir.',
            'Kullandığımız bazı bulut ve altyapı hizmetlerinin sunucularının yurt dışında bulunması halinde, aktarım KVKK m.9 hükümlerine uygun olarak gerçekleştirilir.',
          ],
        },
        {
          h: '6. Toplama Yöntemi',
          p: [
            'Kişisel verileriniz; web sitemizdeki iletişim formları, e-posta, çerezler ve benzeri otomatik ya da manuel yöntemlerle toplanmaktadır.',
          ],
        },
        {
          h: '7. Saklama Süresi',
          p: [
            'Kişisel verileriniz, ilgili mevzuatta öngörülen veya işlendikleri amacın gerektirdiği süre boyunca saklanır. Sürenin sonunda verileriniz silinir, yok edilir veya anonim hale getirilir.',
          ],
        },
        {
          h: '8. İlgili Kişinin Hakları',
          p: ['KVKK m.11 uyarınca kişisel veri sahibi olarak aşağıdaki haklara sahipsiniz:'],
          list: [
            'Kişisel verilerinizin işlenip işlenmediğini öğrenme ve buna ilişkin bilgi talep etme',
            'İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme',
            'Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme',
            'Eksik veya yanlış işlenmişse düzeltilmesini isteme',
            'Silinmesini veya yok edilmesini isteme',
            'Düzeltme, silme ve yok etme işlemlerinin aktarıldığı üçüncü kişilere bildirilmesini isteme',
            'Otomatik sistemlerle analiz sonucu aleyhinize bir sonucun ortaya çıkmasına itiraz etme',
            'Kanuna aykırı işleme nedeniyle zarara uğramanız halinde zararın giderilmesini talep etme',
          ],
        },
        {
          h: '9. Başvuru Yöntemi',
          p: [
            'Yukarıdaki haklarınıza ilişkin taleplerinizi tech@insparion.com.tr adresine iletebilirsiniz. Talepleriniz, niteliğine göre en kısa sürede ve en geç 30 gün içinde ücretsiz olarak sonuçlandırılır.',
          ],
        },
      ],
    },
    privacy: {
      slug: 'gizlilik',
      title: 'Gizlilik Politikası',
      updated: 'Son güncelleme: Haziran 2026',
      intro:
        'INSPARION olarak gizliliğinize önem veriyoruz. Bu politika, web sitemizi (insparion.com.tr) ziyaret ettiğinizde bilgilerinizi nasıl topladığımızı, kullandığımızı, koruduğumuzu ve haklarınızı açıklar.',
      sections: [
        {
          h: '1. Topladığımız Bilgiler',
          list: [
            'Doğrudan sizden aldıklarımız: iletişim formu aracılığıyla paylaştığınız ad, e-posta, şirket ve mesaj bilgileri',
            'Otomatik toplananlar: IP adresi, tarayıcı ve cihaz bilgisi, ziyaret istatistikleri ve çerez verileri',
          ],
        },
        {
          h: '2. Bilgileri Kullanım Amacımız',
          list: [
            'İletişim ve hizmet taleplerinizi yanıtlamak',
            'Hizmetlerimizi sunmak ve yürütmek',
            'Web sitemizin performansını ve güvenliğini iyileştirmek',
            'Yasal yükümlülüklerimizi yerine getirmek',
          ],
        },
        {
          h: '3. Çerezler',
          p: [
            'Web sitemiz; temel işlevsellik ve anonim ziyaret istatistikleri için çerezler kullanabilir. Tarayıcı ayarlarınızdan çerezleri yönetebilir veya engelleyebilirsiniz. Dil tercihiniz, deneyiminizi iyileştirmek için tarayıcınızda yerel olarak saklanır.',
          ],
        },
        {
          h: '4. Üçüncü Taraflarla Paylaşım',
          p: [
            'Kişisel bilgilerinizi satmayız. Bilgilerinizi yalnızca hizmet sağlayıcılarımızla (barındırma, e-posta, analitik) ve yasal zorunluluk hallerinde yetkili kurumlarla, amaçla sınırlı olarak paylaşırız.',
          ],
        },
        {
          h: '5. Veri Güvenliği',
          p: [
            'Bilgilerinizi yetkisiz erişime, kayba ve kötüye kullanıma karşı korumak için şifreli bağlantı (HTTPS), erişim kontrolü ve benzeri uygun teknik ve idari tedbirleri uygularız.',
          ],
        },
        {
          h: '6. Haklarınız',
          p: [
            'Kişisel verilerinize ilişkin KVKK kapsamındaki haklarınız için KVKK Aydınlatma Metni’ni inceleyebilir; taleplerinizi tech@insparion.com.tr adresine iletebilirsiniz.',
          ],
        },
        {
          h: '7. Dış Bağlantılar',
          p: [
            'Web sitemiz, kontrolümüz dışındaki üçüncü taraf sitelere bağlantılar içerebilir. Bu sitelerin gizlilik uygulamalarından sorumlu değiliz; ilgili sitelerin politikalarını incelemenizi öneririz.',
          ],
        },
        {
          h: '8. Politika Değişiklikleri',
          p: [
            'Bu Gizlilik Politikası zaman zaman güncellenebilir. Güncel sürüm her zaman bu sayfada yayımlanır; önemli değişikliklerde sayfa üzerinden bilgilendirme yapılır.',
          ],
        },
        {
          h: '9. İletişim',
          p: [
            'Gizlilik uygulamalarımıza ilişkin soru ve talepleriniz için: tech@insparion.com.tr',
          ],
        },
      ],
    },
  },

  en: {
    kvkk: {
      slug: 'kvkk',
      title: 'Data Protection (KVKK) Notice',
      updated: 'Last updated: June 2026',
      intro:
        'This notice is prepared by INSPARION as data controller, regarding the processing of your personal data under the Turkish Personal Data Protection Law No. 6698 ("KVKK").',
      sections: [
        {
          h: '1. Data Controller',
          p: [
            'Your personal data is processed by INSPARION (the "Company", "we") as data controller, within the scope described below.',
            'Contact: tech@insparion.com.tr — insparion.com.tr',
          ],
        },
        {
          h: '2. Personal Data We Process',
          p: ['We may process the following categories of data through our services and website:'],
          list: [
            'Identity data: first and last name',
            'Contact data: email address, phone, company name',
            'Customer interaction data: contact form and request/message content',
            'Security data: IP address, log records, cookie and usage data',
          ],
        },
        {
          h: '3. Purposes of Processing',
          list: [
            'Responding to your contact and information requests',
            'Providing and operating our services and managing contractual processes',
            'Carrying out business development, proposal and partnership processes',
            'Ensuring website security and improving service quality',
            'Fulfilling our legal obligations',
          ],
        },
        {
          h: '4. Legal Grounds for Processing',
          p: ['Your data is processed on the following legal grounds under Article 5 of the KVKK:'],
          list: [
            'Your explicit consent',
            'Necessity for the establishment or performance of a contract',
            'Necessity for compliance with our legal obligations',
            'Our legitimate interests, provided your fundamental rights and freedoms are not harmed',
          ],
        },
        {
          h: '5. Transfer of Personal Data',
          p: [
            'Limited to the purposes above, your data may be shared with our service providers (hosting, email, form and analytics services), business partners and legally authorised public authorities.',
            'Where the servers of certain cloud and infrastructure providers we use are located abroad, such transfers are carried out in accordance with Article 9 of the KVKK.',
          ],
        },
        {
          h: '6. Method of Collection',
          p: [
            'Your personal data is collected through contact forms on our website, email, cookies and similar automated or manual methods.',
          ],
        },
        {
          h: '7. Retention Period',
          p: [
            'Your personal data is retained for the period required by applicable legislation or by the purpose of processing. At the end of this period, your data is deleted, destroyed or anonymised.',
          ],
        },
        {
          h: '8. Your Rights as a Data Subject',
          p: ['Under Article 11 of the KVKK, you have the right to:'],
          list: [
            'Learn whether your personal data is processed and request related information',
            'Learn the purpose of processing and whether it is used accordingly',
            'Know the third parties to whom data is transferred, domestically or abroad',
            'Request correction of incomplete or inaccurate data',
            'Request deletion or destruction of your data',
            'Request that correction, deletion and destruction be notified to third parties',
            'Object to results arising against you from automated analysis',
            'Claim compensation for damages due to unlawful processing',
          ],
        },
        {
          h: '9. How to Apply',
          p: [
            'You may submit requests regarding your rights to tech@insparion.com.tr. Requests are concluded free of charge as soon as possible and within 30 days at the latest.',
          ],
        },
      ],
    },
    privacy: {
      slug: 'privacy',
      title: 'Privacy Policy',
      updated: 'Last updated: June 2026',
      intro:
        'At INSPARION, we value your privacy. This policy explains how we collect, use and protect your information when you visit our website (insparion.com.tr), and your rights.',
      sections: [
        {
          h: '1. Information We Collect',
          list: [
            'Information you provide directly: name, email, company and message submitted via the contact form',
            'Information collected automatically: IP address, browser and device data, visit statistics and cookie data',
          ],
        },
        {
          h: '2. How We Use Information',
          list: [
            'To respond to your contact and service requests',
            'To provide and operate our services',
            'To improve the performance and security of our website',
            'To fulfil our legal obligations',
          ],
        },
        {
          h: '3. Cookies',
          p: [
            'Our website may use cookies for essential functionality and anonymous visit statistics. You can manage or block cookies through your browser settings. Your language preference is stored locally in your browser to improve your experience.',
          ],
        },
        {
          h: '4. Sharing with Third Parties',
          p: [
            'We do not sell your personal information. We share it only with our service providers (hosting, email, analytics) and, where legally required, with authorised authorities — strictly limited to the relevant purpose.',
          ],
        },
        {
          h: '5. Data Security',
          p: [
            'We apply appropriate technical and organisational measures — such as encrypted connections (HTTPS) and access control — to protect your information against unauthorised access, loss and misuse.',
          ],
        },
        {
          h: '6. Your Rights',
          p: [
            'For your rights regarding personal data under the KVKK, please see our Data Protection (KVKK) Notice; you may send requests to tech@insparion.com.tr.',
          ],
        },
        {
          h: '7. External Links',
          p: [
            'Our website may contain links to third-party sites beyond our control. We are not responsible for their privacy practices and recommend reviewing their policies.',
          ],
        },
        {
          h: '8. Changes to This Policy',
          p: [
            'This Privacy Policy may be updated from time to time. The current version is always published on this page, and significant changes will be communicated here.',
          ],
        },
        {
          h: '9. Contact',
          p: [
            'For questions and requests regarding our privacy practices: tech@insparion.com.tr',
          ],
        },
      ],
    },
  },
}
