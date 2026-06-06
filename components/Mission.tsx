export function Mission() {
  return (
    <section id="about" className="section bg-white border-b">
      <div className="container">
        <div className="max-w-3xl">
          <div className="uppercase tracking-[3px] text-xs font-semibold text-[var(--mkff-teal)] mb-3">Our Mission</div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-none mb-6 text-[var(--mkff-navy)]">
            Identifying and nurturing high-potential youth who will transform their communities and countries.
          </h2>
          <p className="text-xl text-[var(--mkff-text-muted)] leading-relaxed">
            The Malmar Knowles Family Foundation (MKFF) was created in 2015–2016 by Sherry M. Knowles, an intellectual property attorney whose work at the highest levels of global pharma and with WIPO on technology transfer to developing countries inspired a new mission: building the next generation of ethical, innovative leaders.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="card p-8">
            <div className="font-semibold text-[var(--mkff-navy)] mb-3 text-lg">The Kectil Program</div>
            <p className="text-[var(--mkff-text-muted)]">
              “KECTIL” stands for the <strong>Knowles Educational and Charitable Trust for International Leadership</strong>. It is MKFF’s flagship initiative — a free, intensive one-year web-based program that connects talented 17–26 year-olds from developing and least-developed countries with world-class mentorship in leadership, ethics, innovation, entrepreneurship, governance, women’s roles, employment, and environmental stewardship.
            </p>
            <p className="mt-4 text-sm text-[var(--mkff-teal)] font-medium">Program hub → kectil.com</p>
          </div>

          <div className="card p-8">
            <div className="font-semibold text-[var(--mkff-navy)] mb-3 text-lg">The Kectil Code</div>
            <p className="text-[var(--mkff-text-muted)] mb-4">Every Kectil Colleague commits to a clear set of values that underpin the entire program and alumni network:</p>
            <ul className="space-y-2 text-sm text-[var(--mkff-text-muted)]">
              <li>• Equal respect regardless of nationality, religion, culture or gender</li>
              <li>• Positive, collaborative dialogue and lasting bonds</li>
              <li>• Hard work, open-mindedness, compassion, and service</li>
              <li>• Role-model conduct in their communities</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
