<template>
    <section id="about" class="about">
        <div class="container">
            <div class="about-content">
                <div class="about-text">
                    <div class="section-tag">Chi Siamo</div>
                    <h2 class="section-title">
                        Innoviamo il Futuro con
                        <span class="gradient-text"> AAIUTAMI</span>
                    </h2>
                    <p class="about-description">
                        AAIUTAMI è più di una piattaforma - è una comunità che connette persone
                        attraverso la condivisione delle esperienze. Trasformiamo l'assistenza quotidiana in
                        un'esperienza semplice, sicura e umana.
                    </p>

                    <div class="about-stats">
                        <div class="stat-item">
                            <div class="stat-icon">
                                <Calendar :size="20" color="white" />
                            </div>
                            <span class="stat-number">2+</span>
                            <span class="stat-label">Anni di Sviluppo</span>
                        </div>
                        <div class="stat-item">
                            <div class="stat-icon">
                                <Users :size="20" color="white" />
                            </div>
                            <span class="stat-number">500+</span>
                            <span class="stat-label">Beta Testers</span>
                        </div>
                        <div class="stat-item">
                            <div class="stat-icon">
                                <Heart :size="20" color="white" />
                            </div>
                            <span class="stat-number">1K+</span>
                            <span class="stat-label">Connessioni Create</span>
                        </div>
                    </div>
                </div>
                <div class="">
                    <div class="about-values">
                        <h3 class="values-title">I Nostri Pilastri</h3>
                        <div class="values-grid">
                            <div class="value-card">
                                <div class="value-icon">
                                    <Sparkles :size="24" color="white" />
                                </div>
                                <h4>Innovazione</h4>
                                <p>Trova la persona giusta per ogni esigenza</p>
                            </div>
                            <div class="value-card">
                                <div class="value-icon">
                                    <Shield :size="24" color="white" />
                                </div>
                                <h4>Sicurezza</h4>
                                <p>Privacy e protezione dati al primo posto</p>
                            </div>
                            <div class="value-card">
                                <div class="value-icon">
                                    <HandHeart :size="24" color="white" />
                                </div>
                                <h4>Comunità</h4>
                                <p>Costruiamo legami che fanno la differenza</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="about-visual">
                    <!-- Mockup della community -->
                    <div class="community-preview">
                        <div class="preview-header">
                            <div class="header-dots">
                                <div class="dot"></div>
                                <div class="dot"></div>
                                <div class="dot"></div>
                            </div>
                            <span class="preview-title">Community AAIUTAMI</span>
                        </div>

                        <div class="preview-content">
                            <!-- User cards animate -->
                            <div class="user-card card-1">
                                <div class="user-avatar">
                                    <User :size="16" color="white" />
                                </div>
                                <div class="user-info">
                                    <div class="info-line"></div>
                                    <div class="info-line short"></div>
                                </div>
                                <div class="connection-status">
                                    <Heart :size="12" color="white" />
                                </div>
                            </div>

                            <div class="user-card card-2">
                                <div class="user-avatar">
                                    <User :size="16" color="white" />
                                </div>
                                <div class="user-info">
                                    <div class="info-line"></div>
                                    <div class="info-line short"></div>
                                </div>
                                <div class="connection-status">
                                    <MessageCircle :size="12" color="white" />
                                </div>
                            </div>

                            <div class="user-card card-3">
                                <div class="user-avatar">
                                    <User :size="16" color="white" />
                                </div>
                                <div class="user-info">
                                    <div class="info-line"></div>
                                    <div class="info-line short"></div>
                                </div>
                                <div class="connection-status">
                                    <Zap :size="12" color="white" />
                                </div>
                            </div>
                        </div>

                        <div class="preview-footer">
                            <div class="activity-indicator">
                                <div class="pulse-dot"></div>
                                <span>1.2K persone attive ora</span>
                            </div>
                        </div>
                    </div>

                    <!-- Floating elements -->
                    <div class="floating-element element-1">
                        <Globe :size="20" />
                        <span>Globale</span>
                    </div>
                    <div class="floating-element element-2">
                        <Clock :size="20" />
                        <span>24/7</span>
                    </div>
                    <div class="floating-element element-3">
                        <Star :size="20" />
                        <span>5 Stelle</span>
                    </div>
                </div>
            </div>

            <!-- Mission & Vision moderne -->
            <div class="mission-vision">
                <div class="mission-card">
                    <div class="card-content">
                        <div class="card-icon">
                            <Rocket :size="32" color="white" />
                        </div>
                        <h3>La Nostra Missione</h3>
                        <p>
                            Creare una rete globale dove ogni persona può trovare o offrire aiuto,
                            utilizzando l'AI per eliminare le barriere e costruire fiducia.
                        </p>
                        <div class="card-accent"></div>
                    </div>
                </div>

                <div class="vision-card">
                    <div class="card-content">
                        <div class="card-icon">
                            <Eye :size="32" color="white" />
                        </div>
                        <h3>La Nostra Visione</h3>
                        <p>
                            Un mondo dove la tecnologia amplifica la gentilezza umana,
                            rendendo l'aiuto reciproco naturale, sicuro e gratificante.
                        </p>
                        <div class="card-accent"></div>
                    </div>
                </div>
            </div>

            <!-- Team spotlight -->
            <div class="team-spotlight">
                <div class="spotlight-content">
                    <h3>Il Team Dietro l'Innovazione</h3>
                    <p>
                        Un gruppo eterogeneo di sviluppatori, designer e visionari
                        uniti dalla passione per la tecnologia che migliora le vite.
                    </p>
                    <button class="btn btn-outline">
                        <Users :size="20" color="white" />
                        Incontra il Team
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import {
    Calendar,
    Users,
    Heart,
    Sparkles,
    Shield,
    HandHeart,
    User,
    MessageCircle,
    Zap,
    Globe,
    Clock,
    Star,
    Rocket,
    Eye,
    Plus
} from 'lucide-vue-next'
</script>

