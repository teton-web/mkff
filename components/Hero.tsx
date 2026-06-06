"use client";

import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <header className="relative flex items-center justify-center bg-[var(--mkff-navy)] text-white pt-20 pb-24 md:pt-24 md:pb-28 overflow-hidden">
      <div className="container relative z-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs tracking-[2px] font-medium mb-6">
          EST. 2015 • ATLANTA, GEORGIA • 501(c)(3)
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[1.05] max-w-5xl mx-auto mb-6">
          Empowering the Next Generation<br className="hidden md:block" /> of Ethical Leaders from<br className="hidden md:block" /> Developing Countries
        </h1>

        <p className="max-w-2xl mx-auto text-xl md:text-2xl text-white/80 tracking-tight mb-10">
          The Malmar Knowles Family Foundation advances youth leadership, innovation, and ethical governance through the Kectil Program.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://kectil.com" target="_blank" rel="noopener noreferrer" className="btn-primary bg-white text-[var(--mkff-navy)] hover:bg-white/90 text-base px-8 py-3.5">
            Explore the Kectil Program <ArrowRight className="h-4 w-4" />
          </a>
          <button 
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: "start" })} 
            className="btn-secondary border-white/70 text-white hover:bg-white/10"
          >
            Learn About Our Mission
          </button>
        </div>

        {/* Trust bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 text-sm max-w-3xl mx-auto text-white/70">
          <div className="flex items-center justify-center gap-2">10 Years of Impact</div>
          <div className="flex items-center justify-center gap-2">20,900+ Youth Leaders</div>
          <div className="flex items-center justify-center gap-2">100+ Countries</div>
          <div className="flex items-center justify-center gap-2">100% Charitable</div>
        </div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:4px_4px]" />
    </header>
  );
}
