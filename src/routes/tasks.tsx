import { createFileRoute } from "@tanstack/react-router";
import { ProtectedModule } from "@/components/ui/protected-module";

export const Route = createFileRoute("/tasks")({
  component: () => (
    <ProtectedModule
      description="Execution queue connected to contacts, organizations, opportunities, campaigns, and events."
      focus={[
        "Create and edit tasks",
        "Status, priority, due date, and type",
        "Filter overdue and upcoming tasks",
        "Relate tasks to CRM records",
        "Prepare AI-created task flag"
      ]}
      title="Tasks"
    />
  )
});
