# G-Structure Command Center

Private internal operating system for G-Structure. The app is designed for founder-level execution across CRM, opportunities, tasks, campaigns, events, outreach, documents, AI-assisted strategy, and weekly reviews.

## Stack

- TanStack Start
- TanStack Router
- React 19
- Vite
- TypeScript
- Tailwind CSS
- Supabase Auth
- Supabase PostgreSQL
- Supabase Row Level Security
- Lovable / Cloudflare Worker runtime target

## Phase 0 Status

This repository contains the technical foundation for the MVP:

- TanStack Start project scaffold
- G-Structure visual tokens
- Supabase browser client
- Client-side route/session guard
- Domain constants and base types
- PostgreSQL schema
- Supabase RLS policies
- Initial seed script
- Deployment and DNS instructions

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Create environment variables:

```bash
cp .env.example .env.local
```

3. Fill in:

```bash
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
VITE_APP_URL=http://localhost:3000
```

4. Run development server:

```bash
npm run dev
```

5. Open:

```txt
http://localhost:3000
```

## Supabase Setup

1. Create a Supabase project.
2. Open the Supabase SQL editor.
3. Run `supabase/schema.sql`.
4. Run `supabase/policies.sql`.
5. Create the first admin user in Supabase Auth with email/password.
6. Copy that user's `auth.users.id`.
7. Replace the placeholder in `supabase/seed.sql`:

```sql
admin_id uuid := '00000000-0000-0000-0000-000000000000';
```

8. Run `supabase/seed.sql`.

Do not commit real credentials or production secrets.

## Authentication Model

All internal routes are private by default at the app layer and protected at the database layer by Supabase RLS. The only public route is:

```txt
/login
```

The TanStack app shell checks Supabase session state and redirects unauthenticated users to `/login`.

Roles are prepared in `profiles.role`:

- `admin`
- `founder`
- `team_member`
- `viewer`

The first version can operate with a single `admin` user.

## MVP Priority

Functional first:

- Authentication
- Private app shell
- Dashboard
- Contacts
- Organizations
- Opportunities
- Tasks

Structured but lighter in v1:

- Interactions
- Marketing Studio
- Outreach Center
- Events
- Documents
- AI Manager
- Weekly Review
- Settings

## Deployment

Recommended host for this branch: Lovable.

1. Import or sync this branch into a Lovable TanStack Start project.
2. Add the same environment variables from `.env.local`.
3. Publish from Lovable.
4. Add the custom domain:

```txt
command.g-structure.co
```

## DNS

In Cloudflare, `command.g-structure.co` should point to the DNS target Lovable provides for the published project. The earlier Vercel-oriented record was:

```txt
Type: CNAME
Name: command
Value: cname.vercel-dns.com
```

When Lovable gives its own DNS target, replace `cname.vercel-dns.com` with the exact Lovable value.

After DNS propagates, verify:

```txt
https://command.g-structure.co
```

## Security Notes

- Keep Row Level Security enabled on every private table.
- Never expose the Supabase service role key in browser code.
- Do not hardcode admin credentials in source.
- Keep LinkedIn and WhatsApp as manual copy/register workflows in v1.
- Gmail integration should be added later as a draft-only workflow.
