import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import { ContactModal } from './ContactModal';

const ContactModalContext = createContext<{ open: () => void }>({ open: () => {} });

/** Single app-wide contact modal; any component can open it via useContactModal(). */
export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const value = useMemo(() => ({ open }), [open]);

  return (
    <ContactModalContext.Provider value={value}>
      {children}
      <ContactModal isOpen={isOpen} onClose={close} />
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  return useContext(ContactModalContext);
}
