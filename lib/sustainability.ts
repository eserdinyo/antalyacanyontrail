export type SustainabilitySectionId =
  | "green-commitment"
  | "environmental-policy"
  | "green-manager"
  | "leave-no-trace"
  | "sustainable-practices";

export type SustainabilityBlock =
  | { kind: "text"; body: string[] }
  | { kind: "list"; style: "check" | "bullet"; intro?: string; items: string[] }
  | { kind: "phases"; phases: { title: string; items: string[] }[] };

export type SustainabilitySection = {
  id: SustainabilitySectionId;
  title: string;
  blocks: SustainabilityBlock[];
};

export type SustainabilityContent = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  lede: string;
  sections: SustainabilitySection[];
};

const tr: SustainabilityContent = {
  metaTitle: "Sürdürülebilirlik",
  metaDescription:
    "Antalya Canyon Ultra'nın çevre politikası, Yeşil Yönetici uygulaması, iz bırakmama ilkeleri ve yarış öncesi, sırası ve sonrasındaki sürdürülebilir uygulamaları.",
  eyebrow: "ÇEVRE & SÜRDÜRÜLEBİLİRLİK",
  title: "Sürdürülebilirlik",
  lede: "Doğa yalnızca parkurumuz değil; en büyük sorumluluğumuzdur.",
  sections: [
    {
      id: "green-commitment",
      title: "Yeşil Taahhüdümüz",
      blocks: [
        {
          kind: "text",
          body: [
            "Antalya Canyon Ultra; Güver Kanyonu, Kapuz Kanyonu, Doyran Vadisi ve çevresindeki eşsiz doğal alanları korumayı taahhüt eder.",
            "ITRA üyesi bir organizasyon olarak ITRA Yeşil Şartı (ITRA Green Charter) ilkelerini destekliyor, etkinliğimizin çevresel etkisini en aza indirmek için uygulamalarımızı sürekli geliştiriyoruz.",
          ],
        },
      ],
    },
    {
      id: "environmental-policy",
      title: "Çevre Politikası",
      blocks: [
        {
          kind: "text",
          body: [
            "Antalya Canyon Ultra, doğaya ve yerel halka saygı ilkesiyle düzenlenir.",
          ],
        },
        {
          kind: "list",
          style: "check",
          intro: "Taahhütlerimiz:",
          items: [
            "Flora, fauna ve doğal yaşam alanlarını korumak",
            "Yalnızca mevcut patikaları kullanmak",
            "Yarış sonrasında parkurun her bölümünü eski haline getirmek",
            "Etkinlik sonrasında tüm parkur işaretlemelerini toplamak",
            "Atığı en aza indirmek",
            "Tek kullanımlık plastik kullanımını azaltmak",
            "Geri dönüşümü teşvik etmek",
            "Yerel üreticileri desteklemek",
            "Çevreye duyarlı davranışı özendirmek",
            "Etkinliğin karbon ayak izini azaltmak",
            "Katılımcıları ve gönüllüleri bilinçlendirmek",
          ],
        },
      ],
    },
    {
      id: "green-manager",
      title: "Yeşil Yönetici",
      blocks: [
        {
          kind: "text",
          body: [
            "Sürdürülebilirlik taahhütlerimizin etkinlik boyunca hayata geçirilmesini sağlamak için Antalya Canyon Ultra, görevlendirilmiş bir Yeşil Yönetici (Green Manager) atar.",
          ],
        },
        {
          kind: "list",
          style: "bullet",
          intro: "Yeşil Yönetici'nin sorumlulukları:",
          items: [
            "çevre politikalarının uygulanması",
            "atık yönetiminin koordinasyonu",
            "parkur temizliğinin denetlenmesi",
            "tüm parkur işaretlemelerinin kaldırılmasının sağlanması",
            "gönüllülerin bilinçlendirilmesi",
            "çevreye duyarlı uygulamaların yaygınlaştırılması",
            "Yeşil Programımızın sürekli iyileştirilmesinin izlenmesi",
          ],
        },
      ],
    },
    {
      id: "leave-no-trace",
      title: "İz Bırakma",
      blocks: [
        {
          kind: "text",
          body: ["Antalya'nın eşsiz doğasını korumamıza yardımcı olun."],
        },
        {
          kind: "list",
          style: "check",
          intro: "Her katılımcı şunları kabul eder:",
          items: [
            "İşaretli patikalarda kalmak",
            "Yaban hayatına saygı göstermek",
            "Yerel halka saygı göstermek",
            "Kişisel atığını bir sonraki yardım istasyonuna kadar taşımak",
            "Asla çöp bırakmamak",
            "Bitki örtüsüne zarar vermemek",
            "Gereksiz gürültüden kaçınmak",
          ],
        },
        {
          kind: "text",
          body: [
            "Bu kurallara uyulmaması ceza veya diskalifiye ile sonuçlanabilir.",
          ],
        },
      ],
    },
    {
      id: "sustainable-practices",
      title: "Sürdürülebilir Uygulamalar",
      blocks: [
        {
          kind: "phases",
          phases: [
            {
              title: "Yarış Öncesi",
              items: [
                "Dijital yarış rehberi",
                "Dijital GPX",
                "Dijital brifing",
                "QR kodlar",
                "Yeniden kullanılabilir parkur işaretlemeleri",
              ],
            },
            {
              title: "Yarış Sırasında",
              items: [
                "Atık ayrıştırma",
                "Geri dönüşüm kutuları",
                "Yeşil gönüllüler",
                "Yardım istasyonlarında yerel gıda",
                "Yalnızca mevcut patikalar",
                "Çevre bilinci",
              ],
            },
            {
              title: "Yarış Sonrası",
              items: [
                "Parkur temizliği",
                "Patika kontrolü",
                "Tüm işaretlemelerin kaldırılması",
                "Atıkların geri dönüşümü",
                "Çevresel değerlendirme raporu",
              ],
            },
          ],
        },
      ],
    },
  ],
};

