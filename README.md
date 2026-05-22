# G-Structure Command Center

Private internal operating system for G-Structure. The app is designed for founder-level execution across CRM, opportunities, tasks, campaigns, events, outreach, documents, AI-assisted strategy, and weekly reviews.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase Auth
- Supabase PostgreSQL
- Supabase Row Level Security
- Vercel hosting

## Phase 0 Status

This repository contains the technical foundation for the MVP:

- Next.js project scaffold
- G-Structure visual tokens
- Supabase client/server helpers
- Route protection middleware
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
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_APP_URL=http://localhost:3000
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

All internal routes are private by default. The only public route is:

```txt
/login
```

The middleware redirects unauthenticated users to `/login` and redirects authenticated users away from `/login` to `/dashboard`.

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

Recommended host: Vercel.

1. Push the repo to GitHub.
2. Import the project in Vercel.
3. Add the same environment variables from `.env.local`.
4. Deploy.
5. Add the custom domain:

```txt
command.g-structure.co
```

## DNS

In the DNS provider for `g-structure.co`, create:

```txt
Type: CNAME
Name: command
Value: cname.vercel-dns.com
```

If Vercel gives a different value for the domain, use the exact value shown in the Vercel dashboard.

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
