// Web Speech API orqali so'zni ovoz chiqarib o'qish. Qo'shimcha xizmat/to'lov yo'q.
// Hamma brauzerda ham ru-RU ovozi bo'lavermaydi — shuning uchun best-effort.

let voicesLoaded = false

function ensureVoices() {
  if (voicesLoaded) return
  const synth = window.speechSynthesis
  if (!synth) return
  // Ba'zi brauzerlarda ovozlar asinxron yuklanadi.
  synth.getVoices()
  synth.onvoiceschanged = () => {
    voicesLoaded = true
  }
}

export function speechMavjud() {
  return typeof window !== 'undefined' && 'speechSynthesis' in window
}

function pickVoice(lang) {
  const synth = window.speechSynthesis
  const voices = synth.getVoices() || []
  const base = lang.split('-')[0]
  return (
    voices.find((v) => v.lang === lang) ||
    voices.find((v) => v.lang && v.lang.toLowerCase().startsWith(base)) ||
    null
  )
}

export function speak(text, lang = 'ru-RU') {
  if (!speechMavjud() || !text) return
  ensureVoices()
  const synth = window.speechSynthesis
  try {
    synth.cancel()
    const u = new SpeechSynthesisUtterance(text)
    u.lang = lang
    const v = pickVoice(lang)
    if (v) u.voice = v
    u.rate = 0.95
    synth.speak(u)
  } catch {
    // ovoz chiqmasa jim o'tamiz
  }
}
