import { ModulePlaceholder } from "@/components/ui/module-placeholder";

export default function MarketingPage() {
  return (
    <ModulePlaceholder
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
  );
}
