import { Metadata } from 'next';
import { SectionTitle } from '@/components/sections/SectionTitle';
import { PartnerLogo } from '@/components/sections/PartnerLogo';
import { partners, getFeaturedPartners, getPartnersByCategory, partnerCategories } from '@/data/partners';
import { Badge } from '@/components/ui/Badge';
import { Building2, Users, GraduationCap, Shield, Leaf, Building, Handshake } from 'lucide-react';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Parceiros',
  description: 'Conheça os parceiros institucionais do AvançAraucária: governo, entidades empresariais, instituições de ensino, ciência e tecnologia, terceiro setor e empresas que constroem o desenvolvimento de Araucária.',
  openGraph: {
    title: 'Parceiros — AvançAraucária',
    description: 'Rede de parceiros que colaboram com o Conselho de Desenvolvimento Econômico de Araucária.',
    type: 'website',
  },
};

const categoryIcons = {
  'Governo': Building,
  'Institucional': Handshake,
  'Ciência e Tecnologia': Leaf,
  'Ensino': GraduationCap,
  'Terceiro Setor': Users,
  'Empresarial': Building2,
};

const categoryDescriptions = {
  'Governo': 'Órgãos públicos municipais, estaduais e federais que apoiam as iniciativas de desenvolvimento.',
  'Institucional': 'Entidades de classe, federações e conselhos que representam setores produtivos.',
  'Ciência e Tecnologia': 'Institutos de pesquisa e inovação tecnológica parceiros em projetos estratégicos.',
  'Ensino': 'Universidades, centros universitários e institutos federais que formam capital humano.',
  'Terceiro Setor': 'Organizações da sociedade civil voltadas à sustentabilidade e desenvolvimento social.',
  'Empresarial': 'Empresas que apoiam e participam ativamente das iniciativas do Conselho.',
};

export default function ParceirosPage() {
  const featuredPartners = getFeaturedPartners();

  return (
    <>
      <section className="py-16 lg:py-24 bg-neutral-50 dark:bg-neutral-900/50" aria-labelledby="hero-title">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" className="mb-6">Rede Colaborativa</Badge>
            <h1 id="hero-title" className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-6">
              Uma rede que <span className="gradient-text">constrói junto</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Instituições, empresas e órgãos públicos que colaboram com o AvançAraucária para o desenvolvimento econômico sustentável de Araucária.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24" aria-labelledby="featured-partners-title">
        <div className="container-custom">
          <SectionTitle
            id="featured-partners-title"
            title="Parceiros estratégicos"
            subtitle="Instituições âncora"
            description="Principais instituições que compõem a governança e sustentam as iniciativas do Conselho."
            align="center"
          />
          <div className="mt-12 lg:mt-16">
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
              {featuredPartners.map((partner, index) => (
                <PartnerLogo key={partner.id} partner={partner} index={index} size="lg" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-neutral-50 dark:bg-neutral-900/50" aria-labelledby="all-partners-title">
        <div className="container-custom">
          <SectionTitle
            id="all-partners-title"
            title="Todos os parceiros"
            subtitle="Por categoria"
            align="center"
          />
          <div className="mt-12 lg:mt-16 space-y-16">
            {partnerCategories.map((category) => {
              const categoryPartners = getPartnersByCategory(category);
              if (categoryPartners.length === 0) return null;

              const Icon = categoryIcons[category as keyof typeof categoryIcons] || Building2;

              return (
                <div key={category}>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-foreground">{category}</h3>
                      <p className="text-muted-foreground">{categoryDescriptions[category as keyof typeof categoryDescriptions]}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
                    {categoryPartners.map((partner, index) => (
                      <PartnerLogo key={partner.id} partner={partner} index={index} size="md" />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24" aria-labelledby="cta-title">
        <div className="container-custom text-center">
          <Card variant="gradient" padding="lg">
            <h2 id="cta-title" className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Sua organização pode ser parceira
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              O AvançAraucária está sempre aberto a novas parcerias para fortalecer o desenvolvimento de Araucária. Entre em contato para conhecer as modalidades de parceria.
            </p>
            <a href="/contato" className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-colors">
              Tornar-se parceiro
              <Handshake className="w-5 h-5" aria-hidden="true" />
            </a>
          </Card>
        </div>
      </section>
    </>
  );
}