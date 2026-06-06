"use client";

import React, { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

interface NavLink {
  label: string;
  id: string;
}

const navLinks: NavLink[] = [
  { label: "About", id: "about" },
  { label: "Impact", id: "impact" },
  { label: "The Program", id: "program" },
  { label: "Voices", id: "voices" },
  { label: "Leadership", id: "leadership" },
  { label: "Engage", id: "engage" },
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition - bodyRect - offset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  }
}

export function MKFFNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="nav sticky top-0 z-50 w-full">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--mkff-navy)] text-white text-xl font-semibold tracking-[-1px]">
            MKFF
          </div>
          <div>
            <div className="font-semibold tracking-tight text-[var(--mkff-navy)] text-lg">Malmar Knowles</div>
            <div className="text-[10px] text-[var(--mkff-text-muted)] -mt-1">FAMILY FOUNDATION</div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-9 text-sm font-medium">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToId(link.id)}
              className="text-[var(--mkff-text-muted)] hover:text-[var(--mkff-navy)] transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://kectil.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm px-6 py-2.5"
          >
            Apply to Kectil <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 -mr-2 text-[var(--mkff-navy)]"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="container flex flex-col py-4 gap-1 text-base">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  scrollToId(link.id);
                  setMobileOpen(false);
                }}
                className="py-3 text-left text-[var(--mkff-text-muted)] hover:text-[var(--mkff-navy)] border-b border-[var(--mkff-border)] last:border-b-0"
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
              Apply to Kectil <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
