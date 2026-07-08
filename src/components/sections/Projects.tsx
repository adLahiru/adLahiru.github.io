import { projectsSection } from '../../data/content';
import { padIndex, monogramFor } from '../../lib/derive';
import { useViewMore } from '../../hooks/useViewMore';
import { SectionLabel } from '../primitives/SectionLabel';
import { Card } from '../primitives/Card';
import { Pill } from '../primitives/Pill';
import { PlaceholderImage } from '../primitives/PlaceholderImage';
import { Reveal } from '../primitives/Reveal';
import { ViewMoreButton } from '../primitives/ViewMoreButton';

export function Projects() {
  const { visible, hasMore, hiddenCount, showAll } = useViewMore(
    projectsSection.items,
    projectsSection.initialVisible,
  );

  return (
    <section id="projects" className="border-b border-white/8 px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 lg:gap-12">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-baseline lg:justify-between">
          <div className="flex flex-col gap-4">
            <SectionLabel>{projectsSection.eyebrow}</SectionLabel>
            <h2 className="font-display text-[32px] font-bold leading-[1.1] text-cream lg:text-[48px] lg:leading-[1.05]">
              {projectsSection.heading}
            </h2>
          </div>
          <a
            href={projectsSection.allReposHref}
            className="font-mono text-[13px] tracking-[0.12em] text-amber no-underline"
          >
            ALL REPOS ON GITHUB →
          </a>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {visible.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.08}>
              <Card className="flex h-full flex-col gap-4 p-5">
                <PlaceholderImage
                  image={project.image}
                  label={`Screenshot — ${project.name}`}
                  monogram={monogramFor(project.name, project.monogram)}
                  variant={project.imageVariant ?? projectsSection.defaultImageVariant}
                />
                <div className="flex items-baseline justify-between">
                  <div className="font-display text-2xl font-extrabold text-amber sm:text-[26px]">
                    {padIndex(i)}
                  </div>
                  <div className="font-mono text-[11px] tracking-[0.08em] text-muted">
                    {project.period}
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold text-cream sm:text-2xl lg:text-[26px]">
                  {project.name}
                </h3>
                <p className="flex-1 text-sm leading-[1.6] text-muted sm:text-[15px]">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Pill key={tag} variant="tag-outline">
                      {tag}
                    </Pill>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    className="border-t border-white/10 pt-3.5 font-mono text-xs tracking-[0.1em] text-amber no-underline"
                  >
                    {project.linkLabel ?? 'VIEW PROJECT →'}
                  </a>
                )}
              </Card>
            </Reveal>
          ))}
        </div>
        {hasMore && <ViewMoreButton tone="dark" hiddenCount={hiddenCount} onClick={showAll} />}
      </div>
    </section>
  );
}
