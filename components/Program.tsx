import { ArrowUpRight } from "lucide-react";

export function Program() {
  const pillars = [
    {
      no: "01",
      title: "Ethical Leadership & Good Governance",
      desc: "Core curriculum on integrity, decision-making, and building just institutions that outlast their founders.",
      focus: "Foundational",
    },
    {
      no: "02",
      title: "Innovation, Invention & Entrepreneurship",
      desc: "From idea to impact — design thinking, intellectual property awareness, and social enterprise across borders.",
      focus: "Applied",
    },
    {
      no: "03",
      title: "Women’s Roles & Inclusive Development",
      desc: "Advancing gender equity and the full participation of every young leader, drawing on the founder’s WIPO work.",
      focus: "Equity",
    },
    {
      no: "04",
      title: "Environment, Employment & Global Challenges",
      desc: "Practical skills to address sustainability, jobs, and local-to-global problems where leadership is scarce.",
      focus: "Global",
    },
  ];

  return (
    <section id="program" className="section bg-white">
      <div className="container">
        <div className="section-rule pb-16">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--mkff-gold)]">
            § 04 — The Flagship Initiative
          </div>
          <div className="hidden text-xs uppercase tracking-[0.18em] text-[var(--mkff-gray)] sm:block">
            Program hub → kectil.com
          </div>
        </div>

        <div className="grid gap-12 pb-20 lg:grid-cols-[minmax(0,760px)_480px] lg:gap-24">
          <div className="flex flex-col gap-7">
            <h2 className="font-display text-5xl font-medium leading-tight text-[var(--mkff-oxblood)] md:text-[92px] md:leading-none">
              The Kectil Program.
            </h2>
            <p className="max-w-xl text-[15px] leading-6 text-[var(--mkff-muted)]">
              KECTIL — Knowles Educational and Charitable Trust for
              International Leadership. A one-year, web-based leadership
              program for talented 17-26 year-olds from developing and
              least-developed countries, created to identify, nurture, and
              connect youth who can make a positive difference in their
              communities and countries.
            </p>
          </div>

          <div className="flex flex-col gap-5 lg:pt-12">
            <div className="grid grid-cols-2 gap-6 border-b border-[var(--mkff-border)] pb-5">
              <div>
                <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--mkff-gray)]">
                  Format
                </div>
                <div className="mt-1 font-display text-lg font-semibold leading-6">
                  One-year, web-based
                </div>
              </div>
              <div>
                <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--mkff-gray)]">
                  Ages
                </div>
                <div className="mt-1 font-display text-lg font-semibold leading-6">
                  17 – 26
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 border-b border-[var(--mkff-border)] pb-5">
              <div>
                <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--mkff-gray)]">
                  Cost
                </div>
                <div className="mt-1 font-display text-lg font-semibold leading-6">
                  No participation fee
                </div>
              </div>
              <div>
                <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--mkff-gray)]">
                  Network
                </div>
                <div className="mt-1 font-display text-lg font-semibold leading-6">
                  Lifelong alumni
                </div>
              </div>
            </div>

            <a
              href="https://kectil.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-3 justify-between"
            >
              Visit kectil.com to apply <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="border-t border-[var(--mkff-border)]">
          <div className="hidden grid-cols-[60px_minmax(260px,520px)_1fr_140px] items-baseline border-b border-[var(--mkff-border)] py-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--mkff-gray)] lg:grid">
            <div>No.</div>
            <div>Curriculum Pillar</div>
            <div>Description</div>
            <div className="text-right">Focus</div>
          </div>

          {pillars.map((pillar) => (
            <div
              key={pillar.no}
              className="grid gap-4 border-b border-[var(--mkff-border)] py-8 lg:grid-cols-[60px_minmax(260px,520px)_1fr_140px] lg:items-start lg:gap-0"
            >
              <div className="font-display text-[32px] font-light leading-9 text-[var(--mkff-gold)]">
                {pillar.no}
              </div>
              <h3 className="font-display text-[28px] font-medium leading-9 text-[var(--mkff-oxblood)]">
                {pillar.title}
              </h3>
              <p className="text-[15px] leading-6 text-[var(--mkff-charcoal)] lg:pr-8">
                {pillar.desc}
              </p>
              <div className="font-display text-[13px] italic leading-5 text-[var(--mkff-gray)] lg:text-right">
                {pillar.focus}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
