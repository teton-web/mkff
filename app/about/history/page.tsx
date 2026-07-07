import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SubpageHero } from "@/components/SubpageHero";
import { mkffHistoryTimeline } from "@/lib/mkff-about";

export const metadata: Metadata = {
  title: "History of MKFF | Malmar Knowles Family Foundation",
  description:
    "How two family stories — one arriving through Ellis Island, one raised on a Mississippi farm — became the foundation behind The Kectil Program.",
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
        title="A family story"
        titleAccent="behind the foundation."
        lede="The Malmar Knowles Family Foundation grew out of two family histories — one that arrived through Ellis Island, one raised on a Mississippi farm — bound together by a belief in education, hard work, and opening doors for others."
        links={[
          { label: "Why I Created Kectil", href: "/about/why" },
          { label: "Our Directors", href: "/about/directors" },
        ]}
      />

      <section className="section border-b border-[var(--mkff-border)] bg-[var(--mkff-cream)]">
        <div className="container">
          <div className="section-rule pb-16">
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--mkff-gold)]">
              Foundation story
            </div>
            <div className="hidden text-xs uppercase tracking-[0.18em] text-[var(--mkff-gray)] sm:block">
              From family memory to global youth leadership
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-20">
            <div className="flex flex-col gap-5">
              <h2 className="font-display text-4xl leading-tight text-[var(--mkff-ink)] md:text-5xl md:leading-[1.06]">
                From family memory to global youth leadership.
              </h2>
              <p className="max-w-sm text-[15px] leading-7 text-[var(--mkff-muted)]">
                Our parents, grandparents, and ancestors — the places and
                situations they came from — help create the fabric of our
                lives. These are the people behind The Kectil Program.
              </p>
            </div>

            <ol className="relative ml-3 flex flex-col gap-12 border-l border-[var(--mkff-gold)] pl-10 sm:pl-12">
              {mkffHistoryTimeline.map((item, index) => (
                <li key={item.title} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0.5 flex h-8 w-8 -translate-x-1/2 items-center justify-center border border-[var(--mkff-gold)] bg-[var(--mkff-cream)] font-display text-[13px] font-semibold text-[var(--mkff-gold)]"
                    style={{ left: "calc(-2.5rem - 0.5px)" }}
                  >
                    {index + 1}
                  </span>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--mkff-gray)]">
                    {item.label}
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-medium leading-8 text-[var(--mkff-oxblood)] md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[var(--mkff-charcoal)]">
                    {item.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
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
              Everyone has a story. Our stories are a reflection of our culture
              — beauty, love, challenges, successes, failures, hardships, and
              just… life. If you are a young person in a developing country, we
              would love to hear about your relatives and your community.
            </p>
            <div className="mt-2">
              <Link
                href="/#engage"
                className="btn-secondary text-[var(--mkff-cream)]"
              >
                Share your story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
