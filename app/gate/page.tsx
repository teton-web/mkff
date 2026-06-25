import type { Metadata } from "next";
import { GateForm } from "@/components/GateForm";

export const metadata: Metadata = {
  title: "Enter — Malmar Knowles Family Foundation",
  robots: { index: false, follow: false },
};

function safeFrom(value: string | string[] | undefined): string {
  const raw = Array.isArray(value) ? value[0] : value;
  return raw && raw.startsWith("/") && !raw.startsWith("//") ? raw : "/";
}

export default async function GatePage({
  searchParams,
}: {
  searchParams: Promise<{ from?: string | string[] }>;
}) {
  const params = await searchParams;
  const from = safeFrom(params.from);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--mkff-cream)] px-6 py-16">
      <div className="mkff-panel-gradient w-full max-w-md overflow-hidden rounded-md p-8 text-[var(--mkff-cream)] md:p-10">
        <div className="flex flex-col gap-2">
          <div className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/60">
            Malmar Knowles Family Foundation
          </div>
          <h1 className="font-display text-3xl font-light leading-tight md:text-4xl">
            This site is{" "}
            <span className="italic">private.</span>
          </h1>
        </div>

        <div className="my-7 h-0.5 w-10 bg-[var(--mkff-gold)]" />

        <p className="mb-7 text-sm leading-6 text-white/70">
          Please enter the access password to continue.
        </p>

        <GateForm from={from} />
      </div>
    </main>
  );
}
