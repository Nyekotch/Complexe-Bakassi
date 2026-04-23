import { Link } from 'react-router-dom';
import { ArrowRight, UtensilsCrossed, Wine, Car } from 'lucide-react';
import { config } from '@/data/config';
import Card, { CardContent, CardTitle, CardDescription, CardImage, CardHeader, CardFooter } from '@/components/Card';
import { useState, useEffect } from 'react';
import heroImage from '@/assets/imagesComplexe/img1.png';
import heroImage1 from '@/assets/imagesComplexe/img2.png';
import restaurantImage from '@/assets/imagesRestaurant/resto1.jpeg';
import laverieImage from '@/assets/imagesLaverie/lav1.png';

// Fonction pour vérifier si l'établissement est ouvert
function isOpen(): boolean {
  const now = new Date();
  const days = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
  const currentDay = days[now.getDay()];
  const hoursForDay = config.hours[currentDay as keyof typeof config.hours];
  
  if (!hoursForDay) return false;
  
  const [openTime, closeTime] = hoursForDay.split(' - ').map(time => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  });
  
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  
  // Gérer le cas où l'heure de fermeture est après minuit (00:00)
  if (closeTime < openTime) {
    return currentMinutes >= openTime || currentMinutes < closeTime;
  }
  
  return currentMinutes >= openTime && currentMinutes < closeTime;
}


export default function Home() {
  const images = [
    heroImage,
    heroImage1,
    
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [isCurrentlyOpen, setIsCurrentlyOpen] = useState(isOpen());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Mettre à jour le statut d'ouverture toutes les minutes
  useEffect(() => {
    const statusInterval = setInterval(() => {
      setIsCurrentlyOpen(isOpen());
    }, 60000);

    return () => clearInterval(statusInterval);
  }, []);

  const services: Array<{
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    link: string;
    color: string;
    images?: string[];
  }> = [
    {
      id: 'restaurant',
      title: 'Restaurant',
      description: 'Découvrez notre menu varié avec des plats savoureux préparés avec passion',
      icon: <UtensilsCrossed size={28} className="text-secondary-500" />,
      link: '/restaurant',
      color: 'from-secondary-500 to-secondary-600',
      images : [
        restaurantImage,
       
      ]
    },
    {
      id: 'bar',
      title: 'Bar',
      description: 'Détendez-vous avec nos cocktails raffinés et notre ambiance chaleureuse',
      icon: <Wine size={28} className="text-secondary-500" />,
      link: '/bar',
      color: 'from-secondary-500 to-secondary-600',
    },
    {
      id: 'laverie',
      title: 'Laverie Automobile',
      description: 'Lavage moderne et professionnel pour tous types de véhicules',
      icon: <Car size={28} className="text-secondary-500" />,
      link: '/laverie',
      color: 'from-secondary-500 to-secondary-600',
      images: [
        laverieImage,
      ]
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image Slider */}
        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

        {/* Content */}
        <div className="relative z-20 flex h-full items-end justify-center text-center text-white px-4 pb-12 md:pb-20">
          <div className="max-w-4xl mx-auto w-full">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">
              Bienvenue au {config.name}
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-4 md:mb-6 max-w-2xl mx-auto opacity-90">
              {config.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link
                to="/restaurant"
                className="inline-flex items-center justify-center space-x-2 bg-secondary-500 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold hover:bg-secondary-600 transition-colors text-sm md:text-base"
              >
                <span>Voir le Menu</span>
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center space-x-2 border-2 border-secondary-500 text-secondary-500 px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold hover:bg-secondary-500 hover:text-white transition-colors text-sm md:text-base"
              >
                <span>Nous Contacter</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 md:mb-12">
            Nos Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <Link key={service.id} to={service.link}>
                <Card className="h-full hover:shadow-xl transition-shadow max-h-96 flex flex-col">
                  <CardHeader className="flex-shrink-0">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center space-x-3">
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${service.color} text-white`}>
                          {service.icon}
                        </div>
                        <CardTitle className="text-xl mb-0">{service.title}</CardTitle>
                      </div>
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
                        isCurrentlyOpen 
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                          : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                      }`}>
                        {isCurrentlyOpen ? 'Ouvert' : 'Fermé'}
                      </span>
                    </div>
                  </CardHeader>
                  {service.images && service.images.length > 0 && (
                    <CardImage 
                      src={service.images[0]} 
                      alt={service.title} 
                      className="h-48 flex-shrink-0"
                    />
                  )}
                  <CardContent className="flex-grow">
                    <CardDescription className="text-sm">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex-shrink-0">
                    <div className="flex items-center justify-center space-x-2 text-secondary-500 dark:text-secondary-400 font-medium w-full">
                      <span>En savoir plus</span>
                      <ArrowRight size={16} />
                    </div>
                  </CardFooter>
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
