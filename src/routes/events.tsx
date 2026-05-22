import { createFileRoute } from "@tanstack/react-router";
import { ProtectedModule } from "@/components/ui/protected-module";

export const Route = createFileRoute("/events")({
  component: () => (
    <ProtectedModule
      description="Event operations for the July 14 workshop and future G-Structure activations."
      focus={[
        "Event registry",
        "Sponsors and allies",
        "Attendees and follow-ups",
        "Related tasks and campaigns",
        "Post-event follow-up path"
      ]}
      title="Events"
    />
  )
});
