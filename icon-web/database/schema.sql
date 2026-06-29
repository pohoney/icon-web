create table if not exists public.icons (
  id text primary key,
  title text not null,
  title_zh text,
  description text,
  description_zh text,
  category text not null default 'tennis',
  tags text[] not null default '{}',
  tags_zh text[] not null default '{}',
  image_url text,
  thumb_url text,
  status text not null default 'active' check (status in ('active', 'hidden')),
  sort integer not null default 9999,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists icons_status_sort_idx on public.icons (status, sort);
create index if not exists icons_category_idx on public.icons (category);

alter table public.icons enable row level security;

drop policy if exists "Public can read active icons" on public.icons;
create policy "Public can read active icons"
on public.icons for select
using (status = 'active');

drop policy if exists "Authenticated users can manage icons" on public.icons;
create policy "Authenticated users can manage icons"
on public.icons for all
to authenticated
using (true)
with check (true);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists icons_set_updated_at on public.icons;
create trigger icons_set_updated_at
before update on public.icons
for each row execute function public.set_updated_at();

insert into public.icons (
  id, title, title_zh, description, description_zh, category, tags, tags_zh, image_url, thumb_url, sort
) values
  ('tennis-ball', 'Tennis Ball', '网球', 'A clean 3D tennis ball icon.', '一个精致的 3D 网球图标。', 'tennis', array['tennis','equipment'], array['网球','器材'], '/icons/tennis-ball.png', '/icons/tennis-ball.png', 10),
  ('racket', 'Racket', '网球拍', 'A polished tennis racket icon.', '一个精致的网球拍图标。', 'tennis', array['tennis','racket'], array['网球','球拍'], '/icons/racket.png', '/icons/racket.png', 20)
on conflict (id) do nothing;
