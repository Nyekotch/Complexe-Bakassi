import type { SiteConfig } from '@/types/Config';

export const config: SiteConfig = {
  name: 'Complexe Bakassi',
  description: 'Votre destination tout-en-un : Restaurant, Bar et Laverie automobile moderne',
  phone: '+237 650 940 272',
  whatsapp: '+237 650 940 272',
  email: 'contact@complexe-bakassi.com',
  address: 'Nkolmesseng, Gendarmerie',
  city: 'Yaounde',
  country: 'Cameroun',
  socialMedia: {
    facebook: 'https://facebook.com/complexe-bakassi',
    instagram: 'https://instagram.com/complexe-bakassi',
    twitter: 'https://twitter.com/complexe-bakassi',
  },
  hours: {
    lundi: '08:00 - 23:00',
    mardi: '08:00 - 23:00',
    mercredi: '08:00 - 23:00',
    jeudi: '08:00 - 23:00',
    vendredi: '08:00 - 00:00',
    samedi: '10:00 - 00:00',
    dimanche: '10:00 - 22:00',
  },
  currency: 'FCFA',
  language: 'fr',
};
