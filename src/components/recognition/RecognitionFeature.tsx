import type { RecognitionEntry, RecognitionGroup } from '../../data/types';
import type { LightboxContent } from '../primitives/Lightbox';
import { monogramFor } from '../../lib/derive';
import { useViewMore } from '../../hooks/useViewMore';
import { Card } from '../primitives/Card';
import { PlaceholderImage } from '../primitives/PlaceholderImage';
import { Reveal } from '../primitives/Reveal';
import { ViewMoreButton } from '../primitives/ViewMoreButton';
import { GroupHeading } from './GroupHeading';

function toLightbox(entry: RecognitionEntry): LightboxContent {
  return {
    image: entry.image!,
    alt: `${entry.title} — ${entry.org}`,
    title: entry.title,
    org: entry.org,
    date: entry.date,
    desc: entry.desc,
    link: entry.link,
  };
}

function FeatureCard({
  entry,
  group,
  onOpen,
}: {
  entry: RecognitionEntry;
  group: RecognitionGroup;
  onOpen: (content: LightboxContent) => void;
}) {
  const clickable = Boolean(entry.image);
  const variant = entry.imageVariant ?? group.defaultImageVariant ?? 'portrait';

  return (
    <Card
      tone="light"
      className="grid h-full grid-cols-[120px_1fr] gap-4 p-4 sm:grid-cols-[160px_1fr] sm:gap-6 sm:p-6 lg:grid-cols-[220px_1fr] lg:gap-7"
    >
      <button
        type="button"
        disabled={!clickable}
        onClick={clickable ? () => onOpen(toLightbox(entry)) : undefined}
        className={`min-w-0 text-left ${clickable ? 'cursor-pointer' : 'cursor-default'}`}
      >
        <PlaceholderImage
          image={entry.image}
          label={`${entry.title} — ${entry.org}`}
          monogram={monogramFor(entry.title, entry.monogram)}
          variant={variant}
        />
      </button>
      <div className="flex min-w-0 flex-col gap-2">
        <div className="font-mono text-[11px] tracking-[0.1em] text-amber-deep sm:text-xs">
          {entry.date}
        </div>
        <h4 className="font-display text-lg font-semibold leading-[1.2] sm:text-xl lg:text-2xl">
          {entry.title}
        </h4>
        <div className="text-sm text-taupe sm:text-[15px]">{entry.org}</div>
        <div className="whitespace-pre-line text-sm leading-[1.6] text-brown sm:text-[15px] sm:leading-[1.65]">
          {entry.desc}
        </div>
        {entry.link && (
          <a
            href={entry.link}
            className="mt-auto pt-2 font-mono text-xs tracking-[0.1em] text-amber-deep no-underline"
          >
            VIEW CREDENTIAL →
          </a>
        )}
      </div>
    </Card>
  );
}

interface RecognitionFeatureProps {
  group: RecognitionGroup;
  onOpen: (content: LightboxContent) => void;
}

/**
 * Original awards layout: wide horizontal feature cards (image left, copy
 * right) in a 2-column grid with alternating left/right reveals.
 */
export function RecognitionFeature({ group, onOpen }: RecognitionFeatureProps) {
  const { visible, hasMore, hiddenCount, showAll } = useViewMore(group.items, group.initialVisible);

  return (
    <div className="flex flex-col gap-7 lg:gap-8">
      <GroupHeading group={group} />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
        {visible.map((entry, i) => (
          <Reveal
            key={`${entry.title}-${entry.org}`}
            direction={i % 2 === 0 ? 'left' : 'right'}
            delay={(i >> 1) * 0.08}
          >
            <FeatureCard entry={entry} group={group} onOpen={onOpen} />
          </Reveal>
        ))}
      </div>
      {hasMore && <ViewMoreButton tone="light" hiddenCount={hiddenCount} onClick={showAll} />}
    </div>
  );
}
