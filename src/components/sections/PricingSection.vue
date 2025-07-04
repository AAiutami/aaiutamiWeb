<template>
    <section id="pricing" class="pricing">
        <div class="container">
            <div class="section-header">
                <div class="section-tag">Prezzi</div>
                <h2 class="section-title">Scegli il Piano Perfetto</h2>
                <p class="section-description">
                    Soluzioni flessibili per ogni esigenza, dalla startup all'enterprise
                </p>
            </div>

            <!-- Toggle Mensile/Annuale -->
            <div class="billing-toggle">
                <span :class="{ active: billingType === 'monthly' }">Mensile</span>
                <button class="toggle-switch" @click="toggleBilling">
                    <span class="toggle-slider" :class="{ annual: billingType === 'annual' }"></span>
                </button>
                <span :class="{ active: billingType === 'annual' }">
                    Annuale
                    <span class="discount-badge">-20%</span>
                </span>
            </div>

            <!-- Piani -->
            <div class="pricing-grid">
                <div v-for="plan in pricingPlans" :key="plan.id" class="pricing-card"
                    :class="{ popular: plan.popular, enterprise: plan.enterprise }">

                    <div v-if="plan.popular" class="popular-badge">
                        <i class="icon-star"></i>
                        Più Popolare
                    </div>

                    <div class="plan-header">
                        <div class="plan-icon">
                            <i :class="plan.icon"></i>
                        </div>
                        <h3 class="plan-name">{{ plan.name }}</h3>
                        <p class="plan-description">{{ plan.description }}</p>
                    </div>

                    <div class="plan-pricing">
                        <div class="price">
                            <span class="currency">€</span>
                            <span class="amount">{{ getCurrentPrice(plan) }}</span>
                            <span class="period">{{ billingType === 'monthly' ? '/mese' : '/anno' }}</span>
                        </div>
                        <div v-if="billingType === 'annual'" class="savings">
                            Risparmi €{{ plan.savings }}/anno
                        </div>
                    </div>

                    <ul class="plan-features">
                        <li v-for="feature in plan.features" :key="feature" class="feature-item">
                            <i class="icon-check"></i>
                            {{ feature }}
                        </li>
                    </ul>

                    <button class="plan-button" :class="plan.popular ? 'btn-primary' : 'btn-outline'">
                        {{ plan.buttonText }}
                    </button>

                    <div class="plan-note">
                        {{ plan.note }}
                    </div>
                </div>
            </div>

            <!-- FAQ Prezzi -->
            <div class="pricing-faq">
                <h3 class="faq-title">Domande Frequenti</h3>
                <div class="faq-grid">
                    <div v-for="faq in pricingFAQ" :key="faq.id" class="faq-item">
                        <h4 class="faq-question">{{ faq.question }}</h4>
                        <p class="faq-answer">{{ faq.answer }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const billingType = ref('monthly')

const toggleBilling = () => {
    billingType.value = billingType.value === 'monthly' ? 'annual' : 'monthly'
}

const getCurrentPrice = (plan) => {
    return billingType.value === 'monthly' ? plan.monthlyPrice : plan.annualPrice
}

const pricingPlans = ref([
    {
        id: 1,
        name: 'Starter',
        description: 'Perfetto per iniziare',
        icon: 'icon-rocket',
        monthlyPrice: 19,
        annualPrice: 190,
        savings: 38,
        popular: false,
        enterprise: false,
        buttonText: 'Inizia Gratis',
        note: 'Prova gratuita di 14 giorni',
        features: [
            '10.000 richieste AI/mese',
            '5 progetti',
            'Supporto email',
            'Dashboard base',
            'API access'
        ]
    },
    {
        id: 2,
        name: 'Professional',
        description: 'Per team in crescita',
        icon: 'icon-users',
        monthlyPrice: 49,
        annualPrice: 490,
        savings: 98,
        popular: true,
        enterprise: false,
        buttonText: 'Inizia Ora',
        note: 'Più scelto dai professionisti',
        features: [
            '100.000 richieste AI/mese',
            'Progetti illimitati',
            'Supporto prioritario',
            'Analytics avanzate',
            'Integrazioni premium',
            'Backup automatico'
        ]
    },
    {
        id: 3,
        name: 'Enterprise',
        description: 'Per grandi organizzazioni',
        icon: 'icon-building',
        monthlyPrice: 'Custom',
        annualPrice: 'Custom',
        savings: 0,
        popular: false,
        enterprise: true,
        buttonText: 'Contattaci',
        note: 'Soluzione personalizzata',
        features: [
            'Richieste illimitate',
            'Multi-tenant',
            'Supporto dedicato 24/7',
            'SLA garantito',
            'Custom integrations',
            'Training personalizzato'
        ]
    }
])

const pricingFAQ = ref([
    {
        id: 1,
        question: 'Posso cambiare piano in qualsiasi momento?',
        answer: 'Sì, puoi effettuare upgrade o downgrade del tuo piano in qualsiasi momento. Le modifiche saranno applicate al prossimo ciclo di fatturazione.'
    },
    {
        id: 2,
        question: 'Cosa succede se supero i limiti del piano?',
        answer: 'Ti invieremo una notifica quando ti avvicini ai limiti. Puoi sempre fare upgrade o acquistare crediti aggiuntivi.'
    },
    {
        id: 3,
        question: 'Offrite sconti per no-profit?',
        answer: 'Sì, offriamo sconti speciali per organizzazioni no-profit e istituzioni educative. Contattaci per maggiori informazioni.'
    },
    {
        id: 4,
        question: 'È disponibile un piano gratuito?',
        answer: 'Offriamo una prova gratuita di 14 giorni su tutti i piani. Per uso continuativo, i nostri piani partono da €19/mese.'
    }
])
</script>

<style scoped>
.pricing {
    padding: var(--space-20) 0;
    background: var(--gray-50);
}

.section-header {
    text-align: center;
    margin-bottom: var(--space-12);
}

.section-tag {
    display: inline-block;
    padding: var(--space-2) var(--space-4);
    background: var(--primary-100);
    color: var(--primary-600);
    border-radius: var(--rounded-full);
    font-size: var(--text-sm);
    font-weight: 600;
    margin-bottom: var(--space-4);
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

.billing-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-4);
    margin-bottom: var(--space-16);
}