const en: SustainabilityContent = {
  metaTitle: "Sustainability",
  metaDescription:
    "Antalya Canyon Ultra's environmental policy, Green Manager, Leave No Trace principles and the sustainable practices we follow before, during and after the race.",
  eyebrow: "ENVIRONMENT & SUSTAINABILITY",
  title: "Sustainability",
  lede: "Nature is not only our race course; it is our greatest responsibility.",
  sections: [
    {
      id: "green-commitment",
      title: "Green Commitment",
      blocks: [
        {
          kind: "text",
          body: [
            "Antalya Canyon Ultra is committed to protecting the unique natural environment of Güver Canyon, Kapuz Canyon, Doyran Valley and the surrounding landscapes.",
            "As an ITRA member event, we support the principles of the ITRA Green Charter and continuously improve our environmental practices to minimize the impact of our event.",
          ],
        },
      ],
    },
    {
      id: "environmental-policy",
      title: "Environmental Policy",
      blocks: [
        {
          kind: "text",
          body: [
            "Antalya Canyon Ultra is organized with respect for nature and local communities.",
          ],
        },
        {
          kind: "list",
          style: "check",
          intro: "We are committed to:",
          items: [
            "Protecting flora, fauna and natural habitats",
            "Using only existing trails",
            "Restoring every section of the course after the race",
            "Collecting all course markings after the event",
            "Minimizing waste",
            "Reducing single-use plastics",
            "Promoting recycling",
            "Supporting local producers",
            "Encouraging environmentally responsible behaviour",
            "Reducing the carbon footprint of the event",
            "Educating participants and volunteers",
          ],
        },
      ],
    },
    {
      id: "green-manager",
      title: "Green Manager",
      blocks: [
        {
          kind: "text",
          body: [
            "To ensure that our sustainability commitments are implemented throughout the event, Antalya Canyon Ultra appoints a dedicated Green Manager.",
          ],
        },
        {
          kind: "list",
          style: "bullet",
          intro: "The Green Manager is responsible for:",
          items: [
            "implementing environmental policies",
            "coordinating waste management",
            "supervising course clean-up",
            "ensuring all trail markings are removed",
            "educating volunteers",
            "promoting environmentally responsible practices",
            "monitoring continuous improvement of our Green Program",
          ],
        },
      ],
    },
    {
      id: "leave-no-trace",
      title: "Leave No Trace",
      blocks: [
        {
          kind: "text",
          body: ["Help us protect Antalya's unique landscapes."],
        },
        {
          kind: "list",
          style: "check",
          intro: "Every participant agrees to:",
          items: [
            "Stay on marked trails",
            "Respect wildlife",
            "Respect local people",
            "Carry personal waste until an aid station",
            "Never leave litter",
            "Avoid damaging vegetation",
            "Avoid unnecessary noise",
          ],
        },
        {
          kind: "text",
          body: [
            "Violation of these rules may result in penalties or disqualification.",
          ],
        },
      ],
    },
    {
      id: "sustainable-practices",
      title: "Sustainable Practices",
      blocks: [
        {
          kind: "phases",
          phases: [
            {
              title: "Before the Race",
              items: [
                "Digital Race Guide",
                "Digital GPX",
                "Digital Briefing",
                "QR Codes",
                "Reusable course markings",
              ],
            },
            {
              title: "During the Race",
              items: [
                "Waste separation",
                "Recycling bins",
                "Green Volunteers",
                "Local food at aid stations",
                "Existing trails only",
                "Environmental awareness",
              ],
            },
            {
              title: "After the Race",
              items: [
                "Course clean-up",
                "Trail inspection",
                "Removal of all markings",
                "Waste recycling",
                "Environmental evaluation report",
              ],
            },
          ],
        },
      ],
    },
  ],
};

export function getSustainability(locale: string): SustainabilityContent {
  return locale === "tr" ? tr : en;
}
