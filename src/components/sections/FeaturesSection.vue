<template>
    <section id="features" class="features">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Come Funziona Aiutami</h2>
                <p class="section-description">
                    La nostra piattaforma semplifica il processo di richiesta e offerta di aiuto nella tua comunità, creando connessioni significative tra persone.
                </p>
            </div>

            <div class="features-grid">
                <div v-for="feature in features" :key="feature.id" class="feature-card">
                    <div class="feature-icon">
                        <component :is="feature.icon" :size="34" />
                    </div>
                    <h3 class="feature-title">{{ feature.title }}</h3>
                    <p class="feature-description">{{ feature.description }}</p>
                    <ul class="feature-list">
                        <li v-for="item in feature.benefits" :key="item">
                            <i class="icon-check"></i>
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Feature Showcase -->
            <div class="feature-showcase">
                <div class="showcase-content">
                    <h3 class="showcase-title">Connettiamo Bisogni e Aiuto</h3>
                    <p class="showcase-description">
                       Un'app innovativa che collega chi ha bisogno di assistenza con persone disposte ad aiutare. Costruiamo insieme una comunità solidale.
                    </p>
                    <button class="btn btn-primary">Scarica l'app</button>
                </div>
                <div >
                    <img class="showcase-visual" src="https://i.ibb.co/5bSj9dt/pexels-shvetsa-4672717.jpg" alt="AI Visualization" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { UserRoundSearch , HeartHandshake , Handshake } from 'lucide-vue-next';

import { ref } from 'vue'

const features = ref([
    {
        id: 1,
        icon: UserRoundSearch,
        title: 'Richiedi aiuto',
        description: 'Inserisci la tua richiesta specificando di cosa hai bisogno e dove ti trovi. Il nostro sistema ti connetterà con chi può aiutarti.',
        benefits: ['Ricevi aiuto velocemente', 'Instaura rapporti per il futuro']
    },
    {
        id: 2,
        icon: Handshake,
        title: 'Offri il Tuo Aiuto',
        description: 'Registrati come helper e scegli le categorie in cui puoi dare una mano. Potrai rispondere alle richieste nella tua zona.',
        benefits: ['Guadagna aiutando gli altri', 'Contatto diretto con il cliente', 'Accetta solo i lavori che sei in grado di gestire']
    },
    {
        id: 3,
        icon: HeartHandshake,
        title: 'Crea Connessioni',
        description: 'Entra in contatto diretto con chi può aiutarti o con chi ha bisogno del tuo supporto. Costruisci relazioni nella tua comunità.',
        benefits: ['Rimani in contatto con chi può aiutarti', 'Crea rapporti duraturi nel tempo']
    }
    // ,
    // {
    //     id: 4,
    //     icon: 'icon-users',
    //     title: 'Collaborazione',
    //     description: 'Lavora in team con strumenti di collaborazione avanzati',
    //     benefits: ['Team Workspace', 'Condivisione Real-time', 'Controllo Versioni']
    // },
    // {
    //     id: 5,
    //     icon: 'icon-chart',
    //     title: 'Analytics',
    //     description: 'Dashboard dettagliate per monitorare le performance',
    //     benefits: ['Metriche Real-time', 'Report Personalizzati', 'Insights AI']
    // },
    // {
    //     id: 6,
    //     icon: 'icon-puzzle',
    //     title: 'Integrazioni',
    //     description: 'Connetti facilmente con i tuoi strumenti preferiti',
    //     benefits: ['API REST', 'Webhook', '500+ Integrazioni']
    // }
])
</script>

<style scoped>

.showcase-visual{
    border-radius: var(--rounded-xl);
}

.features {
    padding: var(--space-20) 0;
    background: var(--gray-50);
}

.section-header {
    text-align: center;
    margin-bottom: var(--space-16);
}

.section-title {
    font-size: var(--text-4xl);
    font-weight: 700;
    color: var(--gray-900);
    margin-bottom: var(--space-4);
}

.section-description {
    font-size: var(--text-xl);
    color: var(--gray-600);
    max-width: 600px;
    margin: 0 auto;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: var(--space-8);
    margin-bottom: var(--space-20);
}

.feature-card {
    background: var(--gray-100);
    padding: var(--space-8);
    border-radius: var(--rounded-xl);
    box-shadow: var(--shadow-md);
    transition: var(--transition-base);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.feature-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-xl);
}

.feature-icon {
    width: 60px;
    height: 60px;
    background: var(--gradient-primary);
    border-radius: var(--rounded-xl);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--space-6);
}

.feature-icon i {
    font-size: var(--text-2xl);
    color: white;
}

.feature-title {
    font-size: var(--text-xl);
    font-weight: 600;
    color: var(--gray-900);
    margin-bottom: var(--space-3);
}

.feature-description {
    color: var(--gray-600);
    margin-bottom: var(--space-4);
}

.feature-list {
    text-align: left;
    list-style: outside;
    padding: 0;
}

.feature-list li {
    gap: var(--space-2);
    color: var(--gray-700);
    margin-bottom: var(--space-2);
    
}

.feature-showcase {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-12);
    align-items: center;
    background: var(--gray-100);
    padding: var(--space-12);
    border-radius: var(--rounded-2xl);
    box-shadow: var(--shadow-lg);
}

.showcase-title {
    font-size: var(--text-3xl);
    font-weight: 700;
    color: var(--gray-900);
    margin-bottom: var(--space-4);
}

.showcase-description {
    color: var(--gray-600);
    margin-bottom: var(--space-6);
    line-height: 1.6;
}

@media (max-width: 768px) {
    .features-grid {
        grid-template-columns: 1fr;
    }

    .feature-showcase {
        grid-template-columns: 1fr;
        text-align: center;
    }
}
</style>