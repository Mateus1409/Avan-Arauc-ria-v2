import { Metadata } from 'next';
import { SectionTitle } from '@/components/sections/SectionTitle';
import { ChamberCard } from '@/components/sections/ChamberCard';
import { chambers } from '@/data/chambers';
import { Building2, Users, Lightbulb, Leaf, MapPin, Target } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Câmaras Técnicas',
  description: 'Conheça as cinco Câmaras Técnicas do AvançAraucária: Educação e Empreendedorismo, Diversificação da Economia, Inovação e Biotecnologia, Sustentabilidade Socioambiental e Mobilidade e Ordenamento Territorial.',
  openGraph: {
    title: 'Câmaras Técnicas — AvançAraucária',
    description: 'Cinco frentes temáticas para transformar o futuro de Araucária através de planejamento estratégico e ação colaborativa.',
    type: 'website',
  },
};

const chamberIcons = {
  'educacao-empreendedorismo': Users,
  'diversificacao-potencializacao-economia': Building2,
  'inovacao-biotecnologia': Lightbulb,
  'sustentabilidade-socioambiental': Leaf,
  'mobilidade-integracao-ordenamento-territorial': MapPin,
};

export default function CamarasTecnicasPage() {
  return (
    <>
      <section className="py-16 lg:py-24 bg-neutral-50 dark:bg-neutral-900/50" aria-labelledby="hero-title">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" className="mb-6">Câmaras Técnicas</Badge>
            <h1 id="hero-title" className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-6">
              Cinco frentes para <span className="gradient-text">transformar o futuro</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              As Câmaras Técnicas são instrumentos de planejamento que congregam especialistas para analisar desafios específicos do desenvolvimento econômico de Araucária, fornecendo subsídios ao Conselho e apoiando a execução das estratégias.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24" aria-labelledby="chambers-list-title">
        <div className="container-custom">
          <SectionTitle
            id="chambers-list-title"
            title="Nossas Câmaras Técnicas"
            subtitle="Estrutura de atuação"
            description="Cada Câmara possui composição multidisciplinar, reunindo representantes do setor público, privado, academia e sociedade civil."
            align="center"
          />
          <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chambers.map((chamber, index) => (
              <ChamberCard key={chamber.slug} chamber={chamber} index={index} />
            ))}
          </div>

          <div className="mt-16 lg:mt-24">
            <Card variant="outlined" padding="lg">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">Como funcionam as Câmaras</h3>
                  <p className="text-muted-foreground">
                    As Câmaras respondem à Plenária e ao Comitê Gestor, tendo o papel de integrar organizações e assessorar na definição de diretrizes e propostas técnicas. Podem utilizar estudos e projetos de entidades parceiras ou especialistas.
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a href="/camaras-tecnicas/educacao-empreendedorismo" className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline">Educação e Empreendedorismo</a>
                  <span className="text-muted-foreground">•</span>
                  <a href="/camaras-tecnicas/diversificacao-potencializacao-economia" className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline">Diversificação da Economia</a>
                  <span className="text-muted-foreground">•</span>
                  <a href="/camaras-tecnicas/inovacao-biotecnologia" className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline">Inovação e Biotecnologia</a>
                  <span className="text-muted-foreground">•</span>
                  <a href="/camaras-tecnicas/sustentabilidade-socioambiental" className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline">Sustentabilidade</a>
                  <span className="text-muted-foreground">•</span>
                  <a href="/camaras-tecnicas/mobilidade-integracao-ordenamento-territorial" className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline">Mobilidade e Ordenamento</a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary-600 dark:bg-primary-700" aria-labelledby="cta-title">
        <div className="container-custom text-center">
          <h2 id="cta-title" className="font-display text-3xl lg:text-4xl font-bold text-white mb-6">
            Sua organização pode participar
          </h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            As Câmaras Técnicas são compostas por representantes de entidades associadas. Se sua organização tem expertise em uma das áreas temáticas, entre em contato para saber como participar.
          </p>
          <a href="/contato" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold hover:bg-primary-50 transition-colors">
            Entrar em contato
            <Target className="w-5 h-5" aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  );
}