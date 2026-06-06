export function MKFFooter() {
  return (
    <footer className="mt-auto bg-[var(--mkff-maroon)] py-14 text-sm text-[var(--mkff-cream)] md:py-24">
      <div className="container">
        <div className="grid gap-12 border-b border-white/20 pb-16 lg:grid-cols-[520px_minmax(0,1fr)] lg:gap-16">
          <div className="flex flex-col gap-6">
            <div className="font-display text-6xl font-semibold leading-none">
              mkff.
            </div>
            <div className="max-w-md font-display text-[22px] font-light italic leading-8 text-white/80">
              Identifying and nurturing high-potential youth who will transform
              their communities and their countries.
            </div>
          </div>

          <div className="grid gap-10 pt-4 sm:grid-cols-3">
            <div>
              <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--mkff-gold)]">
                Foundation
              </div>
              <ul className="space-y-3 text-white/80">
                <li>
                  <a href="#mission" className="hover:text-white">
                    Our Mission
                  </a>
                </li>
                <li>
                  <a href="#leadership" className="hover:text-white">
                    Leadership
                  </a>
                </li>
                <li>
                  <a
                    href="https://projects.propublica.org/nonprofits/organizations/475203829"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    Annual Report
                  </a>
                </li>
                <li>
                  <a
                    href="https://projects.propublica.org/nonprofits/organizations/475203829"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    501(c)(3) Filings
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--mkff-gold)]">
                Program
              </div>
              <ul className="space-y-3 text-white/80">
                <li>
                  <a
                    href="https://kectil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    The Kectil Program
                  </a>
                </li>
                <li>
                  <a href="#program" className="hover:text-white">
                    Curriculum
                  </a>
                </li>
                <li>
                  <a
                    href="https://kectil.com/posts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    Alumni Network
                  </a>
                </li>
                <li>
                  <a
                    href="https://kectil.com/posts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    World Youth Podcast
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--mkff-gold)]">
                Contact
              </div>
              <ul className="space-y-3 text-white/80">
                <li>
                  <a href="mailto:info@mkff.org" className="hover:text-white">
                    info@mkff.org
                  </a>
                </li>
                <li>
                  <a href="tel:+17703350799" className="hover:text-white">
                    (770) 335-0799
                  </a>
                </li>
                <li>Atlanta, Georgia, USA</li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/the-malmar-knowles-family-foundation-the-kectil-program"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 pt-20 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-2">
            <div className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/50">
              The Kectil Program
            </div>
            <div className="font-display text-sm font-light italic leading-6 text-white/70">
              A free, one-year leadership program for 17–26 year-olds from
              developing nations. Apply at kectil.com.
            </div>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs font-medium text-white/60">
            <div>
              © 2015 – {new Date().getFullYear()} Malmar Knowles Family
              Foundation
            </div>
            <div>EIN: 47-5203829</div>
            <div>Privacy</div>
            <div>Terms</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
