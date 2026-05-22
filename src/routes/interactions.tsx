import { createFileRoute } from "@tanstack/react-router";
import { ProtectedModule } from "@/components/ui/protected-module";

export const Route = createFileRoute("/interactions")({
  component: () => (
    <ProtectedModule
      description="Timeline of emails, WhatsApp notes, LinkedIn touches, calls, meetings, forms, and outcomes."
      focus={[
        "Register interaction channel",
        "Summarize outcome",
        "Attach to contact, organization, or opportunity",
        "Define next action",
        "Prepare timeline component"
      ]}
      title="Interactions"
    />
  )
});
