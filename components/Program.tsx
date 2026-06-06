"use client";

import { ArrowRight } from "lucide-react";

export function Program() {
  const pillars = [
    { title: "Ethical Leadership & Good Governance", desc: "Core curriculum on integrity, decision-making, and building just institutions." },
    { title: "Innovation, Invention & Entrepreneurship", desc: "From idea to impact — design thinking, IP awareness, and social enterprise." },
    { title: "Women’s Roles & Inclusive Development", desc: "Advancing gender equity and the full participation of all young leaders." },
    { title: "Environment, Employment & Global Challenges", desc: "Practical skills to address sustainability, jobs, and local-to-global problems." },
  ];

  return (
    <section id="program" className="section bg-white border-y">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-x-12 gap-y-10 items-start">
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <div className="text-xs uppercase tracking-[3px] text-[var(--mkff-teal)] font-semibold mb-2">Flagship Initiative</div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-none text-[var(--mkff-navy)] mb-6">The Kectil Program</h2>
              <p className="text-lg text-[var(--mkff-text-muted)] mb-8">
                A one-year web-based leadership development experience + lifelong alumni network + hands-on community projects and regional conferences.
              </p>

              <a
                href="https://kectil.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex text-base"
              >
                Visit kectil.com to Apply <ArrowRight className="h-4 w-4" />
              </a>
              <div className="mt-3 text-xs text-[var(--mkff-text-muted)]">Free for accepted participants from developing countries • Ages 17–26</div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-4">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="card p-6 border-l-4 border-[var(--mkff-teal)]">
                  <div className="font-semibold text-[var(--mkff-navy)] mb-2">{pillar.title}</div>
                  <p className="text-sm text-[var(--mkff-text-muted)]">{pillar.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 text-sm text-[var(--mkff-text-muted)]">
              Program components include weekly web-based training, peer collaboration across borders, the Kectil Alumni Network, community project grants and recognition, and regional/international leadership conferences (recently Ghana, Peru, and representation at major global forums).
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
