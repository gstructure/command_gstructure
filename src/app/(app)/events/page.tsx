import { ModulePlaceholder } from "@/components/ui/module-placeholder";

export default function EventsPage() {
  return (
    <ModulePlaceholder
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
  );
}
