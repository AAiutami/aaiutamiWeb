<template>
    <section id="features" class="features">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Funzionalità Innovative</h2>
                <p class="section-description">
                    Strumenti all'avanguardia per massimizzare la tua produttività
                </p>
            </div>

            <div class="features-grid">
                <div v-for="feature in features" :key="feature.id" class="feature-card">
                    <div class="feature-icon">
                        <i :class="feature.icon"></i>
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
                    <h3 class="showcase-title">Intelligenza Artificiale Avanzata</h3>
                    <p class="showcase-description">
                        La nostra AI utilizza algoritmi di machine learning all'avanguardia per offrire
                        risultati precisi e personalizzati.
                    </p>
                    <button class="btn btn-primary">Scopri di Più</button>
                </div>
                <div class="showcase-visual">
                    <img src="" alt="AI Visualization" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const features = ref([
    {
        id: 1,
        icon: 'icon-brain',
        title: 'AI Intelligente',
        description: 'Algoritmi avanzati per risultati precisi e personalizzati',
        benefits: ['Machine Learning', 'Deep Learning', 'NLP Avanzato']
    },
    {
        id: 2,
        icon: 'icon-lightning',
        title: 'Velocità Estrema',
        description: 'Elaborazione in tempo reale per massima efficienza',
        benefits: ['Risposta Istantanea', 'Cloud Computing', 'Ottimizzazione']
    },
    {
        id: 3,
        icon: 'icon-shield',
        title: 'Sicurezza Totale',
        description: 'I tuoi dati sono protetti con crittografia enterprise',
        benefits: ['Crittografia End-to-End', 'GDPR Compliant', 'Backup Automatico']
    },
    {
        id: 4,
        icon: 'icon-users',
        title: 'Collaborazione',
        description: 'Lavora in team con strumenti di collaborazione avanzati',
        benefits: ['Team Workspace', 'Condivisione Real-time', 'Controllo Versioni']
    },
    {
        id: 5,
        icon: 'icon-chart',
        title: 'Analytics',
        description: 'Dashboard dettagliate per monitorare le performance',
        benefits: ['Metriche Real-time', 'Report Personalizzati', 'Insights AI']
    },
    {
        id: 6,
        icon: 'icon-puzzle',
        title: 'Integrazioni',
        description: 'Connetti facilmente con i tuoi strumenti preferiti',
        benefits: ['API REST', 'Webhook', '500+ Integrazioni']
    }
])
</script>

<style scoped>
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
    background: white;
    padding: var(--space-8);
    border-radius: var(--rounded-xl);
    box-shadow: var(--shadow-md);
    transition: var(--transition-base);
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
    list-style: none;
    padding: 0;
}

.feature-list li {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    color: var(--gray-700);
    margin-bottom: var(--space-2);
}

.feature-showcase {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-12);
    align-items: center;
    background: white;
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