<style scoped>
.about {
    padding: var(--space-20) 0;
    background: linear-gradient(135deg, var(--gray-50) 0%, var(--gray-100) 100%);
    position: relative;
    overflow: hidden;
}

.about::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
    border-radius: 50%;
    transform: translate(25%, -25%);
}

.about-content {
    display: grid;
    grid-template-columns: 7fr 3fr;
    gap: var(--space-12);
    align-items: center;
    margin-bottom: var(--space-20);
    position: relative;
    z-index: 1;
}

.section-tag {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-2) var(--space-4);
    background: var(--primary-100);
    color: var(--primary-600);
    border-radius: var(--rounded-full);
    font-size: var(--text-sm);
    font-weight: 600;
    margin-bottom: var(--space-6);
    border: 1px solid var(--primary-200);
}

.section-title {
    font-size: var(--text-4xl);
    font-weight: 800;
    color: var(--gray-900);
    margin-bottom: var(--space-6);
    line-height: 1.1;
}

.gradient-text {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.about-description {
    font-size: var(--text-lg);
    color: var(--gray-600);
    line-height: 1.7;
    margin-bottom: var(--space-10);
}

.about-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-6);
    margin-bottom: var(--space-12);
}

.stat-item {
    text-align: center;
    padding: var(--space-4);
    background: var(--gray-100);
    border-radius: var(--rounded-xl);
    border: 1px solid var(--gray-200);
    transition: var(--transition-base);
}

.stat-item:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
    background: var(--gray-50);
}

.stat-icon {
    margin: 0 auto var(--space-2);
    width: 40px;
    height: 40px;
    background: var(--gradient-primary);
    border-radius: var(--rounded-lg);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--gray-50);
}

.stat-number {
    display: block;
    font-size: var(--text-2xl);
    font-weight: 800;
    color: var(--primary-color);
    margin-bottom: var(--space-1);
}

.stat-label {
    font-size: var(--text-sm);
    color: var(--gray-600);
    font-weight: 500;
}

.values-title {
    font-size: var(--text-xl);
    font-weight: 700;
    color: var(--gray-900);
    margin-bottom: var(--space-6);
}

.values-grid {
    display: grid;
    gap: var(--space-4);
}

.value-card {
    padding: var(--space-5);
    background: var(--gray-100);
    border-radius: var(--rounded-xl);
    border: 1px solid var(--gray-200);
    transition: var(--transition-base);
}

.value-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
    border-color: var(--primary-200);
}

.value-icon {
    width: 48px;
    height: 48px;
    background: var(--gradient-primary);
    border-radius: var(--rounded-lg);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--gray-50);
    margin-bottom: var(--space-3);
}

.value-card h4 {
    font-weight: 600;
    color: var(--gray-900);
    margin-bottom: var(--space-2);
    font-size: var(--text-base);
}

.value-card p {
    color: var(--gray-600);
    font-size: var(--text-sm);
    line-height: 1.5;
}

/* Community Preview */
.about-visual {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.community-preview {
    width: 300px;
    background: var(--gray-100);
    border-radius: var(--rounded-2xl);
    overflow: hidden;
    box-shadow: var(--shadow-2xl);
    border: 1px solid var(--gray-200);
    transform: rotate(-2deg);
    transition: var(--transition-base);
}

.community-preview:hover {
    transform: rotate(0deg) scale(1.02);
}

.preview-header {
    padding: var(--space-4);
    background: var(--gray-50);
    display: flex;
    align-items: center;
    gap: var(--space-3);
}

.header-dots {
    display: flex;
    gap: var(--space-1);
}

.dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--gray-400);
}

.preview-title {
    font-size: var(--text-sm);
    font-weight: 600;
    color: var(--gray-700);
}

.preview-content {
    padding: var(--space-4);
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
}

.user-card {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    padding: var(--space-3);
    background: var(--gray-200);
    border-radius: var(--rounded-lg);
    animation: slideIn 0.8s ease-out;
}

