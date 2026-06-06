import { ArrowRight, ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <header className="bg-[var(--mkff-cream)] px-0 pb-16 pt-12 md:pb-16 md:pt-20">
      <div className="container">
        <div className="flex flex-col gap-8 border-b border-[var(--mkff-border)] pb-10 text-xs font-medium uppercase text-[var(--mkff-muted)] md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--mkff-gold)]" />
            <span className="tracking-[0.22em]">
              Malmar Knowles Family Foundation · Atlanta
            </span>
          </div>
          <span className="tracking-[0.22em]">A 501(c)(3) Foundation</span>
        </div>

        <div className="grid gap-12 pt-16 lg:grid-cols-[minmax(0,1fr)_596px] lg:items-end lg:gap-14">
          <div className="flex flex-col justify-center gap-8">
            <p className="font-display text-lg font-light italic leading-7 text-[var(--mkff-gold)]">
              For the next generation of leaders in developing nations —
            </p>

            <h1 className="font-display text-[72px] font-light leading-[0.96] text-[var(--mkff-oxblood)] md:text-[116px] lg:text-[148px]">
              <span className="block">Lead</span>
              <span className="block italic">where you</span>
              <span className="block font-bold">stand.</span>
            </h1>
          </div>

          <div className="mkff-panel-gradient flex min-h-[480px] flex-col justify-between overflow-hidden rounded-md p-7 text-[var(--mkff-cream)] md:min-h-[560px] md:p-9">
            <div className="relative flex items-start justify-between">
              <div className="flex flex-col gap-2">
                <div className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/60">
                  Atlanta, Georgia
                </div>
                <div className="font-display text-[22px] font-light italic leading-7">
                  Est. 2015
                </div>
              </div>
              <div className="flex h-13 w-13 items-center justify-center rounded-full border border-white/40 font-display text-lg font-medium">
                m
              </div>
            </div>

            <div className="relative flex flex-col gap-6">
              <div className="h-0.5 w-10 bg-[var(--mkff-gold)]" />
              <p className="font-display text-2xl leading-9">
                The Malmar Knowles Family Foundation nurtures high-potential
                youth from developing nations into the next generation of
                ethical leaders.
              </p>
              <div className="flex flex-col gap-3 pt-1 sm:flex-row">
                <a
                  href="https://kectil.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-[var(--mkff-cream)] px-5 py-4 text-sm font-semibold text-[#2A0F0A] hover:bg-white"
                >
                  Explore the Kectil Program{" "}
                  <ArrowUpRight className="h-4 w-4 text-[var(--mkff-oxblood)]" />
                </a>
                <a
                  href="#mission"
                  className="btn-secondary border-white/45 text-[var(--mkff-cream)]"
                >
                  Our mission <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
