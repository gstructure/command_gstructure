type PageHeaderProps = {
  title: string;
  description: string;
  eyebrow?: string;
};

export function PageHeader({ title, description, eyebrow }: PageHeaderProps) {
  return (
    <div className="mb-6 flex flex-col justify-between gap-4 border-b border-command-line pb-5 md:flex-row md:items-end">
      <div>
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-command-slate">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-2 text-2xl font-semibold text-command-ink">{title}</h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-command-slate">{description}</p>
      </div>
    </div>
  );
}
