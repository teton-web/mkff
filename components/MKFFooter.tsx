export function MKFFooter() {
  return (
    <footer className="mt-auto border-t bg-white py-12 text-sm">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-y-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--mkff-navy)] text-white text-sm font-semibold">MKFF</div>
              <span className="font-semibold tracking-tight text-[var(--mkff-navy)]">Malmar Knowles Family Foundation</span>
            </div>
            <address className="not-italic text-[var(--mkff-text-muted)] leading-relaxed">
              400 Perimeter Center Terrace, Suite 200<br />
              Atlanta, Georgia 30346 USA<br />
              (770) 335-0799
            </address>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-8 text-[var(--mkff-text-muted)]">
            <div>
              <div className="font-medium text-[var(--mkff-navy)] mb-3">Resources</div>
              <ul className="space-y-1.5">
                <li><a href="https://kectil.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--mkff-navy)]">Kectil Program</a></li>
                <li><a href="https://kectil.com/posts" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--mkff-navy)]">News & Stories</a></li>
                <li><a href="https://projects.propublica.org/nonprofits/organizations/475203829" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--mkff-navy)]">Financials (ProPublica)</a></li>
              </ul>
            </div>
            <div>
              <div className="font-medium text-[var(--mkff-navy)] mb-3">Connect</div>
              <ul className="space-y-1.5">
                <li><a href="https://kectil.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--mkff-navy)]">kectil.com</a></li>
                <li><a href="https://www.linkedin.com/company/the-malmar-knowles-family-foundation-the-kectil-program" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--mkff-navy)]">LinkedIn</a></li>
                <li><a href="https://www.instagram.com/thekectilprogram/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--mkff-navy)]">Instagram</a></li>
              </ul>
            </div>
            <div>
              <div className="font-medium text-[var(--mkff-navy)] mb-3">Legal</div>
              <ul className="space-y-1.5 text-[13px]">
                <li>EIN: 47-5203829</li>
                <li>501(c)(3) Private Foundation</li>
                <li>Tax-deductible contributions (U.S.)</li>
                <li className="pt-1">© {new Date().getFullYear()} Malmar Knowles Family Foundation, Inc.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-[11px] text-[var(--mkff-text-muted)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            This site is a one-page informational resource for the Foundation. The Kectil Program and applications are managed at kectil.com.
          </div>
          <div className="text-right">Built with care for global youth leadership.</div>
        </div>
      </div>
    </footer>
  );
}
