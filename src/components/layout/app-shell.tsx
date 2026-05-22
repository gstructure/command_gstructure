import { redirect } from "next/navigation";
import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function AppShell({ children }: { children: React.ReactNode }) {
  const supabase = createSupabaseServerClient();
  const {
    data: { session }
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, role")
    .eq("id", session.user.id)
    .maybeSingle();

  return (
    <div className="min-h-screen bg-command-ivory text-command-ink">
      <Sidebar />
      <div className="min-h-screen lg:pl-72">
        <Topbar
          email={session.user.email || "admin@g-structure.co"}
          name={profile?.full_name || "G-Structure Admin"}
          role={profile?.role || "admin"}
        />
        <main className="px-5 py-6 md:px-8">{children}</main>
      </div>
    </div>
  );
}
