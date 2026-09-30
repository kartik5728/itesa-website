create type public.club_role as enum (
  'member',
  'admin'
);

create table public.clubs (
  id uuid primary key
    default gen_random_uuid(),

  name text not null,

  slug text unique not null,

  description text,

  created_by uuid
    references public.profiles(id),

  created_at timestamptz
    not null
    default now()
);

create table public.club_members (
  club_id uuid not null
    references public.clubs(id)
    on delete cascade,

  user_id uuid not null
    references public.profiles(id)
    on delete cascade,

  role public.club_role
    not null
    default 'member',

  created_at timestamptz
    not null
    default now(),

  primary key (club_id, user_id)
);