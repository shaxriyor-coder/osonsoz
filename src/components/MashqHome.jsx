import { mavzuMeta } from '../data/topics.js'

function foizRang(foiz) {
  if (foiz == null) return 'var(--text-dim)'
  if (foiz >= 80) return 'var(--ok)'
  if (foiz >= 50) return 'var(--warn)'
  return 'var(--bad)'
}

export default function MashqHome({
  dueCount,
  newCount,
  totalNew,
  mavzular,
  lastResult,
  onStartSrs,
  onStartMavzu,
}) {
  const srsTotal = dueCount + newCount

  return (
    <div>
      <h1 className="page-title">Mashq</h1>

      {lastResult && (
        <div className="result-banner">
          <span>{(mavzuMeta.get(lastResult.mavzuId) || {}).emoji} </span>
          <span>
            <b>{(mavzuMeta.get(lastResult.mavzuId) || {}).nom}</b> mashqi tugadi —{' '}
            bu safar <b>{lastResult.pct}%</b>
          </span>
        </div>
      )}

      {/* Aralash takrorlash (SRS) */}
      <div className="card srs-card">
        <div className="srs-info">
          <div className="srs-title">🔀 Aralash takrorlash</div>
          <div className="srs-sub">
            Oraliq takrorlash bo'yicha — bugun {dueCount} takror, {newCount} yangi
          </div>
        </div>
        <button className="btn sm srs-btn" onClick={onStartSrs} disabled={srsTotal === 0}>
          {srsTotal > 0 ? 'Boshlash' : 'Tugadi ✅'}
        </button>
      </div>

      <div className="stat-section-title">Mavzular</div>
      <p className="help-text" style={{ marginTop: -4 }}>
        Istalgan mavzuni tanlab, o'sha so'zlarni alohida yodlang. Har safar yaxshi
        yechsangiz foiz oshadi.
      </p>

      <div className="topic-list">
        {mavzular.map((t) => (
          <button key={t.id} className="topic-card" onClick={() => onStartMavzu(t.id)}>
            <span className="topic-emoji">{t.emoji}</span>
            <span className="topic-main">
              <span className="topic-nom">{t.nom}</span>
              <span className="topic-bar">
                <span
                  style={{
                    width: (t.foiz ?? 0) + '%',
                    background: foizRang(t.foiz),
                  }}
                />
              </span>
              <span className="topic-meta">
                {t.soni} so'z
                {t.foiz != null && (
                  <span style={{ color: foizRang(t.foiz), fontWeight: 700 }}>
                    {' · '}
                    {t.foiz}% o'zlashtirildi
                  </span>
                )}
                {t.foiz == null && <span> · hali boshlanmagan</span>}
              </span>
            </span>
            <span className="topic-go">›</span>
          </button>
        ))}
      </div>
    </div>
  )
}
