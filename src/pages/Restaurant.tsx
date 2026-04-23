import { useState } from 'react';
import { UtensilsCrossed } from 'lucide-react';
import { menuCategories } from '@/data/menu';
import Card, { CardContent, CardTitle, CardDescription, CardPrice } from '@/components/Card';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Restaurant() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCategories = selectedCategory === 'all'
    ? menuCategories
    : menuCategories.filter(cat => cat.id === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="bg-black text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-white/20 rounded-lg">
              <UtensilsCrossed size={32} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Notre Restaurant</h1>
          </div>
          <p className="text-lg opacity-90 max-w-2xl">
            Découvrez notre menu varié avec des plats savoureux préparés avec passion
          </p>
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
            {menuCategories.map((category) => (
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

      {/* Menu */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {filteredCategories.map((category) => (
            <div key={category.id} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {category.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item) => (
                  <Card key={item.id} className="h-full">
                    <CardContent>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle>{item.name}</CardTitle>
                        {item.spicy && (
                          <span className="text-red-500 text-sm">🌶️</span>
                        )}
                        {item.vegetarian && (
                          <span className="text-green-500 text-sm">🥬</span>
                        )}
                      </div>
                      <CardDescription className="mb-4">
                        {item.description}
                      </CardDescription>
                      <div className="flex justify-between items-center">
                        <CardPrice price={item.price} />
                        <WhatsAppButton
                          message={`Bonjour, je souhaite commander: ${item.name} (${item.price} FCFA)`}
                          size="sm"
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
