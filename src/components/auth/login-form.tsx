import { useState } from "react";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { Loader2, LogIn } from "lucide-react";
import { createSupabaseBrowserClient, isSupabaseConfigured } from "@/lib/supabase/client";

export function LoginForm() {
  const navigate = useNavigate();
  const search = useSearch({ from: "/login" }) as { next?: string };
  const supabase = createSupabaseBrowserClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    if (!isSupabaseConfigured()) {
      setError("Supabase environment variables are not configured yet.");
      return;
    }

    setIsSubmitting(true);

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    setIsSubmitting(false);

    if (signInError) {
      setError(signInError.message);
      return;
    }

    await navigate({ to: search.next || "/dashboard" });
  }

  return (
    <form className="grid gap-5" onSubmit={handleSubmit}>
      <label className="grid gap-2 text-sm font-medium text-command-ink">
        Email
        <input
          autoComplete="email"
          className="h-11 rounded-md border border-command-line bg-white px-3 text-sm outline-none transition focus:border-command-navy focus:ring-4 focus:ring-command-navy/10"
          onChange={(event) => setEmail(event.target.value)}
          placeholder="admin@g-structure.co"
          required
          type="email"
          value={email}
        />
      </label>

      <label className="grid gap-2 text-sm font-medium text-command-ink">
        Password
        <input
          autoComplete="current-password"
          className="h-11 rounded-md border border-command-line bg-white px-3 text-sm outline-none transition focus:border-command-navy focus:ring-4 focus:ring-command-navy/10"
          onChange={(event) => setPassword(event.target.value)}
          required
          type="password"
          value={password}
        />
      </label>

      {error ? (
        <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </p>
      ) : null}

      <button
        className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-command-navy px-4 text-sm font-semibold text-white transition hover:bg-command-navy/92 disabled:cursor-not-allowed disabled:opacity-65"
        disabled={isSubmitting}
        type="submit"
      >
        {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <LogIn className="h-4 w-4" />}
        Sign in
      </button>
    </form>
  );
}
