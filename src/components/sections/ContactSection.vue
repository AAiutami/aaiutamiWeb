<template>
    <section id="contact" class="contact">
        <div class="container">
            <div class="contact-content">
                <div class="contact-info">
                    <div class="section-tag">Contatti</div>
                    <h2 class="section-title">
                        Iniziamo a Costruire il <span class="gradient-text">Futuro</span> Insieme
                    </h2>
                    <p class="contact-description">
                        Hai domande? Vuoi una demo personalizzata? Il nostro team è qui per aiutarti
                        a scoprire come AAIUTAMI può trasformare il tuo business.
                    </p>

                    <div class="contact-methods">
                        <div class="contact-method">
                            <div class="method-icon">
                                <i class="icon-mail"></i>
                            </div>
                            <div class="method-info">
                                <h4>Email</h4>
                                <p>info@aaiutami.com</p>
                                <span>Risposta entro 24h</span>
                            </div>
                        </div>

                        <div class="contact-method">
                            <div class="method-icon">
                                <i class="icon-phone"></i>
                            </div>
                            <div class="method-info">
                                <h4>Telefono</h4>
                                <p>+39 02 1234 5678</p>
                                <span>Lun-Ven 9:00-18:00</span>
                            </div>
                        </div>

                        <div class="contact-method">
                            <div class="method-icon">
                                <i class="icon-chat"></i>
                            </div>
                            <div class="method-info">
                                <h4>Live Chat</h4>
                                <p>Chat dal vivo</p>
                                <span>Supporto immediato</span>
                            </div>
                        </div>
                    </div>

                    <div class="social-links">
                        <h4>Seguici su</h4>
                        <div class="social-icons">
                            <a href="#" class="social-icon">
                                <i class="icon-twitter"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="icon-linkedin"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="icon-github"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="icon-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="contact-form">
                    <form @submit.prevent="submitForm" class="form">
                        <div class="form-group">
                            <label for="name">Nome Completo</label>
                            <input type="text" id="name" v-model="form.name" :class="{ error: errors.name }"
                                placeholder="Il tuo nome" required>
                            <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
                        </div>

                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" v-model="form.email" :class="{ error: errors.email }"
                                placeholder="nome@azienda.com" required>
                            <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
                        </div>

                        <div class="form-group">
                            <label for="company">Azienda</label>
                            <input type="text" id="company" v-model="form.company" placeholder="Nome della tua azienda">
                        </div>

                        <div class="form-group">
                            <label for="subject">Tipo di Richiesta</label>
                            <select id="subject" v-model="form.subject" required>
                                <option value="">Seleziona...</option>
                                <option value="demo">Richiesta Demo</option>
                                <option value="pricing">Informazioni Prezzi</option>
                                <option value="support">Supporto Tecnico</option>
                                <option value="partnership">Partnership</option>
                                <option value="other">Altro</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="message">Messaggio</label>
                            <textarea id="message" v-model="form.message" :class="{ error: errors.message }"
                                placeholder="Descrivi la tua richiesta..." rows="5" required></textarea>
                            <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
                        </div>

                        <div class="form-group checkbox">
                            <label class="checkbox-label">
                                <input type="checkbox" v-model="form.privacy" :class="{ error: errors.privacy }"
                                    required>
                                <span class="checkmark"></span>
                                Accetto la <a href="/privacy">Privacy Policy</a> e i <a href="/terms">Termini di
                                    Servizio</a>
                            </label>
                            <span v-if="errors.privacy" class="error-message">{{ errors.privacy }}</span>
                        </div>

                        <button type="submit" class="submit-button" :disabled="isSubmitting"
                            :class="{ loading: isSubmitting }">
                            <span v-if="!isSubmitting">
                                <i class="icon-send"></i>
                                Invia Messaggio
                            </span>
                            <span v-else>
                                <i class="icon-loading"></i>
                                Invio in corso...
                            </span>
                        </button>
                    </form>

                    <div v-if="submitted" class="success-message">
                        <i class="icon-check-circle"></i>
                        <h4>Messaggio Inviato!</h4>
                        <p>Ti risponderemo entro 24 ore. Grazie per averci contattato!</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const form = reactive({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    privacy: false
})

const errors = reactive({})
const isSubmitting = ref(false)
const submitted = ref(false)

