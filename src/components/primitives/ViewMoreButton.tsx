import { Magnetic } from './Magnetic';

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
    <Magnetic className={`self-center ${className}`}>
      <button
        type="button"
        onClick={onClick}
        className={`rounded-full border px-6 py-3 font-mono text-xs tracking-[0.12em] transition-colors ${toneClasses}`}
      >
        VIEW {hiddenCount} MORE ↓
      </button>
    </Magnetic>
  );
}
