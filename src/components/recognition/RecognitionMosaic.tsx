import type { RecognitionEntry, RecognitionGroup } from '../../data/types';
import type { LightboxContent } from '../primitives/Lightbox';
import { monogramFor, padIndex } from '../../lib/derive';
import { useViewMore } from '../../hooks/useViewMore';
import { Reveal } from '../primitives/Reveal';
import { ViewMoreButton } from '../primitives/ViewMoreButton';
import { PlaceholderImage } from '../primitives/PlaceholderImage';
import { GroupHeading } from './GroupHeading';

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

interface RecognitionMosaicProps {
  group: RecognitionGroup;
  onOpen: (content: LightboxContent) => void;
}

/**
 * Bento mosaic: portrait tiles span 1 column (3/4), landscape tiles span 2
 * on desktop (16/10). Entries without an image get a monogram placeholder.
 * Click opens the lightbox when a real image is present.
 */
export function RecognitionMosaic({ group, onOpen }: RecognitionMosaicProps) {
  const { visible, hasMore, hiddenCount, showAll } = useViewMore(group.items, group.initialVisible);
  const orgFirst = group.emphasis === 'org';
  const firstImageIndex = visible.findIndex((e) => Boolean(e.image));

  return (
    <div className="flex flex-col gap-7 lg:gap-8">
      <GroupHeading group={group} />
      <div className="grid auto-rows-auto grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4 md:gap-6 md:[grid-auto-flow:dense]">
        {visible.map((entry, i) => {
          const primary = orgFirst ? entry.org : entry.title;
          const secondary = orgFirst ? entry.title : entry.org;
          const variant = entry.imageVariant ?? 'landscape';
          const isPortrait = variant === 'portrait';
          const featured = i === firstImageIndex && Boolean(entry.image);
          const clickable = Boolean(entry.image);
          const Tag = clickable ? 'button' : 'div';

          return (
            <Reveal
              key={`${entry.title}-${entry.org}-${entry.date}`}
              delay={Math.min(i * 0.05, 0.3)}
              className={
                isPortrait
                  ? 'col-span-1'
                  : 'col-span-2 md:col-span-2'
              }
            >
              <Tag
                type={clickable ? 'button' : undefined}
                onClick={clickable ? () => onOpen(toLightbox(entry, orgFirst)) : undefined}
                className={`group flex h-full w-full flex-col gap-3 text-left ${
                  clickable ? 'cursor-pointer' : ''
                }`}
              >
                <div
                  className={`overflow-hidden rounded-xl border transition-[transform,border-color] duration-200 ${
                    featured
                      ? 'border-amber-deep/25 group-hover:-translate-y-1 group-hover:border-amber-deep/50'
                      : 'border-charcoal/10 group-hover:-translate-y-1 group-hover:border-amber-deep/40'
                  }`}
                >
                  <PlaceholderImage
                    image={entry.image}
                    label={`${entry.title} — ${entry.org}`}
                    monogram={monogramFor(primary)}
                    variant={variant}
                    className="!rounded-none transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex items-baseline justify-between gap-3">
                  <div className="font-mono text-[11px] tracking-[0.1em] text-amber-deep">
                    {entry.date}
                  </div>
                  <div
                    className={`font-mono text-[11px] tracking-[0.08em] text-taupe transition-colors group-hover:text-amber-deep ${
                      featured ? 'text-amber-deep/80' : ''
                    }`}
                  >
                    {padIndex(i)}
                  </div>
                </div>
                <div
                  className={`font-display font-semibold leading-[1.2] text-charcoal transition-colors group-hover:text-amber-deep ${
                    featured ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
                  }`}
                >
                  {primary}
                </div>
                <div
                  className={`text-sm ${
                    orgFirst ? 'font-medium text-amber-deep' : 'text-taupe'
                  }`}
                >
                  {secondary}
                </div>
                {!orgFirst && (
                  <p className="line-clamp-2 whitespace-pre-line text-sm leading-[1.55] text-taupe/80">
                    {entry.desc}
                  </p>
                )}
                {entry.link && (
                  <a
                    href={entry.link}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="mt-auto border-t border-charcoal/10 pt-3 font-mono text-xs tracking-[0.1em] text-amber-deep no-underline"
                  >
                    VIEW CREDENTIAL →
                  </a>
                )}
                {clickable && (
                  <span
                    aria-hidden="true"
                    className="font-mono text-xs text-taupe opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    VIEW ↗
                  </span>
                )}
              </Tag>
            </Reveal>
          );
        })}
      </div>
      {hasMore && <ViewMoreButton tone="light" hiddenCount={hiddenCount} onClick={showAll} />}
    </div>
  );
}
