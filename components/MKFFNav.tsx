"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

const aboutLinks: NavLink[] = [
  { label: "History of MKFF", href: "/about/history" },
  { label: "Why I Created Kectil", href: "/about/why" },
  { label: "Our Directors", href: "/about/directors" },
];

const navLinks: NavLink[] = [
  { label: "Mission", href: "/#mission" },
  { label: "Kectil Program", href: "/#program" },
  { label: "Impact", href: "/#impact" },
  { label: "Contact", href: "/#engage" },
];

export function MKFFNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="nav sticky top-0 z-50 w-full">
      <div className="container flex h-20 items-center justify-between md:h-24">
        <Link href="/" aria-label="MKFF home">
          <Image
            src="/mkff-logo.png"
            alt="MKFF — Malmar Knowles Family Foundation"
            width={400}
            height={229}
            priority
            className="h-16 w-auto md:h-20"
          />
        </Link>

        <div className="hidden items-center gap-9 text-sm font-medium lg:flex">
          <div className="group relative">
            <Link
              href="/about"
              className="inline-flex items-center gap-1 py-2 text-[var(--mkff-ink)] hover:text-[var(--mkff-oxblood)]"
            >
              About MKFF <ChevronDown className="h-3.5 w-3.5" />
            </Link>
            <div className="invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 border border-[var(--mkff-border)] bg-[var(--mkff-cream)] opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              {aboutLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block border-b border-[var(--mkff-border-light)] px-5 py-3 text-[var(--mkff-ink)] last:border-b-0 hover:bg-white hover:text-[var(--mkff-oxblood)]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[var(--mkff-ink)] hover:text-[var(--mkff-oxblood)]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href="https://kectil.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--mkff-oxblood)] px-5 py-2.5 text-sm font-semibold text-[var(--mkff-cream)] hover:bg-[var(--mkff-maroon)]"
          >
            Apply to Kectil <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="-mr-2 p-2 text-[var(--mkff-ink)] lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-[var(--mkff-border)] bg-[var(--mkff-cream)] lg:hidden">
          <div className="container flex flex-col gap-1 py-4 text-base">
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="border-b border-[var(--mkff-border)] py-3 text-left text-[var(--mkff-ink)] hover:text-[var(--mkff-oxblood)]"
            >
              About MKFF
            </Link>
            {aboutLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-[var(--mkff-border)] py-3 pl-5 text-left text-sm text-[var(--mkff-charcoal)] hover:text-[var(--mkff-oxblood)]"
              >
                {link.label}
              </Link>
            ))}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-[var(--mkff-border)] py-3 text-left text-[var(--mkff-ink)] last:border-b-0 hover:text-[var(--mkff-oxblood)]"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://kectil.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-3 justify-center"
              onClick={() => setMobileOpen(false)}
            >
              Apply to Kectil <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
