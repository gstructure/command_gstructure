import {
  AlertTriangle,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Handshake,
  Megaphone
} from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/layout/page-header";
import { StatusCard } from "@/components/ui/status-card";

export const Route = createFileRoute("/dashboard")({
  component: DashboardRoute
});

const nextActions = [
  "Review overdue follow-ups before new outreach.",
  "Move sponsor prospects with no next action into a clear stage.",
  "Confirm July 14 workshop registration path and post-event follow-up owner."
];

function DashboardRoute() {
  return (
    <AppShell>
      <PageHeader
        description="Daily operating view for follow-ups, priorities, active opportunities, campaign movement, and founder-level next actions."
        eyebrow="Today"
        title="Command Dashboard"
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatusCard
          detail="Needs review before outreach work expands."
          icon={AlertTriangle}
          title="Overdue tasks"
          value="3"
        />
        <StatusCard
          detail="Relationships that should not go cold."
          icon={CheckCircle2}
          title="Follow-ups due"
          value="5"
        />
        <StatusCard
          detail="Sponsor, B2B, investor, and partner movement."
          icon={Handshake}
          title="Active opportunities"
          value="12"
        />
        <StatusCard
          detail="Campaigns with pending content or review."
          icon={Megaphone}
          title="Campaigns active"
          value="3"
        />
      </section>

      <section className="mt-6 grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-lg border border-command-line bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2">
            <ClipboardList className="h-5 w-5 text-command-navy" />
            <h2 className="text-base font-semibold text-command-ink">Priority queue</h2>
          </div>
          <div className="mt-4 divide-y divide-command-line">
            {[
              ["High", "Prepare sponsor outreach shortlist", "Due this week"],
              ["High", "Confirm workshop registration flow", "Before launch push"],
              ["Medium", "Draft founder authority post", "LinkedIn"]
            ].map(([priority, title, meta]) => (
              <div className="grid gap-1 py-4 first:pt-0 last:pb-0" key={title}>
                <div className="flex items-center justify-between gap-4">
                  <p className="font-medium text-command-ink">{title}</p>
                  <span className="rounded-md bg-command-navy/8 px-2 py-1 text-xs font-semibold text-command-navy">
                    {priority}
                  </span>
                </div>
                <p className="text-sm text-command-slate">{meta}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-lg border border-command-line bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-5 w-5 text-command-navy" />
            <h2 className="text-base font-semibold text-command-ink">Next best actions</h2>
          </div>
          <div className="mt-4 grid gap-3">
            {nextActions.map((action, index) => (
              <div className="flex gap-3 rounded-md bg-command-ivory p-3" key={action}>
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-command-navy text-xs font-semibold text-white">
                  {index + 1}
                </span>
                <p className="text-sm leading-6 text-command-slate">{action}</p>
              </div>
            ))}
          </div>
        </article>
      </section>
    </AppShell>
  );
}
