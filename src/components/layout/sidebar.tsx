"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { privateNavigation } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils/cn";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 border-r border-command-line bg-command-navy text-white lg:block">
      <div className="flex h-full flex-col">
        <div className="border-b border-white/10 px-6 py-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
            G-Structure
          </p>
          <h1 className="mt-3 text-xl font-semibold">Command Center</h1>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
          {privateNavigation.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                className={cn(
                  "flex h-10 items-center gap-3 rounded-md px-3 text-sm font-medium text-white/68 transition hover:bg-white/8 hover:text-white",
                  isActive && "bg-white/12 text-white"
                )}
                href={item.href}
                key={item.href}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-white/10 px-6 py-5 text-xs leading-5 text-white/55">
          Private founder operating system.
        </div>
      </div>
    </aside>
  );
}
