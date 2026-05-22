import { ModulePlaceholder } from "@/components/ui/module-placeholder";

export default function SettingsPage() {
  return (
    <ModulePlaceholder
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
  );
}