.card-1 {
    animation-delay: 0.2s;
}

.card-2 {
    animation-delay: 0.4s;
}

.card-3 {
    animation-delay: 0.6s;
}

.user-avatar {
    width: 32px;
    height: 32px;
    background: var(--gradient-primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--gray-50);
    flex-shrink: 0;
}

.user-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
}

.info-line {
    height: 8px;
    background: var(--gray-300);
    border-radius: 4px;
    width: 100%;
}

.info-line.short {
    width: 60%;
}

.connection-status {
    color: var(--primary-color);
}

.preview-footer {
    padding: var(--space-4);
    background: var(--gray-50);
    border-top: 1px solid var(--gray-300);
}

.activity-indicator {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    font-size: var(--text-xs);
    color: var(--gray-600);
}

.pulse-dot {
    width: 8px;
    height: 8px;
    background: #10b981;
    border-radius: 50%;
    animation: pulse 2s infinite;
}

/* Floating Elements */
.floating-element {
    position: absolute;
    background: var(--gray-50);
    padding: var(--space-3) var(--space-4);
    border-radius: var(--rounded-xl);
    box-shadow: var(--shadow-lg);
    display: flex;
    align-items: center;
    gap: var(--space-2);
    font-size: var(--text-sm);
    font-weight: 600;
    color: var(--gray-700);
    animation: float 4s ease-in-out infinite;
    border: 1px solid var(--gray-200);
}

.element-1 {
    top: 15%;
    left: -10%;
    animation-delay: 0s;
}

.element-2 {
    top: 60%;
    right: -15%;
    animation-delay: 1.3s;
}

.element-3 {
    bottom: 20%;
    left: -5%;
    animation-delay: 2.6s;
}

/* Mission & Vision Cards */
.mission-vision {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-8);
    margin-bottom: var(--space-16);
}

.mission-card,
.vision-card {
    padding: var(--space-12) var(--space-8);
    background: none;
    position: relative;
    overflow: hidden;
}

.card-glow {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--gradient-primary);
    opacity: 0.1;
    border-radius: var(--rounded-2xl);
}

.card-content {
    position: relative;
    padding: var(--space-8);
    background: var(--gray-100);
    border-radius: var(--rounded-2xl);
    border: 1px solid var(--gray-200);
    text-align: center;
    transition: var(--transition-base);
    height: 100%;
}

.mission-card:hover .card-content,
.vision-card:hover .card-content {
    transform: translateY(-4px);
    box-shadow: var(--shadow-xl);
}

.card-icon {
    width: 80px;
    height: 80px;
    background: var(--gradient-primary);
    border-radius: var(--rounded-xl);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto var(--space-6);
    color: var(--gray-50);
}

.card-content h3 {
    font-size: var(--text-xl);
    font-weight: 700;
    color: var(--gray-900);
    margin-bottom: var(--space-4);
}

.card-content p {
    color: var(--gray-600);
    line-height: 1.6;
    margin-bottom: var(--space-4);
}

.card-accent {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 4px;
    background: var(--gradient-primary);
    border-radius: 2px;
}

/* Team Spotlight */
.team-spotlight {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: var(--space-8);
    align-items: center;
    padding: var(--space-8);
    background: var(--gray-100);
    border-radius: var(--rounded-2xl);
    border: 1px solid var(--gray-200);
}

.spotlight-content h3 {
    font-size: var(--text-2xl);
    font-weight: 700;
    color: var(--gray-900);
    margin-bottom: var(--space-3);
}

.spotlight-content p {
    color: var(--gray-600);
    margin-bottom: var(--space-6);
    line-height: 1.6;
}

.avatar-group {
    display: flex;
    gap: var(--space-2);
}

.team-avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 3px solid var(--gray-50);
    position: relative;
}

.avatar-1 {
    background: linear-gradient(135deg, #ff9a8b 0%, #ff6a88 100%);
}

.avatar-2 {
    background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
}

.avatar-3 {
    background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
}

.avatar-4 {
    background: linear-gradient(135deg, #d299c2 0%, #fef9d7 100%);
}

.avatar-plus {
    background: var(--gradient-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--gray-50);
}

/* Animations */
@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(-20px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0px) rotate(-2deg);
    }

    50% {
        transform: translateY(-15px) rotate(2deg);
    }
}

@keyframes pulse {

    0%,
    100% {
        transform: scale(1);
        opacity: 1;
    }

    50% {
        transform: scale(1.2);
        opacity: 0.7;
    }
}

/* Responsive */
@media (max-width: 768px) {
    .about-content {
        grid-template-columns: 1fr;
        gap: var(--space-12);
    }

    .about-stats {
        grid-template-columns: 1fr;
        gap: var(--space-4);
    }

    .mission-vision {
        grid-template-columns: 1fr;
    }

    .team-spotlight {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .floating-element {
        display: none;
    }

    .community-preview {
        transform: none;
        width: 280px;
    }
}
</style>