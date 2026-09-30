alter table public.clubs
enable row level security;

alter table public.club_members
enable row level security;


create policy "Anyone can view clubs"
on public.clubs
for select
to anon, authenticated
using (true);


create policy "Users can view their memberships"
on public.club_members
for select
to authenticated
using (
  user_id = (select auth.uid())
);