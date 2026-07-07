import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { SubpageHero } from "@/components/SubpageHero";
import { mkffAboutNavItems } from "@/lib/mkff-about";

export const metadata: Metadata = {
  title: "About MKFF | Malmar Knowles Family Foundation",
  description:
    "The Malmar Knowles Family Foundation is the parent organization of The Kectil Program, created to nurture, network, and mentor youth in developing countries.",
  alternates: {
    canonical: "/about",
  },
};

const missionNames = [
  {
    title: "MKFF",
    body: "The family foundation behind it all — a 501(c)(3) nonprofit organized in Georgia, USA, and the parent organization of The Kectil Program.",
  },
  {
    title: "Kectil Program",
    body: "A leadership program that nurtures, networks, and mentors high-potential youth from developing countries through mentoring, coursework, and a growing alumni community.",
  },
  {
    title: "Global Youth Index",
    body: "Public, citable research built from Kectil Youth Speak surveys, published in aggregate so anyone can read what young people are reporting.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SubpageHero
        eyebrow="About MKFF"
        note="History, purpose, and directors"
        title="About MKFF,"
        titleAccent="Kectil, and the Index."
        lede="The Malmar Knowles Family Foundation is the parent organization of The Kectil Program, created to nurture, network, and mentor youth in developing countries. The Global Youth Index shares what those young people are saying with the wider world."
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
              How it connects
            </div>
            <div className="hidden text-xs uppercase tracking-[0.18em] text-[var(--mkff-gray)] sm:block">
              One mission, three names
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-20">
            <div className="flex flex-col gap-5">
              <h2 className="font-display text-4xl leading-tight text-[var(--mkff-ink)] md:text-5xl md:leading-[1.06]">
                One mission, three names.
              </h2>
              <p className="max-w-sm text-[15px] leading-7 text-[var(--mkff-muted)]">
                MKFF is the nonprofit foundation, The Kectil Program is its
                youth leadership work, and the Global Youth Index is where the
                research from that work is shared publicly.
              </p>
            </div>

            <div className="flex flex-col divide-y divide-[var(--mkff-border)] border-y border-[var(--mkff-border)]">
              {missionNames.map((item) => (
                <div key={item.title} className="grid gap-3 py-7 md:grid-cols-[240px_minmax(0,1fr)] md:gap-10">
                  <h3 className="font-display text-2xl font-medium leading-8 text-[var(--mkff-oxblood)]">
                    {item.title}
                  </h3>
                  <p className="text-[15px] leading-7 text-[var(--mkff-charcoal)]">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

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
