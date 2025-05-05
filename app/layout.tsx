// app/layout.tsx
import './globals.css'

export const metadata = {
  title: 'Skin Truck Europe 3',
  description: 'Koleksi skin truk keren',
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