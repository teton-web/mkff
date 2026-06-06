import { ArrowUpRight } from "lucide-react";

export function Engage() {
  const cards = [
    {
      numeral: "I.",
      label: "For young leaders",
      title: "Apply to the Kectil Program.",
      body: "Ages 17–26, from developing or least-developed countries, with a demonstrated passion for leadership, scholarship, or innovation. Free for accepted participants.",
      cta: "Apply at kectil.com",
      href: "https://kectil.com",
      dark: false,
    },
    {
      numeral: "II.",
      label: "For partners",
      title: "Partner with the foundation.",
      body: "We collaborate with universities, NGOs, governments, and foundations committed to youth leadership, ethical governance, and inclusive development.",
      cta: "info@mkff.org",
      href: "mailto:info@mkff.org?subject=MKFF%20Partnership",
      dark: false,
    },
    {
      numeral: "III.",
      label: "For supporters",
      title: "Support the next generation.",
      body: "Every dollar goes directly to programming. MKFF is a registered 501(c)(3); contributions are tax-deductible to the extent allowed by U.S. law.",
      cta: "Give to MKFF",
      href: "mailto:info@mkff.org?subject=Supporting%20MKFF",
      dark: true,
    },
  ];

  return (
    <section
      id="engage"
      className="section border-t border-[var(--mkff-border)] bg-white"
    >
      <div className="container">
        <div className="section-rule pb-20">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--mkff-gold)]">
            § 05 — Engage with MKFF
          </div>
          <div className="hidden font-editorial text-lg italic leading-6 text-[var(--mkff-gray)] sm:block">
            Ways to get involved.
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
          {cards.map((card) => (
            <a
              key={card.numeral}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={[
                "flex min-h-[360px] flex-col gap-6 p-8 md:p-10",
                card.dark
                  ? "bg-[var(--mkff-maroon)] text-[var(--mkff-cream)]"
                  : "bg-white text-[var(--mkff-ink)]",
              ].join(" ")}
            >
              <div className="flex items-baseline justify-between gap-4">
                <div className="font-display text-[42px] font-light leading-none text-[var(--mkff-gold)]">
                  {card.numeral}
                </div>
                <div
                  className={[
                    "text-right text-[11px] font-semibold uppercase tracking-[0.28em]",
                    card.dark ? "text-[var(--mkff-gold)]" : "text-[var(--mkff-gray)]",
                  ].join(" ")}
                >
                  {card.label}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h3
                  className={[
                    "font-display text-3xl leading-10",
                    card.dark ? "text-[var(--mkff-cream)]" : "text-[var(--mkff-oxblood)]",
                  ].join(" ")}
                >
                  {card.title}
                </h3>
                <p
                  className={[
                    "text-sm leading-6",
                    card.dark ? "text-white/80" : "text-[var(--mkff-charcoal)]",
                  ].join(" ")}
                >
                  {card.body}
                </p>
              </div>

              <div className="flex-1" />

              <div
                className={[
                  "flex items-center justify-between border-t pt-4 text-[13px] font-medium",
                  card.dark
                    ? "border-white/20 text-[var(--mkff-cream)]"
                    : "border-[var(--mkff-border)] text-[var(--mkff-oxblood)]",
                ].join(" ")}
              >
                <span>{card.cta}</span>
                <ArrowUpRight className="h-4 w-4 text-[var(--mkff-gold)]" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
