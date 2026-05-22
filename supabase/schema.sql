create extension if not exists "uuid-ossp";

create type public.user_role as enum ('admin', 'founder', 'team_member', 'viewer');
create type public.priority_level as enum ('low', 'medium', 'high', 'critical');
create type public.record_status as enum ('active', 'inactive', 'archived');
create type public.relationship_temperature as enum ('cold', 'warm', 'active', 'strategic', 'dormant', 'closed');
create type public.opportunity_status as enum ('active', 'won', 'lost', 'dormant', 'future_follow_up');
create type public.task_status as enum ('pending', 'in_progress', 'blocked', 'completed', 'canceled');
create type public.message_status as enum ('draft', 'pending_approval', 'approved', 'sent', 'archived');
create type public.content_status as enum ('idea', 'draft', 'in_review', 'scheduled', 'published', 'archived');
create type public.campaign_status as enum ('planned', 'active', 'paused', 'completed', 'archived');
create type public.event_status as enum ('planned', 'active', 'completed', 'canceled', 'archived');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  full_name text,
  role public.user_role not null default 'admin',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.organizations (
  id uuid primary key default uuid_generate_v4(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  type text not null default 'other',
  industry text,
  website text,
  location text,
  priority public.priority_level not null default 'medium',
  status public.record_status not null default 'active',
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.contacts (
  id uuid primary key default uuid_generate_v4(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  organization_id uuid references public.organizations(id) on delete set null,
  first_name text not null,
  last_name text,
  email text,
  phone text,
  linkedin_url text,
  title text,
  category text not null default 'other',
  priority public.priority_level not null default 'medium',
  relationship_temperature public.relationship_temperature not null default 'warm',
  source text,
  notes text,
  last_interaction_at timestamptz,
  next_follow_up_at timestamptz,
  status public.record_status not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.pipelines (
  id uuid primary key default uuid_generate_v4(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  slug text not null,
  description text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (owner_id, slug)
);

create table public.pipeline_stages (
  id uuid primary key default uuid_generate_v4(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  pipeline_id uuid not null references public.pipelines(id) on delete cascade,
  name text not null,
  position integer not null default 0,
  is_closed boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (pipeline_id, name)
);

create table public.opportunities (
  id uuid primary key default uuid_generate_v4(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  organization_id uuid references public.organizations(id) on delete set null,
  contact_id uuid references public.contacts(id) on delete set null,
  pipeline_id uuid not null references public.pipelines(id) on delete restrict,
  stage_id uuid references public.pipeline_stages(id) on delete set null,
  priority public.priority_level not null default 'medium',
  estimated_value numeric(12, 2),
  probability integer check (probability is null or probability between 0 and 100),
  status public.opportunity_status not null default 'active',
  next_action text,
  next_follow_up_at timestamptz,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.campaigns (
  id uuid primary key default uuid_generate_v4(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  type text,
  objective text,
  audience text,
  starts_at date,
  ends_at date,
  status public.campaign_status not null default 'planned',
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.events (
  id uuid primary key default uuid_generate_v4(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  event_at timestamptz,
  location text,
  description text,
  registration_url text,
  status public.event_status not null default 'planned',
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.tasks (
  id uuid primary key default uuid_generate_v4(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  description text,
  status public.task_status not null default 'pending',
  priority public.priority_level not null default 'medium',
  due_at timestamptz,
  task_type text not null default 'administrative',
  contact_id uuid references public.contacts(id) on delete set null,
  organization_id uuid references public.organizations(id) on delete set null,
  opportunity_id uuid references public.opportunities(id) on delete set null,
  campaign_id uuid references public.campaigns(id) on delete set null,
  event_id uuid references public.events(id) on delete set null,
  created_by_ai boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.interactions (
  id uuid primary key default uuid_generate_v4(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  contact_id uuid references public.contacts(id) on delete set null,
  organization_id uuid references public.organizations(id) on delete set null,
  opportunity_id uuid references public.opportunities(id) on delete set null,
  interaction_type text not null,
  channel text not null,
  occurred_at timestamptz not null default now(),
  summary text,
  outcome text,
  next_action text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.content_items (
  id uuid primary key default uuid_generate_v4(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  campaign_id uuid references public.campaigns(id) on delete set null,
  title text not null,
  platform text,
  content_type text,
  draft text,
  status public.content_status not null default 'idea',
  publish_at timestamptz,
  cta text,
  performance_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.messages (
  id uuid primary key default uuid_generate_v4(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  contact_id uuid references public.contacts(id) on delete set null,
  organization_id uuid references public.organizations(id) on delete set null,
  opportunity_id uuid references public.opportunities(id) on delete set null,
  channel text not null,
  subject text,
  body text not null,
  status public.message_status not null default 'draft',
  created_by_ai boolean not null default false,
  approved_by_user boolean not null default false,
  sent_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.documents (
  id uuid primary key default uuid_generate_v4(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  document_type text not null default 'other',
  url text,
  storage_path text,
  contact_id uuid references public.contacts(id) on delete set null,
  organization_id uuid references public.organizations(id) on delete set null,
  opportunity_id uuid references public.opportunities(id) on delete set null,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.ai_suggestions (
  id uuid primary key default uuid_generate_v4(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  suggestion_type text not null,
  prompt text,
  output text,
  status text not null default 'draft',
  related_entity_type text,
  related_entity_id uuid,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.weekly_reviews (
  id uuid primary key default uuid_generate_v4(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  week_start date not null,
  main_progress text,
  blockers text,
  opportunities_created text,
  opportunities_advanced text,
  follow_ups_completed text,
  content_published text,
  decisions_made text,
  identify text,
  reframe text,
  optimize text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (owner_id, week_start)
);

create table public.settings (
  id uuid primary key default uuid_generate_v4(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  key text not null,
  value jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (owner_id, key)
);

create index contacts_owner_follow_up_idx on public.contacts(owner_id, next_follow_up_at);
create index opportunities_owner_stage_idx on public.opportunities(owner_id, pipeline_id, stage_id);
create index opportunities_owner_follow_up_idx on public.opportunities(owner_id, next_follow_up_at);
create index tasks_owner_due_idx on public.tasks(owner_id, due_at, status);
create index interactions_owner_occurred_idx on public.interactions(owner_id, occurred_at desc);
create index content_items_owner_publish_idx on public.content_items(owner_id, publish_at, status);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, role)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', 'G-Structure Admin'),
    'admin'
  );
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

create trigger set_profiles_updated_at before update on public.profiles for each row execute procedure public.set_updated_at();
create trigger set_organizations_updated_at before update on public.organizations for each row execute procedure public.set_updated_at();
create trigger set_contacts_updated_at before update on public.contacts for each row execute procedure public.set_updated_at();
create trigger set_pipelines_updated_at before update on public.pipelines for each row execute procedure public.set_updated_at();
create trigger set_pipeline_stages_updated_at before update on public.pipeline_stages for each row execute procedure public.set_updated_at();
create trigger set_opportunities_updated_at before update on public.opportunities for each row execute procedure public.set_updated_at();
create trigger set_campaigns_updated_at before update on public.campaigns for each row execute procedure public.set_updated_at();
create trigger set_events_updated_at before update on public.events for each row execute procedure public.set_updated_at();
create trigger set_tasks_updated_at before update on public.tasks for each row execute procedure public.set_updated_at();
create trigger set_interactions_updated_at before update on public.interactions for each row execute procedure public.set_updated_at();
create trigger set_content_items_updated_at before update on public.content_items for each row execute procedure public.set_updated_at();
create trigger set_messages_updated_at before update on public.messages for each row execute procedure public.set_updated_at();
create trigger set_documents_updated_at before update on public.documents for each row execute procedure public.set_updated_at();
create trigger set_ai_suggestions_updated_at before update on public.ai_suggestions for each row execute procedure public.set_updated_at();
create trigger set_weekly_reviews_updated_at before update on public.weekly_reviews for each row execute procedure public.set_updated_at();
create trigger set_settings_updated_at before update on public.settings for each row execute procedure public.set_updated_at();
