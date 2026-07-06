import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

type RevealDirection = 'up' | 'left' | 'right';

const hiddenOffset: Record<RevealDirection, { x?: number; y?: number }> = {
  up: { y: 24 },
  left: { x: -56 },
  right: { x: 56 },
};

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
}

export function Reveal({ children, className = '', delay = 0, direction = 'up' }: RevealProps) {
  const variants: Variants = {
    hidden: { opacity: 0, ...hiddenOffset[direction] },
    show: { opacity: 1, x: 0, y: 0 },
  };
  const transition =
    direction === 'up'
      ? { duration: 0.5, ease: 'easeOut' as const, delay }
      : { type: 'spring' as const, stiffness: 90, damping: 16, delay };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
