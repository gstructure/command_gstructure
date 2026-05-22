# Phase 0 Architecture

## Product Direction

G-Structure Command Center is a private founder operating system, not a public client app and not a generic CRM template. The product should help answer the daily execution question:

```txt
What needs attention today?
```

The core system is:

```txt
Contacts + Organizations + Opportunities + Tasks + Dashboard
```

All other modules orbit that execution core.

## Technical Decisions

### Application

Next.js App Router with TypeScript is the default application platform. It gives the project a clean path to protected server-rendered pages, API routes when needed, Vercel deployment, and a component structure that can scale to a small internal team.

### Authentication

Supabase Auth with email/password is the primary authentication system. The app uses Supabase session cookies through Next middleware to protect internal routes.

### Database

Supabase PostgreSQL is the system of record. The schema uses relational tables, foreign keys, enums, timestamps, and owner-based row isolation.

### Authorization

Every private table has `owner_id` and Row Level Security policies. The v1 model is single-admin friendly, but the `profiles.role` enum prepares the app for future roles.

### Hosting

Vercel is the recommended hosting platform because it aligns naturally with Next.js and supports custom domains with simple DNS configuration.

## Route Map

Public:

```txt
/login
```

Private:

```txt
/dashboard
/contacts
/organizations
/opportunities
/tasks
/interactions
/marketing
/outreach
/events
/documents
/ai-manager
/weekly-review
/settings
```

## Source Layout

```txt
src/
  app/
  components/
    layout/
    ui/
    dashboard/
    crm/
    kanban/
    forms/
  lib/
    auth/
    constants/
    data/
    supabase/
    utils/
  types/
supabase/
  schema.sql
  policies.sql
  seed.sql
docs/
  architecture.md
```

## Data Ownership

In v1, each user owns their records through `owner_id`. This is intentionally simple for a private founder tool. Future team access can be added by introducing workspace membership tables without changing the high-level domain model.

Recommended future tables:

```txt
workspaces
workspace_members
role_permissions
audit_logs
automation_rules
```

## Dashboard Rules

The first dashboard should be rule-based, not AI-dependent.

Priority order:

1. Overdue tasks
2. Follow-ups due today
3. Opportunities without next action
4. Opportunities with stale follow-up dates
5. Upcoming meetings/events
6. Pending content and campaigns

The AI Manager can later summarize or enrich the same data.

## UI Direction

The interface should feel like a quiet executive command center:

- Fixed sidebar
- Compact top bar
- Dense tables
- Useful empty states
- Clear forms
- Sobriety over decoration
- No public landing page
- No motivational/wellness visual language

Core colors:

```txt
Primary: #05325a
Secondary: #697783
Background: #f8f8f4
Surface: #ffffff
Text: #16212b
Border: #d9dedc
```

## Phase 1 Implementation Order

1. Install dependencies and verify Next.js boots.
2. Build `/login`.
3. Build authenticated app layout.
4. Add `/dashboard` shell.
5. Add private route pages.
6. Wire logout.
7. Add basic data services for dashboard, contacts, organizations, opportunities, and tasks.
8. Implement CRUD for the core modules.
