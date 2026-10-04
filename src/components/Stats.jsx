import { useMemo } from 'react'
import { HOLAT } from '../lib/srs.js'
import { todayISO } from '../lib/date.js'

function ProgressRing({ value, total }) {
  const pct = total > 0 ? value / total : 0
  const r = 40
  const c = 2 * Math.PI * r
  return (
    <svg width="100" height="100" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r={r} fill="none" stroke="var(--surface-2)" strokeWidth="10" />
      <circle
        cx="50"
        cy="50"
        r={r}
        fill="none"
        stroke="var(--ok)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={c * (1 - pct)}
        transform="rotate(-90 50 50)"
      />
      <text
        x="50"
        y="50"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="22"
        fontWeight="800"
        fill="var(--text)"
      >
        {Math.round(pct * 100)}%
      </text>
    </svg>
  )
}

function computeStreak(studyDates, today) {
  if (!studyDates || studyDates.length === 0) return 0
  const set = new Set(studyDates)
  const d = new Date(today + 'T00:00:00')
  if (!set.has(todayISO(d))) {
    d.setDate(d.getDate() - 1)
    if (!set.has(todayISO(d))) return 0
  }
  let streak = 0
  while (set.has(todayISO(d))) {
    streak++
    d.setDate(d.getDate() - 1)
  }
  return streak
}

export default function Stats({ words, meta, today }) {
  const stats = useMemo(() => {
    const yodlangan = words.filter((w) => w.holat === HOLAT.YODLANGAN).length
    const organilmoqda = words.filter((w) => w.holat === HOLAT.ORGANILMOQDA).length
    const yangi = words.filter((w) => w.holat === HOLAT.YANGI).length
    const togri = words.reduce((s, w) => s + (w.togriSoni || 0), 0)
    const xato = words.reduce((s, w) => s + (w.xatoSoni || 0), 0)
    const topXato = [...words]
      .filter((w) => (w.xatoSoni || 0) > 0)
      .sort((a, b) => (b.xatoSoni || 0) - (a.xatoSoni || 0))
      .slice(0, 8)
    return { yodlangan, organilmoqda, yangi, togri, xato, topXato }
  }, [words])

  const streak = computeStreak(meta.studyDates, today)
  const total = words.length
  const maxXato = stats.topXato.length ? stats.topXato[0].xatoSoni : 1
  const aniqlik = stats.togri + stats.xato > 0
    ? Math.round((stats.togri / (stats.togri + stats.xato)) * 100)
    : 0

  return (
    <div>
      <h1 className="page-title">Statistika</h1>

      <div className="card progress-ring-wrap">
        <ProgressRing value={stats.yodlangan} total={total} />
        <div className="legend">
          <div>
            <b style={{ fontSize: 20 }}>{stats.yodlangan}</b> / {total} so'z yodlangan
          </div>
          <div style={{ marginTop: 6 }}>🔥 {streak} kun ketma-ket</div>
          <div style={{ marginTop: 2 }}>🎯 {aniqlik}% aniqlik</div>
        </div>
      </div>

      <div className="tiles" style={{ marginTop: 16 }}>
        <div className="tile">
          <div className="num" style={{ color: 'var(--text-dim)' }}>{stats.yangi}</div>
          <div className="label">Yangi</div>
        </div>
        <div className="tile">
          <div className="num" style={{ color: 'var(--warn)' }}>{stats.organilmoqda}</div>
          <div className="label">O'rganilmoqda</div>
        </div>
        <div className="tile">
          <div className="num" style={{ color: 'var(--ok)' }}>{stats.togri}</div>
          <div className="label">To'g'ri javob</div>
        </div>
        <div className="tile">
          <div className="num" style={{ color: 'var(--bad)' }}>{stats.xato}</div>
          <div className="label">Xato javob</div>
        </div>
      </div>

      <div className="stat-section-title">Eng ko'p xato qilingan so'zlar</div>
      {stats.topXato.length === 0 ? (
        <div className="card empty-note" style={{ padding: 20 }}>
          <p style={{ margin: 0 }}>Hali xato yo'q 👍</p>
        </div>
      ) : (
        <div className="card" style={{ padding: 16 }}>
          {stats.topXato.map((w) => (
            <div key={w.id} className="bar-row">
              <span className="name" title={w.rus}>
                {w.rus}
              </span>
              <span className="bar-track">
                <span style={{ width: Math.round(((w.xatoSoni || 0) / maxXato) * 100) + '%' }} />
              </span>
              <span className="val">{w.xatoSoni}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
