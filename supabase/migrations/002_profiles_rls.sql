alter table public.profiles
enable row level security;


create policy "Users can view own profile"
on public.profiles
for select
to authenticated
using (
  id = (select auth.uid())
);


create policy "Users can update own profile"
on public.profiles
for update
to authenticated
using (
  id = (select auth.uid())
)
with check (
  id = (select auth.uid())
);