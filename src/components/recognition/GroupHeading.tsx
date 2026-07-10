import type { RecognitionGroup } from '../../data/types';
import { Reveal } from '../primitives/Reveal';

export function GroupHeading({ group }: { group: RecognitionGroup }) {
  return (
    <Reveal className="flex items-baseline justify-between gap-4">
      <h3 className="font-display text-[22px] font-bold leading-[1.15] lg:text-[28px]">
        {group.heading}
      </h3>
      <div className="shrink-0 font-mono text-xs tracking-[0.1em] text-taupe">
        {String(group.items.length).padStart(2, '0')}{' '}
        {group.items.length === 1 ? 'ENTRY' : 'ENTRIES'}
      </div>
    </Reveal>
  );
}
