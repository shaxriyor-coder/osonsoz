import { useEffect, useMemo, useState, useCallback } from 'react'
import {
  loadWords,
  saveWords,
  loadMeta,
  saveMeta,
  nextId,
  exportData,
  parseImport,
  parseBulk,
} from './lib/storage.js'
import { baholash, takrorlashKerakmi, BAHO, HOLAT, EASE_DEFAULT } from './lib/srs.js'
import { todayISO } from './lib/date.js'
import { TOPICS, mavzuById } from './data/topics.js'
import BottomNav from './components/BottomNav.jsx'
import Today from './components/Today.jsx'
import Practice from './components/Practice.jsx'
import MashqHome from './components/MashqHome.jsx'
import Dictionary from './components/Dictionary.jsx'
import Stats from './components/Stats.jsx'
import { AddWordsModal, BackupModal } from './components/Modals.jsx'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Baho -> ball (mavzu foizi uchun): bildim/juda oson = 1, qiynaldim = 0.5, bilmadim = 0
function bahoToScore(baho) {
  if (baho === BAHO.BILDIM || baho === BAHO.JUDA_OSON) return 1
  if (baho === BAHO.QIYNALDIM) return 0.5
  return 0
}

// Sessiya natijasidan foiz (0..100) — har bir so'z uchun oxirgi baho hisobga olinadi
function sessiyaFoizi(session) {
  if (!session) return 0
  const uniq = [...new Set(session.ids)]
  if (uniq.length === 0) return 0
  const got = uniq.reduce((a, id) => a + (session.natija?.[id] ?? 0), 0)
  return Math.round((got / uniq.length) * 100)
}

