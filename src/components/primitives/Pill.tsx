import type { ReactNode } from 'react';

type PillVariant = 'filled' | 'outline' | 'tag-dark' | 'tag-outline';

interface PillProps {
  children: ReactNode;
  variant?: PillVariant;
  className?: string;
}

const variantClasses: Record<PillVariant, string> = {
  filled: 'bg-amber text-charcoal font-semibold',
  outline: 'border border-white/25 text-cream font-medium',
  'tag-dark': 'bg-charcoal text-cream font-mono text-[12.5px]',
  'tag-outline': 'border border-amber/50 text-amber font-mono text-xs',
};

export function Pill({ children, variant = 'tag-dark', className = '' }: PillProps) {
  return (
    <span
      className={`inline-flex items-center whitespace-nowrap rounded-full px-3.5 py-1.5 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
