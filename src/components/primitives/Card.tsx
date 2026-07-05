import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  tone?: 'dark' | 'light';
  className?: string;
}

export function Card({ children, tone = 'dark', className = '' }: CardProps) {
  const toneClasses =
    tone === 'dark' ? 'bg-card-dark border-white/8' : 'bg-white/50 border-charcoal/15';

  return (
    <div
      className={`rounded-2xl border transition-[transform,border-color] duration-200 hover:-translate-y-1 hover:border-amber/40 ${toneClasses} ${className}`}
    >
      {children}
    </div>
  );
}
