-- Circle Group Supabase Schema
-- Run this in the Supabase SQL editor to create all tables

-- ==============================
-- PROGRAMS
-- ==============================
create table if not exists public.programs (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  audience text,
  summary text,
  who_for text,
  steps jsonb default '[]'::jsonb,
  outcomes jsonb default '[]'::jsonb,
  image_url text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ==============================
-- STORIES
-- ==============================
create table if not exists public.stories (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  tag text,
  excerpt text,
  content text,
  image_url text,
  read_time int default 3,
  author_name text,
  published_at timestamptz,
  created_at timestamptz default now()
);

-- ==============================
-- RESEARCH
-- ==============================
create table if not exists public.research (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  theme text,
  summary text,
  content text,
  cover_url text,
  pdf_url text,
  published_at timestamptz,
  created_at timestamptz default now()
);

-- ==============================
-- TEAM MEMBERS
-- ==============================
create table if not exists public.team_members (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text,
  bio text,
  image_url text,
  sort_order int default 0,
  created_at timestamptz default now()
);

-- ==============================
-- TESTIMONIALS
-- ==============================
create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  quote text not null,
  author text not null,
  role text,
  image_url text,
  sort_order int default 0,
  is_active boolean default true,
  created_at timestamptz default now()
);

-- ==============================
-- PARTNERS
-- ==============================
create table if not exists public.partners (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  logo_url text,
  category text, -- school | employer | development | community
  website_url text,
  sort_order int default 0,
  created_at timestamptz default now()
);

-- ==============================
-- CONTACT LEADS (form submissions)
-- ==============================
create table if not exists public.contact_leads (
  id uuid primary key default gen_random_uuid(),
  form_type text not null, -- contact | partner | mentor | apply | newsletter
  name text,
  org text,
  email text not null,
  phone text,
  message text,
  status text default 'new',
  created_at timestamptz default now()
);

-- Row Level Security: allow anonymous inserts for forms
alter table public.contact_leads enable row level security;
create policy "Allow anonymous contact submissions" on public.contact_leads
  for insert to anon with check (true);

create policy "Allow authenticated reads" on public.contact_leads
  for select to authenticated using (true);

-- Allow public reads for content tables
alter table public.programs enable row level security;
create policy "Public read programs" on public.programs for select using (true);

alter table public.stories enable row level security;
create policy "Public read stories" on public.stories for select using (true);

alter table public.research enable row level security;
create policy "Public read research" on public.research for select using (true);

alter table public.team_members enable row level security;
create policy "Public read team" on public.team_members for select using (true);

alter table public.testimonials enable row level security;
create policy "Public read testimonials" on public.testimonials for select using (true);

alter table public.partners enable row level security;
create policy "Public read partners" on public.partners for select using (true);