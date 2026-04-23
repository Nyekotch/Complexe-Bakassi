export interface SiteConfig {
  name: string;
  description: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  city: string;
  country: string;
  socialMedia: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    tiktok?: string;
  };
  hours: {
    [key: string]: string;
  };
  currency: string;
  language: string;
}
