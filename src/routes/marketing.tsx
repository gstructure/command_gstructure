import { createFileRoute } from "@tanstack/react-router";
import { ProtectedModule } from "@/components/ui/protected-module";

export const Route = createFileRoute("/marketing")({
  component: () => (
    <ProtectedModule
      description="Campaign and content planning for workshop launch, sponsor acquisition, founder story, and authority content."
      focus={[
        "Campaign list",
        "Content calendar shell",
        "Status by content item",
        "Platform and CTA fields",
        "Performance notes"
      ]}
      title="Marketing Studio"
    />
  )
});
