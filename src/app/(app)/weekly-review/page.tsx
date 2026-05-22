import { ModulePlaceholder } from "@/components/ui/module-placeholder";

export default function WeeklyReviewPage() {
  return (
    <ModulePlaceholder
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
  );
}
