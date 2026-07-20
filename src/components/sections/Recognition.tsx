import { useState } from 'react';
import { recognitionSection } from '../../data/content';
import { SectionLabel } from '../primitives/SectionLabel';
import { Reveal } from '../primitives/Reveal';
import { Lightbox, type LightboxContent } from '../primitives/Lightbox';
import { RecognitionFeature } from '../recognition/RecognitionFeature';
import { RecognitionTimeline } from '../recognition/RecognitionTimeline';
import { RecognitionMosaic } from '../recognition/RecognitionMosaic';
import { CertificationGrid } from '../recognition/CertificationGrid';

export function Recognition() {
  const [lightbox, setLightbox] = useState<LightboxContent | null>(null);

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
          <div
            key={group.id}
            className={i === 0 ? '' : 'border-t border-charcoal/15 pt-12 lg:pt-14'}
          >
            {group.layout === 'grid' ? (
              <CertificationGrid group={group} onOpen={setLightbox} />
            ) : group.layout === 'feature' ? (
              <RecognitionFeature group={group} onOpen={setLightbox} />
            ) : group.layout === 'timeline' ? (
              <RecognitionTimeline group={group} onOpen={setLightbox} />
            ) : (
              <RecognitionMosaic group={group} onOpen={setLightbox} />
            )}
          </div>
        ))}
      </div>
      <Lightbox content={lightbox} onClose={() => setLightbox(null)} />
    </section>
  );
}
