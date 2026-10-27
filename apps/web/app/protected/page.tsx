import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'


export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <main>
      <h1>Protected page</h1>

      <p>
        Welcome, {user.email}
      </p>
    </main>
  )
}