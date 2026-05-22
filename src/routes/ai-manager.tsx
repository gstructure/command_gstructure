import { createFileRoute } from "@tanstack/react-router";
import { ProtectedModule } from "@/components/ui/protected-module";

export const Route = createFileRoute("/ai-manager")({
  component: () => (
    <ProtectedModule
      description="Strategic assistant workspace prepared for next-action suggestions, summaries, follow-up drafts, and weekly reports."
      focus={[
        "Prompt library",
        "Suggestion history",
        "Manual approval before action",
        "No automated sending",
        "Future provider integration"
      ]}
      title="AI Manager"
    />
  )
});
