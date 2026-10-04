// Mavzular — 139 fe'l 11 ta mavzuga bo'lingan (har biri 10-14 so'z).
// `ids` — boshlang'ich lug'atdagi so'z id'lari (initialWords tartibi: 1..139).
// Har bir so'z aniq bitta mavzuga tegishli. Mavzu mashqi va foizi shu asosda ishlaydi.
export const TOPICS = [
  { id: 'harakat', nom: 'Harakat', emoji: '🏃',
    ids: [1, 8, 10, 30, 42, 66, 74, 77, 81, 94, 115, 117, 129] },
  { id: 'muloqot', nom: 'Muloqot', emoji: '💬',
    ids: [7, 11, 17, 26, 40, 47, 60, 62, 67, 100, 102, 116, 128] },
  { id: 'fikr', nom: 'Fikr va bilim', emoji: '🧠',
    ids: [9, 16, 19, 27, 28, 33, 63, 73, 87, 88, 105, 125, 130, 134] },
  { id: 'hissiyot', nom: "His-tuyg'u", emoji: '❤️',
    ids: [2, 15, 35, 45, 46, 50, 56, 78, 90, 108, 119, 123] },
  { id: 'kundalik', nom: 'Kundalik hayot', emoji: '🏠',
    ids: [4, 12, 14, 18, 20, 29, 41, 57, 106, 120, 135] },
  { id: 'narsalar', nom: 'Narsalar bilan ish', emoji: '📦',
    ids: [3, 13, 24, 44, 70, 71, 76, 80, 83, 98, 104, 111, 114, 138] },
  { id: 'ish', nom: 'Ish va jarayon', emoji: '⚙️',
    ids: [21, 22, 37, 53, 54, 75, 79, 82, 92, 97, 99, 109, 124, 126] },
  { id: 'ijtimoiy', nom: 'Ijtimoiy munosabat', emoji: '🤝',
    ids: [31, 51, 58, 59, 65, 86, 89, 93, 103, 110, 112, 121, 122] },
  { id: 'sezgi', nom: 'Sezgi va holat', emoji: '👁️',
    ids: [5, 6, 23, 34, 48, 49, 68, 84, 85, 96, 118, 131, 133] },
  { id: 'kuch', nom: 'Nazorat va kuch', emoji: '🛡️',
    ids: [25, 38, 39, 43, 64, 72, 113, 127, 132, 139] },
  { id: 'qaror', nom: 'Qaror va talab', emoji: '📋',
    ids: [32, 36, 52, 55, 61, 69, 91, 95, 101, 107, 136, 137] },
]

export const BOSHQA_MAVZU = { id: 'boshqa', nom: 'Boshqa', emoji: '📂' }

// id (son) -> mavzu id (satr)
export const mavzuById = new Map()
for (const t of TOPICS) for (const id of t.ids) mavzuById.set(id, t.id)

// mavzu id -> { nom, emoji }
export const mavzuMeta = new Map(TOPICS.map((t) => [t.id, t]))
mavzuMeta.set(BOSHQA_MAVZU.id, BOSHQA_MAVZU)
