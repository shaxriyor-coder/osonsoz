export default function Today({ dueCount, newCount, totalNew, streak, onStart }) {
  const total = dueCount + newCount
  const hour = new Date().getHours()
  const greeting =
    hour < 6 ? 'Xayrli tun' : hour < 12 ? 'Xayrli tong' : hour < 18 ? 'Xayrli kun' : 'Xayrli kech'

  return (
    <div>
      <h1 className="page-title">Bugun</h1>

      <div className="card today-hero">
        <div className="greeting">{greeting}! Bugungi mashq</div>
        <div className="big">{total}</div>
        <div style={{ color: 'var(--text-dim)', marginBottom: 14 }}>
          {total > 0 ? "so'z sizni kutmoqda" : 'Hammasi bajarildi'}
        </div>
        {streak > 0 && (
          <span className="streak-chip">🔥 {streak} kun ketma-ket</span>
        )}
      </div>

      <div className="tiles">
        <div className="tile">
          <div className="num">{dueCount}</div>
          <div className="label">Takrorlash</div>
        </div>
        <div className="tile accent">
          <div className="num">{newCount}</div>
          <div className="label">
            Yangi so'z{totalNew > newCount ? ` (jami ${totalNew})` : ''}
          </div>
        </div>
      </div>

      {total > 0 ? (
        <button className="btn" onClick={onStart}>
          🎯 Boshlash
        </button>
      ) : (
        <div className="card empty-note">
          <div className="ico">✅</div>
          <p>
            Bugun uchun hamma so'zlar takrorlandi.
            <br />
            Ertaga yana davom eting yoki yangi so'z qo'shing.
          </p>
        </div>
      )}
    </div>
  )
}
