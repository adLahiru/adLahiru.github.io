import { contact, email, phone, social } from '../../data/content';
import { SectionLabel } from '../primitives/SectionLabel';
import { Reveal } from '../primitives/Reveal';

export function Contact() {
  return (
    <section id="contact" className="px-6 pb-10 pt-24 sm:px-10 lg:px-16 lg:pb-12 lg:pt-32">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-14 lg:gap-16">
        <Reveal className="flex flex-col items-start gap-6">
          <SectionLabel>{contact.eyebrow}</SectionLabel>
          <h2
            className="font-display font-extrabold leading-[1] tracking-[-0.02em] text-cream"
            style={{ fontSize: 'clamp(2.75rem, 3vw + 2rem, 6rem)' }}
          >
            {contact.heading[0]}
            <br />
            {contact.heading[1]}
            <span className="text-amber">.</span>
          </h2>
          <a
            href={`mailto:${email}`}
            className="border-b-2 border-amber pb-1 font-mono text-lg text-amber no-underline sm:text-xl lg:text-[22px]"
          >
            {email}
          </a>
        </Reveal>
        <div className="flex flex-col items-start gap-4 border-t border-white/8 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="font-mono text-xs text-muted sm:text-[13px]">{contact.copyright}</div>
          <div className="flex flex-wrap items-center gap-5 sm:gap-7">
            <span className="font-mono text-[13px] text-muted">{phone}</span>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[13px] text-cream no-underline"
            >
              LINKEDIN ↗
            </a>
            <a
              href={social.github}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[13px] text-cream no-underline"
            >
              GITHUB ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
