'use client';

import { useEffect, useState } from 'react';
import { Share2, MessageSquare, Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface SocialShareProps {
  title: string;
  excerpt: string;
  url?: string;
}

export function SocialShare({ title, excerpt, url }: SocialShareProps) {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(url || window.location.href);
    }
  }, [url]);

  if (!currentUrl) {
    return null;
  }

  const handleShare = () => {
    navigator.share?.({ title, text: excerpt, url: currentUrl });
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button variant="outline" size="sm" onClick={handleShare}>
        <Share2 className="w-4 h-4 mr-2" aria-hidden="true" />
        Compartilhar
      </Button>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors" aria-label="Compartilhar no Facebook">
        <Send className="w-5 h-5" aria-hidden="true" />
      </a>
      <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(currentUrl)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 p-2 rounded-lg bg-sky-500 text-white hover:bg-sky-600 transition-colors" aria-label="Compartilhar no Twitter">
        <Send className="w-5 h-5" aria-hidden="true" />
      </a>
      <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${title} - ${currentUrl}`)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 p-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors" aria-label="Compartilhar no WhatsApp">
        <Send className="w-5 h-5" aria-hidden="true" />
      </a>
    </div>
  );
}