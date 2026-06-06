import { MKFFNav } from "@/components/MKFFNav";
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { Impact } from "@/components/Impact";
import { Program } from "@/components/Program";
import { Voices } from "@/components/Voices";
import { Leadership } from "@/components/Leadership";
import { ContactForm } from "@/components/ContactForm";
import { MKFFooter } from "@/components/MKFFooter";

export default function MKFFOnePage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <MKFFNav />
      <Hero />
      <Mission />
      <Impact />
      <Program />
      <Voices />
      <Leadership />

      {/* ENGAGE section with form */}
      <section id="engage" className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="text-xs uppercase tracking-[3px] text-[var(--mkff-teal)] font-semibold mb-2">Join the Movement</div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-[var(--mkff-navy)] mb-4">How You Can Engage with MKFF</h2>
            <p className="text-lg text-[var(--mkff-text-muted)]">Whether you are a young leader ready to apply, an organization seeking partnership, or someone who wants to support this work, we welcome you.</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Quick pathways */}
            <div className="lg:col-span-2 space-y-4 text-sm">
              <div className="card p-6">
                <div className="font-semibold mb-1 text-[var(--mkff-navy)]">Young leaders (ages 17–26)</div>
                <p className="text-[var(--mkff-text-muted)] mb-3">From developing and least-developed countries with a demonstrated passion for leadership, scholarship, or innovation.</p>
                <a href="https://kectil.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-medium text-[var(--mkff-teal)]">Apply at kectil.com →</a>
              </div>
              <div className="card p-6">
                <div className="font-semibold mb-1 text-[var(--mkff-navy)]">Partners & Institutions</div>
                <p className="text-[var(--mkff-text-muted)]">We collaborate with universities, NGOs, governments, and foundations committed to youth leadership and development.</p>
              </div>
              <div className="card p-6">
                <div className="font-semibold mb-1 text-[var(--mkff-navy)]">Alumni & Network</div>
                <p className="text-[var(--mkff-text-muted)]">Stay connected through the Kectil Alumni Network, regional chapters, the Kectil World Youth Network podcast, and ongoing community projects.</p>
              </div>
            </div>

            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <MKFFooter />
    </div>
  );
}
