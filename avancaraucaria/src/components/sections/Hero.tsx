'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Building2, Leaf, Lightbulb, Users, Target, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { useReducedMotion } from '@/hooks/useIntersectionObserver';
import Link from 'next/link';

const heroIcons = [
  { icon: Building2, color: 'text-primary-500', label: 'Desenvolvimento Econômico' },
  { icon: Leaf, color: 'text-secondary-500', label: 'Sustentabilidade' },
  { icon: Lightbulb, color: 'text-accent-500', label: 'Inovação' },
  { icon: Users, color: 'text-primary-500', label: 'Colaboração' },
  { icon: Target, color: 'text-secondary-500', label: 'Visão 2040' },
  { icon: Zap, color: 'text-accent-500', label: 'Tecnologia' },
];

const enterTransition = {
  type: 'spring' as const,
  duration: 0.55,
  bounce: 0,
};

const staggerDelay = 0.08;

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: prefersReducedMotion
        ? { duration: 0 }
        : { type: 'spring' as const, duration: 0.55, bounce: 0 },
    },
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 via-transparent to-secondary-50/50 dark:from-primary-900/10 dark:via-transparent dark:to-secondary-900/10" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-200/30 dark:bg-primary-800/10 rounded-full blur-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: prefersReducedMotion ? 0 : 1.2, ease: 'easeOut' }}
          style={{ animation: prefersReducedMotion ? 'none' : 'pulse 4s ease-in-out infinite' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-200/30 dark:bg-secondary-800/10 rounded-full blur-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: prefersReducedMotion ? 0 : 1.2, ease: 'easeOut', delay: 0.5 }}
          style={{ animation: prefersReducedMotion ? 'none' : 'pulse 4s ease-in-out infinite 1s' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full blur-3xl" />

        <div className="absolute inset-0 -z-20 overflow-hidden" aria-hidden="true">
          <video
            src="/videos/drone-panoramica-1.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-10 dark:opacity-5 pointer-events-none"
            aria-hidden="true"
          />
        </div>
      </div>

      <motion.div
        className="container-custom relative z-10 py-12 lg:py-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-100 dark:border-primary-900 text-primary-700 dark:text-primary-300 text-sm font-medium">
              <motion.span
                className="w-2 h-2 rounded-full bg-primary-500"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: prefersReducedMotion ? 0 : 1.5, repeat: Infinity, ease: 'easeInOut' }}
                aria-hidden="true"
              />
              Conselho de Desenvolvimento Econômico de Araucária
            </span>
          </motion.div>

          <motion.h1
            id="hero-title"
            variants={itemVariants}
            className="font-display text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6 text-balance"
          >
            Construindo hoje a{' '}
            <span className="gradient-text">Araucária do futuro</span>
            .
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Conectamos pessoas, empresas, instituições e poder público para impulsionar o desenvolvimento econômico sustentável de Araucária.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button size="xl" asChild className="group">
              <Link href="/sobre">
                Conheça o AvançAraucária
                <motion.span
                  layoutId="arrow"
                  className="w-5 h-5"
                  transition={enterTransition}
                >
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </motion.span>
              </Link>
            </Button>
            <Button size="xl" variant="outline" asChild className="group">
              <Link href="/projetos">
                Conheça nossas iniciativas
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 lg:gap-8 text-sm text-muted-foreground"
          >
            {heroIcons.map((item, index) => (
              <motion.span
                key={item.label}
                initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ type: 'spring', duration: 0.5, bounce: 0, delay: index * 0.06 }}
                className="flex items-center gap-2 group"
              >
                <span
                  className={cn(
                    'w-8 h-8 rounded-xl flex items-center justify-center',
                    `bg-${item.color.replace('text-', 'bg-').replace('500', '100')} dark:bg-${item.color.replace('text-', 'bg-').replace('500', '900')}/20`
                  )}
                  aria-hidden="true"
                >
                  <item.icon className={cn('w-4 h-4', item.color)} />
                </span>
                <span className="font-medium text-foreground group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors hidden sm:inline">{item.label}</span>
              </motion.span>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-16 lg:mt-24 relative"
        >
          <div className="relative rounded-3xl overflow-hidden bg-surface-light dark:bg-surface-dark border border-border shadow-2xl">
            <div className="aspect-video relative overflow-hidden">
              <video
                src="/videos/drone-sweeping.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover opacity-80"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 via-transparent to-secondary-600/20" aria-hidden="true" />
              <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                <div className="text-center p-8 relative z-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    transition={{ type: 'spring', duration: 0.6, bounce: 0, delay: 0.3 }}
                    className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center"
                  >
                    <Building2 className="w-12 h-12 text-white" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', duration: 0.5, bounce: 0, delay: 0.4 }}
                    className="font-display text-2xl font-bold text-white mb-2"
                  >
                    Araucária em transformação
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', duration: 0.5, bounce: 0, delay: 0.5 }}
                    className="text-white/90"
                  >
                    Parque Tecnológico • Biotech Center • Corredor Energético
                  </motion.p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-light dark:from-surface-dark to-transparent" aria-hidden="true" />
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-center gap-4 lg:gap-8 px-4">
              <StatPill label="Empresas" value="350+" description="representadas" icon={Building2} delay={0.1} />
              <StatPill label="Câmaras" value="5" description="Técnicas ativas" icon={Target} delay={0.2} />
              <StatPill label="Fundação" value="2019" description="Lei 3.484/2019" icon={Leaf} delay={0.3} />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: prefersReducedMotion ? 0 : 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="w-8 h-12 rounded-full border-2 border-border flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-muted-foreground"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: prefersReducedMotion ? 0 : 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
      `}</style>
    </section>
  );
}

interface StatPillProps {
  label: string;
  value: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  delay?: number;
}

function StatPill({ label, value, description, icon: Icon, delay = 0 }: StatPillProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ type: 'spring', duration: 0.5, bounce: 0, delay }}
      className="flex items-center gap-3 px-4 py-3 bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-sm rounded-xl border border-border"
    >
      <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary-600 dark:text-primary-400" aria-hidden="true" />
      </div>
      <div>
        <div className="font-display font-bold text-lg text-foreground">{value}</div>
        <div className="text-xs text-muted-foreground">{label} • {description}</div>
      </div>
    </motion.div>
  );
}