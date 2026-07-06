interface ViewMoreButtonProps {
  onClick: () => void;
  hiddenCount: number;
  tone?: 'dark' | 'light';
  className?: string;
}

export function ViewMoreButton({
  onClick,
  hiddenCount,
  tone = 'dark',
  className = '',
}: ViewMoreButtonProps) {
  const toneClasses =
    tone === 'light'
      ? 'border-charcoal/25 text-charcoal hover:border-amber-deep hover:text-amber-deep'
      : 'border-white/25 text-cream hover:border-amber hover:text-amber';

  return (
    <button
      type="button"
      onClick={onClick}
      className={`self-center rounded-full border px-6 py-3 font-mono text-xs tracking-[0.12em] transition-colors ${toneClasses} ${className}`}
    >
      VIEW {hiddenCount} MORE ↓
    </button>
  );
}
