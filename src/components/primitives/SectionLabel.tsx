import type { ReactNode } from 'react';

interface SectionLabelProps {
  children: ReactNode;
  tone?: 'dark' | 'light';
  className?: string;
}

export function SectionLabel({ children, tone = 'dark', className = '' }: SectionLabelProps) {
  return (
    <div
      className={`font-mono text-[13px] tracking-[0.18em] ${
        tone === 'dark' ? 'text-amber' : 'text-amber-deep'
      } ${className}`}
    >
      {children}
    </div>
  );
}
