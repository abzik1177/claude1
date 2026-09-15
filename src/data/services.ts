export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  keyword: string;
};

export const services: Service[] = [
  {
    slug: 'tovar-belgisini-royxatdan-otkazish',
    title: "Tovar belgisini ro'yxatdan o'tkazish",
    short: "Brendingizni Davpatentda rasmiy ro'yxatdan o'tkazamiz.",
    description:
      "Tovar belgisini ro'yxatdan o'tkazish — brendingizni raqobatchilardan himoya qiladigan yagona yuridik yo'l. Hujjatlar tayyorlashdan guvohnoma olishgacha to'liq yordam beramiz.",
    keyword: "tovar belgisini ro'yxatdan o'tkazish",
  },
  {
    slug: 'tovar-belgisini-qidirish',
    title: 'Tovar belgisini qidirish',
    short: "Ariza berishdan oldin o'xshash belgilarni tekshiramiz.",
    description:
      "Tovar belgisini qidirish — ariza rad etilish yoki nizo yuzaga kelish xavfini oldindan kamaytiradigan muhim bosqich. Milliy va xalqaro bazalarda to'liq tahlil o'tkazamiz.",
    keyword: 'tovar belgisini qidirish',
  },
  {
    slug: 'xalqaro-royxatga-olish',
    title: "Xalqaro ro'yxatga olish — Madrid tizimi",
    short: "Bitta ariza bilan 130 dan ortiq davlatda himoya.",
    description:
      'Madrid tizimi orqali xalqaro ro’yxatga olish — mahsulotingizni chet elga chiqarayotgan bo’lsangiz, tovar belgingizni bir nechta davlatda bir vaqtning o’zida himoya qilish imkonini beradi.',
    keyword: "Madrid tizimi orqali xalqaro ro'yxatdan o'tkazish",
  },
  {
    slug: 'patent-va-sanoat-namunalari',
    title: 'Patent va sanoat namunalari',
    short: "Ixtiro va dizaynlaringizni patentlaymiz.",
    description:
      "Patent olish — ixtiro, foydali model va sanoat namunalarini huquqiy jihatdan himoyalash, ulardan noqonuniy foydalanishning oldini olish imkonini beradi.",
    keyword: 'patent olish',
  },
  {
    slug: 'nizolarni-hal-qilish',
    title: 'Nizolarni hal qilish',
    short: "E'tirozlarga javob va sud jarayonlarida vakillik.",
    description:
      "Tovar belgisi bo'yicha nizolarni hal qilish — ariza rad etilganda e'tiroz bildirish, uchinchi shaxslar bilan mojarolarda sudda va Apellyatsiya kengashida vakillik qilish.",
    keyword: 'tovar belgisi bo’yicha nizolarni hal qilish',
  },
];
