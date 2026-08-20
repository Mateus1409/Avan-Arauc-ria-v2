import { Metadata } from 'next';
import { DownloadsContent } from './DownloadsContent';

export const metadata: Metadata = {
  title: 'Central de Downloads',
  description: 'Central de Downloads do AvançAraucária: atas de plenárias, resoluções, editais, legislação e documentos oficiais. Busque por categoria, ano ou palavra-chave.',
  openGraph: {
    title: 'Central de Downloads — AvançAraucária',
    description: 'Acesse atas, resoluções, editais e documentos oficiais do Conselho de Desenvolvimento Econômico de Araucária.',
    type: 'website',
  },
};

export default function DownloadsPage() {
  return <DownloadsContent />;
}