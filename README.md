# OsonSo'z — So'z yodlash ilovasi

Shaxsiy, backendsiz, ro'yxatdan o'tishsiz rus–o'zbek so'z yodlash veb-ilovasi.
Oraliq takrorlash (spaced repetition) usulida ishlaydi. Ma'lumotlar faqat
brauzeringizning `localStorage`'ida saqlanadi — hech qanday serverga yuborilmaydi.

## Imkoniyatlar

- **Bugun** — bugungi takrorlash va yangi so'zlar soni, "Boshlash" tugmasi, streak.
- **Mashq** — ikki xil:
  - **Aralash takrorlash** — oraliq takrorlash (SRS) bo'yicha bugungi so'zlar.
  - **Mavzu bo'yicha** — 139 fe'l 11 ta mavzuga bo'lingan (Harakat, Muloqot, Fikr,
    His-tuyg'u va h.k.), istalgan mavzuni alohida yodlash mumkin. Mavzu yechilgach
    **o'zlashtirish foizi** saqlanadi: yaxshi yechsa oshadi, yomon yechsa kamayadi.

  Har ikkisida uch rejim aralash keladi: kartochka, test (4 variant), yozib javob berish.
  Har javobdan keyin **Bilmadim / Qiynaldim / Bildim / Juda oson** bahosi keyingi
  takrorlash vaqtini belgilaydi.
- **Lug'at** — barcha so'zlar, holati (yangi / o'rganilmoqda / yodlangan), qidirish,
  qo'shish, tahrirlash, o'chirish, ko'p so'zni birdan qo'shish.
- **Statistika** — yodlangan so'zlar, kunlik streak, aniqlik, eng ko'p xato qilingan so'zlar.
- **Talaffuz** — har bir so'zni 🔊 bosganda Web Speech API o'qib beradi.
- **Zaxira nusxa** — ma'lumotlarni JSON sifatida eksport/import qilish.
- **139 ta fe'l** boshlang'ich lug'at sifatida tayyor.

## Ishga tushirish (lokal)

```bash
npm install
npm run dev
```

Brauzerda ko'rsatilgan manzilni (odatda http://localhost:5173) oching.

Build qilish:

```bash
npm run build      # natija: dist/
npm run preview    # build'ni tekshirish
```

## Vercel'ga joylash

1. Loyihani GitHub repositoriyaga push qiling.
2. [vercel.com](https://vercel.com) → **Add New → Project** → GitHub repo'ni import qiling.
3. Vercel Vite'ni avtomatik aniqlaydi — build sozlamalarini standart qoldiring
   (Build: `npm run build`, Output: `dist`). Qo'shimcha konfiguratsiya shart emas.
4. **Deploy**. Har bir push'dan keyin avtomatik qayta joylanadi.
5. Bepul `*.vercel.app` domeni yetarli.

## Takrorlash algoritmi

- Yangi so'z 1 kunlik intervaldan boshlanadi.
- **Bilmadim** → interval 1 kunga qaytadi (va shu mashqda qayta ko'rsatiladi).
- **Qiynaldim** → interval oz oshadi.
- **Bildim** → interval koeffitsientga ko'paytiriladi.
- **Juda oson** → interval yanada tezroq o'sadi.
- Interval 60 kundan oshsa — so'z "yodlangan" bo'ladi (lekin baribir vaqti-vaqti chiqadi).
- Kuniga yangi so'zlar soni cheklangan (standart: 15, sozlamalardan o'zgartiriladi).

## Ma'lumotlarni saqlash

Barcha so'zlar va statistika `localStorage`'da (`osonsoz.words.v1`, `osonsoz.meta.v1`)
saqlanadi. Telefon/brauzer almashtirilganda yo'qotmaslik uchun **Zaxira nusxa → JSON
eksport** qiling.
