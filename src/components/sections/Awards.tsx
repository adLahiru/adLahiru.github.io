import { awardsSection } from '../../data/content';
import { SectionLabel } from '../primitives/SectionLabel';
import { Card } from '../primitives/Card';
import { PlaceholderImage } from '../primitives/PlaceholderImage';
import { Reveal } from '../primitives/Reveal';

export function Awards() {
  return (
    <section id="awards" className="bg-white px-6 py-20 text-charcoal sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 lg:gap-12">
        <Reveal className="flex flex-col gap-4">
          <SectionLabel tone="light">{awardsSection.eyebrow}</SectionLabel>
          <h2 className="font-display text-[32px] font-bold leading-[1.1] lg:text-[48px] lg:leading-[1.05]">
            {awardsSection.heading}
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
          {awardsSection.items.map((award, i) => (
            <Reveal key={award.title} delay={i * 0.08}>
              <Card
                tone="light"
                className="grid h-full grid-cols-[120px_1fr] gap-4 p-4 sm:grid-cols-[160px_1fr] sm:gap-6 sm:p-6 lg:grid-cols-[220px_1fr] lg:gap-7"
              >
                <PlaceholderImage
                  image={award.image}
                  label={`Portrait — ${award.title}`}
                  monogram={award.monogram}
                  variant="portrait"
                />
                <div className="flex flex-col gap-2">
                  <div className="font-mono text-[11px] tracking-[0.1em] text-amber-deep sm:text-xs">
                    {award.date}
                  </div>
                  <div className="font-display text-lg font-semibold leading-[1.2] sm:text-xl lg:text-2xl">
                    {award.title}
                  </div>
                  <div className="text-sm text-taupe sm:text-[15px]">{award.org}</div>
                  <div className="text-sm leading-[1.5] text-brown sm:text-[15px] sm:leading-[1.55]">
                    {award.desc}
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
