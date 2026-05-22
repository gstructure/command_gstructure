import { ModulePlaceholder } from "@/components/ui/module-placeholder";

export default function AiManagerPage() {
  return (
    <ModulePlaceholder
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
  );
}
