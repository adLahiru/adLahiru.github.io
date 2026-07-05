interface PlaceholderImageProps {
  image?: string;
  label: string;
  monogram: string;
  variant: 'landscape' | 'portrait';
  className?: string;
}

export function PlaceholderImage({
  image,
  label,
  monogram,
  variant,
  className = '',
}: PlaceholderImageProps) {
  const aspect = variant === 'landscape' ? 'aspect-[16/10]' : 'aspect-[3/4]';

  if (image) {
    return (
      <img
        src={image}
        alt={label}
        loading="lazy"
        className={`w-full ${aspect} rounded-[10px] object-cover ${className}`}
      />
    );
  }

  const isLandscape = variant === 'landscape';
  const gradient = isLandscape
    ? 'linear-gradient(135deg, #E8A33D 0%, #C77E1F 45%, #14181F 100%)'
    : 'linear-gradient(135deg, #F2EEE4 0%, #E8A33D 60%, #C77E1F 100%)';
  const monogramColor = isLandscape ? 'rgba(242,238,228,0.28)' : 'rgba(20,24,31,0.22)';
  const patternColor = isLandscape ? '#F2EEE4' : '#14181F';

  return (
    <div
      role="img"
      aria-label={label}
      className={`relative w-full ${aspect} overflow-hidden rounded-[10px] ${className}`}
      style={{ backgroundImage: gradient }}
    >
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, ${patternColor} 0, ${patternColor} 1px, transparent 1px, transparent 12px)`,
        }}
      />
      <span
        className="absolute inset-0 flex select-none items-center justify-center font-display font-extrabold"
        style={{ fontSize: 'clamp(2.25rem, 6vw, 4.5rem)', color: monogramColor }}
      >
        {monogram}
      </span>
    </div>
  );
}
