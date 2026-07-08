import type { RecognitionEntry, RecognitionGroup } from '../../data/types';
import { recognitionSection } from '../../data/content';
import { monogramFor } from '../../lib/derive';
import { useViewMore } from '../../hooks/useViewMore';
import { SectionLabel } from '../primitives/SectionLabel';
import { Card } from '../primitives/Card';
import { PlaceholderImage } from '../primitives/PlaceholderImage';
import { Reveal } from '../primitives/Reveal';
import { ViewMoreButton } from '../primitives/ViewMoreButton';

function FeatureCard({ entry, group }: { entry: RecognitionEntry; group: RecognitionGroup }) {
  const orgFirst = group.emphasis === 'org';
  const heading = orgFirst ? entry.org : entry.title;
  const subtitle = orgFirst ? entry.title : entry.org;

  return (
    <Card
      tone="light"
      className="grid h-full grid-cols-[120px_1fr] gap-4 p-4 sm:grid-cols-[160px_1fr] sm:gap-6 sm:p-6 lg:grid-cols-[220px_1fr] lg:gap-7"
    >
      <PlaceholderImage
        image={entry.image}
        label={`${entry.title} — ${entry.org}`}
        monogram={monogramFor(heading, entry.monogram)}
        variant={entry.imageVariant ?? group.defaultImageVariant}
      />
      <div className="flex flex-col gap-2">
        <div className="font-mono text-[11px] tracking-[0.1em] text-amber-deep sm:text-xs">
          {entry.date}
        </div>
        <h4 className="font-display text-lg font-semibold leading-[1.2] sm:text-xl lg:text-2xl">
          {heading}
        </h4>
        <div
          className={
            orgFirst
              ? 'text-sm font-semibold text-amber-deep sm:text-[15px]'
              : 'text-sm text-taupe sm:text-[15px]'
          }
        >
          {subtitle}
        </div>
        {!orgFirst && (
          <div className="whitespace-pre-line text-sm leading-[1.6] text-brown sm:text-[15px] sm:leading-[1.65]">
            {entry.desc}
          </div>
        )}
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

function CompactCard({ entry, group }: { entry: RecognitionEntry; group: RecognitionGroup }) {
  const orgFirst = group.emphasis === 'org';
  const heading = orgFirst ? entry.org : entry.title;
  const subtitle = orgFirst ? entry.title : entry.org;

  return (
    <Card tone="light" className="flex h-full flex-col gap-3 p-5">
      <PlaceholderImage
        image={entry.image}
        label={`${entry.title} — ${entry.org}`}
        monogram={monogramFor(heading, entry.monogram)}
        variant={entry.imageVariant ?? group.defaultImageVariant}
      />
      <div className="font-mono text-[11px] tracking-[0.1em] text-amber-deep">{entry.date}</div>
      <h4 className="font-display text-lg font-semibold leading-[1.2]">{heading}</h4>
      <div className={orgFirst ? 'text-sm font-semibold text-amber-deep' : 'text-sm text-taupe'}>
        {subtitle}
      </div>
      {!orgFirst && (
        <div className="flex-1 whitespace-pre-line text-sm leading-[1.6] text-brown">{entry.desc}</div>
      )}
      {entry.link && (
        <a
          href={entry.link}
          className="border-t border-charcoal/10 pt-3.5 font-mono text-xs tracking-[0.1em] text-amber-deep no-underline"
        >
          VIEW CREDENTIAL →
        </a>
      )}
    </Card>
  );
}

function RecognitionGroupBlock({ group, isFirst }: { group: RecognitionGroup; isFirst: boolean }) {
  const { visible, hasMore, hiddenCount, showAll } = useViewMore(group.items, group.initialVisible);
  const isFeature = group.layout === 'feature';

  return (
    <div
      className={`flex flex-col gap-7 lg:gap-8 ${
        isFirst ? '' : 'border-t border-charcoal/15 pt-12 lg:pt-14'
      }`}
    >
      <Reveal className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-[22px] font-bold leading-[1.15] lg:text-[28px]">
          {group.heading}
        </h3>
        <div className="shrink-0 font-mono text-xs tracking-[0.1em] text-taupe">
          {String(group.items.length).padStart(2, '0')}{' '}
          {group.items.length === 1 ? 'ENTRY' : 'ENTRIES'}
        </div>
      </Reveal>
      <div
        className={`grid grid-cols-1 gap-5 lg:gap-6 ${
          isFeature ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'
        }`}
      >
        {visible.map((entry, i) => (
          <Reveal
            key={`${entry.title}-${entry.org}`}
            direction={isFeature ? (i % 2 === 0 ? 'left' : 'right') : 'up'}
            delay={isFeature ? (i >> 1) * 0.08 : i * 0.06}
          >
            {isFeature ? (
              <FeatureCard entry={entry} group={group} />
            ) : (
              <CompactCard entry={entry} group={group} />
            )}
          </Reveal>
        ))}
      </div>
      {hasMore && <ViewMoreButton tone="light" hiddenCount={hiddenCount} onClick={showAll} />}
    </div>
  );
}

export function Recognition() {
  return (
    <section
      id="recognition"
      className="overflow-x-clip bg-white px-6 py-20 text-charcoal sm:px-10 lg:px-16 lg:py-24"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12 lg:gap-14">
        <Reveal className="flex flex-col gap-4">
          <SectionLabel tone="light">{recognitionSection.eyebrow}</SectionLabel>
          <h2 className="font-display text-[32px] font-bold leading-[1.1] lg:text-[48px] lg:leading-[1.05]">
            {recognitionSection.heading}
          </h2>
        </Reveal>
        {recognitionSection.groups.map((group, i) => (
          <RecognitionGroupBlock key={group.id} group={group} isFirst={i === 0} />
        ))}
      </div>
    </section>
  );
}
