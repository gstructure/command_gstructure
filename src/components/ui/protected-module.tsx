import { AppShell } from "@/components/layout/app-shell";
import { ModulePlaceholder } from "@/components/ui/module-placeholder";

type ProtectedModuleProps = {
  title: string;
  description: string;
  focus: string[];
};

export function ProtectedModule({ title, description, focus }: ProtectedModuleProps) {
  return (
    <AppShell>
      <ModulePlaceholder description={description} focus={focus} title={title} />
    </AppShell>
  );
}
