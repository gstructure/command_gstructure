import { createFileRoute } from "@tanstack/react-router";
import { ProtectedModule } from "@/components/ui/protected-module";

export const Route = createFileRoute("/organizations")({
  component: () => (
    <ProtectedModule
      description="Database for companies, institutions, sponsors, funds, media, partners, and providers."
      focus={[
        "Create and edit organizations",
        "Track type, industry, location, and priority",
        "Associate contacts",
        "Associate opportunities",
        "Prepare organization detail view"
      ]}
      title="Organizations"
    />
  )
});
