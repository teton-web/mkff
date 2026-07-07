import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { mkffDirectors } from "@/lib/mkff-about";

export function AboutMKFF() {
  return (
    <section
      id="about"
      className="section border-y border-[var(--mkff-border)] bg-white"
    >
      <div className="container">
        <div className="section-rule pb-16">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--mkff-gold)]">
            § 01 — About MKFF
          </div>
          <div className="hidden text-xs uppercase tracking-[0.18em] text-[var(--mkff-gray)] sm:block">
            History, purpose, and directors
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-20">
          <div className="flex flex-col gap-5">
            <h2 className="font-display text-4xl leading-tight text-[var(--mkff-ink)] md:text-6xl md:leading-[1.06]">
              The family foundation behind Kectil.
            </h2>
            <p className="max-w-sm text-[15px] leading-7 text-[var(--mkff-muted)]">
              MKFF is the parent organization of The Kectil Program. Its story
              begins with family, education, travel, service, and the belief
              that gifted young people can lift their communities when they are
              connected to the right network.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--mkff-oxblood)] hover:text-[var(--mkff-maroon)]"
            >
              Explore the About section <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex flex-col divide-y divide-[var(--mkff-border)] border-y border-[var(--mkff-border)]">
            <details className="group py-7" open>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5">
                <span className="font-display text-2xl font-medium leading-8 text-[var(--mkff-oxblood)] md:text-3xl">
                  History of MKFF
                </span>
                <span className="font-display text-3xl leading-none text-[var(--mkff-gold)] group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="mt-6 grid gap-6 text-[15px] leading-7 text-[var(--mkff-charcoal)] md:grid-cols-2">
                <p>
                  The foundation&rsquo;s story runs through two families. The
                  Malmar name was coined at Ellis Island, when a Swedish
                  immigrant who spoke no English answered the officials with
                  the name of his hometown, Malmö. The Knowles family raised
                  their children on a Mississippi farm with no electricity and
                  a one-room schoolhouse — and sent two of them on to Ph.D.s in
                  chemistry.
                </p>
                <p>
                  What both families passed down was the conviction that
                  education and hard work open doors. MKFF — a 501(c)(3)
                  nonprofit organized in Georgia, USA — turns that inheritance
                  outward through Kectil, the Knowles Educational and
                  Charitable Trust for International Leadership.
                </p>
              </div>
              <Link
                href="/about/history"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--mkff-oxblood)] hover:text-[var(--mkff-maroon)]"
              >
                Read the full history <ArrowRight className="h-4 w-4" />
              </Link>
            </details>

            <details className="group py-7">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5">
                <span className="font-display text-2xl font-medium leading-8 text-[var(--mkff-oxblood)] md:text-3xl">
                  Why I Created Kectil
                </span>
                <span className="font-display text-3xl leading-none text-[var(--mkff-gold)] group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="mt-6 grid gap-6 text-[15px] leading-7 text-[var(--mkff-charcoal)] md:grid-cols-2">
                <p>
                  Founder Sherry M. Knowles built Kectil on a simple
                  observation: talent is everywhere; opportunity is not. Highly
                  talented young people can be found in every country. What
                  many lack is training, professional exposure, and a guided
                  network of similarly talented and passionate peers.
                </p>
                <p>
                  The framework rests on the famous African proverb: if you
                  want to go fast, go alone; if you want to go far, go
                  together. Kectil brings talented youth together — nurtured,
                  networked, and mentored — so they can go far as a global
                  community of young leaders.
                </p>
              </div>
              <Link
                href="/about/why"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--mkff-oxblood)] hover:text-[var(--mkff-maroon)]"
              >
                Read the founder&rsquo;s story <ArrowRight className="h-4 w-4" />
              </Link>
            </details>

            <details className="group py-7">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5">
                <span className="font-display text-2xl font-medium leading-8 text-[var(--mkff-oxblood)] md:text-3xl">
                  Our Directors
                </span>
                <span className="font-display text-3xl leading-none text-[var(--mkff-gold)] group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="mt-7 grid gap-6 md:grid-cols-3">
                {mkffDirectors.map((director) => (
                  <Link
                    key={director.slug}
                    href={director.href}
                    className="group/card flex flex-col gap-4"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden bg-[var(--mkff-charcoal)]">
                      <Image
                        src={director.photoSrc}
                        alt={`${director.name}, ${director.role} of MKFF`}
                        fill
                        sizes="(max-width: 768px) 100vw, 260px"
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-medium leading-6 text-[var(--mkff-oxblood)]">
                        {director.name}
                      </h3>
                      <div className="mt-1 text-[13px] italic leading-5 text-[var(--mkff-gray)]">
                        {director.role}
                      </div>
                      <p className="mt-4 text-sm leading-6 text-[var(--mkff-charcoal)]">
                        {director.summary}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--mkff-ink)] group-hover/card:text-[var(--mkff-oxblood)]">
                        View profile <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
