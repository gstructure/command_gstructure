import { createFileRoute } from "@tanstack/react-router";
import { ProtectedModule } from "@/components/ui/protected-module";

export const Route = createFileRoute("/documents")({
  component: () => (
    <ProtectedModule
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
  )
});
