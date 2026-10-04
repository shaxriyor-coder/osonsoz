const ITEMS = [
  { key: 'bugun', label: 'Bugun', ico: '🏠' },
  { key: 'mashq', label: 'Mashq', ico: '🎯' },
  { key: 'lugat', label: "Lug'at", ico: '📖' },
  { key: 'statistika', label: 'Statistika', ico: '📊' },
]

export default function BottomNav({ view, setView }) {
  return (
    <nav className="bottom-nav">
      <div className="inner">
        {ITEMS.map((it) => (
          <button
            key={it.key}
            className={'nav-item' + (view === it.key ? ' active' : '')}
            onClick={() => setView(it.key)}
          >
            <span className="ico">{it.ico}</span>
            <span>{it.label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}
