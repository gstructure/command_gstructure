import { ModulePlaceholder } from "@/components/ui/module-placeholder";

export default function OrganizationsPage() {
  return (
    <ModulePlaceholder
      description="Database for companies, institutions, sponsors, funds, media, partners, and providers."
      focus={[
        "Create and edit organizations",
        "Track type, industry, location, and priority",
        "Associate contacts",
        "Associate opportunities",
        "Prepare organization detail view"
      ]}
      title="Organizations"
    />
  );
}
