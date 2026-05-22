import { LogoutButton } from "@/components/layout/logout-button";

type TopbarProps = {
  email: string;
  name: string;
  role: string;
};

export function Topbar({ email, name, role }: TopbarProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-command-line bg-command-ivory/92 px-5 py-4 backdrop-blur md:px-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-command-slate">
            Internal workspace
          </p>
          <h2 className="mt-1 text-lg font-semibold text-command-ink">{name}</h2>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden text-right sm:block">
            <p className="text-sm font-medium text-command-ink">{email}</p>
            <p className="text-xs capitalize text-command-slate">{role.replace("_", " ")}</p>
          </div>
          <LogoutButton />
        </div>
      </div>
    </header>
  );
}
