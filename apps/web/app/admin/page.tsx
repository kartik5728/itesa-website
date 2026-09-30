import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export default async function AdminPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .single()

  if (
    profile?.role !== 'super_admin' &&
    profile?.role !== 'college_admin'
  ) {
    redirect('/403')
  }

  return (
    <main>
      <h1>Admin Dashboard</h1>
    </main>
  )
}