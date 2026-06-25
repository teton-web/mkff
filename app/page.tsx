import { MKFFNav } from "@/components/MKFFNav";
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { Impact } from "@/components/Impact";
import { Program } from "@/components/Program";
import { Leadership } from "@/components/Leadership";
import { Engage } from "@/components/Engage";
import { MKFFooter } from "@/components/MKFFooter";

export default function MKFFOnePage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-[var(--mkff-oxblood)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[var(--mkff-cream)]"
      >
        Skip to content
      </a>
      <MKFFNav />
      <main id="main">
        <Hero />
        <Mission />
        <Impact />
        <Program />
        <Leadership />
        <Engage />
      </main>
      <MKFFooter />
    </div>
  );
}
