export type ServiceDetail = {
  intro: string;
  whoFor: string[];
  steps: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  relatedPosts: string[];
};

export const serviceDetails: Record<string, ServiceDetail> = {
  'tovar-belgisini-royxatdan-otkazish': {
    intro:
      "Tovar belgisini ro'yxatdan o'tkazish — brendingiz nomi, logotipi yoki shiorini qonuniy jihatdan faqat sizga tegishli qilib qo'yadigan jarayon. Ro'yxatdan o'tgan tovar belgisi 10 yil davomida himoyalanadi va cheksiz marta yangilanishi mumkin.",
    whoFor: [
      "Yangi brend yoki mahsulot chiqarayotgan tadbirkorlar",
      "Nomi allaqachon tanilgan, lekin hali rasmiylashtirilmagan bizneslar",
      "Franshiza orqali kengaytirishni rejalashtirgan kompaniyalar",
    ],
    steps: [
      { title: "Bepul konsultatsiya", desc: "Brendingiz va faoliyat sohangizni tahlil qilamiz." },
      { title: "Qidiruv tahlili", desc: "O'xshash belgilar mavjudligini tekshiramiz." },
      { title: "Hujjatlar tayyorlash", desc: "Ariza, tasvir va Nitsa sinflarini rasmiylashtiramiz." },
      { title: "Davpatentga topshirish", desc: "Rasmiy ariza va davlat bojini to'lab topshiramiz." },
      { title: "Guvohnoma olish", desc: "10 yillik amal qilish muddati bilan rasmiy himoya." },
    ],
    faqs: [
      { q: "Jismoniy shaxs ham tovar belgisini ro'yxatdan o'tkaza oladimi?", a: "Ha, O'zbekistonda yakka tartibdagi tadbirkorlar va jismoniy shaxslar ham ariza topshirishi mumkin." },
      { q: "Logotip va nomni birga ro'yxatdan o'tkazish mumkinmi?", a: "Ha, lekin ko'pincha nom va logotipni alohida-alohida ro'yxatdan o'tkazish tavsiya etiladi — bu har birini mustaqil himoya qiladi." },
    ],
    relatedPosts: ['tovar-belgisini-royxatdan-otkazish-qollanma', 'royxatdan-otkazishda-xatolar'],
  },
  'tovar-belgisini-qidirish': {
    intro:
      "Tovar belgisini qidirish — ariza topshirishdan oldin bajariladigan tekshiruv bo'lib, o'xshash yoki bir xil belgilar mavjudligini aniqlaydi. Bu bosqich rad etilish yoki uchinchi shaxslar bilan nizo yuzaga kelish xavfini sezilarli darajada kamaytiradi.",
    whoFor: [
      "Yangi brend nomini tanlayotgan tadbirkorlar",
      "Ariza topshirishdan oldin risklarni baholamoqchi bo'lganlar",
      "Bir nechta nom variantlari orasidan tanlov qilayotganlar",
    ],
    steps: [
      { title: "So'rov qabul qilish", desc: "Tekshirilishi kerak bo'lgan belgi va sohani aniqlaymiz." },
      { title: "Milliy bazani tekshirish", desc: "Davpatent reestrida o'xshash belgilarni qidiramiz." },
      { title: "Xalqaro bazalarni tekshirish", desc: "WIPO va boshqa xalqaro reestrlarni skanerlaymiz." },
      { title: "Tahliliy hisobot", desc: "Natijalar va tavsiyalarni yozma hisobot shaklida taqdim etamiz." },
    ],
    faqs: [
      { q: "Qidiruv qancha vaqt oladi?", a: "Odatda 2-5 ish kuni ichida to'liq tahliliy hisobot tayyor bo'ladi." },
      { q: "Qidiruv 100% kafolat beradimi?", a: "Qidiruv xavfni sezilarli kamaytiradi, lekin yakuniy qarorni Davpatent ekspertizasi qabul qiladi." },
    ],
    relatedPosts: ['tovar-belgisini-royxatdan-otkazish-qollanma', 'nitsa-klassifikatsiyasi-nima'],
  },
  'xalqaro-royxatga-olish': {
    intro:
      "Madrid tizimi orqali xalqaro ro'yxatga olish — mahsulot yoki xizmatingizni chet elga eksport qilayotgan bo'lsangiz, bitta ariza bilan 130 dan ortiq davlatda tovar belgisi himoyasini olish imkonini beradi.",
    whoFor: [
      "Mahsulotini eksport qiladigan ishlab chiqaruvchilar",
      "Bir nechta davlatda faoliyat yurituvchi IT va xizmat kompaniyalari",
      "Xalqaro franshiza yoki distribyutorlik rejalashtirgan brendlar",
    ],
    steps: [
      { title: "Asos arizani tekshirish", desc: "O'zbekistondagi milliy ariza yoki guvohnoma holatini baholaymiz." },
      { title: "Davlatlar ro'yxatini tuzish", desc: "Himoya kerak bo'lgan mamlakatlarni birga aniqlaymiz." },
      { title: "Xalqaro ariza topshirish", desc: "WIPO orqali rasmiy xalqaro arizani rasmiylashtiramiz." },
      { title: "Milliy ekspertizalarni kuzatish", desc: "Har bir davlatdagi ko'rib chiqish jarayonini nazorat qilamiz." },
    ],
    faqs: [
      { q: "Madrid tizimidan foydalanish uchun avval milliy ro'yxat kerakmi?", a: "Ha, xalqaro ariza uchun O'zbekistonda mavjud ariza yoki guvohnoma (asos ariza) talab qilinadi." },
      { q: "Barcha davlatlar Madrid tizimiga a'zomi?", a: "Yo'q, 130 dan ortiq davlat a'zo, lekin ba'zi mamlakatlar uchun alohida milliy ariza kerak bo'lishi mumkin — buni oldindan aniqlab beramiz." },
    ],
    relatedPosts: ['madrid-tizimi-xalqaro-royxat'],
  },
  'patent-va-sanoat-namunalari': {
    intro:
      "Patent olish — ixtiro, foydali model yoki mahsulotning noyob tashqi ko'rinishini (sanoat namunasini) huquqiy jihatdan himoyalash imkonini beradi. Bu raqobatchilarning texnik yechimingiz yoki dizayningizdan ruxsatsiz foydalanishining oldini oladi.",
    whoFor: [
      "Yangi texnik yechim yoki mexanizm ishlab chiqqan muhandislar",
      "Noyob mahsulot dizayni yaratgan ishlab chiqaruvchilar",
      "Startaplar va ilmiy-tadqiqot kompaniyalari",
    ],
    steps: [
      { title: "Ixtiro tahlili", desc: "Yechimingizning patentga layoqatliligini baholaymiz." },
      { title: "Patent qidiruvi", desc: "O'xshash texnik yechimlar mavjudligini tekshiramiz." },
      { title: "Ariza va tavsif tayyorlash", desc: "Texnik tavsif, formula va chizmalarni rasmiylashtiramiz." },
      { title: "Ekspertizadan o'tkazish", desc: "Davpatentdagi to'liq ekspertiza jarayonini kuzatamiz." },
      { title: "Patent olish", desc: "Rasmiy patent hujjatini qo'lga kiritasiz." },
    ],
    faqs: [
      { q: "Patent va tovar belgisi bir xil narsami?", a: "Yo'q — patent texnik yechim yoki dizaynni, tovar belgisi esa nom va logotipni himoya qiladi. Batafsil: farqi haqidagi maqolamiz." },
      { q: "Patentning amal qilish muddati qancha?", a: "Ixtiro patenti — 20 yilgacha, foydali model — 10 yilgacha, sanoat namunasi — 15 yilgacha amal qiladi." },
    ],
    relatedPosts: ['tovar-belgisi-va-patent-farqi'],
  },
  'nizolarni-hal-qilish': {
    intro:
      "Tovar belgisi bo'yicha nizolarni hal qilish — ariza rad etilganda e'tiroz bildirish, uchinchi shaxslar tomonidan huquqbuzarlik sodir etilganda sudda yoki Apellyatsiya kengashida vakillik qilishni o'z ichiga oladi.",
    whoFor: [
      "Arizasi Davpatent tomonidan rad etilgan tadbirkorlar",
      "Tovar belgisidan ruxsatsiz foydalanish holatiga duch kelgan brend egalari",
      "Raqobatchi tomonidan e'tiroz bildirilgan arizachi",
    ],
    steps: [
      { title: "Vaziyatni tahlil qilish", desc: "Rad etish sababi yoki nizo mohiyatini o'rganamiz." },
      { title: "Strategiya ishlab chiqish", desc: "E'tiroz yoki sud jarayoni uchun eng samarali yo'lni tanlaymiz." },
      { title: "Hujjatlarni rasmiylashtirish", desc: "E'tiroz, da'vo arizasi yoki javob xatini tayyorlaymiz." },
      { title: "Vakillik qilish", desc: "Apellyatsiya kengashi yoki sudda manfaatlaringizni himoya qilamiz." },
    ],
    faqs: [
      { q: "Rad etish qaroriga qancha vaqt ichida e'tiroz bildirish mumkin?", a: "Qonunchilikka ko'ra, rasmiy xabarnoma olingan kundan boshlab belgilangan muddat ichida e'tiroz berish kerak — buni tezkor tekshirib, muddatni o'tkazib yubormaslikka yordam beramiz." },
      { q: "Ishni sudgacha yetkazmasdan hal qilish mumkinmi?", a: "Ko'p hollarda, ha — muzokaralar yoki Apellyatsiya kengashi orqali nizoni sudgacha yetkazmasdan hal qilish mumkin." },
    ],
    relatedPosts: ['royxatdan-otkazishda-xatolar'],
  },
};
