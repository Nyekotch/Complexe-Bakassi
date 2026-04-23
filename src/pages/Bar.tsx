import { useState } from 'react';
import { Wine, Clock } from 'lucide-react';
import { drinks, barCategories, happyHours } from '@/data/bar';
import Card, { CardContent, CardTitle, CardDescription, CardPrice } from '@/components/Card';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Bar() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredDrinks = selectedCategory === 'all'
    ? drinks
    : drinks.filter(drink => drink.category === selectedCategory);

  const isHappyHour = () => {
    if (!happyHours.enabled) return false;
    const now = new Date();
    const day = now.toLocaleDateString('fr-FR', { weekday: 'long' });
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTime = currentHour * 60 + currentMinute;

    const [startHour, startMin] = happyHours.startTime.split(':').map(Number);
    const [endHour, endMin] = happyHours.endTime.split(':').map(Number);
    const startTime = startHour * 60 + startMin;
    const endTime = endHour * 60 + endMin;

    return happyHours.days.includes(day) && currentTime >= startTime && currentTime <= endTime;
  };

  const getDiscountedPrice = (price: number) => {
    if (isHappyHour()) {
      return Math.round(price * (1 - happyHours.discount / 100));
    }
    return price;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="bg-black text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-white/20 rounded-lg">
              <Wine size={32} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Notre Bar</h1>
          </div>
          <p className="text-lg opacity-90 max-w-2xl mb-4">
            Détendez-vous avec nos cocktails raffinés et notre ambiance chaleureuse
          </p>
          {isHappyHour() && (
            <div className="inline-flex items-center space-x-2 bg-secondary-400 text-secondary-900 px-4 py-2 rounded-full font-semibold">
              <Clock size={20} />
              <span>Happy Hour en cours! -{happyHours.discount}%</span>
            </div>
          )}
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-16 z-40 bg-white dark:bg-gray-800 shadow-md py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-secondary-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Tout
            </button>
            {barCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-secondary-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Drinks */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDrinks.map((drink) => (
              <Card key={drink.id} className="h-full">
                <CardContent>
                  <CardTitle>{drink.name}</CardTitle>
                  <CardDescription className="mb-2">
                    {drink.description}
                  </CardDescription>
                  {drink.alcoholContent && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      {drink.alcoholContent} d'alcool
                    </p>
                  )}
                  <div className="flex justify-between items-center">
                    <div>
                      <CardPrice price={drink.price} />
                      {isHappyHour() && (
                        <p className="text-sm text-green-600 dark:text-green-400 line-through">
                          {getDiscountedPrice(drink.price)} FCFA
                        </p>
                      )}
                    </div>
                    <WhatsAppButton
                      message={`Bonjour, je souhaite commander: ${drink.name} (${drink.price} FCFA)`}
                      size="sm"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Happy Hours Info */}
      {happyHours.enabled && (
        <section className="py-12 px-4 bg-secondary-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Happy Hours
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Profitez de réduction de {happyHours.discount}% sur tous les cocktails!
            </p>
            <div className="inline-flex items-center space-x-2 text-gray-700 dark:text-gray-300">
              <Clock size={20} />
              <span>
                {happyHours.days.join(', ')} de {happyHours.startTime} à {happyHours.endTime}
              </span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
