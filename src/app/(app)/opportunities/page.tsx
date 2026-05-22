import { ModulePlaceholder } from "@/components/ui/module-placeholder";

export default function OpportunitiesPage() {
  return (
    <ModulePlaceholder
      description="Pipeline workspace for sponsor, B2B, investor, partner, talent, media, and event-attendee opportunities."
      focus={[
        "Kanban by pipeline stage",
        "Opportunity value and probability",
        "Next action and next follow-up",
        "Associated organization and contact",
        "At-risk detection rules"
      ]}
      title="Opportunities"
    />
  );
}
