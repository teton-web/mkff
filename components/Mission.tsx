export function Mission() {
  const codeItems = [
    "Equal respect regardless of nationality, religion, culture, or gender.",
    "Positive, collaborative dialogue and lasting bonds across borders.",
    "Hard work, open-mindedness, compassion, and service.",
    "Role-model conduct in their communities.",
  ];

  return (
    <section
      id="mission"
      className="section border-y border-[var(--mkff-border)] bg-white"
    >
      <div className="container">
        <div className="section-rule pb-12">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--mkff-gold)]">
            § 01 — Our Mission
          </div>
          <div className="hidden text-xs uppercase tracking-[0.18em] text-[var(--mkff-gray)] sm:block">
            Established 2015 by Sherry M. Knowles
          </div>
        </div>

        <div className="grid gap-14 pt-6 lg:grid-cols-[minmax(0,820px)_360px] lg:gap-24">
          <div className="flex flex-col gap-8">
            <h2 className="font-display text-4xl leading-tight text-[var(--mkff-ink)] md:text-6xl md:leading-[1.06]">
              We identify and nurture high-potential youth who will transform
              their communities and their countries.
            </h2>
            <div className="flex gap-5 pt-4">
              <div className="w-1 shrink-0 bg-[var(--mkff-gold)]" />
              <p className="max-w-3xl text-[17px] leading-8 text-[var(--mkff-charcoal)]">
                MKFF was created in 2015 by Sherry M. Knowles, an intellectual
                property attorney whose work at the highest levels of global
                pharma and with WIPO on technology transfer to developing
                countries inspired a new mission: building the next generation
                of ethical, innovative leaders — at no cost to the leaders
                themselves.
              </p>
            </div>
          </div>

          <aside className="flex flex-col gap-6 pt-2">
            <div className="border-b border-[var(--mkff-border)] pb-5">
              <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--mkff-gray)]">
                The Kectil Code
              </div>
              <div className="mt-2 font-display text-[22px] italic leading-8 text-[var(--mkff-oxblood)]">
                Every Kectil Colleague commits to —
              </div>
            </div>
            <div className="flex flex-col gap-5">
              {codeItems.map((item, index) => (
                <div key={item} className="flex items-baseline gap-4">
                  <div className="w-7 shrink-0 font-display text-sm font-semibold leading-5 text-[var(--mkff-gold)]">
                    {["I.", "II.", "III.", "IV."][index]}
                  </div>
                  <div className="text-[15px] leading-6 text-[var(--mkff-charcoal)]">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