export default function App() {
  const [words, setWords] = useState(() => loadWords())
  const [meta, setMeta] = useState(() => loadMeta())
  const [view, setView] = useState('bugun')
  const [modal, setModal] = useState(null) // 'add' | 'backup' | null
  const [editWord, setEditWord] = useState(null)
  const [toast, setToast] = useState(null)

  // Mashq sessiyasi: { ids, idx, total, type:'srs'|'mavzu', mavzuId?, natija:{} }
  const [session, setSession] = useState(null)
  const [lastResult, setLastResult] = useState(null) // { mavzuId, pct, eski }

  // Diqqat: figurali qavs shart — saveWords/saveMeta boolean qaytaradi,
  // qavssiz bo'lsa React uni cleanup funksiyasi deb chaqirib crash beradi.
  useEffect(() => {
    saveWords(words)
  }, [words])
  useEffect(() => {
    saveMeta(meta)
  }, [meta])

  const showToast = useCallback((msg) => {
    setToast(msg)
    setTimeout(() => setToast(null), 2200)
  }, [])

  const today = todayISO()
  const introducedToday = meta.newIntroducedByDate[today] || 0

  // Bugungi takrorlash va yangi so'zlar
  const dueWords = useMemo(
    () => words.filter((w) => takrorlashKerakmi(w, today)),
    [words, today],
  )
  const newAvailable = useMemo(
    () => words.filter((w) => w.holat === HOLAT.YANGI),
    [words],
  )
  const remainingNew = Math.max(0, (meta.newPerDay || 15) - introducedToday)

  // Mavzular ro'yxati (so'z soni va o'zlashtirish foizi bilan)
  const mavzular = useMemo(() => {
    const countByMavzu = {}
    for (const w of words) countByMavzu[w.mavzu] = (countByMavzu[w.mavzu] || 0) + 1
    return TOPICS.map((t) => ({
      ...t,
      soni: countByMavzu[t.id] || 0,
      foiz: meta.mavzuFoiz ? meta.mavzuFoiz[t.id] ?? null : null,
    })).filter((t) => t.soni > 0)
  }, [words, meta.mavzuFoiz])

  const startSession = useCallback(() => {
    const due = words.filter((w) => takrorlashKerakmi(w, today))
    const fresh = words.filter((w) => w.holat === HOLAT.YANGI).slice(0, remainingNew)
    const ids = shuffle([...due, ...fresh].map((w) => w.id))
    if (ids.length === 0) {
      showToast('Bugun takrorlash uchun so\'z yo\'q 🎉')
      return
    }
    setLastResult(null)
    setSession({ ids, idx: 0, total: ids.length, type: 'srs', natija: {} })
    setView('mashq')
  }, [words, today, remainingNew, showToast])

  // Mavzu bo'yicha mashq: shu mavzudagi barcha so'zlar (cheklovsiz, bemalol)
  const startMavzu = useCallback(
    (mavzuId) => {
      const ids = shuffle(words.filter((w) => w.mavzu === mavzuId).map((w) => w.id))
      if (ids.length === 0) {
        showToast("Bu mavzuda so'z yo'q")
        return
      }
      setLastResult(null)
      setSession({ ids, idx: 0, total: ids.length, type: 'mavzu', mavzuId, natija: {} })
      setView('mashq')
    },
    [words, showToast],
  )

  // Sessiya tugaganda (mavzu bo'lsa) foizni yangilaymiz
  const finishSession = useCallback(() => {
    const s = session
    if (!s || s.type !== 'mavzu') return
    const pct = sessiyaFoizi(s)
    setMeta((m) => {
      const eski = m.mavzuFoiz ? m.mavzuFoiz[s.mavzuId] : undefined
      // Yaxshi yechsa oshadi, yomon yechsa kamayadi (silliq o'zgarish)
      const yangi = eski == null ? pct : Math.round(eski * 0.5 + pct * 0.5)
      return { ...m, mavzuFoiz: { ...(m.mavzuFoiz || {}), [s.mavzuId]: yangi } }
    })
    setLastResult({ mavzuId: s.mavzuId, pct })
  }, [session])

  const endSession = useCallback(() => {
    const type = session?.type
    setSession(null)
    setView(type === 'mavzu' ? 'mashq' : 'bugun')
  }, [session])

  // Bitta so'zni baholash
  const gradeWord = useCallback(
    (wordId, baho) => {
      const w = words.find((x) => x.id === wordId)
      if (!w) return
      const wasNew = w.holat === HOLAT.YANGI
      const updated = baholash(w, baho, today)

      setWords((prev) => prev.map((x) => (x.id === wordId ? updated : x)))

      setMeta((m) => {
        const next = { ...m }
        // yangi so'z birinchi marta ko'rildi -> kunlik hisobga qo'shamiz
        if (wasNew) {
          next.newIntroducedByDate = {
            ...m.newIntroducedByDate,
            [today]: (m.newIntroducedByDate[today] || 0) + 1,
          }
        }
        // mashq qilingan kun (streak uchun)
        if (!m.studyDates.includes(today)) {
          next.studyDates = [...m.studyDates, today].sort()
        }
        return next
      })

      // sessiyani ilgarilatish; Bilmadim bo'lsa shu sessiyada qayta ko'rsatamiz
      setSession((s) => {
        if (!s) return s
        const ids = baho === BAHO.BILMADIM ? [...s.ids, wordId] : s.ids
        const natija =
          s.type === 'mavzu'
            ? { ...s.natija, [wordId]: bahoToScore(baho) }
            : s.natija
        return { ...s, ids, idx: s.idx + 1, natija }
      })
    },
    [words, today],
  )

  // Lug'at amallari
  const addWord = useCallback(
    ({ rus, uzbek, misol }) => {
      setWords((prev) => {
        const id = nextId(prev)
        return [
          ...prev,
          {
            id,
            rus: rus.trim(),
            uzbek: uzbek.trim(),
            misol: (misol || '').trim(),
            misollar: [],
            mavzu: mavzuById.get(id) || 'boshqa',
            holat: HOLAT.YANGI,
            interval: 0,
            osonKoeffitsienti: EASE_DEFAULT,
            keyingiTakrorlashSanasi: today,
            oxirgiTakrorlash: null,
            togriSoni: 0,
            xatoSoni: 0,
            created: today,
          },
        ]
      })
    },
    [today],
  )

  const addBulk = useCallback(
    (text) => {
      const start = nextId(words)
      const parsed = parseBulk(text, start)
      if (parsed.length === 0) {
        showToast('Hech qanday so\'z topilmadi')
        return 0
      }
      setWords((prev) => [...prev, ...parsed])
      showToast(`${parsed.length} ta so'z qo'shildi`)
      return parsed.length
    },
    [words, showToast],
  )

  const updateWord = useCallback((id, patch) => {
    setWords((prev) => prev.map((w) => (w.id === id ? { ...w, ...patch } : w)))
  }, [])

  const deleteWord = useCallback((id) => {
    setWords((prev) => prev.filter((w) => w.id !== id))
  }, [])

  // Zaxira nusxa
  const doExport = useCallback(() => {
    const json = exportData(words, meta)
    const blob = new Blob([json], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `osonsoz-zaxira-${today}.json`
    a.click()
    URL.revokeObjectURL(url)
    showToast('Zaxira nusxa yuklab olindi')
  }, [words, meta, today, showToast])

  const doImport = useCallback(
    (text) => {
      try {
        const { words: w, meta: m } = parseImport(text)
        setWords(w)
        setMeta(m)
        showToast(`${w.length} ta so'z import qilindi`)
        setModal(null)
      } catch (e) {
        showToast('Xato: ' + e.message)
      }
    },
    [showToast],
  )

  const openEdit = useCallback((w) => {
    setEditWord(w)
    setModal('add')
  }, [])

  const closeModal = useCallback(() => {
    setModal(null)
    setEditWord(null)
  }, [])

  return (
    <div className="app">
      {view !== 'mashq' || !session ? (
        <header className="app-header">
          <div className="brand">
            <span className="logo">О</span>
            <span>OsonSo'z</span>
          </div>
          <button
            className="icon-btn"
            onClick={() => setModal('backup')}
            aria-label="Zaxira nusxa"
            title="Zaxira nusxa"
          >
            ⬇️
          </button>
        </header>
      ) : null}

      <main className="view">
        {view === 'bugun' && (
          <Today
            dueCount={dueWords.length}
            newCount={Math.min(newAvailable.length, remainingNew)}
            totalNew={newAvailable.length}
            streak={computeStreak(meta.studyDates, today)}
            onStart={startSession}
          />
        )}

        {view === 'mashq' &&
          (session ? (
            <Practice
              session={session}
              words={words}
              onGrade={gradeWord}
              onExit={endSession}
              onFinish={finishSession}
            />
          ) : (
            <MashqHome
              dueCount={dueWords.length}
              newCount={Math.min(newAvailable.length, remainingNew)}
              totalNew={newAvailable.length}
              mavzular={mavzular}
              lastResult={lastResult}
              onStartSrs={startSession}
              onStartMavzu={startMavzu}
            />
          ))}

        {view === 'lugat' && (
          <Dictionary
            words={words}
            onAdd={() => {
              setEditWord(null)
              setModal('add')
            }}
            onEdit={openEdit}
            onDelete={deleteWord}
          />
        )}

        {view === 'statistika' && <Stats words={words} meta={meta} today={today} />}
      </main>

      {!(view === 'mashq' && session) && (
        <BottomNav view={view} setView={setView} />
      )}

      {modal === 'add' && (
        <AddWordsModal
          editWord={editWord}
          onClose={closeModal}
          onAddOne={addWord}
          onAddBulk={addBulk}
          onUpdate={updateWord}
        />
      )}

      {modal === 'backup' && (
        <BackupModal
          onClose={() => setModal(null)}
          onExport={doExport}
          onImport={doImport}
          wordCount={words.length}
          newPerDay={meta.newPerDay}
          onNewPerDay={(n) => setMeta((m) => ({ ...m, newPerDay: n }))}
        />
      )}

      {toast && <div className="toast">{toast}</div>}
    </div>
  )
}

// Ketma-ket mashq qilingan kunlar (streak)
function computeStreak(studyDates, today) {
  if (!studyDates || studyDates.length === 0) return 0
  const set = new Set(studyDates)
  // Bugun yoki kecha bo'lmasa streak uzilgan
  const d = new Date(today + 'T00:00:00')
  const iso = (x) => todayISO(x)
  if (!set.has(iso(d))) {
    d.setDate(d.getDate() - 1)
    if (!set.has(iso(d))) return 0
  }
  let streak = 0
  while (set.has(iso(d))) {
    streak++
    d.setDate(d.getDate() - 1)
  }
  return streak
}
