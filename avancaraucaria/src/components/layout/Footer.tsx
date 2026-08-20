'use client';

import Link from 'next/link';
import { Building2, MapPin, Phone, Mail, MessageSquare, Send, ArrowUpRight, Leaf, Lightbulb, Target, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const footerLinks = {
  institucional: [
    { label: 'Sobre o AvançAraucária', href: '/sobre' },
    { label: 'Projetos e Ações', href: '/projetos' },
    { label: 'Governança', href: '/governanca' },
    { label: 'Parceiros', href: '/parceiros' },
  ],
  camaras: [
    { label: 'Educação e Empreendedorismo', href: '/camaras-tecnicas/educacao-empreendedorismo' },
    { label: 'Diversificação da Economia', href: '/camaras-tecnicas/diversificacao-potencializacao-economia' },
    { label: 'Inovação e Biotecnologia', href: '/camaras-tecnicas/inovacao-biotecnologia' },
    { label: 'Sustentabilidade Socioambiental', href: '/camaras-tecnicas/sustentabilidade-socioambiental' },
    { label: 'Mobilidade e Ordenamento', href: '/camaras-tecnicas/mobilidade-integracao-ordenamento-territorial' },
  ],
  imprensa: [
    { label: 'Notícias', href: '/noticias' },
    { label: 'Galeria de Fotos', href: '/galeria' },
    { label: 'Agenda de Eventos', href: '/agenda' },
  ],
  utilitarios: [
    { label: 'Associados', href: '/associados' },
    { label: 'Central de Downloads', href: '/downloads' },
    { label: 'Contato', href: '/contato' },
  ],
};

const contactInfo = {
  address: 'Rua João Pessoa, 145 - Centro',
  city: 'Araucária - PR, 83702-280',
  phones: ['(41) 9277-8568', '(41) 99277-8568'],
  whatsapp: '5541992778568',
  email: 'contato@avancaraucaria.com.br',
};

const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61557576720060', icon: MessageSquare },
  { name: 'Instagram', href: 'https://www.instagram.com/avancaraucaria/', icon: MessageSquare },
  { name: 'WhatsApp', href: `https://wa.me/${contactInfo.whatsapp}`, icon: Send },
];

const values = [
  { icon: Leaf, label: 'Sustentabilidade', description: 'Desenvolvimento econômico com preservação ambiental' },
  { icon: Lightbulb, label: 'Inovação', description: 'Tecnologia e biotecnologia como vetores de crescimento' },
  { icon: Target, label: 'Visão de Futuro', description: 'Araucária 2040: qualidade de vida e modernidade' },
  { icon: Users, label: 'Colaboração', description: 'Empresa, governo, academia e sociedade unidos' },
];

export function Footer() {
  return (
    <footer className="bg-neutral-50 dark:bg-neutral-950 border-t border-border" role="contentinfo">
      <div className="container-custom py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3" aria-label="AvançAraucária - Página inicial">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-600 to-secondary-600 flex items-center justify-center">
                <Building2 className="w-7 h-7 text-white" aria-hidden="true" />
              </div>
              <span className="font-display font-bold text-2xl text-foreground">AvançAraucária</span>
            </Link>

            <p className="text-muted-foreground text-base leading-relaxed max-w-xs">
              Conselho de Desenvolvimento Econômico de Araucária. Conectamos pessoas, empresas, instituições e poder público para impulsionar o desenvolvimento econômico sustentável.
            </p>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'flex items-center justify-center w-10 h-10 rounded-xl border border-border',
                    'hover:bg-primary-50 dark:hover:bg-primary-900/20',
                    'hover:border-primary-300 dark:hover:border-primary-700',
                    'transition-all duration-200'
                  )}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary-600 dark:hover:text-primary-400 transition-colors" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Institucional">
            <h3 className="font-semibold text-foreground mb-4">Institucional</h3>
            <ul className="space-y-3">
              {footerLinks.institucional.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Câmaras Técnicas">
            <h3 className="font-semibold text-foreground mb-4">Câmaras Técnicas</h3>
            <ul className="space-y-3">
              {footerLinks.camaras.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Imprensa">
            <h3 className="font-semibold text-foreground mb-4">Imprensa</h3>
            <ul className="space-y-3">
              {footerLinks.imprensa.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Utilitários">
            <h3 className="font-semibold text-foreground mb-4">Utilitários</h3>
            <ul className="space-y-3">
              {footerLinks.utilitarios.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-6">
            <h3 className="font-semibold text-foreground">Contato</h3>
            <address className="not-italic space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-muted-foreground">{contactInfo.address}</p>
                  <p className="text-muted-foreground">{contactInfo.city}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 shrink-0" aria-hidden="true" />
                <div className="space-y-1">
                  {contactInfo.phones.map((phone, i) => (
                    <a key={i} href={`tel:${phone.replace(/\D/g, '')}`} className="text-muted-foreground hover:text-primary-600 dark:hover:text-primary-400 transition-colors block">
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 shrink-0" aria-hidden="true" />
                <a href={`mailto:${contactInfo.email}`} className="text-muted-foreground hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <a
                href={`https://wa.me/${contactInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
              >
                <MessageSquare className="w-5 h-5" aria-hidden="true" />
                Fale conosco no WhatsApp
              </a>
            </address>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {values.map((value) => (
              <div key={value.label} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center shrink-0">
                  <value.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">{value.label}</h4>
                  <p className="text-sm text-muted-foreground mt-0.5">{value.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} AvançAraucária. Todos os direitos reservados.
            </p>
            <p className="text-sm text-muted-foreground">
              Desenvolvido com{' '}
              <span className="font-medium text-foreground">inovação</span>{' '}
              para o desenvolvimento de Araucária.
            </p>
            <a
              href="#"
              className="fixed bottom-6 right-6 lg:static lg:bottom-auto lg:right-auto flex items-center justify-center w-12 h-12 rounded-xl bg-primary-600 text-white shadow-lg hover:bg-primary-700 transition-all duration-200 hover:shadow-xl"
              aria-label="Voltar ao topo"
            >
              <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}