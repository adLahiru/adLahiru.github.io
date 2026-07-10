import { useRef, useState, type MouseEvent } from 'react';
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import type { RecognitionEntry, RecognitionGroup } from '../../data/types';
import type { LightboxContent } from '../primitives/Lightbox';
import { padIndex } from '../../lib/derive';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useViewMore } from '../../hooks/useViewMore';
import { Reveal } from '../primitives/Reveal';
import { ViewMoreButton } from '../primitives/ViewMoreButton';
import { GroupHeading } from './GroupHeading';

const PREVIEW_W = 300;
const PREVIEW_H = 225;

const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);

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

interface RecognitionRowsProps {
  group: RecognitionGroup;
  onOpen: (content: LightboxContent) => void;
}

/**
 * Editorial numbered rows: every row is the same height regardless of what
 * shape its photo is, because images never sit in the layout — they appear
 * in a fixed-size cursor-following preview (desktop), a uniform thumbnail
 * (touch), or the full-size lightbox on click.
 */
export function RecognitionRows({ group, onOpen }: RecognitionRowsProps) {
  const { visible, hasMore, hiddenCount, showAll } = useViewMore(group.items, group.initialVisible);
  const orgFirst = group.emphasis === 'org';

  const pointerFine = useMediaQuery('(pointer: fine)');
  const reducedMotion = useReducedMotion();
  const previewEnabled = pointerFine && !reducedMotion;

  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<RecognitionEntry | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 350, damping: 30 });
  const sy = useSpring(y, { stiffness: 350, damping: 30 });

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(clamp(e.clientX - rect.left + 28, 0, Math.max(0, rect.width - PREVIEW_W)));
    y.set(clamp(e.clientY - rect.top - PREVIEW_H / 2, 0, Math.max(0, rect.height - PREVIEW_H)));
  };

  return (
    <div className="flex flex-col gap-7 lg:gap-8">
      <GroupHeading group={group} />
      <div
        ref={containerRef}
        className="relative"
        onMouseMove={previewEnabled ? handleMove : undefined}
        onMouseLeave={previewEnabled ? () => setHovered(null) : undefined}
      >
        {visible.map((entry, i) => {
          const primary = orgFirst ? entry.org : entry.title;
          const secondary = orgFirst ? entry.title : entry.org;
          const clickable = Boolean(entry.image);
          const Tag = clickable ? 'button' : 'div';

          return (
            <Reveal key={`${entry.title}-${entry.org}`} delay={Math.min(i * 0.05, 0.3)}>
              <Tag
                type={clickable ? 'button' : undefined}
                onClick={clickable ? () => onOpen(toLightbox(entry, orgFirst)) : undefined}
                onMouseEnter={
                  previewEnabled
                    ? (e: MouseEvent<HTMLElement>) => {
                        setHovered(entry.image ? entry : null);
                        handleMove(e);
                      }
                    : undefined
                }
                className={`group grid w-full grid-cols-[2.5rem_1fr_auto] items-center gap-x-4 border-t border-charcoal/10 py-5 text-left last:border-b sm:gap-x-6 sm:py-6 ${
                  clickable ? 'cursor-pointer' : ''
                }`}
              >
                <div className="self-start pt-0.5 font-mono text-xs text-taupe transition-colors group-hover:text-amber-deep">
                  {padIndex(i)}
                </div>
                <div className="min-w-0">
                  <div className="font-display text-lg font-semibold leading-[1.2] text-charcoal transition-colors group-hover:text-amber-deep sm:text-xl lg:text-2xl">
                    {primary}
                  </div>
                  <div
                    className={`mt-1 text-sm ${
                      orgFirst ? 'font-medium text-amber-deep' : 'text-taupe'
                    }`}
                  >
                    {secondary}
                  </div>
                  {!orgFirst && (
                    <p className="mt-1.5 line-clamp-2 max-w-[60ch] whitespace-pre-line text-sm leading-[1.55] text-taupe/80">
                      {entry.desc}
                    </p>
                  )}
                  <div className="mt-1.5 font-mono text-[11px] tracking-[0.1em] text-amber-deep sm:hidden">
                    {entry.date}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="hidden font-mono text-[11px] tracking-[0.1em] text-amber-deep sm:block">
                    {entry.date}
                  </div>
                  {clickable && (
                    <>
                      <span
                        aria-hidden="true"
                        className="hidden font-mono text-xs text-taupe opacity-0 transition-opacity group-hover:opacity-100 pointer-fine:inline"
                      >
                        VIEW ↗
                      </span>
                      <img
                        src={entry.image}
                        alt=""
                        loading="lazy"
                        className="h-14 w-20 shrink-0 rounded-lg object-cover pointer-fine:hidden"
                      />
                    </>
                  )}
                </div>
              </Tag>
            </Reveal>
          );
        })}

        {previewEnabled && (
          <AnimatePresence>
            {hovered?.image && (
              <motion.div
                key="preview"
                aria-hidden="true"
                style={{ x: sx, y: sy, width: PREVIEW_W, height: PREVIEW_H }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { type: 'spring', stiffness: 260, damping: 20 },
                }}
                exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.18 } }}
                className="pointer-events-none absolute left-0 top-0 z-10 overflow-hidden rounded-xl shadow-2xl shadow-charcoal/30"
              >
                <AnimatePresence mode="popLayout">
                  <motion.img
                    key={hovered.image}
                    src={hovered.image}
                    alt=""
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="h-full w-full object-cover"
                  />
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
      {hasMore && <ViewMoreButton tone="light" hiddenCount={hiddenCount} onClick={showAll} />}
    </div>
  );
}
