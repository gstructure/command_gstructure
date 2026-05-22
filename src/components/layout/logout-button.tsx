"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

export function LogoutButton() {
  const router = useRouter();
  const supabase = createSupabaseBrowserClient();

  async function handleLogout() {
    await supabase.auth.signOut();
    router.replace("/login");
    router.refresh();
  }

  return (
    <button
      aria-label="Sign out"
      className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-command-line bg-white text-command-slate transition hover:border-command-navy hover:text-command-navy"
      onClick={handleLogout}
      title="Sign out"
      type="button"
    >
      <LogOut className="h-4 w-4" />
    </button>
  );
}
