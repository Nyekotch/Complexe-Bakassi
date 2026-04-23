import { Phone, Mail, MapPin } from 'lucide-react';
import { config } from '@/data/config';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="bg-black text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Nous sommes à votre écoute pour toute question ou réservation
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-100 dark:bg-secondary-900 rounded-full mb-4">
                <Phone size={32} className="text-secondary-500 dark:text-secondary-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Téléphone
              </h3>
              <a
                href={`tel:${config.phone}`}
                className="text-gray-600 dark:text-gray-400 hover:text-secondary-500 dark:hover:text-secondary-400"
              >
                {config.phone}
              </a>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-100 dark:bg-secondary-900 rounded-full mb-4">
                <Mail size={32} className="text-secondary-500 dark:text-secondary-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Email
              </h3>
              <a
                href={`mailto:${config.email}`}
                className="text-gray-600 dark:text-gray-400 hover:text-secondary-500 dark:hover:text-secondary-400"
              >
                {config.email}
              </a>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-100 dark:bg-secondary-900 rounded-full mb-4">
                <MapPin size={32} className="text-secondary-500 dark:text-secondary-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Adresse
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {config.address}<br />
                {config.city}, {config.country}
              </p>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Contactez-nous sur WhatsApp
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Pour une réponse rapide, utilisez notre WhatsApp
            </p>
            <WhatsAppButton
              message="Bonjour, je souhaite avoir plus d'informations sur vos services."
              size="lg"
            />
          </div>

          {/* Map */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Nous trouver
              </h2>
            </div>
            <div className="h-96 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <div className="text-center text-gray-500 dark:text-gray-400">
                <MapPin size={48} className="mx-auto mb-4" />
                <p>Carte Google Maps</p>
                <p className="text-sm mt-2">
                  {config.address}, {config.city}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
