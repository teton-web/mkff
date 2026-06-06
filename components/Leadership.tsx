"use client";

import { Users } from "lucide-react";

export function Leadership() {
  const leaders = [
    {
      name: "Sherry M. Knowles",
      role: "Founder, President & Executive Director",
      bio: "Intellectual property attorney and former Senior Vice President & Chief Patent Counsel at GlaxoSmithKline. Extensive work with WIPO on technology transfer and access to medicines in developing countries. Creator of the Kectil Program.",
    },
    {
      name: "Brooke M. Shafer",
      role: "Director",
      bio: "Director of the Malmar Knowles Family Foundation. Works alongside the Executive Director on strategy, operations, and global program delivery.",
    },
    {
      name: "Christopher Zalesky",
      role: "Director",
      bio: "Director providing governance and strategic oversight for the Foundation’s mission and long-term sustainability.",
    },
  ];

  return (
    <section id="leadership" className="section bg-white border-y">
      <div className="container">
        <div className="max-w-2xl mb-10">
          <div className="uppercase text-xs tracking-[3px] font-semibold text-[var(--mkff-teal)] mb-2">Volunteer Leadership</div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-[var(--mkff-navy)]">Governance & Transparency</h2>
          <p className="mt-4 text-lg text-[var(--mkff-text-muted)]">
            All officers and directors serve without compensation. 100% of charitable disbursements go directly to programs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {leaders.map((leader, index) => (
            <div key={index} className="card p-7">
              <div className="h-20 w-20 rounded-full bg-[var(--mkff-navy)]/5 mb-6 flex items-center justify-center">
                <Users className="h-9 w-9 text-[var(--mkff-navy)]" />
              </div>
              <div className="font-semibold text-xl tracking-tight text-[var(--mkff-navy)]">{leader.name}</div>
              <div className="text-[var(--mkff-teal)] text-sm font-medium mb-4">{leader.role}</div>
              <p className="text-sm text-[var(--mkff-text-muted)] leading-relaxed">{leader.bio}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-sm text-[var(--mkff-text-muted)]">
          Latest Form 990-PF and financial details are publicly available on{" "}
          <a href="https://projects.propublica.org/nonprofits/organizations/475203829" target="_blank" rel="noopener noreferrer" className="font-medium underline hover:text-[var(--mkff-navy)]">
            ProPublica Nonprofit Explorer
          </a>. EIN: 47-5203829. MKFF is a private foundation organized under the laws of Georgia, USA.
        </div>
      </div>
    </section>
  );
}
