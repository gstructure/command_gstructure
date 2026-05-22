import { ModulePlaceholder } from "@/components/ui/module-placeholder";

export default function TasksPage() {
  return (
    <ModulePlaceholder
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
  );
}
