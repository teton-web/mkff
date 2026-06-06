"use client";

import { ArrowRight } from "lucide-react";

export function Voices() {
  const stories = [
    {
      tag: "2025 ALUMNI ESSAY COMPETITION",
      quote: "Empowered Youth, Transformed Communities: Harnessing Technology with Leadership and Vision.",
      detail: "Winners from Nigeria, Brazil, Democratic Republic of the Congo, and Papua New Guinea. Essays demonstrated how principled leadership + technology can solve local challenges at scale.",
    },
    {
      tag: "2025 COMMUNITY PROJECTS",
      quote: null,
      detail: "155 teams turned ideas into action across mental health, education access, menstrual hygiene, environmental sustainability, food security, and women’s empowerment. Projects included “Kibera Eco Warriors”, “Every Child Deserves Education”, and “Zero Plastic Mission”.",
    },
    {
      tag: "GLOBAL ADVOCACY",
      quote: null,
      detail: "MKFF and Kectil participated in the high-level UNICEF event “A Future at Risk” during UNGA80 at UNICEF House in New York, alongside Her Majesty Queen Silvia, ministers, and youth advocates. Executive Director Sherry Knowles and Director Brooke Shafer represented the foundation.",
    },
  ];

  return (
    <section id="voices" className="section">
      <div className="container">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="text-xs uppercase tracking-[3px] font-semibold text-[var(--mkff-teal)] mb-1">Real Impact</div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-[var(--mkff-navy)]">Voices of Kectil Colleagues</h2>
          </div>
          <a href="https://kectil.com/posts" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center text-sm font-medium text-[var(--mkff-teal)] hover:underline">
            Read more stories on kectil.com <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story, idx) => (
            <div key={idx} className="card p-7">
              <div className="text-xs text-[var(--mkff-teal)] font-semibold tracking-wider mb-3">{story.tag}</div>
              {story.quote && (
                <p className="italic text-[var(--mkff-text)] mb-6 prose-quote">“{story.quote}”</p>
              )}
              <div className="text-sm text-[var(--mkff-text-muted)]">{story.detail}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <a href="https://kectil.com/posts" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[var(--mkff-teal)] inline-flex items-center hover:underline">
            More stories and news on kectil.com <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
