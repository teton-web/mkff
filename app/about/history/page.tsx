import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { MkffProseSections } from "@/components/MkffProse";
import { SubpageHero } from "@/components/SubpageHero";
import { mkffHistorySections } from "@/lib/mkff-about";

export const metadata: Metadata = {
  title: "History of MKFF | Malmar Knowles Family Foundation",
  description:
    "Everyone has a story. The family history behind the Malmar Knowles Family Foundation and The Kectil Program, told by founder Sherry M. Knowles.",
  alternates: {
    canonical: "/about/history",
  },
};

export default function HistoryPage() {
  return (
    <>
      <SubpageHero
        eyebrow="History of MKFF"
        note="Foundation story"
        title="About"
        titleAccent="MKFF"
        lede="Everyone has a story. Our parents, grandparents, ancestors, the places and situations they were from and the places and situations we grew up in help create the fabric of our lives."
        links={[
          { label: "Why I Created Kectil", href: "/about/why" },
          { label: "Our Directors", href: "/about/directors" },
        ]}
      />

      <section className="section border-b border-[var(--mkff-border)] bg-[var(--mkff-cream)]">
        <div className="container">
          <MkffProseSections sections={mkffHistorySections} />
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="mkff-panel-gradient flex flex-col gap-6 p-10 text-[var(--mkff-cream)] md:p-16">
            <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/75">
              Everyone has a story
            </div>
            <h2 className="max-w-2xl font-display text-3xl font-light leading-tight md:text-5xl">
              What is your story?
            </h2>
            <p className="max-w-2xl text-[15px] leading-7 text-white/80">
              We would love to hear from youth in developing or least developed
              countries about your relatives and your communities. Our stories
              are a reflection of our culture–beauty, love, challenges,
              successes, failures, advancements, hardships and just…life.
              Please send to mail@kectil.com.
            </p>
            <div className="mt-2">
              <a
                href="mailto:mail@kectil.com"
                className="btn-secondary text-[var(--mkff-cream)]"
              >
                Share your story <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
