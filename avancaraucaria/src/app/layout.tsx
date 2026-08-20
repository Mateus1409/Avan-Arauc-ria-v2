import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/hooks/useTheme';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'AvançAraucária — Conselho de Desenvolvimento Econômico de Araucária',
    template: '%s | AvançAraucária',
  },
  description: 'Conectamos pessoas, empresas, instituições e poder público para impulsionar o desenvolvimento econômico sustentável de Araucária. Conheça nossas Câmaras Técnicas, projetos, notícias e iniciativas.',
  keywords: ['AvançAraucária', 'desenvolvimento econômico', 'Araucária', 'Paraná', 'inovação', 'sustentabilidade', 'biotecnologia', 'empreendedorismo', 'conselho', 'governança'],
  authors: [{ name: 'AvançAraucária' }],
  creator: 'AvançAraucária',
  publisher: 'AvançAraucária',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://avancaraucaria.com.br',
    siteName: 'AvançAraucária',
    title: 'AvançAraucária — Conselho de Desenvolvimento Econômico de Araucária',
    description: 'Conectamos pessoas, empresas, instituições e poder público para impulsionar o desenvolvimento econômico sustentável de Araucária.',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'AvançAraucária - Desenvolvimento Econômico Sustentável',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AvançAraucária — Conselho de Desenvolvimento Econômico',
    description: 'Conectamos pessoas, empresas, instituições e poder público para o desenvolvimento econômico sustentável de Araucária.',
    images: ['/images/og-default.jpg'],
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#050505' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-primary-600 text-white rounded-lg">
            Pular para o conteúdo principal
          </a>
          <Header />
          <main id="main-content" className="flex-1" role="main">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}