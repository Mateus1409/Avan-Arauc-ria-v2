'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Building2, MapPin, Phone, Mail, Globe, ExternalLink, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import type { Associate } from '@/types';

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

interface AssociateCardProps {
  associate: Associate;
  index: number;
}

export function AssociateCard({ associate, index }: AssociateCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: index * 0.08 }}
    >
      <Link href={`/associados/${associate.slug}`} className="block" aria-label={`Ver detalhes do associado ${associate.name}`}>
        <Card variant="elevated" padding="lg" hover className="h-full flex flex-col">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
              <Building2 className="w-7 h-7 text-primary-600 dark:text-primary-400" aria-hidden="true" />
            </div>
            {associate.featured && (
              <Badge variant="accent" size="sm" className="shrink-0">
                <CheckCircle className="w-3 h-3 mr-1" aria-hidden="true" />
                Destaque
              </Badge>
            )}
          </div>

          <div className="mb-4">
            <Badge variant="outline" size="sm" className="mb-2">{associate.category}</Badge>
            <h3 className="font-display text-lg font-bold text-foreground mb-2 line-clamp-1">{associate.name}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{associate.description}</p>
          </div>

          <div className="flex-1 space-y-3 mb-4">
            {associate.address && (
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
                <span>{associate.address}</span>
              </div>
            )}
            {associate.phone && (
              <a href={`tel:${associate.phone.replace(/\D/g, '')}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>{associate.phone}</span>
              </a>
            )}
            {associate.email && (
              <a href={`mailto:${associate.email}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span>{associate.email}</span>
              </a>
            )}
            {associate.website && (
              <a href={associate.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <Globe className="w-4 h-4" aria-hidden="true" />
                <span>Website</span>
              </a>
            )}
            {associate.whatsapp && (
              <a href={`https://wa.me/${associate.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors font-medium">
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
                <span>WhatsApp</span>
              </a>
            )}
          </div>

          <div className="pt-4 border-t border-border">
            <Button variant="outline" size="sm" className="w-full" asChild>
              <Link href={`/associados/${associate.slug}`}>Ver detalhes</Link>
            </Button>
          </div>
        </Card>
      </Link>
    </motion.article>
  );
}