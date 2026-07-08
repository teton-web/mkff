import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Mission() {
  // Verbatim excerpts from the client's Kectil Code; the full nine-point Code is on /about.
  const codeItems = [
    "Each participant shall be referred to as a Kectil Colleague and shall treat others as Colleagues.",
    "Each Kectil Colleague will give equal respect to every other Kectil Colleague regardless of nationality, religion, culture or gender.",
    "Each Kectil Colleague will discuss ideas and contributions of other Kectil Colleagues with positive, collaborative and respectful comments.",
    "Kectil Colleagues uphold the honor of the Kectil Program by treating others in his/her community with respect and compassion.",
  ];

  return (
    <section
      id="mission"
      className="section border-y border-[var(--mkff-border)] bg-white"
    >
      <div className="container">
        <div className="section-rule pb-12">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--mkff-gold)]">
            § 02 — Our Mission
          </div>
          <div className="hidden text-xs uppercase tracking-[0.18em] text-[var(--mkff-gray)] sm:block">
            Established 2015 by Sherry M. Knowles
          </div>
        </div>

        <div className="grid gap-14 pt-6 lg:grid-cols-[minmax(0,820px)_360px] lg:gap-24">
          <div className="flex flex-col gap-8">
            <h2 className="font-display text-4xl leading-tight text-[var(--mkff-ink)] md:text-6xl md:leading-[1.06]">
              The Kectil Program was created to identify and nurture highly
              talented youth in developing countries who have the potential to
              make a positive difference in their communities and countries.
            </h2>
            <div className="flex gap-5 pt-4">
              <div className="w-1 shrink-0 bg-[var(--mkff-gold)]" />
              <p className="max-w-3xl text-[17px] leading-8 text-[var(--mkff-charcoal)]">
                We accomplish our Mission Statement by (i) facilitating
                innovative leadership training and (ii) providing a means to
                allow these highly talented youth become part of a guided
                network with other similarly talented and passionate youth in
                developing countries who will support, nurture, teach and learn
                from each other as they mature.
              </p>
            </div>
          </div>

          <aside className="flex flex-col gap-6 pt-2">
            <div className="border-b border-[var(--mkff-border)] pb-5">
              <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--mkff-gray)]">
                Kectil Code
              </div>
              <div className="mt-2 font-display text-[22px] italic leading-8 text-[var(--mkff-oxblood)]">
                Each participant is required to comply with the Kectil Code.
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
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--mkff-oxblood)] hover:text-[var(--mkff-maroon)]"
            >
              Read the full Kectil Code <ArrowRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
