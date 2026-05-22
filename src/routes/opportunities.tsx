import { createFileRoute } from "@tanstack/react-router";
import { ProtectedModule } from "@/components/ui/protected-module";

export const Route = createFileRoute("/opportunities")({
  component: () => (
    <ProtectedModule
      description="Pipeline workspace for sponsor, B2B, investor, partner, talent, media, and event-attendee opportunities."
      focus={[
        "Kanban by pipeline stage",
        "Opportunity value and probability",
        "Next action and next follow-up",
        "Associated organization and contact",
        "At-risk detection rules"
      ]}
      title="Opportunities"
    />
  )
});
