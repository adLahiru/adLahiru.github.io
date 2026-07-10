import Lenis from 'lenis';

let lenis: Lenis | null = null;
let rafId = 0;

/**
 * Starts the site-wide smooth-scroll loop. Returns a cleanup function so the
 * caller's useEffect stays StrictMode-safe. No-ops (native scrolling) when
 * the visitor prefers reduced motion.
 */
export function initLenis(): () => void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return () => {};
  }

  lenis = new Lenis({ anchors: true });

  const raf = (time: number) => {
    lenis?.raf(time);
    rafId = requestAnimationFrame(raf);
  };
  rafId = requestAnimationFrame(raf);

  return () => {
    cancelAnimationFrame(rafId);
    lenis?.destroy();
    lenis = null;
  };
}

/** Modal scroll-locking needs stop()/start(); null when reduced motion. */
export function getLenis(): Lenis | null {
  return lenis;
}
