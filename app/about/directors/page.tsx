import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SubpageHero } from "@/components/SubpageHero";
import { mkffDirectors } from "@/lib/mkff-about";

export const metadata: Metadata = {
  title: "Our Directors | Malmar Knowles Family Foundation",
  description:
    "Meet the directors of the Malmar Knowles Family Foundation and The Kectil Program: founder Sherry M. Knowles, Brooke Shafer, and Chris Zalesky.",
  alternates: {
    canonical: "/about/directors",
  },
};

export default function DirectorsPage() {
  return (
    <>
      <SubpageHero
        eyebrow="Our Directors"
        note="Founder and directors"
        title="The directors"
        titleAccent="behind Kectil."
        lede="The Malmar Knowles Family Foundation and The Kectil Program are guided by three directors: founder Sherry M. Knowles, Brooke Shafer, and Chris Zalesky."
        links={[
          { label: "History of MKFF", href: "/about/history" },
          { label: "Why I Created Kectil", href: "/about/why" },
        ]}
      />

      <section className="section bg-[var(--mkff-cream)]">
        <div className="container">
          <div className="section-rule pb-16">
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--mkff-gold)]">
              Director profiles
            </div>
            <div className="hidden text-xs uppercase tracking-[0.18em] text-[var(--mkff-gray)] sm:block">
              Meet the directors
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {mkffDirectors.map((director) => (
              <Link
                key={director.slug}
                href={director.href}
                className="group flex flex-col gap-4"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[var(--mkff-charcoal)]">
                  <Image
                    src={director.photoSrc}
                    alt={`${director.name}, ${director.role} of MKFF`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h2 className="font-display text-xl font-medium leading-7 text-[var(--mkff-oxblood)]">
                    {director.name}
                  </h2>
                  <div className="mt-1 text-[13px] italic leading-5 text-[var(--mkff-gray)]">
                    {director.role}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-[var(--mkff-charcoal)]">
                    {director.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--mkff-ink)] group-hover:text-[var(--mkff-oxblood)]">
                    View profile <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
