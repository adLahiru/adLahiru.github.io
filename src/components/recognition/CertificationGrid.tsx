import type { RecognitionGroup } from '../../data/types';
import type { LightboxContent } from '../primitives/Lightbox';
import { useViewMore } from '../../hooks/useViewMore';
import { Reveal } from '../primitives/Reveal';
import { ViewMoreButton } from '../primitives/ViewMoreButton';
import { GroupHeading } from './GroupHeading';

interface CertificationGridProps {
  group: RecognitionGroup;
  onOpen: (content: LightboxContent) => void;
}

/**
 * Uniform landscape grid — every certificate sits in an identical 16:10
 * frame; clicking opens the full uncropped image in the lightbox.
 */
export function CertificationGrid({ group, onOpen }: CertificationGridProps) {
  const { visible, hasMore, hiddenCount, showAll } = useViewMore(group.items, group.initialVisible);
  const orgFirst = group.emphasis === 'org';

  return (
    <div className="flex flex-col gap-7 lg:gap-8">
      <GroupHeading group={group} />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((entry, i) => {
          const primary = orgFirst ? entry.org : entry.title;
          const secondary = orgFirst ? entry.title : entry.org;

          return (
            <Reveal key={`${entry.title}-${entry.org}`} delay={Math.min((i % 3) * 0.06, 0.3)}>
              <button
                type="button"
                onClick={() =>
                  entry.image &&
                  onOpen({
                    image: entry.image,
                    alt: `${entry.title} — ${entry.org}`,
                    title: primary,
                    org: secondary,
                    date: entry.date,
                    desc: entry.desc,
                    link: entry.link,
                  })
                }
                className="group flex w-full cursor-pointer flex-col gap-3 text-left"
              >
                {entry.image && (
                  <div className="aspect-[16/10] w-full overflow-hidden rounded-xl border border-charcoal/10 transition-[transform,border-color] duration-200 group-hover:-translate-y-1 group-hover:border-amber-deep/40">
                    <img
                      src={entry.image}
                      alt={`${entry.title} — ${entry.org}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                    />
                  </div>
                )}
                <div className="font-mono text-[11px] tracking-[0.1em] text-amber-deep">
                  {entry.date}
                </div>
                <div className="font-display text-lg font-semibold leading-[1.2] transition-colors group-hover:text-amber-deep">
                  {primary}
                </div>
                <div className={orgFirst ? 'text-sm font-medium text-amber-deep' : 'text-sm text-taupe'}>
                  {secondary}
                </div>
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
              </button>
            </Reveal>
          );
        })}
      </div>
      {hasMore && <ViewMoreButton tone="light" hiddenCount={hiddenCount} onClick={showAll} />}
    </div>
  );
}
