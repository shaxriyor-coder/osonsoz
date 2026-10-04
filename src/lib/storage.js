// localStorage bilan ishlash: so'zlar va meta (kunlik hisob, streak) saqlash,
// seed qilish, JSON eksport/import.

import { initialWords } from '../data/initialWords.js'
import { todayISO } from './date.js'
import { EASE_DEFAULT, HOLAT } from './srs.js'

const WORDS_KEY = 'osonsoz.words.v1'
const META_KEY = 'osonsoz.meta.v1'

function safeGet(key) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function safeSet(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch {
    return false
  }
}

// Bitta seed so'zga barcha SRS maydonlarini qo'shish.
export function seedWord(w, id) {
  const today = todayISO()
  return {
    id,
    rus: w.rus,
    uzbek: w.uzbek,
    misol: w.misol || '',
    holat: HOLAT.YANGI,
    interval: 0,
    osonKoeffitsienti: EASE_DEFAULT,
    keyingiTakrorlashSanasi: today,
    oxirgiTakrorlash: null,
    togriSoni: 0,
    xatoSoni: 0,
    created: today,
  }
}

export function defaultMeta() {
  return {
    newIntroducedByDate: {}, // { "2026-10-04": 5 }
    studyDates: [], // mashq qilingan kunlar (unikal, o'sish tartibida)
    newPerDay: 15,
  }
}

// Birinchi ochilishda 139 fe'l bilan to'ldirish.
export function loadWords() {
  let words = safeGet(WORDS_KEY)
  if (!Array.isArray(words) || words.length === 0) {
    words = initialWords.map((w, i) => seedWord(w, i + 1))
    safeSet(WORDS_KEY, words)
  }
  return words
}

export function saveWords(words) {
  return safeSet(WORDS_KEY, words)
}

export function loadMeta() {
  const meta = safeGet(META_KEY)
  if (!meta) {
    const m = defaultMeta()
    safeSet(META_KEY, m)
    return m
  }
  return { ...defaultMeta(), ...meta }
}

export function saveMeta(meta) {
  return safeSet(META_KEY, meta)
}

export function nextId(words) {
  return words.reduce((max, w) => Math.max(max, w.id || 0), 0) + 1
}

// --- Zaxira nusxa: eksport / import ---

export function exportData(words, meta) {
  return JSON.stringify(
    { version: 1, exportedAt: new Date().toISOString(), words, meta },
    null,
    2,
  )
}

// JSON matnini tekshirib, { words, meta } qaytaradi yoki xato tashlaydi.
export function parseImport(text) {
  const data = JSON.parse(text)
  const words = Array.isArray(data) ? data : data.words
  if (!Array.isArray(words)) throw new Error("Noto'g'ri fayl: so'zlar ro'yxati topilmadi")
  // Minimal tekshiruv va to'ldirish.
  const clean = words.map((w, i) => ({
    id: w.id ?? i + 1,
    rus: String(w.rus ?? '').trim(),
    uzbek: String(w.uzbek ?? '').trim(),
    misol: w.misol || '',
    holat: w.holat || HOLAT.YANGI,
    interval: Number(w.interval) || 0,
    osonKoeffitsienti: Number(w.osonKoeffitsienti) || EASE_DEFAULT,
    keyingiTakrorlashSanasi: w.keyingiTakrorlashSanasi || todayISO(),
    oxirgiTakrorlash: w.oxirgiTakrorlash || null,
    togriSoni: Number(w.togriSoni) || 0,
    xatoSoni: Number(w.xatoSoni) || 0,
    created: w.created || todayISO(),
  })).filter((w) => w.rus && w.uzbek)
  const meta = (!Array.isArray(data) && data.meta) ? { ...defaultMeta(), ...data.meta } : defaultMeta()
  return { words: clean, meta }
}

// "so'z – tarjima" ko'rinishdagi matndan ko'p so'zni birdan qo'shish.
// Ajratgichlar: " - ", " – ", " — ", tab yoki ";"
export function parseBulk(text, startId) {
  const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean)
  const result = []
  let id = startId
  for (const line of lines) {
    const m = line.split(/\s*[–—\-\t;]\s*/)
    if (m.length < 2) continue
    const rus = m[0].trim()
    const uzbek = m.slice(1).join(' ').trim()
    if (!rus || !uzbek) continue
    result.push(seedWord({ rus, uzbek }, id++))
  }
  return result
}

export { WORDS_KEY, META_KEY }
