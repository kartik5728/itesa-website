import { requireRole } from '@/lib/auth/require-role'

export default async function SuperAdminPage() {
  await requireRole([
    'super_admin',
  ])

  return (
    <main>
      <h1>Super Admin</h1>
    </main>
  )
}