import { useEffect } from 'react';
import { getLenis } from '../lib/lenis';

/**
 * Freezes page scroll while a modal is open: pads for the vanishing
 * scrollbar so the page doesn't shift, and stops Lenis so wheel momentum
 * already in flight can't keep animating underneath the overlay.
 */
export function useModalLock(active: boolean): void {
  useEffect(() => {
    if (!active) return;

    const { overflow, paddingRight } = document.body.style;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    getLenis()?.stop();

    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
      getLenis()?.start();
    };
  }, [active]);
}
