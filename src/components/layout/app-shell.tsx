import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import { createSupabaseBrowserClient, isSupabaseConfigured } from "@/lib/supabase/client";

type Profile = {
  full_name: string | null;
  role: string | null;
};

export function AppShell({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);
  const [email, setEmail] = useState("admin@g-structure.co");
  const [profile, setProfile] = useState<Profile>({ full_name: "G-Structure Admin", role: "admin" });
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function checkSession() {
      if (!isSupabaseConfigured()) {
        await navigate({ to: "/login", search: { next: window.location.pathname } });
        return;
      }

      const {
        data: { session }
      } = await supabase.auth.getSession();

      if (!session) {
        await navigate({ to: "/login", search: { next: window.location.pathname } });
        return;
      }

      setEmail(session.user.email || "admin@g-structure.co");

      const { data } = await supabase
        .from("profiles")
        .select("full_name, role")
        .eq("id", session.user.id)
        .maybeSingle();

      if (isMounted && data) {
        setProfile(data);
      }

      if (isMounted) {
        setIsChecking(false);
      }
    }

    checkSession();

    return () => {
      isMounted = false;
    };
  }, [navigate, supabase]);

  if (isChecking) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-command-ivory text-sm font-medium text-command-slate">
        Checking secure session...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-command-ivory text-command-ink">
      <Sidebar />
      <div className="min-h-screen lg:pl-72">
        <Topbar
          email={email}
          name={profile?.full_name || "G-Structure Admin"}
          role={profile?.role || "admin"}
        />
        <main className="px-5 py-6 md:px-8">{children}</main>
      </div>
    </div>
  );
}
