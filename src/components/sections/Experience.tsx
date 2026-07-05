import { experienceSection } from '../../data/content';
import { SectionLabel } from '../primitives/SectionLabel';
import { Reveal } from '../primitives/Reveal';

export function Experience() {
  return (
    <section id="experience" className="bg-cream px-6 pb-20 text-charcoal sm:px-10 lg:px-16 lg:pb-24">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 border-t border-charcoal/15 pt-16 lg:gap-12 lg:pt-20">
        <Reveal className="flex flex-col gap-4">
          <SectionLabel tone="light">{experienceSection.eyebrow}</SectionLabel>
          <h2 className="font-display text-[32px] font-bold leading-[1.1] lg:text-[48px] lg:leading-[1.05]">
            {experienceSection.heading}
          </h2>
        </Reveal>
        <div className="flex flex-col gap-10">
          {experienceSection.roles.map((role, i) => (
            <Reveal
              key={`${role.title}-${role.period}`}
              delay={0.1 + i * 0.1}
              className="grid grid-cols-1 gap-6 lg:grid-cols-[380px_1fr] lg:gap-16"
            >
              <div className="flex flex-col gap-1.5">
                <div className="font-display text-xl font-semibold sm:text-2xl lg:text-[26px]">
                  {role.title}
                </div>
                <div className="text-base text-taupe sm:text-[17px]">{role.org}</div>
                <div className="mt-1 font-mono text-xs text-amber-deep sm:text-[13px]">{role.period}</div>
              </div>
              <div className="flex flex-col gap-4 text-[15px] leading-[1.55] text-brown sm:gap-5 sm:text-base lg:text-[17px] lg:leading-[1.6]">
                {role.bullets.map((bullet) => (
                  <div key={bullet} className="flex gap-3">
                    <span className="font-semibold text-amber-deep">→</span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
