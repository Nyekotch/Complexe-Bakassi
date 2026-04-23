export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration?: string;
  image?: string;
  available: boolean;
}

export interface CarWashService extends Service {
  vehicleType: 'voiture' | 'suv' | 'moto' | 'camion';
  includes: string[];
}

export interface Drink {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'cocktail' | 'biere' | 'soft' | 'vin' | 'spiritueux';
  image?: string;
  available: boolean;
  alcoholContent?: string;
}
