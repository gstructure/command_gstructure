import { ModulePlaceholder } from "@/components/ui/module-placeholder";

export default function DocumentsPage() {
  return (
    <ModulePlaceholder
      description="Registry for pitch decks, sponsor decks, proposals, contracts, NDAs, manuals, flyers, logos, and assets."
      focus={[
        "Document registry",
        "External URL or storage path",
        "Document type",
        "Related contact, organization, or opportunity",
        "Supabase Storage readiness"
      ]}
      title="Documents"
    />
  );
}
