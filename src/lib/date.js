// Sana yordamchilari. Hamma narsa mahalliy vaqt bo'yicha "YYYY-MM-DD" kaliti bilan
// ishlaydi, shunda kunlar bo'yicha solishtirish soat mintaqasidan qat'i nazar to'g'ri.

export function todayISO(d = new Date()) {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

export function addDaysISO(iso, days) {
  const [y, m, d] = iso.split('-').map(Number)
  const dt = new Date(y, m - 1, d)
  dt.setDate(dt.getDate() + days)
  return todayISO(dt)
}

// a - b, kunlarda (musbat: a kechroq).
export function diffDays(aISO, bISO) {
  const [ay, am, ad] = aISO.split('-').map(Number)
  const [by, bm, bd] = bISO.split('-').map(Number)
  const a = Date.UTC(ay, am - 1, ad)
  const b = Date.UTC(by, bm - 1, bd)
  return Math.round((a - b) / 86400000)
}

// Sanani "4-okt" kabi qisqa o'zbekcha ko'rinishda chiqarish.
const OYLAR = ['yan', 'fev', 'mar', 'apr', 'may', 'iyun', 'iyul', 'avg', 'sen', 'okt', 'noy', 'dek']
export function formatShort(iso) {
  if (!iso) return '—'
  const [, m, d] = iso.split('-').map(Number)
  return `${d}-${OYLAR[m - 1]}`
}

// Intervalni odam o'qiydigan ko'rinishga: 0/1 kun -> "bugun/ertaga", aks holda "N kun".
export function intervalLabel(days) {
  if (days <= 0) return 'bugun'
  if (days === 1) return '1 kun'
  return `${days} kun`
}
