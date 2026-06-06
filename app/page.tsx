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
      <MKFFNav />
      <Hero />
      <Mission />
      <Impact />
      <Program />
      <Leadership />
      <Engage />
      <MKFFooter />
    </div>
  );
}
