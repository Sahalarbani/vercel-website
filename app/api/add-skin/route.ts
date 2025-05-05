// app/api/add-skin/route.ts
import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(req: Request) {
  const data = await req.json()
  const filePath = path.join(process.cwd(), 'skins.json')

  try {
    const fileData = fs.existsSync(filePath)
      ? JSON.parse(fs.readFileSync(filePath, 'utf-8'))
      : []

    fileData.push(data)
    fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2))

    return NextResponse.json({ success: true, message: 'Skin berhasil ditambahkan!' })
  } catch (err) {
    return NextResponse.json({ success: false, message: 'Gagal menyimpan skin.' }, { status: 500 })
  }
}
