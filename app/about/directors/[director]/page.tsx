import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { getMkffDirectorBySlug, mkffDirectors } from "@/lib/mkff-about";

type DirectorPageProps = {
  params: Promise<{ director: string }>;
};

export function generateStaticParams() {
  return mkffDirectors.map((director) => ({ director: director.slug }));
}

export async function generateMetadata({
  params,
}: DirectorPageProps): Promise<Metadata> {
  const { director } = await params;
  const profile = getMkffDirectorBySlug(director);

  if (!profile) {
    return {};
  }

  return {
    title: `${profile.name} | Malmar Knowles Family Foundation`,
    description: profile.summary,
    alternates: {
      canonical: profile.href,
    },
  };
}

export default async function DirectorPage({ params }: DirectorPageProps) {
  const { director } = await params;
  const profile = getMkffDirectorBySlug(director);

  if (!profile) {
    notFound();
  }

  return (
    <>
      <header className="border-b border-[var(--mkff-border)] bg-white pt-20 pb-16 md:pt-32 md:pb-20">
        <div className="container">
          <div className="section-rule pb-14">
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--mkff-gold)]">
              MKFF Director
            </div>
            <div className="hidden text-xs uppercase tracking-[0.18em] text-[var(--mkff-gray)] sm:block">
              {profile.role}
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-20">
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[4/5] max-w-xs overflow-hidden bg-[var(--mkff-charcoal)]">
                <Image
                  src={profile.photoSrc}
                  alt={`${profile.name}, ${profile.role} of MKFF`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 320px"
                  className="object-cover object-top"
                />
              </div>
              <div className="flex items-baseline justify-between gap-4 text-[11px]">
                <div className="font-semibold uppercase tracking-[0.25em] text-[var(--mkff-gray)]">
                  {profile.role}
                </div>
                <div className="font-editorial italic text-[var(--mkff-gray)]">
                  MKFF · Kectil
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 pt-2">
              <h1 className="font-display text-4xl leading-tight text-[var(--mkff-oxblood)] md:text-6xl md:leading-[1.06]">
                {profile.name}
              </h1>
              <p className="max-w-2xl text-[17px] leading-8 text-[var(--mkff-charcoal)]">
                {profile.summary}
              </p>
              <div className="flex flex-wrap gap-2">
                {profile.focus.map((item) => (
                  <span
                    key={item}
                    className="inline-flex border border-[var(--mkff-gold)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--mkff-gold)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="section bg-[var(--mkff-cream)]">
        <div className="container">
          <div className="section-rule pb-16">
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--mkff-gold)]">
              Biography
            </div>
            <div className="hidden text-xs uppercase tracking-[0.18em] text-[var(--mkff-gray)] sm:block">
              Career and background
            </div>
          </div>

          <div className="max-w-3xl">
            <div className="flex flex-col gap-5">
              {profile.bio.map((paragraph) =>
                paragraph.startsWith("## ") ? (
                  <h2
                    key={paragraph.slice(0, 40)}
                    className="pt-6 font-display text-2xl font-medium leading-8 text-[var(--mkff-oxblood)] md:text-3xl"
                  >
                    {paragraph.slice(3)}
                  </h2>
                ) : (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="text-[15px] leading-7 text-[var(--mkff-charcoal)]"
                  >
                    {paragraph}
                  </p>
                ),
              )}
            </div>

            <div className="mt-12">
              <Link
                href="/about/directors"
                className="btn-secondary text-[var(--mkff-ink)]"
              >
                <ArrowLeft className="h-4 w-4" /> Return to all directors
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
