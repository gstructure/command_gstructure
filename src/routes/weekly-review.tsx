import { createFileRoute } from "@tanstack/react-router";
import { ProtectedModule } from "@/components/ui/protected-module";

export const Route = createFileRoute("/weekly-review")({
  component: () => (
    <ProtectedModule
      description="Founder review system based on Identify, Reframe, Optimize for closing each week with strategic clarity."
      focus={[
        "Weekly review form",
        "Progress and blockers",
        "Decisions and content published",
        "Identify -> Reframe -> Optimize fields",
        "Historical review archive"
      ]}
      title="Weekly Review"
    />
  )
});
