export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'entree' | 'plat' | 'dessert' | 'boisson';
  image?: string;
  available: boolean;
  spicy?: boolean;
  vegetarian?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}
