-- Run this after creating the first admin user in Supabase Auth.
-- Replace the placeholder with the auth.users.id value for that user.

do $$
declare
  admin_id uuid := '00000000-0000-0000-0000-000000000000';
  sponsor_pipeline_id uuid;
  b2b_pipeline_id uuid;
  investor_pipeline_id uuid;
  workshop_event_id uuid;
begin
  insert into public.pipelines (owner_id, name, slug, description)
  values
    (admin_id, 'Sponsor Pipeline', 'sponsor-pipeline', 'Sponsor acquisition and delivery tracking'),
    (admin_id, 'B2B Client Pipeline', 'b2b-client-pipeline', 'Enterprise and workshop client pipeline'),
    (admin_id, 'Investor Pipeline', 'investor-pipeline', 'Investor relationship and fundraising pipeline')
  on conflict (owner_id, slug) do nothing;

  select id into sponsor_pipeline_id from public.pipelines where owner_id = admin_id and slug = 'sponsor-pipeline';
  select id into b2b_pipeline_id from public.pipelines where owner_id = admin_id and slug = 'b2b-client-pipeline';
  select id into investor_pipeline_id from public.pipelines where owner_id = admin_id and slug = 'investor-pipeline';

  insert into public.pipeline_stages (owner_id, pipeline_id, name, position, is_closed)
  values
    (admin_id, sponsor_pipeline_id, 'Identified', 1, false),
    (admin_id, sponsor_pipeline_id, 'Researched', 2, false),
    (admin_id, sponsor_pipeline_id, 'First Contact Sent', 3, false),
    (admin_id, sponsor_pipeline_id, 'Interested', 4, false),
    (admin_id, sponsor_pipeline_id, 'Meeting Scheduled', 5, false),
    (admin_id, sponsor_pipeline_id, 'Proposal Sent', 6, false),
    (admin_id, sponsor_pipeline_id, 'Negotiation', 7, false),
    (admin_id, sponsor_pipeline_id, 'Confirmed', 8, true),
    (admin_id, sponsor_pipeline_id, 'Declined', 9, true),
    (admin_id, sponsor_pipeline_id, 'Dormant', 10, false),
    (admin_id, b2b_pipeline_id, 'Identified', 1, false),
    (admin_id, b2b_pipeline_id, 'Qualified', 2, false),
    (admin_id, b2b_pipeline_id, 'Invited to Workshop', 3, false),
    (admin_id, b2b_pipeline_id, 'Attended Workshop', 4, false),
    (admin_id, b2b_pipeline_id, 'Discovery Call', 5, false),
    (admin_id, b2b_pipeline_id, 'Proposal Sent', 6, false),
    (admin_id, b2b_pipeline_id, 'Program Sold', 7, true),
    (admin_id, investor_pipeline_id, 'Identified', 1, false),
    (admin_id, investor_pipeline_id, 'Warm Intro Needed', 2, false),
    (admin_id, investor_pipeline_id, 'Introduction Sent', 3, false),
    (admin_id, investor_pipeline_id, 'Deck Shared', 4, false),
    (admin_id, investor_pipeline_id, 'Meeting Scheduled', 5, false),
    (admin_id, investor_pipeline_id, 'Follow-up Sent', 6, false),
    (admin_id, investor_pipeline_id, 'Due Diligence', 7, false),
    (admin_id, investor_pipeline_id, 'Committed', 8, true)
  on conflict (pipeline_id, name) do nothing;

  insert into public.campaigns (owner_id, name, type, objective, audience, status)
  values
    (admin_id, 'ETW Workshop Launch', 'launch', 'Drive qualified attendance for the execution diagnosis workshop', 'Founders and operators', 'active'),
    (admin_id, 'Sponsor Acquisition', 'outreach', 'Secure strategic sponsors for G-Structure events', 'Sponsors and institutional partners', 'planned'),
    (admin_id, 'Educational Authority Content', 'content', 'Build market authority around Identify -> Reframe -> Optimize', 'B2B and founder audience', 'active');

  insert into public.events (owner_id, name, event_at, location, description, status)
  values (
    admin_id,
    'Workshop de Diagnostico de Ejecucion',
    '2026-07-14 09:00:00-05',
    'TBD',
    'Initial execution diagnosis workshop for G-Structure.',
    'planned'
  )
  returning id into workshop_event_id;

  insert into public.tasks (owner_id, title, description, status, priority, due_at, task_type, event_id)
  values
    (admin_id, 'Confirm workshop registration flow', 'Validate the registration URL, attendee capture, and follow-up path.', 'pending', 'high', '2026-06-15 10:00:00-05', 'event', workshop_event_id),
    (admin_id, 'Prepare sponsor outreach shortlist', 'Create the first list of potential sponsors and relationship paths.', 'pending', 'high', '2026-06-10 10:00:00-05', 'sales', workshop_event_id);
end $$;