.billing-toggle span {
    font-weight: 500;
    color: var(--gray-600);
    transition: var(--transition-base);
}

.billing-toggle span.active {
    color: var(--primary-color);
    font-weight: 600;
}

.toggle-switch {
    width: 60px;
    height: 30px;
    background: var(--gray-300);
    border-radius: var(--rounded-full);
    position: relative;
    cursor: pointer;
    transition: var(--transition-base);
}

.toggle-slider {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 24px;
    height: 24px;
    background: white;
    border-radius: 50%;
    transition: var(--transition-base);
    box-shadow: var(--shadow-sm);
}

.toggle-slider.annual {
    transform: translateX(30px);
    background: var(--primary-color);
}

.discount-badge {
    background: var(--accent-color);
    color: white;
    padding: var(--space-1) var(--space-2);
    border-radius: var(--rounded-md);
    font-size: var(--text-xs);
    font-weight: 600;
    margin-left: var(--space-2);
}

.pricing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--space-8);
    margin-bottom: var(--space-16);
}

.pricing-card {
    background: white;
    border-radius: var(--rounded-2xl);
    padding: var(--space-8);
    position: relative;
    border: 2px solid transparent;
    transition: var(--transition-base);
    box-shadow: var(--shadow-lg);
}

.pricing-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-2xl);
}

.pricing-card.popular {
    border-color: var(--primary-color);
    box-shadow: var(--shadow-glow);
}

.popular-badge {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--gradient-primary);
    color: white;
    padding: var(--space-2) var(--space-4);
    border-radius: var(--rounded-full);
    font-size: var(--text-sm);
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: var(--space-1);
}

.plan-header {
    text-align: center;
    margin-bottom: var(--space-6);
}

.plan-icon {
    width: 60px;
    height: 60px;
    background: var(--gradient-primary);
    border-radius: var(--rounded-xl);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto var(--space-4);
}

.plan-icon i {
    font-size: var(--text-2xl);
    color: white;
}

.plan-name {
    font-size: var(--text-2xl);
    font-weight: 700;
    color: var(--gray-900);
    margin-bottom: var(--space-2);
}

.plan-description {
    color: var(--gray-600);
}

.plan-pricing {
    text-align: center;
    margin-bottom: var(--space-8);
}

.price {
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: var(--space-1);
}

.currency {
    font-size: var(--text-xl);
    font-weight: 600;
    color: var(--gray-700);
}

.amount {
    font-size: var(--text-5xl);
    font-weight: 800;
    color: var(--gray-900);
}

.period {
    font-size: var(--text-lg);
    color: var(--gray-600);
}

.savings {
    color: var(--accent-color);
    font-weight: 600;
    font-size: var(--text-sm);
    margin-top: var(--space-2);
}

.plan-features {
    list-style: none;
    margin-bottom: var(--space-8);
}

.feature-item {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    margin-bottom: var(--space-3);
    color: var(--gray-700);
}

.feature-item i {
    color: var(--primary-color);
    font-weight: 600;
}

.plan-button {
    width: 100%;
    padding: var(--space-4);
    border-radius: var(--rounded-lg);
    font-weight: 600;
    margin-bottom: var(--space-4);
    transition: var(--transition-base);
}

.btn-primary {
    background: var(--gradient-primary);
    color: white;
    border: none;
}

.btn-outline {
    background: transparent;
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
}

.plan-note {
    text-align: center;
    color: var(--gray-500);
    font-size: var(--text-sm);
}

.pricing-faq {
    background: white;
    padding: var(--space-12);
    border-radius: var(--rounded-2xl);
    box-shadow: var(--shadow-lg);
}

.faq-title {
    text-align: center;
    font-size: var(--text-3xl);
    font-weight: 700;
    color: var(--gray-900);
    margin-bottom: var(--space-8);
}

.faq-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--space-8);
}

.faq-question {
    font-size: var(--text-lg);
    font-weight: 600;
    color: var(--gray-900);
    margin-bottom: var(--space-3);
}

.faq-answer {
    color: var(--gray-600);
    line-height: 1.6;
}

@media (max-width: 768px) {
    .pricing-grid {
        grid-template-columns: 1fr;
    }

    .billing-toggle {
        flex-direction: column;
        gap: var(--space-2);
    }
}
</style>