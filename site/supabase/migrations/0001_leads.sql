-- Leads captured from the marketing site: signup starts, lead-magnet
-- downloads, and newsletter subscriptions. One table, differentiated by
-- `source`.

create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  name text,
  message text,
  source text not null, -- e.g. 'signup', 'invoice-generator', 'newsletter', 'contact-form'
  utm_source text,
  utm_medium text,
  utm_campaign text,
  referrer text,
  landing_page text,
  created_at timestamptz not null default now()
);

create index if not exists leads_email_idx on leads (email);
create index if not exists leads_source_idx on leads (source);
create index if not exists leads_created_at_idx on leads (created_at desc);

alter table leads enable row level security;

-- Inserts only happen via the service-role key from the server-side route
-- handler, never from the browser, so no public insert/select policy is
-- defined here.
