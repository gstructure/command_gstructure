import { PageHeader } from "@/components/layout/page-header";

type ModulePlaceholderProps = {
  title: string;
  description: string;
  focus: string[];
};

export function ModulePlaceholder({ title, description, focus }: ModulePlaceholderProps) {
  return (
    <>
      <PageHeader description={description} eyebrow="Phase 1 shell" title={title} />
      <section className="rounded-lg border border-command-line bg-white p-5 shadow-sm">
        <h2 className="text-base font-semibold text-command-ink">Initial scope</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {focus.map((item) => (
            <div
              className="rounded-md border border-command-line bg-command-ivory px-4 py-3 text-sm text-command-slate"
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
