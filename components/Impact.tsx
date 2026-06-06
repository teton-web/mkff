"use client";

import { Users, Globe, Award, Heart } from "lucide-react";
import { StatCounter } from "./StatCounter";

export function Impact() {
  const stats = [
    { number: 20900, suffix: "+", label: "Youth Leaders Empowered", icon: Users },
    { number: 100, suffix: "+", label: "Developing Countries", icon: Globe },
    { number: 10, suffix: "", label: "Years of the Kectil Program", icon: Award },
    { number: 155, suffix: "", label: "Community Projects in 2025", icon: Heart },
  ];

  return (
    <section id="impact" className="section">
      <div className="container">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[3px] font-semibold text-[var(--mkff-teal)] mb-2">10 Years of Measurable Impact</div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-[var(--mkff-navy)]">By the Numbers</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="card p-8 text-center">
              <stat.icon className="mx-auto mb-4 h-6 w-6 text-[var(--mkff-teal)]" />
              <div className="text-5xl font-semibold tracking-tighter text-[var(--mkff-navy)] mb-2">
                <StatCounter end={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-medium text-[var(--mkff-text-muted)]">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-[var(--mkff-text-muted)] max-w-xl mx-auto">
          In 2025 alone, Kectil colleagues launched 155 community projects engaging over 1,500 participants. Alumni continue to lead at the UN, in local government, education, health, and social enterprise across the globe.
        </div>
      </div>
    </section>
  );
}
