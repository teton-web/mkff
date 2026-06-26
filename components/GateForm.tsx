"use client";

import { useActionState } from "react";
import { ArrowRight } from "lucide-react";
import { authenticate, type GateState } from "@/app/gate/actions";

export function GateForm({ from }: { from: string }) {
  const [state, formAction, pending] = useActionState<GateState, FormData>(
    authenticate,
    null,
  );

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <input type="hidden" name="from" value={from} />

      <div className="flex flex-col gap-2">
        <label
          htmlFor="password"
          className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/55"
        >
          Access password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          autoFocus
          required
          aria-invalid={state?.error ? true : undefined}
          aria-describedby={state?.error ? "gate-error" : undefined}
          className="w-full rounded-sm border border-white/25 bg-white/5 px-4 py-3.5 text-base text-[var(--mkff-cream)] placeholder:text-white/35 focus:border-[var(--mkff-gold)]"
          placeholder="Enter password"
        />
      </div>

      {state?.error ? (
        <p
          id="gate-error"
          role="alert"
          className="text-sm font-medium text-[var(--mkff-gold)]"
        >
          {state.error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center gap-2 rounded-sm bg-[var(--mkff-cream)] px-5 py-3.5 text-sm font-semibold text-[#2A0F0A] hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
      >
        {pending ? "Checking…" : "Enter site"}
        <ArrowRight className="h-4 w-4 text-[var(--mkff-oxblood)]" />
      </button>
    </form>
  );
}
