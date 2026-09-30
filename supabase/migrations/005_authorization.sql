create schema if not exists private;

create or replace function private.is_club_admin(
  p_club_id uuid
)
returns boolean
language sql
security definer
set search_path = ''
stable
as $$
  select exists (
    select 1
    from public.club_members
    where club_id = p_club_id
      and user_id = (select auth.uid())
      and role = 'admin'
  );
$$;

revoke execute
on function private.is_club_admin(uuid)
from public;

grant usage on schema private
to authenticated;

grant execute
on function private.is_club_admin(uuid)
to authenticated;