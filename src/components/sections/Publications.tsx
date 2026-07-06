import { publicationsSection } from '../../data/content';
import { SectionLabel } from '../primitives/SectionLabel';
import { Reveal } from '../primitives/Reveal';

export function Publications() {
  return (
    <section id="publications" className="border-b border-white/8 px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 lg:gap-12">
        <Reveal className="flex flex-col gap-4">
          <SectionLabel>{publicationsSection.eyebrow}</SectionLabel>
          <h2 className="font-display text-[32px] font-bold leading-[1.1] text-cream lg:text-[48px] lg:leading-[1.05]">
            {publicationsSection.heading}
          </h2>
        </Reveal>
        <div className="flex flex-col">
          {publicationsSection.items.map((pub, i) => (
            <Reveal key={pub.title} delay={i * 0.08}>
              <div className="grid grid-cols-1 gap-3 border-t border-white/8 py-7 first:border-t-0 first:pt-0 lg:grid-cols-[100px_1fr_auto] lg:items-baseline lg:gap-6">
                <div className="font-mono text-xs tracking-[0.1em] text-amber-deep sm:text-[13px]">
                  {pub.date}
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="font-display text-lg font-semibold text-cream sm:text-xl lg:text-[22px]">
                    {pub.title}
                  </div>
                  <div className="text-sm text-muted sm:text-[15px]">{pub.authors}</div>
                  <div className="font-mono text-xs tracking-[0.06em] text-amber sm:text-[13px]">
                    {pub.venue}
                  </div>
                </div>
                <a
                  href={pub.link}
                  className="font-mono text-xs tracking-[0.1em] text-amber no-underline lg:justify-self-end"
                >
                  VIEW PAPER →
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
