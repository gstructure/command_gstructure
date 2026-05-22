import { createFileRoute } from "@tanstack/react-router";
import { ProtectedModule } from "@/components/ui/protected-module";

export const Route = createFileRoute("/outreach")({
  component: () => (
    <ProtectedModule
      description="Message templates and manual drafts for email, WhatsApp, LinkedIn, Instagram DM, newsletter, and future Gmail drafts."
      focus={[
        "Create message drafts",
        "Approval status",
        "Copy text for manual sending",
        "Associate drafts to records",
        "Prepare Gmail draft integration"
      ]}
      title="Outreach Center"
    />
  )
});
