// app/page.tsx
import Link from 'next/link'
import { useState } from 'react'

export default function HomePage() {
  const [filter, setFilter] = useState('all')

  const skins = [
    { title: 'Skin Truck Biru', slug: 'skin-truck-biru', img: '/images/skin-biru.jpg', category: 'Eropa' },
    { title: 'Skin Truk Hitam', slug: 'skin-truk-hitam', img: '/images/skin-hitam.jpg', category: 'Indonesia' },
  ]

  const categories = ['all', 'Eropa', 'Indonesia', 'Anime', 'Racing']
  const filtered = filter === 'all' ? skins : skins.filter(s => s.category === filter)

  return (
    <main className="p-4">
      <h1 className="text-center text-2xl font-bold mb-4">Koleksi Skin Truck Europe 3</h1>
      <div className="mb-4">
        {categories.map(cat => (
          <button key={cat} onClick={() => setFilter(cat)} className="mr-2 px-3 py-1 border rounded">
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.map(skin => (
          <div key={skin.slug} className="rounded-lg shadow p-2 text-center">
            <img src={skin.img} alt={skin.title} className="w-full rounded" />
            <Link href={`/skins/${skin.slug}`}>
              <button className="mt-2 bg-blue-600 text-white rounded-full px-4 py-1">
                Download
              </button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}
