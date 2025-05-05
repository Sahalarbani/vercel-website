// app/api/upload/route.ts
import { NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs'
import { writeFile } from 'fs/promises'

export async function POST(req: Request) {
  const formData = await req.formData()
  const file = formData.get('image') as File

  if (!file) {
    return NextResponse.json({ success: false, message: 'Tidak ada file gambar.' }, { status: 400 })
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)
  const fileName = `${Date.now()}-${file.name}`
  const filePath = path.join(process.cwd(), 'public', 'images', fileName)

  try {
    await writeFile(filePath, buffer)
    return NextResponse.json({ success: true, filename: fileName, url: `/images/${fileName}` })
  } catch (err) {
    return NextResponse.json({ success: false, message: 'Gagal menyimpan gambar.' }, { status: 500 })
  }
}
