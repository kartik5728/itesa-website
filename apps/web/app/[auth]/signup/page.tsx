'use client'

import { FormEvent, SubmitEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'

export default function SignupPage() {
  const router = useRouter()

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function handleSignup(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()

    setLoading(true)
    setError(null)
    setMessage(null)

    const supabase = createClient()

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },

        emailRedirectTo:
          `${window.location.origin}/auth/callback`,
      },
    })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    if (data.session) {
      router.push('/dashboard')
      router.refresh()
      return
    }

    setMessage(
      'Check your email to confirm your account.'
    )

    setLoading(false)
  }

  return (
    <main>
      <h1>Create account</h1>

      <form onSubmit={handleSignup}>
        <div>
          <label htmlFor="fullName">
            Full name
          </label>

          <input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(event) =>
              setFullName(event.target.value)
            }
            required
          />
        </div>

        <div>
          <label htmlFor="email">
            Email
          </label>

          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            required
          />
        </div>

        <div>
          <label htmlFor="password">
            Password
          </label>

          <input
            id="password"
            type="password"
            minLength={8}
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            required
          />
        </div>

        {error && (
          <p role="alert">
            {error}
          </p>
        )}

        {message && (
          <p>
            {message}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
        >
          {loading ? 'Creating account...' : 'Sign up'}
        </button>
      </form>

      <Link href="/auth/login">
        Already have an account?
      </Link>
    </main>
  )
}