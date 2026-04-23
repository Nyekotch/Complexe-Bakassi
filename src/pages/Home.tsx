import { Link } from 'react-router-dom';
import { ArrowRight, UtensilsCrossed, Wine, Car } from 'lucide-react';
import { config } from '@/data/config';
import Card, { CardContent, CardTitle, CardDescription } from '@/components/Card';

export default function Home() {
  const services = [
    {
      id: 'restaurant',
      title: 'Restaurant',
      description: 'Découvrez notre menu varié avec des plats savoureux préparés avec passion',
      icon: <UtensilsCrossed size={40} className="text-secondary-500" />,
      link: '/restaurant',
      color: 'from-secondary-500 to-secondary-600',
    },
    {
      id: 'bar',
      title: 'Bar',
      description: 'Détendez-vous avec nos cocktails raffinés et notre ambiance chaleureuse',
      icon: <Wine size={40} className="text-secondary-500" />,
      link: '/bar',
      color: 'from-secondary-500 to-secondary-600',
    },
    {
      id: 'laverie',
      title: 'Laverie Automobile',
      description: 'Lavage moderne et professionnel pour tous types de véhicules',
      icon: <Car size={40} className="text-secondary-500" />,
      link: '/laverie',
      color: 'from-secondary-500 to-secondary-600',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Bienvenue au {config.name}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            {config.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/restaurant"
              className="inline-flex items-center justify-center space-x-2 bg-secondary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-600 transition-colors"
            >
              <span>Voir le Menu</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center space-x-2 border-2 border-secondary-500 text-secondary-500 px-8 py-3 rounded-lg font-semibold hover:bg-secondary-500 hover:text-white transition-colors"
            >
              <span>Nous Contacter</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Nos Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.id} to={service.link}>
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardContent className="text-center">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${service.color} text-white mb-6`}>
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl mb-3">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                    <div className={`inline-flex items-center justify-center space-x-2 text-secondary-200 dark:text-secondary-300 font-medium`}>
                      <span>En savoir plus</span>
                      <ArrowRight size={16} className="ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Horaires d'Ouverture
          </h2>
          <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <ul className="space-y-3">
              {Object.entries(config.hours).map(([day, hours]) => (
                <li
                  key={day}
                  className="flex justify-between items-center py-2 border-b dark:border-gray-700 last:border-0"
                >
                  <span className="font-medium text-gray-900 dark:text-white capitalize">
                    {day}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">{hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à nous rendre visite ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Venez découvrir nos services et profitez d'une expérience unique
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center space-x-2 bg-secondary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-600 transition-colors"
          >
            <span>Contactez-nous</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
