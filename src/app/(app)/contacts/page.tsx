import { ModulePlaceholder } from "@/components/ui/module-placeholder";

export default function ContactsPage() {
  return (
    <ModulePlaceholder
      description="Internal CRM for people, relationship temperature, source, context, and next follow-up."
      focus={[
        "Create and edit contacts",
        "Track category and priority",
        "Connect contacts to organizations",
        "Show last interaction and next follow-up",
        "Prepare detail timeline"
      ]}
      title="Contacts"
    />
  );
}
