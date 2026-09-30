create type public.app_role as enum (
  'student',
  'college_admin',
  'super_admin'
);

create table public.profiles (
  id uuid primary key
    references auth.users(id)
    on delete cascade,

  full_name text,

  email text,

  role public.app_role
    not null
    default 'student',

  created_at timestamptz
    not null
    default now(),

  updated_at timestamptz
    not null
    default now()
);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles (
    id,
    full_name,
    email
  )
  values (
    new.id,
    new.raw_user_meta_data ->> 'full_name',
    new.email
  );

  return new;
end;
$$;

create trigger on_auth_user_created
after insert on auth.users
for each row
execute procedure public.handle_new_user();