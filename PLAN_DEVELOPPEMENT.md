# Plan de Développement - Complexe Bakassi

## 📋 Vue d'ensemble du projet

**Nom du projet:** Complexe Bakassi  
**Type:** Application web vitrine moderne  
**Objectif:** Présenter les services du complexe (bar, restaurant, laverie automobile) avec tarifs, menus et permettre aux clients de commander via WhatsApp  
**Technologies:** React + Vite + TypeScript + Tailwind CSS (sans backend)

---

## 🏗️ Architecture du projet

```
complexe-bakassi/
├── src/
│   ├── assets/              # Photos, logo, icônes
│   ├── components/          # Composants réutilisables
│   │   ├── Navbar.tsx       # Navigation principale
│   │   ├── Footer.tsx       # Pied de page
│   │   ├── Card.tsx         # Carte de service/menu
│   │   ├── Modal.tsx        # Modale pour détails
│   │   ├── QRCode.tsx       # Générateur de QR Code
│   │   └── WhatsAppButton.tsx # Bouton de contact WhatsApp
│   ├── context/             # Contextes React
│   │   └── CartContext.tsx  # Panier global (optionnel)
│   ├── data/                # Données statiques
│   │   ├── menu.ts          # Menu restaurant
│   │   ├── bar.ts           # Carte des boissons
│   │   ├── laverie.ts       # Services laverie
│   │   └── config.ts        # Configuration générale
│   ├── pages/               # Pages de l'application
│   │   ├── Home.tsx         # Page d'accueil
│   │   ├── Restaurant.tsx   # Page restaurant
│   │   ├── Bar.tsx          # Page bar
│   │   ├── Laverie.tsx      # Page laverie
│   │   ├── Contact.tsx      # Page contact
│   │   └── QRPage.tsx       # Page QR Code pour impression
│   ├── types/               # Types TypeScript
│   │   ├── MenuItem.ts      # Type pour items de menu
│   │   ├── Service.ts       # Type pour services
│   │   └── Order.ts         # Type pour commandes
│   ├── utils/               # Fonctions utilitaires
│   │   ├── whatsapp.ts      # Génération de liens WhatsApp
│   │   └── formatPrice.ts   # Formatage des prix
│   ├── App.tsx              # Composant principal
│   └── main.tsx             # Point d'entrée
├── index.html               # HTML principal
├── tailwind.config.ts       # Configuration Tailwind
├── vite.config.ts           # Configuration Vite
└── .env.example             # Variables d'environnement
```

---

## 🎯 Fonctionnalités principales

### 1. **Page d'accueil (Home)**
- Présentation du complexe avec photos
- Aperçu des 3 services (Restaurant, Bar, Laverie)
- Navigation vers chaque section
- Horaires d'ouverture
- Informations de contact

### 2. **Page Restaurant**
- Menu complet avec catégories (Entrées, Plats, Desserts, Boissons)
- Photos des plats
- Prix en FCFA
- Bouton "Commander via WhatsApp"
- Filtres par catégorie

### 3. **Page Bar**
- Carte des boissons (cocktails, bières, softs)
- Prix
- Happy hours et promotions
- Ambiance/événements

### 4. **Page Laverie**
- Services proposés (lavage extérieur, intérieur, polish, etc.)
- Tarifs par type de véhicule
- Durée estimée
- Galerie photos avant/après

### 5. **Page Contact**
- Formulaire de contact (optionnel - Formspree)
- Carte Google Maps (embed)
- Numéros de téléphone
- Adresse
- Réseaux sociaux

### 6. **Page QR Code**
- Génération de QR Code pointant vers l'application
- Design imprimable (A4)
- Instructions pour affichage
- Options de personnalisation

---

## 🛠️ Stack technique

### Frontend
- **React 18+** - Framework UI
- **Vite** - Build tool et dev server
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling
- **React Router v6+** - Routing

### Bibliothèques additionnelles
- **Lucide React** - Icônes modernes
- **qrcode.react** - Génération de QR Codes
- **react-helmet-async** - Gestion des meta tags
- **framer-motion** - Animations (optionnel)

### Outils
- **ESLint** - Linting
- **Prettier** - Formatage
- **Path aliases** - `@/components`, `@/pages`, etc.

---

## 📦 Dépendances à installer

```bash
npm install react-router-dom lucide-react qrcode.react react-helmet-async framer-motion
npm install -D @types/node
```

---

## 🎨 Design System

### Palette de couleurs
- **Primaire:** #AA3BFF (Violet moderne)
- **Secondaire:** #FF6B35 (Orange chaud)
- **Accent:** #00D9A0 (Vert menthe)
- **Fond clair:** #FFFFFF
- **Fond sombre:** #16171D
- **Texte:** #6B6375 (clair), #F3F4F6 (sombre)

### Typographie
- **Titres:** System UI, Segoe UI, Roboto
- **Corps:** System UI, Segoe UI, Roboto
- **Mono:** Consolas, monospace

