-- Supabase College Events schema
-- Run this in Supabase Dashboard -> SQL Editor.
-- Assumes Supabase's built-in auth schema is enabled.

create extension if not exists pgcrypto;

create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),

  -- Public-facing content
  title text not null,
  slug text not null unique,
  summary text,
  description text,
  category text, -- e.g. Academic, Cultural, Sports, Workshop
  event_type text not null default 'in_person'
    check (event_type in ('in_person', 'online', 'hybrid')),

  -- Schedule (store timestamps with time zone)
  starts_at timestamptz not null,
  ends_at timestamptz,
  timezone text not null default 'Asia/Kolkata',
  is_all_day boolean not null default false,

  -- Venue / online details
  venue_name text,
  venue_address text,
  room_or_auditorium text,
  online_event_url text,

  -- Organizer and contact
  organizer_name text,
  organizer_department text,
  contact_name text,
  contact_email text,
  contact_phone text,

  -- Registration
  registration_required boolean not null default false,
  registration_url text,
  registration_deadline timestamptz,
  capacity integer check (capacity is null or capacity >= 0),

  -- Media
  image_url text,
  image_alt_text text,

  -- Publishing workflow
  status text not null default 'draft'
    check (status in ('draft', 'published', 'cancelled')),
  is_featured boolean not null default false,
  published_at timestamptz,

  -- Audit fields
  created_by uuid references auth.users(id) on delete set null default auth.uid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  constraint events_end_after_start
    check (ends_at is null or ends_at >= starts_at),
  constraint events_registration_deadline_valid
    check (registration_deadline is null or registration_required = true)
);

-- Helpful indexes for website listings and admin filtering.
create index if not exists events_status_starts_at_idx
  on public.events (status, starts_at);

create index if not exists events_featured_starts_at_idx
  on public.events (is_featured, starts_at)
  where status = 'published';

create index if not exists events_category_idx
  on public.events (category);

create index if not exists events_created_by_idx
  on public.events (created_by);

-- Keep updated_at current whenever a row changes.
create or replace function public.set_events_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_events_updated_at on public.events;
create trigger set_events_updated_at
before update on public.events
for each row
execute function public.set_events_updated_at();