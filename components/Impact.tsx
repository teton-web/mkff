export function Impact() {
  const stats = [
    {
      index: "i.",
      value: "10",
      label: "years of operation, with cohorts continuous since 2016.",
    },
    {
      index: "ii.",
      value: "20.9k",
      label:
        "young leaders engaged through the Kectil Program and Alumni Network.",
    },
    {
      index: "iii.",
      value: "100+",
      label: "developing and least-developed countries represented across cohorts.",
    },
    {
      index: "iv.",
      value: "100%",
      label: "charitable — the program is free for every accepted participant.",
    },
  ];

  return (
    <section id="impact" className="section bg-[var(--mkff-maroon)]">
      <div className="container">
        <div className="flex flex-col gap-6 pb-16 md:flex-row md:items-baseline md:gap-8">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--mkff-gold)]">
            § 02 — By the Numbers
          </div>
          <div className="hidden h-px flex-1 bg-white/20 md:block" />
          <div className="font-display text-xl font-light italic leading-7 text-white/70">
            Ten years of measurable reach.
          </div>
        </div>

        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 xl:grid-cols-4 xl:gap-0">
          {stats.map((stat, index) => (
            <div
              key={stat.value}
              className={[
                "flex flex-col gap-5 py-4 xl:px-8",
                index === 0 ? "xl:pl-0" : "",
                index < stats.length - 1 ? "xl:border-r xl:border-white/20" : "",
                index === stats.length - 1 ? "xl:pr-0" : "",
              ].join(" ")}
            >
              <div className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--mkff-gold)]">
                {stat.index}
              </div>
              <div className="font-display text-[64px] font-light leading-none text-[var(--mkff-cream)] sm:text-[72px]">
                {stat.value}
              </div>
              <div className="text-sm font-medium leading-6 text-white/85">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
