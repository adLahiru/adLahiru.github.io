import { motion, type Variants } from 'framer-motion';
import { hero, cvHref } from '../../data/content';
import { Button } from '../primitives/Button';
import headshot from '../../assets/profile/lahiru-headshot.png';
import headshotWebp from '../../assets/profile/lahiru-headshot.webp';
import { Marquee } from './Marquee';

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-white/8">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-end gap-10 px-6 pt-32 sm:px-10 lg:grid-cols-[1fr_480px] lg:gap-10 lg:px-16 lg:pt-33">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6 pb-10 lg:gap-7 lg:pb-16"
        >
          <motion.div
            variants={item}
            className="font-mono text-xs tracking-[0.16em] text-amber sm:text-[13px] sm:tracking-[0.18em]"
          >
            {hero.eyebrow}
          </motion.div>
          <motion.h1
            variants={item}
            className="font-display font-extrabold leading-[0.95] tracking-[-0.02em] text-cream"
            style={{ fontSize: 'clamp(3rem, 2vw + 3.5rem, 8rem)' }}
          >
            {hero.name[0]}
            <br />
            {hero.name[1]}
          </motion.h1>
          <motion.p
            variants={item}
            className="max-w-[560px] text-base leading-[1.55] text-muted sm:text-lg lg:text-xl"
          >
            {hero.bio}
          </motion.p>
          <motion.div variants={item} className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#projects" variant="filled">
              View projects
            </Button>
            <Button href={cvHref} variant="outline" download>
              Download CV
            </Button>
          </motion.div>
        </motion.div>

        <div className="relative mx-auto h-[334px] w-full max-w-[380px] sm:h-[420px] sm:max-w-[420px] lg:h-[640px] lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            className="absolute inset-x-[6%] bottom-0 h-[85%] rounded-t-[999px] bg-amber"
          />
          <picture>
            <source srcSet={headshotWebp} type="image/webp" />
            <motion.img
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.35 }}
              src={headshot}
              alt="Lahiru Dilshan"
              className="absolute bottom-2 left-[52%] h-[85%] -translate-x-1/2 drop-shadow-[0_24px_40px_rgba(0,0,0,0.35)] sm:bottom-0 lg:left-10 lg:translate-x-0"
            />
          </picture>
        </div>
      </div>

      <Marquee items={hero.ticker} />
    </section>
  );
}
