import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'filled' | 'outline';
  download?: boolean | string;
  external?: boolean;
  className?: string;
}

export function Button({
  href,
  children,
  variant = 'filled',
  download,
  external,
  className = '',
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center whitespace-nowrap rounded-full px-8 py-4 text-base no-underline transition-colors duration-200';
  const variantClasses =
    variant === 'filled'
      ? 'bg-amber text-charcoal font-semibold hover:bg-amber/90'
      : 'border border-white/25 text-cream font-medium hover:border-white/50';

  return (
    <motion.a
      href={href}
      download={download}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${variantClasses} ${className}`}
    >
      {children}
    </motion.a>
  );
}
