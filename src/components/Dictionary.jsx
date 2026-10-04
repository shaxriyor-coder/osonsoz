import { useMemo, useState } from 'react'
import { HOLAT } from '../lib/srs.js'
import { speak, speechMavjud } from '../lib/speech.js'

const FILTERS = [
  { key: 'all', label: 'Barchasi' },
  { key: HOLAT.YANGI, label: 'Yangi' },
  { key: HOLAT.ORGANILMOQDA, label: "O'rganilmoqda" },
  { key: HOLAT.YODLANGAN, label: 'Yodlangan' },
]

function dotClass(holat) {
  if (holat === HOLAT.YODLANGAN) return 'status-dot yod'
  if (holat === HOLAT.ORGANILMOQDA) return 'status-dot org'
  return 'status-dot yangi'
}

export default function Dictionary({ words, onAdd, onEdit, onDelete }) {
  const [q, setQ] = useState('')
  const [filter, setFilter] = useState('all')

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase()
    return words
      .filter((w) => (filter === 'all' ? true : w.holat === filter))
      .filter(
        (w) =>
          !query ||
          w.rus.toLowerCase().includes(query) ||
          w.uzbek.toLowerCase().includes(query),
      )
      .sort((a, b) => a.rus.localeCompare(b.rus, 'ru'))
  }, [words, q, filter])

  const counts = useMemo(() => {
    const c = { all: words.length, [HOLAT.YANGI]: 0, [HOLAT.ORGANILMOQDA]: 0, [HOLAT.YODLANGAN]: 0 }
    for (const w of words) c[w.holat] = (c[w.holat] || 0) + 1
    return c
  }, [words])

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 className="page-title">Lug'at</h1>
        <button className="btn sm" style={{ width: 'auto' }} onClick={onAdd}>
          + Qo'shish
        </button>
      </div>

      <div className="search-row">
        <input
          className="text-input"
          placeholder="🔍 Qidirish..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>

      <div className="filter-chips">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            className={'chip' + (filter === f.key ? ' active' : '')}
            onClick={() => setFilter(f.key)}
          >
            {f.label} ({counts[f.key] || 0})
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="card empty-note">
          <div className="ico">🔍</div>
          <p>Hech narsa topilmadi</p>
        </div>
      ) : (
        <div className="word-list">
          {filtered.map((w) => (
            <div key={w.id} className="word-item">
              <span className={dotClass(w.holat)} title={w.holat} />
              <div className="main">
                <div className="rus">{w.rus}</div>
                <div className="uz">{w.uzbek}</div>
              </div>
              {speechMavjud() && (
                <button
                  className="mini-btn"
                  onClick={() => speak(w.rus, 'ru-RU')}
                  aria-label="Talaffuz"
                >
                  🔊
                </button>
              )}
              <button className="mini-btn" onClick={() => onEdit(w)} aria-label="Tahrirlash">
                ✏️
              </button>
              <button
                className="mini-btn"
                onClick={() => {
                  if (confirm(`"${w.rus}" so'zini o'chirasizmi?`)) onDelete(w.id)
                }}
                aria-label="O'chirish"
              >
                🗑️
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
