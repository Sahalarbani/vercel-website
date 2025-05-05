// app/admin/page.tsx
'use client'

import { useState } from 'react'

export default function AdminPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [form, setForm] = useState({ title: '', slug: '', category: '', desc: '', link: '' })
  const [loggedIn, setLoggedIn] = useState(false)

  const login = async () => {
    if (username === 'admin' && password === '1234') {
      setLoggedIn(true)
    } else {
      alert('Login gagal!')
    }
  }

  const handleSubmit = async () => {
    alert('Skin berhasil disimpan (simulasi saja, tidak terhubung ke backend)')
  }

  if (!loggedIn) {
    return (
      <div className="p-4">
        <h1>Login Admin</h1>
        <input placeholder="Username" onChange={e => setUsername(e.target.value)} /><br />
        <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} /><br />
        <button onClick={login}>Login</button>
      </div>
    )
  }

  return (
    <div className="p-4">
      <h1>Tambah Skin Baru</h1>
      <input placeholder="Nama Skin" onChange={e => setForm({ ...form, title: e.target.value })} /><br />
      <input placeholder="Slug URL" onChange={e => setForm({ ...form, slug: e.target.value })} /><br />
      <input placeholder="Kategori" onChange={e => setForm({ ...form, category: e.target.value })} /><br />
      <input placeholder="Deskripsi" onChange={e => setForm({ ...form, desc: e.target.value })} /><br />
      <input placeholder="Link MediaFire" onChange={e => setForm({ ...form, link: e.target.value })} /><br />
      <button onClick={handleSubmit}>Simpan</button>
    </div>
  )
}
