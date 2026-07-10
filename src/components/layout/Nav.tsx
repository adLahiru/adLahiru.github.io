import { useState } from 'react';
import { nav } from '../../data/content';
import { useScrolled } from '../../hooks/useScrolled';
import { useContactModal } from '../contact/ContactModalProvider';
import { Magnetic } from '../primitives/Magnetic';
import { MobileMenu } from './MobileMenu';

export function Nav() {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);
  const { open } = useContactModal();

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink/85 backdrop-blur-md border-b border-white/8' : 'bg-transparent'
      }`}
    >
      <div className="relative mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 sm:px-10 lg:px-16 lg:py-7">
        <a href="#top" className="font-mono text-base font-semibold text-cream no-underline sm:text-lg">
          Lahiru <span className="text-amber">Dilshan</span>
        </a>

        <nav className="hidden items-center gap-9 md:flex md:gap-5 lg:gap-9">
          {nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] text-muted no-underline transition-colors hover:text-cream"
            >
              {link.label}
            </a>
          ))}
          <Magnetic>
            <button
              type="button"
              onClick={open}
              className="rounded-full bg-amber px-[22px] py-[10px] text-[15px] font-semibold text-charcoal transition-opacity hover:opacity-90"
            >
              Get in touch
            </button>
          </Magnetic>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="flex flex-col gap-1.5 p-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-cream transition-transform duration-200 ${
              menuOpen ? 'translate-y-[3.5px] rotate-45' : ''
            }`}
          />
          <span
            className={`h-0.5 w-4 self-end bg-amber transition-transform duration-200 ${
              menuOpen ? '-translate-y-[3.5px] w-6 -rotate-45' : ''
            }`}
          />
        </button>

        <MobileMenu isOpen={menuOpen} links={nav} onNavigate={() => setMenuOpen(false)} />
      </div>
    </header>
  );
}
