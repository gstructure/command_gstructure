import type { LucideIcon } from "lucide-react";

type StatusCardProps = {
  title: string;
  value: string;
  detail: string;
  icon: LucideIcon;
};

export function StatusCard({ title, value, detail, icon: Icon }: StatusCardProps) {
  return (
    <article className="rounded-lg border border-command-line bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-command-slate">{title}</p>
          <strong className="mt-3 block text-3xl font-semibold text-command-ink">{value}</strong>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-command-navy/8 text-command-navy">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <p className="mt-4 text-sm text-command-slate">{detail}</p>
    </article>
  );
}
