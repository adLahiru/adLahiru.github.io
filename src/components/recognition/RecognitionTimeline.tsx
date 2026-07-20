import type { RecognitionEntry, RecognitionGroup } from '../../data/types';
import type { LightboxContent } from '../primitives/Lightbox';
import { monogramFor } from '../../lib/derive';
import { useViewMore } from '../../hooks/useViewMore';
import { Reveal } from '../primitives/Reveal';
import { ViewMoreButton } from '../primitives/ViewMoreButton';
import { GroupHeading } from './GroupHeading';

/** Portrait 3:4 frame — every timeline media tile shares the same aspect. */
const IMAGE_FRAME =
  'aspect-[1/1] w-full max-w-[260px] overflow-hidden rounded-xl border border-charcoal/10 sm:max-w-[280px] lg:max-w-[300px]';

function toLightbox(entry: RecognitionEntry, orgFirst: boolean): LightboxContent {
  return {
    image: entry.image!,
    alt: `${entry.title} — ${entry.org}`,
    title: orgFirst ? entry.org : entry.title,
    org: orgFirst ? entry.title : entry.org,
    date: entry.date,
    desc: entry.desc,
    link: entry.link,
  };
}

function TimelineMedia({
  entry,
  primary,
  clickable,
  onOpen,
  align = 'left',
}: {
  entry: RecognitionEntry;
  primary: string;
  clickable: boolean;
  onOpen: () => void;
  align?: 'left' | 'right';
}) {
  const Tag = clickable ? 'button' : 'div';

  return (
    <Tag
      type={clickable ? 'button' : undefined}
      onClick={clickable ? onOpen : undefined}
      className={`group block w-full text-left ${clickable ? 'cursor-pointer' : ''} ${
        align === 'right' ? 'md:flex md:justify-end' : ''
      }`}
    >
      <div
        className={`${IMAGE_FRAME} transition-[transform,border-color] duration-200 group-hover:-translate-y-0.5 group-hover:border-amber-deep/40 ${
          align === 'right' ? 'md:ml-auto' : ''
        }`}
      >
        {entry.image ? (
          <img
            src={entry.image}
            alt={`${entry.title} — ${entry.org}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div
            role="img"
            aria-label={primary}
            className="relative flex h-full w-full items-center justify-center"
            style={{
              backgroundImage: 'linear-gradient(135deg, #E8A33D 0%, #C77E1F 45%, #14181F 100%)',
            }}
          >
            <span className="select-none font-display text-5xl font-extrabold text-cream/30 sm:text-6xl">
              {monogramFor(primary)}
            </span>
          </div>
        )}
      </div>
    </Tag>
  );
}

function TimelineCopy({
  entry,
  primary,
  secondary,
  align,
  orgFirst,
}: {
  entry: RecognitionEntry;
  primary: string;
  secondary: string;
  align: 'left' | 'right';
  orgFirst: boolean;
}) {
  return (
    <div
      className={`rounded-xl border border-charcoal/8 bg-white px-5 py-5 shadow-[0_8px_30px_rgba(20,24,31,0.06)] sm:px-6 sm:py-6 ${
        align === 'right' ? 'md:text-right' : 'text-left'
      }`}
    >
      <div className="font-mono text-[11px] tracking-[0.1em] text-amber-deep">{entry.date}</div>
      <h4 className="mt-2 font-display text-lg font-semibold leading-[1.25] text-charcoal sm:text-xl">
        {primary}
      </h4>
      <div
        className={`mt-1 text-sm ${orgFirst ? 'font-medium text-amber-deep' : 'text-taupe'}`}
      >
        {secondary}
      </div>
      <p className="mt-2 whitespace-pre-line text-sm leading-[1.6] text-taupe sm:text-[15px]">
        {entry.desc}
      </p>
      {entry.link && (
        <a
          href={entry.link}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-block font-mono text-xs tracking-[0.1em] text-amber-deep no-underline"
        >
          VIEW CREDENTIAL →
        </a>
      )}
    </div>
  );
}

interface RecognitionTimelineProps {
  group: RecognitionGroup;
  onOpen: (content: LightboxContent) => void;
}

/**
 * Alternating vertical timeline: center spine + equal-height media.
 * First entry is image-left / copy-right; subsequent entries flip sides.
 */
export function RecognitionTimeline({ group, onOpen }: RecognitionTimelineProps) {
  const { visible, hasMore, hiddenCount, showAll } = useViewMore(group.items, group.initialVisible);
  const orgFirst = group.emphasis === 'org';

  return (
    <div className="flex flex-col gap-7 lg:gap-8">
      <GroupHeading group={group} />
      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-4 left-1/2 top-4 hidden w-px -translate-x-1/2 bg-charcoal/15 md:block"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-4 left-[7px] top-4 w-px bg-charcoal/15 md:hidden"
        />

        <div className="flex flex-col gap-10 md:gap-14">
          {visible.map((entry, i) => {
            const primary = orgFirst ? entry.org : entry.title;
            const secondary = orgFirst ? entry.title : entry.org;
            const imageLeft = i % 2 === 0;
            const clickable = Boolean(entry.image);
            const open = () => onOpen(toLightbox(entry, orgFirst));

            return (
              <Reveal
                key={`${entry.title}-${entry.org}-${entry.date}`}
                delay={Math.min(i * 0.06, 0.3)}
              >
                <div className="relative flex gap-5 md:hidden">
                  <div className="relative z-10 mt-6 flex shrink-0 flex-col items-center">
                    <span className="h-3.5 w-3.5 rounded-full border-2 border-white bg-amber-deep shadow-[0_0_0_3px_rgba(199,126,31,0.2)]" />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col gap-4">
                    <TimelineMedia
                      entry={entry}
                      primary={primary}
                      clickable={clickable}
                      onOpen={open}
                    />
                    <TimelineCopy
                      entry={entry}
                      primary={primary}
                      secondary={secondary}
                      align="left"
                      orgFirst={orgFirst}
                    />
                  </div>
                </div>

                <div className="relative hidden md:grid md:grid-cols-[1fr_2.5rem_1fr] md:items-center md:gap-x-8 lg:gap-x-10">
                  <div>
                    {imageLeft ? (
                      <TimelineMedia
                        entry={entry}
                        primary={primary}
                        clickable={clickable}
                        onOpen={open}
                        align="right"
                      />
                    ) : (
                      <TimelineCopy
                        entry={entry}
                        primary={primary}
                        secondary={secondary}
                        align="right"
                        orgFirst={orgFirst}
                      />
                    )}
                  </div>
                  <div className="relative z-10 flex items-center justify-center">
                    <span className="h-3.5 w-3.5 rounded-full border-2 border-white bg-amber-deep shadow-[0_0_0_3px_rgba(199,126,31,0.2)]" />
                  </div>
                  <div>
                    {imageLeft ? (
                      <TimelineCopy
                        entry={entry}
                        primary={primary}
                        secondary={secondary}
                        align="left"
                        orgFirst={orgFirst}
                      />
                    ) : (
                      <TimelineMedia
                        entry={entry}
                        primary={primary}
                        clickable={clickable}
                        onOpen={open}
                        align="left"
                      />
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
      {hasMore && <ViewMoreButton tone="light" hiddenCount={hiddenCount} onClick={showAll} />}
    </div>
  );
}
