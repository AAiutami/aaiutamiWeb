# AAIUTAMI Landing Page

Una landing page moderna e responsive per presentare l'app AAIUTAMI, costruita con Vue.js 3, Vite e tecnologie moderne.

## 🚀 Caratteristiche

- **Vue.js 3** con Composition API
- **Vite** per build veloce e hot reload
- **Vue Router** per navigazione SPA
- **GSAP** per animazioni fluide
- **Lucide Vue** per icone moderne
- **CSS personalizzato** con variabili e utility classes
- **Responsive design** ottimizzato per mobile
- **SEO ottimizzato** con meta tags appropriati

## 📁 Struttura del Progetto

```
src/
├── components/
│   ├── sections/          # Sezioni della landing page
│   │   ├── AppHeader.vue
│   │   ├── HeroSection.vue
│   │   ├── FeaturesSection.vue
│   │   ├── AboutSection.vue
│   │   ├── GallerySection.vue
│   │   ├── TestimonialsSection.vue
│   │   ├── CtaSection.vue
│   │   └── AppFooter.vue
│   └── ui/                # Componenti UI riutilizzabili
│       └── Button.vue
├── views/
│   └── Home.vue           # Vista principale
├── router/
│   └── index.js           # Configurazione routing
├── styles/
│   ├── variables.css      # Variabili CSS
│   └── global.css         # Stili globali
├── utils/
│   └── appData.js         # Dati dell'applicazione
└── assets/
    ├── images/            # Immagini
    └── icons/             # Icone
```

## 🛠️ Sviluppo

### Prerequisiti

- Node.js (versione 16 o superiore)
- npm o yarn

### Installazione

1. Clona il repository
2. Installa le dipendenze:
   ```bash
   npm install
   ```

### Comandi Disponibili

- **Sviluppo**: `npm run dev` - Avvia il server di sviluppo
- **Build**: `npm run build` - Crea la build di produzione
- **Preview**: `npm run preview` - Anteprima della build di produzione

## 🎨 Personalizzazione

### Colori e Stili

I colori e le variabili sono definiti in `src/styles/variables.css`. Modifica questi valori per personalizzare l'aspetto dell'app.

### Contenuti

I contenuti dell'app (testi, features, testimonials) sono centralizzati in `src/utils/appData.js`.

### Componenti

Ogni sezione della landing page è un componente separato in `src/components/sections/` per facilitare la manutenzione.

## 📱 Sezioni della Landing Page

1. **Header** - Navigazione principale con menu responsive
2. **Hero** - Sezione principale con CTA e statistiche
3. **Features** - Caratteristiche principali dell'app
4. **About** - Informazioni sull'app e il team
5. **Gallery** - Screenshot e demo dell'app
6. **Testimonials** - Recensioni degli utenti
7. **CTA** - Call-to-action finale per il download
8. **Footer** - Link e informazioni di contatto

## 🔧 Tecnologie Utilizzate

- **Vue.js 3** - Framework JavaScript reattivo
- **Vite** - Build tool veloce
- **Vue Router** - Routing per SPA
- **GSAP** - Libreria per animazioni
- **VueUse** - Utility Vue composables
- **Lucide Vue** - Icone SVG moderne

## 📦 Dipendenze

### Dipendenze Principali

- `vue` - Framework JavaScript
- `vue-router` - Routing
- `gsap` - Animazioni
- `@vueuse/core` - Utility composables
- `lucide-vue-next` - Icone

### Dipendenze di Sviluppo

- `@vitejs/plugin-vue` - Plugin Vue per Vite
- `vite` - Build tool

## 🚀 Deployment

Per il deployment in produzione:

1. Esegui il build: `npm run build`
2. La cartella `dist/` conterrà i file ottimizzati
3. Carica i file su un server web o servizio di hosting

## 📄 Licenza

Questo progetto è proprietario di AAIUTAMI. 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).
