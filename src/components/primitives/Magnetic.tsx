import type { MouseEvent, ReactNode } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { useMediaQuery } from '../../hooks/useMediaQuery';

interface MagneticProps {
  children: ReactNode;
  /** How far the child drifts toward the cursor (0–1 of the offset). */
  strength?: number;
  className?: string;
}

/**
 * Pulls its child toward the cursor while hovered and springs it back on
 * leave. Renders a plain wrapper on touch devices and for reduced motion.
 */
export function Magnetic({ children, strength = 0.3, className = '' }: MagneticProps) {
  const pointerFine = useMediaQuery('(pointer: fine)');
  const reducedMotion = useReducedMotion();
  const enabled = pointerFine && !reducedMotion;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15, mass: 0.2 });
  const sy = useSpring(y, { stiffness: 200, damping: 15, mass: 0.2 });

  if (!enabled) {
    return <div className={`inline-block ${className}`}>{children}</div>;
  }

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
