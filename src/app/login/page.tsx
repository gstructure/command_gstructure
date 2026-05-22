import { Suspense } from "react";
import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-command-ivory px-6 py-10">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-lg border border-command-line bg-command-surface shadow-panel md:grid-cols-[1.05fr_0.95fr]">
        <section className="bg-command-navy px-8 py-10 text-white md:px-10">
          <div className="flex h-full min-h-[420px] flex-col justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                Private Workspace
              </p>
              <h1 className="mt-8 max-w-sm text-4xl font-semibold leading-tight">
                G-Structure Command Center
              </h1>
              <p className="mt-5 max-w-md text-sm leading-6 text-white/72">
                Internal execution system for relationships, opportunities,
                priorities, campaigns, and weekly founder review.
              </p>
            </div>

            <div className="grid gap-3 border-t border-white/12 pt-6 text-sm text-white/70">
              <div className="flex items-center justify-between">
                <span>Method</span>
                <strong className="font-medium text-white">
                  Identify {"->"} Reframe {"->"} Optimize
                </strong>
              </div>
              <div className="flex items-center justify-between">
                <span>Access</span>
                <strong className="font-medium text-white">Admin only</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="px-8 py-10 md:px-10">
          <div className="mx-auto flex h-full max-w-sm flex-col justify-center">
            <div className="mb-8">
              <p className="text-sm font-medium text-command-slate">Secure login</p>
              <h2 className="mt-2 text-2xl font-semibold text-command-ink">
                Enter the command center
              </h2>
            </div>
            <Suspense>
              <LoginForm />
            </Suspense>
          </div>
        </section>
      </div>
    </main>
  );
}