const validateForm = () => {
    Object.keys(errors).forEach(key => delete errors[key])

    if (!form.name.trim()) {
        errors.name = 'Il nome è richiesto'
    }

    if (!form.email.trim()) {
        errors.email = 'L\'email è richiesta'
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
        errors.email = 'Email non valida'
    }

    if (!form.message.trim()) {
        errors.message = 'Il messaggio è richiesto'
    }

    if (!form.privacy) {
        errors.privacy = 'Devi accettare la privacy policy'
    }

    return Object.keys(errors).length === 0
}

const submitForm = async () => {
    if (!validateForm()) return

    isSubmitting.value = true

    // Simula invio
    setTimeout(() => {
        isSubmitting.value = false
        submitted.value = true

        // Reset form
        Object.keys(form).forEach(key => {
            form[key] = typeof form[key] === 'boolean' ? false : ''
        })
    }, 2000)
}
</script>

<style scoped>
.contact {
    padding: var(--space-20) 0;
    background: var(--gray-100);
}

.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-16);
    align-items: start;
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
    margin-bottom: var(--space-6);
    line-height: 1.2;
}

.contact-description {
    font-size: var(--text-lg);
    color: var(--gray-600);
    line-height: 1.6;
    margin-bottom: var(--space-8);
}

.contact-methods {
    margin-bottom: var(--space-10);
}

.contact-method {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    margin-bottom: var(--space-6);
}

.method-icon {
    width: 50px;
    height: 50px;
    background: var(--gradient-primary);
    border-radius: var(--rounded-lg);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.method-icon i {
    font-size: var(--text-xl);
    color: white;
}

.method-info h4 {
    font-weight: 600;
    color: var(--gray-900);
    margin-bottom: var(--space-1);
}

.method-info p {
    color: var(--gray-700);
    font-weight: 500;
    margin-bottom: var(--space-1);
}

.method-info span {
    color: var(--gray-500);
    font-size: var(--text-sm);
}

.social-links h4 {
    font-weight: 600;
    color: var(--gray-900);
    margin-bottom: var(--space-4);
}

.social-icons {
    display: flex;
    gap: var(--space-3);
}

.social-icon {
    width: 40px;
    height: 40px;
    background: white;
    border-radius: var(--rounded-lg);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--gray-600);
    transition: var(--transition-base);
    box-shadow: var(--shadow-sm);
}

.social-icon:hover {
    background: var(--primary-color);
    color: white;
    transform: translateY(-2px);
}

.contact-form {
    background: white;
    padding: var(--space-8);
    border-radius: var(--rounded-2xl);
    box-shadow: var(--shadow-2xl);
    position: relative;
}

.form-group {
    margin-bottom: var(--space-6);
}

.form-group label {
    display: block;
    font-weight: 600;
    color: var(--gray-700);
    margin-bottom: var(--space-2);
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: var(--space-3);
    border: 2px solid var(--gray-200);
    border-radius: var(--rounded-lg);
    font-size: var(--text-base);
    transition: var(--transition-base);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.form-group input.error,
.form-group textarea.error {
    border-color: #ef4444;
}

.error-message {
    color: #ef4444;
    font-size: var(--text-sm);
    margin-top: var(--space-1);
    display: block;
}

.checkbox-label {
    display: flex;
    align-items: flex-start;
    gap: var(--space-3);
    cursor: pointer;
    font-size: var(--text-sm);
    line-height: 1.5;
}

.checkbox-label input[type="checkbox"] {
    width: auto;
    margin: 0;
}

.submit-button {
    width: 100%;
    padding: var(--space-4);
    background: var(--gradient-primary);
    color: white;
    border: none;
    border-radius: var(--rounded-lg);
    font-size: var(--text-lg);
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition-base);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-2);
}

.submit-button:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

.submit-button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

.success-message {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
    border-radius: var(--rounded-2xl);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: var(--space-8);
}

.success-message i {
    font-size: var(--text-4xl);
    color: #10b981;
    margin-bottom: var(--space-4);
}

.success-message h4 {
    font-size: var(--text-xl);
    font-weight: 600;
    color: var(--gray-900);
    margin-bottom: var(--space-2);
}

.success-message p {
    color: var(--gray-600);
}

@media (max-width: 768px) {
    .contact-content {
        grid-template-columns: 1fr;
    }

    .section-title {
        font-size: var(--text-3xl);
    }
}
</style>