"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";

interface NavLink {
  label: string;
  id: string;
}

const navLinks: NavLink[] = [
  { label: "Mission", id: "mission" },
  { label: "Kectil Program", id: "program" },
  { label: "Impact", id: "impact" },
  { label: "Leadership", id: "leadership" },
  { label: "Contact", id: "engage" },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView();
}

export function MKFFNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="nav sticky top-0 z-50 w-full">
      <div className="container flex h-[87px] items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-left"
          aria-label="Go to top"
        >
          <Image
            src="/mkff-logo.png"
            alt="MKFF — Malmar Knowles Family Foundation"
            width={400}
            height={229}
            priority
            className="h-12 w-auto"
          />
        </button>

        <div className="hidden items-center gap-9 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToId(link.id)}
              className="text-[var(--mkff-ink)] hover:text-[var(--mkff-oxblood)]"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden md:block">
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
          className="-mr-2 p-2 text-[var(--mkff-ink)] md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-[var(--mkff-border)] bg-[var(--mkff-cream)] md:hidden">
          <div className="container flex flex-col gap-1 py-4 text-base">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  scrollToId(link.id);
                  setMobileOpen(false);
                }}
                className="border-b border-[var(--mkff-border)] py-3 text-left text-[var(--mkff-ink)] last:border-b-0 hover:text-[var(--mkff-oxblood)]"
              >
                {link.label}
              </button>
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
