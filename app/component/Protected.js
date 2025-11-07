"use client"
import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function Protected() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const next = searchParams.get('next') || '/'

  useEffect(() => {
    setError('')
  }, [username, password])

  async function onSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || 'Login failed')
      }
      router.replace(next)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ minHeight: '100dvh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
      <form onSubmit={onSubmit} style={{ width: '100%', maxWidth: 360, display: 'grid', gap: 12 }}>
        <h1 style={{ margin: 0, fontSize: 24 }}>Sign in</h1>
        {error ? (
          <div style={{ color: '#b00020', fontSize: 14 }}>{error}</div>
        ) : null}
        <label style={{ display: 'grid', gap: 6 }}>
          <span style={{ fontSize: 14 }}>Username</span>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            required
            style={{ padding: '10px 12px', border: '1px solid #ccc', borderRadius: 6 }}
          />
        </label>
        <label style={{ display: 'grid', gap: 6 }}>
          <span style={{ fontSize: 14 }}>Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
            style={{ padding: '10px 12px', border: '1px solid #ccc', borderRadius: 6 }}
          />
        </label>
        <button type="submit" disabled={loading} style={{ padding: '10px 12px', borderRadius: 6, background: '#111827', color: 'white', border: 0 }}>
          {loading ? 'Signing in…' : 'Sign in'}
        </button>
      </form>
    </div>
  )
}