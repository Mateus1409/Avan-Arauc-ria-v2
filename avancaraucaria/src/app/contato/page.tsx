import { Metadata } from 'next';
import { SectionTitle } from '@/components/sections/SectionTitle';
import { ContactForm } from '@/components/forms/ContactForm';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { MapPin, Phone, Mail, MessageSquare, Clock, Building2, Send, CheckCircle, MapPin as MapPinIcon } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato com o AvançAraucária - Conselho de Desenvolvimento Econômico de Araucária. Telefone, WhatsApp, e-mail, endereço e formulário de contato.',
  openGraph: {
    title: 'Contato — AvançAraucária',
    description: 'Fale conosco: telefone, WhatsApp, e-mail e endereço do Conselho de Desenvolvimento Econômico de Araucária.',
    type: 'website',
  },
};

const contactInfo = {
  address: {
    street: 'Rua João Pessoa, 145',
    neighborhood: 'Centro',
    city: 'Araucária - PR',
    zipCode: '83702-280',
  },
  phones: ['(41) 9277-8568', '(41) 99277-8568'],
  whatsapp: '5541992778568',
  email: 'contato@avancaraucaria.com.br',
  hours: 'Segunda a sexta, 8h às 12h e 13h30 às 17h30',
};

const subjects = [
  { value: 'informacoes', label: 'Informações gerais' },
  { value: 'associacao', label: 'Quero ser associado' },
  { value: 'parceria', label: 'Proposta de parceria' },
  { value: 'imprensa', label: 'Assuntos de imprensa' },
  { value: 'sugestao', label: 'Sugestão' },
  { value: 'critica', label: 'Crítica' },
  { value: 'reclamacao', label: 'Reclamação' },
  { value: 'outro', label: 'Outro' },
];

export default function ContatoPage() {
  return (
    <>
      <section className="py-16 lg:py-24 bg-neutral-50 dark:bg-neutral-900/50" aria-labelledby="hero-title">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" className="mb-6">Fale Conosco</Badge>
            <h1 id="hero-title" className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-6">
              Entre em <span className="gradient-text">contato</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Estamos à disposição para atender suas solicitações, sugestões, críticas e dúvidas sobre o Conselho de Desenvolvimento Econômico.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24" aria-labelledby="contact-info-title">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <SectionTitle
                id="contact-info-title"
                title="Canais de atendimento"
                subtitle="Contato"
                description="Escolha a melhor forma de falar conosco. Nossa equipe responderá o mais breve possível."
                align="left"
              />

              <div className="mt-8 space-y-6">
                <Card variant="elevated" padding="lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center shrink-0">
                      <MapPinIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground mb-2">Endereço</h3>
                      <address className="not-italic text-muted-foreground leading-relaxed">
                        <p>{contactInfo.address.street}</p>
                        <p>{contactInfo.address.neighborhood}</p>
                        <p>{contactInfo.address.city}</p>
                        <p>CEP: {contactInfo.address.zipCode}</p>
                      </address>
                      <a
                        href="https://maps.google.com/?q=Rua+Jo%C3%A3o+Pessoa+145+Centro+Arauc%C3%A1ria+PR"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-primary-600 dark:text-primary-400 hover:underline mt-3"
                      >
                        <MapPin className="w-4 h-4" aria-hidden="true" />
                        Ver no Google Maps
                      </a>
                    </div>
                  </div>
                </Card>

                <Card variant="elevated" padding="lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-6 h-6 text-green-600 dark:text-green-400" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground mb-2">WhatsApp</h3>
                      <a
                        href={`https://wa.me/${contactInfo.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 dark:text-green-400 font-medium hover:underline"
                      >
                        {contactInfo.phones[1]}
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Atendimento rápido pelo WhatsApp</p>
                    </div>
                  </div>
                </Card>

                <Card variant="elevated" padding="lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary-100 dark:bg-secondary-900/30 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-secondary-600 dark:text-secondary-400" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground mb-2">Telefone</h3>
                      <div className="space-y-1">
                        {contactInfo.phones.map((phone, i) => (
                          <a key={i} href={`tel:${phone.replace(/\D/g, '')}`} className="text-secondary-600 dark:text-secondary-400 hover:underline">
                            {phone}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>

                <Card variant="elevated" padding="lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-accent-600 dark:text-accent-400" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground mb-2">E-mail</h3>
                      <a href={`mailto:${contactInfo.email}`} className="text-accent-600 dark:text-accent-400 hover:underline">
                        {contactInfo.email}
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">{contactInfo.hours}</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div>
              <SectionTitle
                title="Envie uma mensagem"
                subtitle="Formulário"
                description="Preencha o formulário abaixo e retornaremos o mais breve possível."
                align="left"
              />
              <div className="mt-8">
                <ContactForm />
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="font-display text-lg font-bold text-foreground mb-6">Ou visite nossa sede</h3>
                <Card variant="outlined" padding="lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center shrink-0">
                      <Building2 className="w-6 h-6 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Conselho de Desenvolvimento Econômico de Araucária</h4>
                      <address className="not-italic text-muted-foreground leading-relaxed">
                        <p>Rua João Pessoa, 145 - Centro</p>
                        <p>Araucária - PR, 83702-280</p>
                      </address>
                      <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" aria-hidden="true" />
                        <span>Segunda a sexta, 8h às 12h e 13h30 às 17h30</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary-600 dark:bg-primary-700" aria-labelledby="faq-title">
        <div className="container-custom">
          <h2 id="faq-title" className="font-display text-3xl lg:text-4xl font-bold text-white text-center mb-12">
            Perguntas frequentes
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card variant="outlined" padding="lg" className="border-white/20 bg-white/5">
              <h3 className="font-display text-lg font-bold text-white mb-3">Como me tornar um associado?</h3>
              <p className="text-primary-100">Preencha o formulário de contato selecionando "Quero ser associado" ou entre em contato pelo WhatsApp. Nossa equipe entrará em contato com os próximos passos e documentos necessários.</p>
            </Card>
            <Card variant="outlined" padding="lg" className="border-white/20 bg-white/5">
              <h3 className="font-display text-lg font-bold text-white mb-3">Como propor um projeto?</h3>
              <p className="text-primary-100">Envie sua proposta pelo formulário de contato selecionando "Proposta de parceria" ou envie e-mail para projetos@avancaraucaria.com.br com descrição do projeto, objetivos e recursos necessários.</p>
            </Card>
            <Card variant="outlined" padding="lg" className="border-white/20 bg-white/5">
              <h3 className="font-display text-lg font-bold text-white mb-3">Como acessar documentos oficiais?</h3>
              <p className="text-primary-100">Acesse a Central de Downloads no menu Utilitários. Lá você encontra atas, resoluções, editais e legislação organizados por categoria e ano.</p>
            </Card>
            <Card variant="outlined" padding="lg" className="border-white/20 bg-white/5">
              <h3 className="font-display text-lg font-bold text-white mb-3">Como participar das Câmaras Técnicas?</h3>
              <p className="text-primary-100">A participação nas Câmaras Técnicas é restrita a representantes de entidades associadas. Se sua organização é associada, entre em contato com a Secretaria Executiva para indicar representante.</p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}