### Composants UI
- Cartes avec ombres douces
- Boutons avec hover effects
- Modales animées
- Navigation responsive (mobile menu)

---

## 🚀 Étapes de développement

### Phase 1: Configuration initiale
1. ✅ Créer le projet Vite + React + TypeScript
2. ✅ Installer Tailwind CSS
3. ⏳ Configurer les path aliases dans `vite.config.ts`
4. ⏳ Installer les dépendances
5. ⏳ Configurer ESLint et Prettier

### Phase 2: Structure et types
1. ⏳ Créer la structure de dossiers
2. ⏳ Définir les types TypeScript
3. ⏳ Créer les fichiers de données (menu, bar, laverie)
4. ⏳ Configurer les variables d'environnement

### Phase 3: Composants de base
1. ⏳ Navbar avec navigation responsive
2. ⏳ Footer avec informations de contact
3. ⏳ Card component pour les items
4. ⏳ Modal pour les détails
5. ⏳ WhatsAppButton pour les commandes

### Phase 4: Pages
1. ⏳ Home page avec hero section
2. ⏳ Restaurant page avec menu
3. ⏳ Bar page avec carte des boissons
4. ⏳ Laverie page avec services
5. ⏳ Contact page avec formulaire
6. ⏳ QRPage pour impression

### Phase 5: Intégrations
1. ⏳ Routing avec React Router
2. ⏳ Génération de QR Code
3. ⏳ Intégration WhatsApp
4. ⏳ Google Maps embed

### Phase 6: Design et animations
1. ⏳ Appliquer Tailwind sur toutes les pages
2. ⏳ Ajouter des animations (Framer Motion)
3. ⏳ Responsive design (mobile-first)
4. ⏳ Dark mode (optionnel)

### Phase 7: Optimisation et déploiement
1. ⏳ Optimiser les images
2. ⏳ SEO (meta tags, sitemap)
3. ⏳ Performance (lazy loading)
4. ⏳ Déploiement (Vercel/Netlify)

---

## 📱 Stratégie QR Code

### Distribution
- **Affiches A4** dans les zones à fort trafic
- **Flyers** à distribuer
- **Stickers** sur les véhicules du complexe
- **Cartes de visite** pour les clients
- **Réseaux sociaux** - QR Code dans les posts

### Design du QR Code
- Logo du complexe au centre
- Couleurs de la marque
- Texte "Scannez pour découvrir Complexe Bakassi"
- URL courte (bit.ly ou domaine personnalisé)

---

## 💰 Monétisation (optionnel)

### Possibilités futures
- Système de réservation en ligne
- Commandes prépayées
- Programme de fidélité
- Notifications push pour promotions
- Analytics pour suivre les visites

---

## 🔧 Variables d'environnement

```env
# .env.example
VITE_APP_NAME=Complexe Bakassi
VITE_WA_NUMBER=+237600000000
VITE_FORMSPREE_ID=votre_formspree_id
VITE_GOOGLE_MAPS_API_KEY=votre_api_key
```

---

## 📊 Contenu à préparer

### Assets nécessaires
- **Logo** du complexe (PNG/SVG)
- **Photos** des plats (menu restaurant)
- **Photos** des boissons (bar)
- **Photos** avant/après (laverie)
- **Photos** du complexe (extérieur/intérieur)
- **Icônes** personnalisées (optionnel)

### Données à collecter
- Menu complet avec prix
- Carte des boissons avec prix
- Tarifs laverie par type de véhicule
- Horaires d'ouverture
- Coordonnées complètes
- Description de chaque service

---

## 🎯 Objectifs de communication

### Cibles
- **Résidents locaux** - Clientèle régulière
- **Passants** - Découverte via QR Code
- **Touristes** - Via réseaux sociaux
- **Entreprises** - Services laverie pour flottes

### Messages clés
- "Votre destination tout-en-un à Douala"
- "Qualité, service, ambiance"
- "Laverie automobile moderne"
- "Cuisine savoureuse et boissons raffinées"

---

## 📈 KPIs à suivre

- **Visites** du site web
- **Scans** de QR Code
- **Commandes** via WhatsApp
- **Temps** passé sur le site
- **Pages** les plus visitées

---

## 🔄 Maintenance

### Mises à jour régulières
- Menu du restaurant
- Promotions du bar
- Nouveaux services laverie
- Horaires spéciaux (fêtes, événements)

### Support technique
- Surveillance des liens brisés
- Mises à jour de sécurité
- Optimisation des performances

---

## 🚀 Prochaines étapes immédiates

1. **Installer les dépendances** React Router, Lucide Icons, QRCode
2. **Créer la structure de dossiers** selon le plan
3. **Définir les types TypeScript** de base
4. **Créer les fichiers de données** avec le contenu réel
5. **Développer la Navbar** et le routing
6. **Créer la Home page** avec le design de base

---

**Prêt à commencer le développement ?** 🚀
