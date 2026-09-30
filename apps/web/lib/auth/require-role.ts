import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

type AppRole =
  | 'student'
  | 'college_admin'
  | 'super_admin'

export async function requireRole(
  allowedRoles: AppRole[]
) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/login')
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .single()

  if (
    !profile ||
    !allowedRoles.includes(profile.role)
  ) {
    redirect('/403')
  }

  return {
    supabase,
    user,
    profile,
  }
}