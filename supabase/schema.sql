create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id),
  email text not null,
  pack_slug text not null,
  pack_name text not null,
  amount_total integer,
  currency text default 'eur',
  stripe_checkout_session_id text unique,
  stripe_customer_id text,
  stripe_subscription_id text,
  status text default 'paid',
  created_at timestamptz default now()
);

alter table public.orders enable row level security;

create policy "Users can read own orders" on public.orders
  for select using (auth.uid() = user_id or email = auth.email());

create policy "Service role can manage orders" on public.orders
  for all using (auth.role() = 'service_role');
