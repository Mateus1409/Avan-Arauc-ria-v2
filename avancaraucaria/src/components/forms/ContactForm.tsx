'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle, AlertCircle, Loader2, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Input';
import { Select } from '@/components/ui/Input';

const contactSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(10, 'Telefone inválido').optional().or(z.literal('')),
  subject: z.string().min(1, 'Selecione um assunto'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
});

type ContactFormData = z.infer<typeof contactSchema>;

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

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('submitting');
    setErrorMessage('');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      reset();
    } catch {
      setSubmitStatus('error');
      setErrorMessage('Erro ao enviar mensagem. Tente novamente.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Nome completo *"
          placeholder="Seu nome"
          error={errors.name?.message}
          {...register('name')}
        />
        <Input
          label="E-mail *"
          type="email"
          placeholder="seu@email.com"
          error={errors.email?.message}
          {...register('email')}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Telefone"
          placeholder="(41) 99999-9999"
          error={errors.phone?.message}
          {...register('phone')}
        />
        <Select
          label="Assunto *"
          placeholder="Selecione um assunto"
          error={errors.subject?.message}
          {...register('subject')}
        >
          {subjects.map((subject) => (
            <option key={subject.value} value={subject.value}>
              {subject.label}
            </option>
          ))}
        </Select>
      </div>

      <Textarea
        label="Mensagem *"
        placeholder="Descreva sua solicitação, sugestão ou dúvida..."
        rows={5}
        error={errors.message?.message}
        {...register('message')}
      />

      <div className="flex items-start gap-3 p-4 rounded-xl bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-900">
        <div className="w-8 h-8 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center shrink-0">
          <CheckCircle className="w-5 h-5 text-primary-600 dark:text-primary-400" aria-hidden="true" />
        </div>
        <div className="text-sm text-primary-700 dark:text-primary-300">
          <p className="font-medium">Proteção de dados</p>
          <p>Seus dados serão utilizados exclusivamente para responder sua solicitação, conforme nossa Política de Privacidade e a LGPD (Lei 13.709/2018).</p>
        </div>
      </div>

      {submitStatus === 'success' && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 animate-fade-in" role="alert">
          <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 shrink-0" aria-hidden="true" />
          <div>
            <p className="font-medium text-green-800 dark:text-green-200">Mensagem enviada com sucesso!</p>
            <p className="text-sm text-green-700 dark:text-green-300">Entraremos em contato em breve.</p>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 animate-fade-in" role="alert">
          <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400 shrink-0" aria-hidden="true" />
          <p className="text-red-800 dark:text-red-200">{errorMessage}</p>
        </div>
      )}

      <Button type="submit" size="xl" className="w-full" loading={submitStatus === 'submitting'}>
        <Send className="w-5 h-5 mr-2" aria-hidden="true" />
        {submitStatus === 'submitting' ? 'Enviando...' : 'Enviar mensagem'}
      </Button>
    </form>
  );
}