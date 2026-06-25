import Image from "next/image";

export function Leadership() {
  const board = [
    {
      label: "Director",
      value: "Brooke M. Shafer",
      image: "/brooke-shafer.jpg",
    },
    {
      label: "Director",
      value: "Christopher Zalesky",
      image: "/chris-zalesky.jpg",
    },
    {
      label: "Financials",
      value: "Public 990-PF filings",
      note: "Full financials are filed and published every year.",
    },
  ];

  return (
    <section
      id="leadership"
      className="section border-t border-[var(--mkff-border)] bg-[var(--mkff-cream)]"
    >
      <div className="container">
        <div className="section-rule pb-20">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--mkff-gold)]">
            § 04 — Leadership
          </div>
          <div className="hidden text-xs uppercase tracking-[0.18em] text-[var(--mkff-gray)] sm:block">
            Founder, Board, & Counsel
          </div>
        </div>

        <div className="grid gap-12 border-b border-[var(--mkff-border)] pb-20 lg:grid-cols-[380px_minmax(0,1fr)] lg:gap-20">
          <div className="flex flex-col gap-4">
            <div className="mkff-panel-gradient relative flex min-h-[420px] flex-col justify-between overflow-hidden p-8 text-[var(--mkff-cream)] md:min-h-[480px]">
              <Image
                src="/sherry-knowles.jpg"
                alt="Sherry M. Knowles, Founder & President of MKFF"
                fill
                sizes="380px"
                priority
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#2A0F0A]/70 via-[#2A0F0A]/10 to-[#2A0F0A]/90" />
              <div className="relative flex justify-between text-[10px] font-semibold uppercase tracking-[0.3em] text-white/75">
                <span>The Founder</span>
                <span>Est. 2015</span>
              </div>
              <div className="relative font-display text-[34px] font-light italic leading-10">
                Building the people who will build their nations.
              </div>
            </div>
            <div className="flex items-baseline justify-between gap-4 text-[11px]">
              <div className="font-semibold uppercase tracking-[0.25em] text-[var(--mkff-gray)]">
                Founder & President
              </div>
              <div className="font-editorial italic text-[var(--mkff-gray)]">
                Atlanta, GA
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-7 pt-2">
            <h2 className="font-display text-5xl font-light leading-none text-[var(--mkff-oxblood)] md:text-[84px]">
              Sherry M.
              <br />
              Knowles
            </h2>
            <p className="max-w-xl text-[17px] leading-8 text-[var(--mkff-charcoal)]">
              An intellectual property attorney whose career took her to the
              highest levels of global pharmaceutical strategy and to the World
              Intellectual Property Organization, where her work on technology
              transfer to developing countries reshaped what she thought a
              foundation could be for.
            </p>
            <p className="max-w-xl text-[17px] leading-8 text-[var(--mkff-charcoal)]">
              She founded MKFF in 2015 with a clear premise: the most decisive
              intervention in any country’s future is the kind of person it
              raises into leadership. The Kectil Program is the answer she has
              built.
            </p>
            <div className="grid gap-6 border-y border-[var(--mkff-border)] py-6 md:grid-cols-3 md:gap-10">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--mkff-gray)]">
                  Practice
                </div>
                <div className="mt-2 font-display text-lg font-medium text-[var(--mkff-oxblood)]">
                  Knowles IP Strategy
                </div>
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--mkff-gray)]">
                  Service
                </div>
                <div className="mt-2 font-display text-lg font-medium text-[var(--mkff-oxblood)]">
                  WIPO Tech Transfer
                </div>
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--mkff-gray)]">
                  Founded
                </div>
                <div className="mt-2 font-display text-lg font-medium text-[var(--mkff-oxblood)]">
                  MKFF · Est. 2015
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 pt-12 lg:grid-cols-[280px_minmax(0,1fr)]">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--mkff-gray)]">
              The Board & Advisors
            </div>
            <p className="mt-2 font-display text-[22px] font-light italic leading-8 text-[var(--mkff-oxblood)]">
              A small board with volunteer governance and program oversight.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {board.map((item) => (
              <div key={item.value} className="flex flex-col gap-4">
                {item.image ? (
                  <div className="relative aspect-[4/5] overflow-hidden bg-[var(--mkff-charcoal)]">
                    <Image
                      src={item.image}
                      alt={`${item.value}, ${item.label} of MKFF`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                      className="object-cover object-top"
                    />
                  </div>
                ) : (
                  <div className="mkff-panel-gradient flex aspect-[4/5] items-end overflow-hidden p-6 text-[var(--mkff-cream)]">
                    <p className="font-display text-[22px] font-light italic leading-8">
                      {item.note}
                    </p>
                  </div>
                )}
                <div>
                  <div className="font-display text-base font-medium leading-6 text-[var(--mkff-oxblood)]">
                    {item.value}
                  </div>
                  <div className="mt-1 text-[13px] italic leading-5 text-[var(--mkff-gray)]">
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
