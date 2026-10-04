import { useRef, useState } from 'react'

function Backdrop({ children, onClose }) {
  return (
    <div
      className="modal-backdrop"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      {children}
    </div>
  )
}

export function AddWordsModal({ editWord, onClose, onAddOne, onAddBulk, onUpdate }) {
  const isEdit = !!editWord
  const [tab, setTab] = useState('bitta') // bitta | kop
  const [rus, setRus] = useState(editWord?.rus || '')
  const [uzbek, setUzbek] = useState(editWord?.uzbek || '')
  const [misol, setMisol] = useState(editWord?.misol || '')
  const [bulk, setBulk] = useState('')

  function saveOne() {
    if (!rus.trim() || !uzbek.trim()) return
    if (isEdit) {
      onUpdate(editWord.id, { rus: rus.trim(), uzbek: uzbek.trim(), misol: misol.trim() })
    } else {
      onAddOne({ rus, uzbek, misol })
    }
    onClose()
  }

  function saveBulk() {
    const n = onAddBulk(bulk)
    if (n > 0) onClose()
  }

  return (
    <Backdrop onClose={onClose}>
      <div className="modal">
        <h3>{isEdit ? "So'zni tahrirlash" : "So'z qo'shish"}</h3>

        {!isEdit && (
          <div className="filter-chips" style={{ marginBottom: 16 }}>
            <button className={'chip' + (tab === 'bitta' ? ' active' : '')} onClick={() => setTab('bitta')}>
              Bitta
            </button>
            <button className={'chip' + (tab === 'kop' ? ' active' : '')} onClick={() => setTab('kop')}>
              Ko'p so'z
            </button>
          </div>
        )}

        {tab === 'bitta' || isEdit ? (
          <>
            <div className="field">
              <label>Rus tilida</label>
              <input className="text-input" value={rus} onChange={(e) => setRus(e.target.value)} autoFocus />
            </div>
            <div className="field">
              <label>O'zbekcha tarjimasi</label>
              <input className="text-input" value={uzbek} onChange={(e) => setUzbek(e.target.value)} />
            </div>
            <div className="field">
              <label>Misol gap (ixtiyoriy)</label>
              <input className="text-input" value={misol} onChange={(e) => setMisol(e.target.value)} />
            </div>
            <div className="modal-actions">
              <button className="btn ghost" onClick={onClose}>
                Bekor
              </button>
              <button className="btn" onClick={saveOne} disabled={!rus.trim() || !uzbek.trim()}>
                Saqlash
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="help-text">
              Har bir qatorga bitta so'z yozing: <b>rus – tarjima</b>
              <br />
              Ajratish uchun <b>–</b>, <b>-</b> yoki <b>Tab</b> ishlatish mumkin.
            </p>
            <div className="field">
              <textarea
                className="text-input"
                value={bulk}
                onChange={(e) => setBulk(e.target.value)}
                placeholder={'думать – o\'ylamoq\nбежать – yugurmoq\nвидеть – ko\'rmoq'}
                autoFocus
              />
            </div>
            <div className="modal-actions">
              <button className="btn ghost" onClick={onClose}>
                Bekor
              </button>
              <button className="btn" onClick={saveBulk} disabled={!bulk.trim()}>
                Qo'shish
              </button>
            </div>
          </>
        )}
      </div>
    </Backdrop>
  )
}

export function BackupModal({ onClose, onExport, onImport, wordCount, newPerDay, onNewPerDay }) {
  const fileRef = useRef(null)

  function handleFile(e) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => onImport(String(reader.result))
    reader.readAsText(file)
  }

  return (
    <Backdrop onClose={onClose}>
      <div className="modal">
        <h3>Zaxira va sozlamalar</h3>

        <p className="help-text">
          Jami <b>{wordCount}</b> ta so'z. Ma'lumotlar faqat shu qurilmada saqlanadi — telefon
          almashtirilsa yoki brauzer tozalansa yo'qolmasligi uchun vaqti-vaqti bilan eksport qiling.
        </p>

        <div className="field">
          <label>Kuniga yangi so'zlar soni</label>
          <input
            className="text-input"
            type="number"
            min="1"
            max="100"
            value={newPerDay}
            onChange={(e) => onNewPerDay(Math.max(1, Math.min(100, Number(e.target.value) || 1)))}
          />
        </div>

        <div className="field" style={{ marginTop: 18 }}>
          <button className="btn" onClick={onExport}>
            ⬇️ JSON eksport qilish
          </button>
        </div>
        <div className="field">
          <button className="btn secondary" onClick={() => fileRef.current?.click()}>
            ⬆️ JSON import qilish
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="application/json,.json"
            style={{ display: 'none' }}
            onChange={handleFile}
          />
          <p className="help-text" style={{ marginTop: 8 }}>
            ⚠️ Import hozirgi barcha ma'lumotlar o'rnini bosadi.
          </p>
        </div>

        <div className="modal-actions">
          <button className="btn ghost" onClick={onClose}>
            Yopish
          </button>
        </div>
      </div>
    </Backdrop>
  )
}
