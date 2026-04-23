import { useState } from 'react';
import { Car, Clock } from 'lucide-react';
import { carWashServices, vehicleTypes } from '@/data/laverie';
import Card, { CardContent, CardTitle, CardDescription, CardPrice } from '@/components/Card';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Laverie() {
  const [selectedVehicle, setSelectedVehicle] = useState<string>('all');

  const filteredServices = selectedVehicle === 'all'
    ? carWashServices
    : carWashServices.filter(service => service.vehicleType === selectedVehicle);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="bg-black text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-white/20 rounded-lg">
              <Car size={32} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Laverie Automobile</h1>
          </div>
          <p className="text-lg opacity-90 max-w-2xl">
            Lavage moderne et professionnel pour tous types de véhicules
          </p>
        </div>
      </section>

      {/* Vehicle Type Filter */}
      <section className="sticky top-16 z-40 bg-white dark:bg-gray-800 shadow-md py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedVehicle('all')}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                selectedVehicle === 'all'
                  ? 'bg-secondary-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Tous les véhicules
            </button>
            {vehicleTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedVehicle(type.id)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedVehicle === type.id
                    ? 'bg-secondary-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                <span className="mr-2">{type.icon}</span>
                {type.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <Card key={service.id} className="h-full">
                <CardContent>
                  <CardTitle>{service.name}</CardTitle>
                  <CardDescription className="mb-4">
                    {service.description}
                  </CardDescription>
                  {service.duration && (
                    <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <Clock size={16} />
                      <span>{service.duration}</span>
                    </div>
                  )}
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Inclus:
                    </p>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      {service.includes.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center">
                    <CardPrice price={service.price} />
                    <WhatsAppButton
                      message={`Bonjour, je souhaite réserver: ${service.name} pour ${service.vehicleType} (${service.price} FCFA)`}
                      size="sm"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
