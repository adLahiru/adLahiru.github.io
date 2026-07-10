import { useRef } from 'react';
import { ModalShell } from './ModalShell';

export interface LightboxContent {
  image: string;
  alt: string;
  title: string;
  org?: string;
  date?: string;
  desc?: string;
  link?: string;
  linkLabel?: string;
}

interface LightboxProps {
  content: LightboxContent | null;
  onClose: () => void;
}

/**
 * Full-size uncropped image viewer with a caption bar. Pass `null` to close;
 * the last content is retained so the exit animation doesn't blank out.
 */
export function Lightbox({ content, onClose }: LightboxProps) {
  const lastContent = useRef<LightboxContent | null>(null);
  if (content) lastContent.current = content;
  const shown = content ?? lastContent.current;

  return (
    <ModalShell
      isOpen={content !== null}
      onClose={onClose}
      label={shown ? `${shown.title} — full image` : 'Image viewer'}
      panelClassName="flex max-h-[92vh] w-auto max-w-[min(92vw,1100px)] flex-col overflow-hidden rounded-2xl border border-white/10 bg-charcoal"
    >
      {shown && (
        <>
          <img
            src={shown.image}
            alt={shown.alt}
            className="min-h-0 w-full flex-1 bg-ink object-contain"
            style={{ maxHeight: 'calc(92vh - 120px)' }}
          />
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 px-5 py-4 sm:px-6">
            <div className="min-w-0 flex-1">
              {shown.date && (
                <div className="font-mono text-[11px] tracking-[0.12em] text-amber">{shown.date}</div>
              )}
              <div className="font-display text-base font-semibold text-cream sm:text-lg">
                {shown.title}
              </div>
              {shown.org && <div className="text-sm text-muted">{shown.org}</div>}
              {shown.desc && (
                <p className="mt-1.5 hidden max-w-[65ch] text-sm leading-[1.55] text-muted sm:block">
                  {shown.desc}
                </p>
              )}
            </div>
            {shown.link && (
              <a
                href={shown.link}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 rounded-full bg-amber px-5 py-2.5 font-mono text-xs font-semibold tracking-[0.08em] text-charcoal no-underline transition-colors hover:bg-amber-deep"
              >
                {shown.linkLabel ?? 'VIEW CREDENTIAL →'}
              </a>
            )}
          </div>
        </>
      )}
    </ModalShell>
  );
}
