import { createFileRoute } from "@tanstack/react-router";
import { ProtectedModule } from "@/components/ui/protected-module";

export const Route = createFileRoute("/settings")({
  component: () => (
    <ProtectedModule
      description="Workspace settings for profile, roles, future team access, app configuration, and integration readiness."
      focus={[
        "Profile display",
        "Role preparation",
        "Workspace preferences",
        "Integration placeholders",
        "Security notes"
      ]}
      title="Settings"
    />
  )
});
