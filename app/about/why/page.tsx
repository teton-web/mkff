import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { SubpageHero } from "@/components/SubpageHero";
import { mkffWhyPrinciples } from "@/lib/mkff-about";

export const metadata: Metadata = {
  title: "Why I Created Kectil | Malmar Knowles Family Foundation",
  description:
    "Founder Sherry M. Knowles on why she built a program to nurture, network, and mentor talented youth in developing countries.",
  alternates: {
    canonical: "/about/why",
  },
};

export default function WhyPage() {
  return (
    <>
      <SubpageHero
        eyebrow="Why I Created Kectil"
        note="Founder — Sherry M. Knowles"
        title="Built to nurture, network,"
        titleAccent="and mentor young leaders."
        lede="Sherry M. Knowles created Kectil to identify and nurture highly talented youth in developing countries — young people with the potential to be leaders and make a positive difference in their communities, their countries, and maybe even the world."
        links={[
          { label: "Meet the directors", href: "/about/directors" },
          { label: "History of MKFF", href: "/about/history" },
        ]}
      />

      <section className="section border-b border-[var(--mkff-border)] bg-[var(--mkff-cream)]">
        <div className="container">
          <div className="section-rule pb-16">
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--mkff-gold)]">
              The idea
            </div>
            <div className="hidden text-xs uppercase tracking-[0.18em] text-[var(--mkff-gray)] sm:block">
              Talent is everywhere. Opportunity is not.
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {mkffWhyPrinciples.map((principle, index) => (
              <div
                key={principle.title}
                className="flex flex-col gap-5 border border-[var(--mkff-border)] bg-white p-8"
              >
                <span className="font-display text-sm font-semibold tracking-[0.2em] text-[var(--mkff-gold)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-2xl font-medium leading-8 text-[var(--mkff-oxblood)]">
                  {principle.title}
                </h2>
                <p className="text-[15px] leading-7 text-[var(--mkff-charcoal)]">
                  {principle.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="mkff-panel-gradient flex flex-col gap-6 p-10 text-[var(--mkff-cream)] md:p-16">
            <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/75">
              The people behind the mission
            </div>
            <h2 className="max-w-2xl font-display text-3xl font-light leading-tight md:text-5xl">
              Guided by a small, hands-on director group.
            </h2>
            <p className="max-w-2xl text-[15px] leading-7 text-white/80">
              The Malmar Knowles Family Foundation and The Kectil Program are
              guided by three directors: founder Sherry M. Knowles, Brooke
              Shafer, and Chris Zalesky.
            </p>
            <div className="mt-2 flex flex-wrap gap-4">
              <Link
                href="/about/directors"
                className="btn-secondary text-[var(--mkff-cream)]"
              >
                Meet the directors <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://kectil.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-[var(--mkff-cream)]"
              >
                Visit kectil.com <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
