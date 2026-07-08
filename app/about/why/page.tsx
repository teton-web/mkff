import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { MkffProseSections } from "@/components/MkffProse";
import { SubpageHero } from "@/components/SubpageHero";
import { mkffWhyLetter } from "@/lib/mkff-about";

export const metadata: Metadata = {
  title: "The Project and the Challenge — Why I Created Kectil | Malmar Knowles Family Foundation",
  description:
    "Founder Sherry M. Knowles on “The Project and the Challenge” — why she created The Kectil Program, in her own words.",
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
        title="The Project"
        titleAccent="and the Challenge"
        lede="Many people have asked me over the past year why I created The Kectil Program. And why I am spending so much time and effort on it? Why such a large project? Why should we spend family money on this? Why am I spending weekends answering emails from countries I have never visited to speak with youth I have never met? And on and on."
        links={[
          { label: "Meet the directors", href: "/about/directors" },
          { label: "History of MKFF", href: "/about/history" },
        ]}
      />

      <section className="section border-b border-[var(--mkff-border)] bg-[var(--mkff-cream)]">
        <div className="container">
          <MkffProseSections
            sections={[{ blocks: mkffWhyLetter.intro }, ...mkffWhyLetter.sections]}
          />
          <div className="mt-12 text-[15px] leading-7 text-[var(--mkff-charcoal)]">
            <p>{mkffWhyLetter.signOff[0]}</p>
            <p className="font-display text-lg font-medium text-[var(--mkff-oxblood)]">
              {mkffWhyLetter.signOff[1]}
            </p>
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
