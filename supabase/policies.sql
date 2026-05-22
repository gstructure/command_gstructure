alter table public.profiles enable row level security;
alter table public.organizations enable row level security;
alter table public.contacts enable row level security;
alter table public.pipelines enable row level security;
alter table public.pipeline_stages enable row level security;
alter table public.opportunities enable row level security;
alter table public.tasks enable row level security;
alter table public.interactions enable row level security;
alter table public.campaigns enable row level security;
alter table public.content_items enable row level security;
alter table public.messages enable row level security;
alter table public.events enable row level security;
alter table public.documents enable row level security;
alter table public.ai_suggestions enable row level security;
alter table public.weekly_reviews enable row level security;
alter table public.settings enable row level security;

create policy "Users can read own profile" on public.profiles
  for select using (auth.uid() = id);

create policy "Users can update own profile" on public.profiles
  for update using (auth.uid() = id) with check (auth.uid() = id);

create policy "Own organizations" on public.organizations
  for all using (auth.uid() = owner_id) with check (auth.uid() = owner_id);

create policy "Own contacts" on public.contacts
  for all using (auth.uid() = owner_id) with check (auth.uid() = owner_id);

create policy "Own pipelines" on public.pipelines
  for all using (auth.uid() = owner_id) with check (auth.uid() = owner_id);

create policy "Own pipeline stages" on public.pipeline_stages
  for all using (auth.uid() = owner_id) with check (auth.uid() = owner_id);

create policy "Own opportunities" on public.opportunities
  for all using (auth.uid() = owner_id) with check (auth.uid() = owner_id);

create policy "Own tasks" on public.tasks
  for all using (auth.uid() = owner_id) with check (auth.uid() = owner_id);

create policy "Own interactions" on public.interactions
  for all using (auth.uid() = owner_id) with check (auth.uid() = owner_id);

create policy "Own campaigns" on public.campaigns
  for all using (auth.uid() = owner_id) with check (auth.uid() = owner_id);

create policy "Own content items" on public.content_items
  for all using (auth.uid() = owner_id) with check (auth.uid() = owner_id);

create policy "Own messages" on public.messages
  for all using (auth.uid() = owner_id) with check (auth.uid() = owner_id);

create policy "Own events" on public.events
  for all using (auth.uid() = owner_id) with check (auth.uid() = owner_id);

create policy "Own documents" on public.documents
  for all using (auth.uid() = owner_id) with check (auth.uid() = owner_id);

create policy "Own AI suggestions" on public.ai_suggestions
  for all using (auth.uid() = owner_id) with check (auth.uid() = owner_id);

create policy "Own weekly reviews" on public.weekly_reviews
  for all using (auth.uid() = owner_id) with check (auth.uid() = owner_id);

create policy "Own settings" on public.settings
  for all using (auth.uid() = owner_id) with check (auth.uid() = owner_id);
