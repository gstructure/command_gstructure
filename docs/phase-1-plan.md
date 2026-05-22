# Phase 1 Plan

## Objective

Turn the Phase 0 architecture into a working private app shell with real authentication and the first operational dashboard.

## Scope

Phase 1 should deliver:

- Login page
- Logout action
- Protected internal routes
- Sidebar and top bar
- Dashboard route
- Placeholder route shells for all private modules
- Supabase session wiring

## Out of Scope

- Full CRUD
- Gmail integration
- LinkedIn automation
- WhatsApp automation
- Payments
- Public website
- Real AI provider integration

## Acceptance Criteria

- Visiting `/dashboard` while logged out redirects to `/login`.
- Visiting `/login` while logged in redirects to `/dashboard`.
- User can sign in with Supabase email/password.
- User can sign out from the internal layout.
- All private routes share a consistent premium command-center layout.
- The app can run locally with `npm run dev`.
