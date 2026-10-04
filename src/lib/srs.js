// Oddiylashtirilgan oraliq takrorlash (spaced repetition) algoritmi.
// TZ'dagi qoidalar asosida:
//   Bilmadim  -> interval 1 kunga qaytadi (qaytadan boshlanadi)
//   Qiynaldim -> interval deyarli o'zgarmaydi (oz oshadi)
//   Bildim    -> interval koeffitsientga ko'paytiriladi (1 -> 3 -> 7 -> 14 -> 30 ...)
//   Juda oson -> interval yanada tezroq o'sadi
//   Interval 60 kundan oshsa -> "yodlangan" (lekin baribir takrorlanadi)

import { todayISO, addDaysISO } from './date.js'

export const BAHO = {
  BILMADIM: 0,
  QIYNALDIM: 1,
  BILDIM: 2,
  JUDA_OSON: 3,
}

// Koeffitsient ~2.2: TZ misolidagi 1 -> 3 -> 7 -> 14 -> 30 progressiyaga yaqin
// (3 -> 7 -> 15 -> 33 -> 73) va ~4-5 to'g'ri javobdan keyin "yodlangan" bo'ladi.
export const EASE_DEFAULT = 2.2
const EASE_MIN = 1.3
const EASE_MAX = 3.2
export const YODLANGAN_INTERVAL = 60 // shu kundan oshsa "yodlangan"
export const DEFAULT_NEW_PER_DAY = 15

export const HOLAT = {
  YANGI: 'yangi',
  ORGANILMOQDA: "o'rganilmoqda",
  YODLANGAN: 'yodlangan',
}

function clamp(v, min, max) {
  return Math.min(max, Math.max(min, v))
}

// Intervalga qarab holatni aniqlash.
function holatFromInterval(interval, reviewed) {
  if (!reviewed) return HOLAT.YANGI
  if (interval > YODLANGAN_INTERVAL) return HOLAT.YODLANGAN
  return HOLAT.ORGANILMOQDA
}

// Bitta so'zni baholab, yangilangan nusxasini qaytaradi (mutatsiyasiz).
// today — "YYYY-MM-DD" (test uchun uzatish mumkin).
export function baholash(word, baho, today = todayISO()) {
  let interval = Math.max(word.interval || 0, 0)
  let ease = word.osonKoeffitsienti || EASE_DEFAULT
  let togriSoni = word.togriSoni || 0
  let xatoSoni = word.xatoSoni || 0

  // Birinchi ko'rilgan "yangi" so'z uchun boshlang'ich interval 1 kun.
  const firstReview = interval === 0

  switch (baho) {
    case BAHO.BILMADIM:
      interval = 1
      ease = clamp(ease - 0.2, EASE_MIN, EASE_MAX)
      xatoSoni += 1
      break
    case BAHO.QIYNALDIM:
      interval = firstReview ? 1 : Math.max(1, Math.round(interval * 1.2))
      ease = clamp(ease - 0.15, EASE_MIN, EASE_MAX)
      togriSoni += 1
      break
    case BAHO.BILDIM:
      interval = firstReview ? 3 : Math.max(1, Math.round(interval * ease))
      togriSoni += 1
      break
    case BAHO.JUDA_OSON:
      interval = firstReview ? 5 : Math.max(1, Math.round(interval * ease * 1.3))
      ease = clamp(ease + 0.15, EASE_MIN, EASE_MAX)
      togriSoni += 1
      break
    default:
      return word
  }

  return {
    ...word,
    interval,
    osonKoeffitsienti: Number(ease.toFixed(2)),
    togriSoni,
    xatoSoni,
    keyingiTakrorlashSanasi: addDaysISO(today, interval),
    oxirgiTakrorlash: today,
    holat: holatFromInterval(interval, true),
  }
}

// So'z bugun takrorlashga tayyormi? (yangi so'zlar alohida hisoblanadi)
export function takrorlashKerakmi(word, today = todayISO()) {
  if (word.holat === HOLAT.YANGI) return false
  return (word.keyingiTakrorlashSanasi || today) <= today
}

export { holatFromInterval }
