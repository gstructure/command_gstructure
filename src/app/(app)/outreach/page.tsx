import { ModulePlaceholder } from "@/components/ui/module-placeholder";

export default function OutreachPage() {
  return (
    <ModulePlaceholder
      description="Message templates and manual drafts for email, WhatsApp, LinkedIn, Instagram DM, newsletter, and future Gmail drafts."
      focus={[
        "Create message drafts",
        "Approval status",
        "Copy text for manual sending",
        "Associate drafts to records",
        "Prepare Gmail draft integration"
      ]}
      title="Outreach Center"
    />
  );
}
