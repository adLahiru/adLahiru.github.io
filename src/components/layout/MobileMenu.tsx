import { AnimatePresence, motion } from 'framer-motion';
import type { NavLink } from '../../data/types';
import { useContactModal } from '../contact/ContactModalProvider';

interface MobileMenuProps {
  isOpen: boolean;
  links: NavLink[];
  onNavigate: () => void;
}

export function MobileMenu({ isOpen, links, onNavigate }: MobileMenuProps) {
  const { open } = useContactModal();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="absolute inset-x-0 top-full border-b border-white/8 bg-ink/98 px-6 pb-8 pt-2 backdrop-blur-md md:hidden"
        >
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onNavigate}
                className="border-b border-white/5 py-4 text-lg text-cream no-underline"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => {
              onNavigate();
              open();
            }}
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-amber px-6 py-3.5 font-semibold text-charcoal"
          >
            Get in touch
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
