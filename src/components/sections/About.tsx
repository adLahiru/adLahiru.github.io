import { about } from '../../data/content';
import { SectionLabel } from '../primitives/SectionLabel';
import { Card } from '../primitives/Card';
import { Reveal } from '../primitives/Reveal';

export function About() {
  return (
    <section id="about" className="border-b border-white/8 px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 lg:grid-cols-[380px_1fr] lg:gap-16">
        <Reveal className="flex flex-col gap-4">
          <SectionLabel>{about.eyebrow}</SectionLabel>
          <h2 className="font-display text-[32px] font-bold leading-[1.1] text-cream lg:text-[48px] lg:leading-[1.05]">
            {about.heading}
          </h2>
        </Reveal>
        <div className="flex flex-col gap-10">
          <Reveal delay={0.1}>
            <p className="max-w-[720px] text-base leading-[1.6] text-muted sm:text-lg lg:text-[19px] lg:leading-[1.65]">
              {about.body}
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {about.education.map((edu, i) => (
              <Reveal key={edu.title} delay={0.15 + i * 0.08}>
                <Card className="flex h-full flex-col gap-2.5 p-6 sm:p-7">
                  <div className="font-mono text-xs tracking-[0.14em] text-amber">{edu.period}</div>
                  <div className="font-display text-[19px] font-semibold text-cream sm:text-[22px]">
                    {edu.title}
                  </div>
                  <div className="text-sm leading-[1.5] text-muted sm:text-[15px]">{edu.detail}</div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
