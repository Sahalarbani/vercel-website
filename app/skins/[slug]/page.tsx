// app/skins/[slug]/page.tsx
export default function SkinDetail({ params }) {
  const slug = params.slug

  const skinData = {
    'skin-truck-biru': {
      title: 'Skin Truck Biru',
      img: '/images/skin-biru.jpg',
      desc: 'Skin truck Eropa 3 warna biru elegan. Cocok untuk tampilan keren dan bersih.',
      link: 'https://www.mediafire.com/file/skinbiru/file',
    },
    'skin-truk-hitam': {
      title: 'Skin Truk Hitam',
      img: '/images/skin-hitam.jpg',
      desc: 'Warna hitam glossy untuk tampilan gagah di jalan.',
      link: 'https://www.mediafire.com/file/skinhitam/file',
    },
  }

  const skin = skinData[slug]
  if (!skin) return <p>Skin tidak ditemukan.</p>

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">{skin.title}</h1>
      <img src={skin.img} alt={skin.title} className="w-full rounded mb-4" />
      <p className="mb-4">{skin.desc}</p>
      <a href={skin.link} target="_blank" rel="noopener noreferrer">
        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Download dari MediaFire
        </button>
      </a>
    </div>
  )
}
