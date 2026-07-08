import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { MkffProseSections } from "@/components/MkffProse";
import { SubpageHero } from "@/components/SubpageHero";
import { mkffAboutKectilSections, mkffAboutNavItems } from "@/lib/mkff-about";

export const metadata: Metadata = {
  title: "About MKFF | Malmar Knowles Family Foundation",
  description:
    "The Kectil Program was created to identify and nurture highly talented youth in developing countries. MKFF is its parent organization.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <SubpageHero
        eyebrow="About MKFF"
        note="History, purpose, and directors"
        title="About MKFF"
        titleAccent="and The Kectil Program"
        lede="The Kectil Program was created to identify and nurture highly talented youth in developing countries who have the potential to make a positive difference in their communities and countries."
        links={[
          { label: "History of MKFF", href: "/about/history" },
          { label: "Our Directors", href: "/about/directors" },
        ]}
      />

      <section className="section border-b border-[var(--mkff-border)] bg-[var(--mkff-cream)]">
        <div className="container">
          <div className="section-rule pb-16">
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--mkff-gold)]">
              Start here
            </div>
            <div className="hidden text-xs uppercase tracking-[0.18em] text-[var(--mkff-gray)] sm:block">
              Get to know the people behind Kectil
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {mkffAboutNavItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col gap-5 border border-[var(--mkff-border)] bg-white p-8 hover:border-[var(--mkff-gold)]"
              >
                <span className="font-display text-sm font-semibold tracking-[0.2em] text-[var(--mkff-gold)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-2xl font-medium leading-8 text-[var(--mkff-oxblood)]">
                  {item.label}
                </h2>
                <p className="text-[15px] leading-7 text-[var(--mkff-charcoal)]">
                  {item.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-[var(--mkff-ink)] group-hover:text-[var(--mkff-oxblood)]">
                  Read more <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="section-rule pb-16">
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--mkff-gold)]">
              The Kectil Program
            </div>
            <div className="hidden text-xs uppercase tracking-[0.18em] text-[var(--mkff-gray)] sm:block">
              Mission, Kectil Code, and who can apply
            </div>
          </div>

          <MkffProseSections sections={mkffAboutKectilSections} />

          <div className="mt-16 flex flex-wrap gap-4">
            <Link href="/about/history" className="btn-primary">
              History of MKFF <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://kectil.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-[var(--mkff-ink)]"
            >
              Visit kectil.com <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
