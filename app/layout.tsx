// app/layout.tsx
import './globals.css' // Ganti dengan path ke CSS kamu jika beda

export const metadata = {
  title: 'Skin Truck Europe 3',
  description: 'Koleksi skin truk keren dan terbaru',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}