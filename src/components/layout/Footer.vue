<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <!-- Logo e descrizione -->
                <div class="footer-brand">
                    <div class="footer-logo">
                        <span class="logo-text">AAIUTAMI</span>
                    </div>
                    <p class="footer-description">
                        Un'app innovativa che collega chi ha bisogno di assistenza con persone disposte ad aiutare. Costruiamo insieme una comunità solidale.
                    </p>
                    <div class="social-links">
                        <a href="#" class="social-link">
                            <ion-icon :icon="logoFacebook"></ion-icon>
                        </a>
                        <a href="#" class="social-link">
                            <ion-icon :icon="logoInstagram"></ion-icon>
                        </a>
                        <a href="#" class="social-link">
                            <ion-icon :icon="logoX"></ion-icon>
                        </a>
                        <a href="#" class="social-link">
                            <ion-icon :icon="logoTiktok"></ion-icon>
                        </a>
                    </div>
                </div>

                <!-- Link utili -->
                <div class="footer-links">
                    <!-- <div class="link-group">
                        <h4>Prodotto</h4>
                        <ul>
                            <li><a href="#features">Funzionalità</a></li>
                            <li><a href="#pricing">Prezzi</a></li>
                            <li><a href="/api">API</a></li>
                            <li><a href="/integrations">Integrazioni</a></li>
                            <li><a href="/changelog">Novità</a></li>
                        </ul>
                    </div> -->

                    <div class="link-group">
                        <h4>Azienda</h4>
                        <ul>
                            <li><a href="#about">Chi Siamo</a></li>
                            <li><a href="/careers">Lavora con noi</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/press">Stampa</a></li>
                            <li><a href="/investors">Investitori</a></li>
                        </ul>
                    </div>

                    <div class="link-group">
                        <h4>Supporto</h4>
                        <ul>
                            <li><a href="/help">Centro Assistenza</a></li>
                            <li><a href="/docs">Documentazione</a></li>
                            <li><a href="#contact">Contatti</a></li>
                            <!-- <li><a href="/status">Status</a></li> -->
                            <!-- <li><a href="/community">Community</a></li> -->
                        </ul>
                    </div>

                    <div class="link-group">
                        <h4>Legale</h4>
                        <ul>
                            <li><a href="/privacy">Privacy Policy</a></li>
                            <li><a href="/terms">Termini di Servizio</a></li>
                            <li><a href="/cookies">Cookie Policy</a></li>
                            <li><a href="/gdpr">GDPR</a></li>
                            <li><a href="/security">Sicurezza</a></li>
                        </ul>
                    </div>
                </div>

                <!-- Newsletter -->
                <!-- <div class="newsletter">
                    <h4>Resta Aggiornato</h4>
                    <p>Ricevi le ultime novità e aggiornamenti su AAIUTAMI</p>
                    <form @submit.prevent="subscribeNewsletter" class="newsletter-form">
                        <div class="input-group">
                            <input type="email" v-model="emailNewsletter" placeholder="La tua email" required>
                            <button type="submit" class="subscribe-btn">
                                <i class="icon-arrow-right"></i>
                            </button>
                        </div>
                    </form>
                    <p class="newsletter-note">
                        Niente spam, solo contenuti di valore. Cancellati quando vuoi.
                    </p>
                </div> -->
            </div>

            <!-- Copyright -->
            <div class="footer-bottom">
                <div class="footer-copyright">
                    <p>&copy; {{ currentYear }} AAIUTAMI. Tutti i diritti riservati.</p>
                </div>
                <div class="footer-meta">
                    <span></span>
                    <span>•</span>
                    <span></span>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { IonIcon } from '@ionic/vue' 
import { add, logoFacebook, logoInstagram, logoTiktok, logoX } from 'ionicons/icons'
import {  } from 'lucide-vue-next'
import { ref, computed } from 'vue'

const emailNewsletter = ref('')
const currentYear = computed(() => new Date().getFullYear())

const subscribeNewsletter = () => {
    if (emailNewsletter.value) {
        // Logica per iscrivere alla newsletter
        console.log('Newsletter subscription:', emailNewsletter.value)
        emailNewsletter.value = ''
        // Mostra messaggio di successo
    }
}
</script>

<style scoped>
.footer {
    background: var(--gray-100);
    color: var(--gray-300);
    padding: var(--space-16) 0 var(--space-8);
}

.footer-content {
    display: flex;
    justify-content: center;
    margin-bottom: var(--space-16);
    }

.footer-brand {
    max-width: 300px;
    margin-right: var(--space-16);
}

.logo-text {
    font-size: var(--text-2xl);
    font-weight: 700;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: var(--space-4);
    display: block;
}

.footer-description {
    color: var(--gray-400);
    line-height: 1.6;
    margin-bottom: var(--space-6);
}

.social-links {
    display: flex;
    gap: var(--space-3);
}

.social-link {
    width: 40px;
    height: 40px;
    background: var(--gray-50);
    border-radius: var(--rounded-lg);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--gray-400);
    transition: var(--transition-base);
}

.social-link:hover {
    background: var(--primary-color);
    color: white;
    transform: translateY(-2px);
}

.footer-links {
    display: flex;
    justify-content: end;
    gap: var(--space-16);
}

.link-group h4 {
    color: white;
    font-weight: 600;
    margin-bottom: var(--space-4);
}

.link-group ul {
    list-style: none;
}

.link-group li {
    margin-bottom: var(--space-2);
}

.link-group a {
    color: var(--gray-400);
    text-decoration: none;
    transition: var(--transition-base);
    font-size: var(--text-sm);
}

.link-group a:hover {
    color: var(--primary-color);
}

.newsletter h4 {
    color: white;
    font-weight: 600;
    margin-bottom: var(--space-2);
}

.newsletter p {
    color: var(--gray-400);
    font-size: var(--text-sm);
    margin-bottom: var(--space-4);
}

.newsletter-form {
    margin-bottom: var(--space-3);
}

.input-group {
    display: flex;
    border-radius: var(--rounded-lg);
    overflow: hidden;
    background: var(--gray-800);
}

.input-group input {
    flex: 1;
    padding: var(--space-3);
    border: none;
    background: transparent;
    color: white;
    font-size: var(--text-sm);
}

.input-group input::placeholder {
    color: var(--gray-500);
}

.input-group input:focus {
    outline: none;
}

.subscribe-btn {
    padding: var(--space-3);
    background: var(--primary-color);
    color: white;
    border: none;
    cursor: pointer;
    transition: var(--transition-base);
}

.subscribe-btn:hover {
    background: var(--primary-dark);
}

.newsletter-note {
    color: var(--gray-500);
    font-size: var(--text-xs);
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: var(--space-8);
    border-top: 1px solid var(--gray-800);
}

.footer-copyright p {
    color: var(--gray-500);
    font-size: var(--text-sm);
}

.footer-meta {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    color: var(--gray-500);
    font-size: var(--text-sm);
}

@media (max-width: 1024px) {
    .footer-content {
        grid-template-columns: 1fr;
        gap: var(--space-8);
    }

    .footer-links {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .footer-links {
        grid-template-columns: 1fr;
    }

    .footer-bottom {
        flex-direction: column;
        gap: var(--space-4);
        text-align: center;
    }
}
</style>