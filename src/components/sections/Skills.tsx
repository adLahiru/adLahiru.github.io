import { skills } from '../../data/content';
import { SectionLabel } from '../primitives/SectionLabel';
import { Card } from '../primitives/Card';
import { Pill } from '../primitives/Pill';
import { Reveal } from '../primitives/Reveal';

export function Skills() {
  return (
    <section id="skills" className="bg-cream px-6 py-20 text-charcoal sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 lg:gap-12">
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-baseline lg:justify-between lg:gap-6">
          <div className="flex flex-col gap-4">
            <SectionLabel tone="light">{skills.eyebrow}</SectionLabel>
            <h2 className="font-display text-[32px] font-bold leading-[1.1] lg:text-[48px] lg:leading-[1.05]">
              {skills.heading}
            </h2>
          </div>
          <p className="max-w-[360px] text-base leading-[1.5] text-taupe">{skills.description}</p>
        </Reveal>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {skills.groups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.06}>
              <Card tone="light" className="flex h-full flex-col gap-4 p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <div className="font-display text-lg font-semibold sm:text-xl">{group.title}</div>
                  <div className="font-mono text-xs text-amber-deep">{group.num}</div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Pill key={item} variant="tag-dark">
                      {item}
                    </Pill>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
