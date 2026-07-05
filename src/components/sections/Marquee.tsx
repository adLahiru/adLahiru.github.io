interface MarqueeProps {
  items: string[];
}

export function Marquee({ items }: MarqueeProps) {
  const text = `${items.join(' ✦ ')} ✦ `;

  return (
    <div className="overflow-hidden bg-amber py-3.5 text-charcoal sm:py-[14px]">
      <div className="flex w-max animate-marquee whitespace-nowrap font-mono text-xs tracking-[0.1em] hover:[animation-play-state:paused] sm:text-sm sm:tracking-[0.12em]">
        <span className="pl-10">{text}</span>
        <span className="pl-10" aria-hidden="true">
          {text}
        </span>
      </div>
    </div>
  );
}
