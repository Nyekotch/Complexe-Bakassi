# Complexe Bakassi

Application web vitrine moderne pour le Complexe Bakassi - Restaurant, Bar et Laverie Automobile.

## 🚀 Technologies

- **React 18** - Framework UI
- **Vite** - Build tool
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling
- **React Router** - Routing
- **Lucide React** - Icônes
- **QRCode.react** - Génération de QR Codes

## 📦 Installation

```bash
npm install
```

## 🏃 Démarrage

```bash
npm run dev
```

L'application sera disponible sur [http://localhost:5173](http://localhost:5173)

## 🏗️ Structure du projet

```
src/
├── assets/              # Images et ressources
├── components/          # Composants réutilisables
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Card.tsx
│   ├── Modal.tsx
│   └── WhatsAppButton.tsx
├── context/             # Contextes React
├── data/                # Données statiques
│   ├── config.ts
│   ├── menu.ts
│   ├── bar.ts
│   └── laverie.ts
├── pages/               # Pages de l'application
│   ├── Home.tsx
│   ├── Restaurant.tsx
│   ├── Bar.tsx
│   ├── Laverie.tsx
│   ├── Contact.tsx
│   └── QRPage.tsx
├── types/               # Types TypeScript
├── utils/               # Fonctions utilitaires
├── App.tsx              # Composant principal
└── main.tsx             # Point d'entrée
```

## 🎨 Fonctionnalités

- **Page d'accueil** - Présentation des services
- **Restaurant** - Menu complet avec prix
- **Bar** - Carte des boissons avec Happy Hours
- **Laverie** - Services par type de véhicule
- **Contact** - Informations de contact
- **QR Code** - Génération et impression de QR Codes
- **WhatsApp** - Intégration pour les commandes

## 🔧 Configuration

Créez un fichier `.env` à la racine du projet:

```env
VITE_APP_NAME=Complexe Bakassi
VITE_PHONE=+237600000000
VITE_WHATSAPP=+237600000000
VITE_EMAIL=contact@complexe-bakassi.com
VITE_ADDRESS=123 Rue Principale, Akwa
VITE_CITY=Douala
VITE_COUNTRY=Cameroun
```

## 📱 Build pour production

```bash
npm run build
```

## 📄 Plan de développement

Pour plus de détails sur le développement, consultez [PLAN_DEVELOPPEMENT.md](./PLAN_DEVELOPPEMENT.md)

## 📝 Licence

MIT
