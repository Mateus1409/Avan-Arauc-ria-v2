'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { Partner } from '@/types';

function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = (event: MediaQueryListEvent) => setPrefersReducedMotion(event.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  return prefersReducedMotion;
}

interface PartnerLogoProps {
  partner: Partner;
  index: number;
  size?: 'sm' | 'md' | 'lg';
}

export function PartnerLogo({ partner, index, size = 'md' }: PartnerLogoProps) {
  const prefersReducedMotion = useReducedMotion();

  const sizes = {
    sm: 'w-24 h-12',
    md: 'w-32 h-16',
    lg: 'w-40 h-20',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.4, delay: index * 0.05 }}
    >
      {partner.website ? (
        <Link
          href={partner.website}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          aria-label={`Visitar site do parceiro ${partner.name}`}
        >
          <PartnerLogoInner partner={partner} size={sizes[size]} />
        </Link>
      ) : (
        <PartnerLogoInner partner={partner} size={sizes[size]} />
      )}
    </motion.div>
  );
}

function PartnerLogoInner({ partner, size }: { partner: Partner; size: string }) {
  return (
    <div
      className={cn(
        'relative',
        size,
        'rounded-xl',
        'bg-surface-light dark:bg-surface-dark',
        'border border-border',
        'flex items-center justify-center',
        'p-3 sm:p-4',
        'transition-all duration-300',
        'hover:border-primary-300 dark:hover:border-primary-700',
        'hover:shadow-lg',
        'hover:-translate-y-1'
      )}
      aria-label={partner.name}
    >
      {partner.logo && !partner.logo.includes('placeholder') ? (
        <img
          src={partner.logo}
          alt=""
          className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
          loading="lazy"
        />
      ) : (
        <div className="text-center text-muted-foreground/60 text-sm font-medium leading-tight">
          {partner.name}
        </div>
      )}
    </div>
  );
}