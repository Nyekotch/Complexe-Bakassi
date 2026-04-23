import { MessageCircle } from 'lucide-react';
import { generateWhatsAppLink } from '@/utils/whatsapp';
import { config } from '@/data/config';

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function WhatsAppButton({
  message = 'Bonjour, je souhaite avoir plus d\'informations sur vos services.',
  className = '',
  size = 'md',
}: WhatsAppButtonProps) {
  const whatsappLink = generateWhatsAppLink(config.whatsapp, message);

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-200 ${sizeClasses[size]} ${className}`}
    >
      <MessageCircle size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />
      <span>WhatsApp</span>
    </a>
  );
}

interface FloatingWhatsAppButtonProps {
  message?: string;
}

export function FloatingWhatsAppButton({ message }: FloatingWhatsAppButtonProps) {
  const whatsappLink = generateWhatsAppLink(
    config.whatsapp,
    message || 'Bonjour, je souhaite avoir plus d\'informations.'
  );

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-secondary-500 hover:bg-secondary-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
