import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface HeroLink {
  label: string;
  href: string;
}

export function SubpageHero({
  eyebrow,
  note,
  title,
  titleAccent,
  lede,
  links,
}: {
  eyebrow: string;
  note?: string;
  title: string;
  titleAccent?: string;
  lede: string;
  links?: HeroLink[];
}) {
  return (
    <header className="border-b border-[var(--mkff-border)] bg-white pt-20 pb-16 md:pt-32 md:pb-20">
      <div className="container">
        <div className="section-rule pb-14">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--mkff-gold)]">
            {eyebrow}
          </div>
          {note && (
            <div className="hidden text-xs uppercase tracking-[0.18em] text-[var(--mkff-gray)] sm:block">
              {note}
            </div>
          )}
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-20">
          <div className="flex flex-col gap-6">
            <h1 className="font-display text-4xl leading-tight text-[var(--mkff-ink)] md:text-6xl md:leading-[1.06]">
              {title}
              {titleAccent && (
                <>
                  <br />
                  <span className="text-[var(--mkff-oxblood)]">
                    {titleAccent}
                  </span>
                </>
              )}
            </h1>
            <p className="max-w-2xl text-[17px] leading-8 text-[var(--mkff-charcoal)]">
              {lede}
            </p>
            {links && links.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-[var(--mkff-oxblood)] hover:text-[var(--mkff-maroon)]"
                  >
                    {link.label} <ArrowRight className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
