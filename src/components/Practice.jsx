import { useEffect, useMemo, useRef, useState } from 'react'
import { BAHO } from '../lib/srs.js'
import { speak, speechMavjud } from '../lib/speech.js'

const MODES = ['kartochka', 'test', 'yozish']

function normalizeUz(s) {
  return (s || '')
    .toLowerCase()
    .replace(/[ʻʼ'`´'']/g, "'")
    .replace(/\s+/g, ' ')
    .trim()
}

function pickDistractors(word, allWords, n = 3) {
  const pool = allWords.filter(
    (w) => w.id !== word.id && normalizeUz(w.uzbek) !== normalizeUz(word.uzbek),
  )
  const chosen = []
  const used = new Set([normalizeUz(word.uzbek)])
  while (chosen.length < n && pool.length > 0) {
    const i = Math.floor(Math.random() * pool.length)
    const cand = pool.splice(i, 1)[0]
    const key = normalizeUz(cand.uzbek)
    if (used.has(key)) continue
    used.add(key)
    chosen.push(cand.uzbek)
  }
  return chosen
}

const RATINGS = [
  { baho: BAHO.BILMADIM, label: 'Bilmadim', sub: 'qaytadan', cls: 'bad' },
  { baho: BAHO.QIYNALDIM, label: 'Qiynaldim', sub: 'yaqinda', cls: 'warn' },
  { baho: BAHO.BILDIM, label: 'Bildim', sub: 'keyinroq', cls: 'ok' },
  { baho: BAHO.JUDA_OSON, label: 'Juda oson', sub: 'uzoqroq', cls: 'easy' },
]

// Misol gaplar: rus gap + o'zbekcha tarjimasi. Rus gapni bosib eshitish mumkin.
function Examples({ word }) {
  const list =
    word.misollar && word.misollar.length
      ? word.misollar
      : word.misol
        ? [{ ru: word.misol, uz: '' }]
        : []
  if (!list.length) return null
  return (
    <div className="examples">
      <div className="examples-title">Misollar</div>
      {list.map((m, i) => (
        <div className="example" key={i}>
          <button
            type="button"
            className="ex-ru"
            onClick={() => speechMavjud() && speak(m.ru, 'ru-RU')}
            title="Eshitish"
          >
            {speechMavjud() && <span className="ex-spk">🔊</span>}
            {m.ru}
          </button>
          {m.uz && <span className="ex-uz">{m.uz}</span>}
        </div>
      ))}
    </div>
  )
}

export default function Practice({ session, words, onGrade, onExit, onFinish }) {
  const { ids, idx, total } = session
  const finished = idx >= ids.length
  const wordId = finished ? null : ids[idx]
  const word = useMemo(
    () => (wordId == null ? null : words.find((w) => w.id === wordId)),
    [wordId, words],
  )

  // Har bir kartochka uchun rejim tanlash (idx o'zgarsa yangilanadi)
  const mode = useMemo(() => {
    if (words.length < 4) return 'kartochka' // test uchun yetarli so'z yo'q
    return MODES[Math.floor(Math.random() * MODES.length)]
  }, [idx, words.length])

  // test variantlari
  const options = useMemo(() => {
    if (!word || mode !== 'test') return []
    const distractors = pickDistractors(word, words, 3)
    const all = [...distractors, word.uzbek]
    for (let i = all.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[all[i], all[j]] = [all[j], all[i]]
    }
    return all
  }, [word, mode, idx]) // eslint-disable-line react-hooks/exhaustive-deps

  // kartochka holati
  const [revealed, setRevealed] = useState(false)
  const [selected, setSelected] = useState(null)
  const [writeVal, setWriteVal] = useState('')
  const [checked, setChecked] = useState(false)

  // kartochka o'zgarganda holatni tozalash
  useEffect(() => {
    setRevealed(false)
    setSelected(null)
    setWriteVal('')
    setChecked(false)
  }, [idx])

  // sessiya tugaganda bir marta onFinish (mavzu foizini yangilash uchun)
  const finishedRef = useRef(false)
  useEffect(() => {
    if (finished && !finishedRef.current) {
      finishedRef.current = true
      onFinish && onFinish()
    }
  }, [finished, onFinish])

  // mavzu sessiyasi natijasi (bu safargi foiz)
  const mavzuFoiz = useMemo(() => {
    if (session.type !== 'mavzu') return null
    const uniq = [...new Set(ids)]
    const got = uniq.reduce((a, id) => a + (session.natija?.[id] ?? 0), 0)
    return uniq.length ? Math.round((got / uniq.length) * 100) : 0
  }, [finished]) // eslint-disable-line react-hooks/exhaustive-deps

  if (finished || !word) {
    return (
      <div className="done-screen">
        <div className="ico">🎉</div>
        <h2>Mashq tugadi!</h2>
        {mavzuFoiz != null ? (
          <>
            <div
              className="big-foiz"
              style={{
                color:
                  mavzuFoiz >= 80
                    ? 'var(--ok)'
                    : mavzuFoiz >= 50
                      ? 'var(--warn)'
                      : 'var(--bad)',
              }}
            >
              {mavzuFoiz}%
            </div>
            <p style={{ color: 'var(--text-dim)', marginBottom: 24 }}>
              {total} ta so'zdan shuncha o'zlashtirdingiz. Foiz saqlandi.
            </p>
          </>
        ) : (
          <p style={{ color: 'var(--text-dim)', marginBottom: 24 }}>
            {total} ta so'z ustida ishladingiz. Zo'r!
          </p>
        )}
        <button className="btn" onClick={onExit}>
          Tayyor
        </button>
      </div>
    )
  }

  const answered =
    mode === 'kartochka' ? revealed : mode === 'test' ? selected != null : checked

  const writeCorrect = normalizeUz(writeVal) === normalizeUz(word.uzbek)

  const progress = Math.min(100, Math.round((idx / total) * 100))

  function handleGrade(baho) {
    onGrade(word.id, baho)
  }

  return (
    <div>
      <div className="practice-top">
        <button className="icon-btn" onClick={onExit} aria-label="Chiqish">
          ✕
        </button>
        <div className="progress">
          <span style={{ width: progress + '%' }} />
        </div>
        <span style={{ color: 'var(--text-dim)', fontSize: 14, fontWeight: 700, minWidth: 44, textAlign: 'right' }}>
          {Math.min(idx + 1, total)}/{total}
        </span>
      </div>

      <span className="mode-tag">
        {mode === 'kartochka' ? '🃏 Kartochka' : mode === 'test' ? '✅ Test' : '✍️ Yozish'}
      </span>

      {/* --- KARTOCHKA --- */}
      {mode === 'kartochka' && (
        <div className="card flash">
          <div className="prompt">{word.rus}</div>
          {speechMavjud() && (
            <button
              className="speak-btn"
              onClick={() => speak(word.rus, 'ru-RU')}
              aria-label="Talaffuz"
            >
              🔊
            </button>
          )}
          {revealed ? (
            <>
              <div className="divider" />
              <div className="answer">{word.uzbek}</div>
            </>
          ) : (
            <div className="hint">Javobni eslang, keyin oching</div>
          )}
        </div>
      )}

      {/* --- TEST --- */}
      {mode === 'test' && (
        <>
          <div className="card flash" style={{ minHeight: 120 }}>
            <div className="prompt">{word.rus}</div>
            {speechMavjud() && (
              <button
                className="speak-btn"
                onClick={() => speak(word.rus, 'ru-RU')}
                aria-label="Talaffuz"
              >
                🔊
              </button>
            )}
          </div>
          <div className="options">
            {options.map((opt) => {
              let cls = 'option'
              if (selected != null) {
                const isCorrect = normalizeUz(opt) === normalizeUz(word.uzbek)
                const isPicked = normalizeUz(opt) === normalizeUz(selected)
                if (isCorrect) cls += ' correct'
                else if (isPicked) cls += ' wrong'
                else cls += ' dim'
              }
              return (
                <button
                  key={opt}
                  className={cls}
                  disabled={selected != null}
                  onClick={() => setSelected(opt)}
                >
                  {opt}
                </button>
              )
            })}
          </div>
        </>
      )}

      {/* --- YOZISH --- */}
      {mode === 'yozish' && (
        <>
          <div className="card flash" style={{ minHeight: 120 }}>
            <div className="prompt">{word.rus}</div>
            {speechMavjud() && (
              <button
                className="speak-btn"
                onClick={() => speak(word.rus, 'ru-RU')}
                aria-label="Talaffuz"
              >
                🔊
              </button>
            )}
          </div>
          <div className="write-wrap">
            <input
              className="text-input"
              placeholder="O'zbekcha tarjimasi..."
              value={writeVal}
              onChange={(e) => setWriteVal(e.target.value)}
              disabled={checked}
              autoFocus
              autoCapitalize="off"
              autoCorrect="off"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !checked && writeVal.trim()) setChecked(true)
              }}
            />
            {!checked ? (
              <button
                className="btn secondary"
                style={{ marginTop: 10 }}
                disabled={!writeVal.trim()}
                onClick={() => setChecked(true)}
              >
                Tekshirish
              </button>
            ) : (
              <div className={'feedback ' + (writeCorrect ? 'ok' : 'no')}>
                {writeCorrect ? '✅ To\'g\'ri!' : '❌ Noto\'g\'ri'}
                <small>To'g'ri javob: {word.uzbek}</small>
              </div>
            )}
          </div>
        </>
      )}

      {/* --- Baholash / davom --- */}
      {!answered && mode === 'kartochka' && (
        <button className="btn" onClick={() => setRevealed(true)}>
          Javobni ko'rish
        </button>
      )}

      {answered && <Examples word={word} />}

      {answered && (
        <div className="ratings">
          {RATINGS.map((r) => (
            <button
              key={r.baho}
              className={'rate ' + r.cls}
              onClick={() => handleGrade(r.baho)}
            >
              <span>{r.label}</span>
              <small>{r.sub}</small>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
