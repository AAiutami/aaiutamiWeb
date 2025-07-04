<template>
    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <div class="hero-text">
                    <h1 class="hero-title">
                        Connettiamo Bisogni e
                        <span class="gradient-text">Aiuto</span>
                    </h1>
                    <p class="hero-description">
                        Un'app innovativa che collega chi ha bisogno di assistenza con persone disposte ad aiutare.
                        Costruiamo insieme una comunità solidale.
                    </p>
                    <div class="hero-actions">
                        <button class="btn btn-primary btn-lg">
                            Inizia Gratis
                            <ArrowRight :size="20" />
                        </button>
                        <button class="btn btn-outline btn-lg">
                            Scopri di Più
                            <Play :size="20" />
                        </button>
                    </div>
                    <div class="hero-stats">
                        <div class="stat">
                            <span class="stat-number">10K+</span>
                            <span class="stat-label">Utenti Attivi</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number">99.9%</span>
                            <span class="stat-label">Connessioni</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number">4.9/5</span>
                            <span class="stat-label">Recensioni</span>
                        </div>
                    </div>
                </div>

                <div class="hero-visual">
                    <!-- Mockup stilizzato dell'app -->
                    <div class="app-mockup">
                        <div class="phone-frame">
                            <!-- Header minimale -->
                            <div class="app-header">
                                <div class="header-content">
                                    <div class="logo-dot"></div>
                                    <span class="app-name">AAIUTAMI</span>
                                    <div class="nav-dots">
                                        <div class="dot"></div>
                                        <div class="dot"></div>
                                    </div>
                                </div>
                            </div>

                            <!-- Content stilizzato -->
                            <div class="app-body">
                                <!-- Search element -->
                                <div class="search-element">
                                    <div class="search-icon">
                                        <Search :size="16" />
                                    </div>
                                </div>

                                <!-- Action buttons stilizzati -->
                                <div class="action-grid">
                                    <div class="action-box help-box">
                                        <HandHeart :size="24" />
                                    </div>
                                    <div class="action-box offer-box">
                                        <Heart :size="24" />
                                    </div>
                                </div>

                                <!-- Lista stilizzata -->
                                <div class="list-container">
                                    <div class="list-item">
                                        <div class="item-avatar"></div>
                                        <div class="item-content">
                                            <div class="content-line long"></div>
                                            <div class="content-line short"></div>
                                        </div>
                                        <div class="item-action">
                                            <MessageCircle :size="14" />
                                        </div>
                                    </div>
                                    <div class="list-item">
                                        <div class="item-avatar"></div>
                                        <div class="item-content">
                                            <div class="content-line long"></div>
                                            <div class="content-line short"></div>
                                        </div>
                                        <div class="item-action">
                                            <MessageCircle :size="14" />
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <!-- Bottom nav stilizzata -->
                            <div class="bottom-nav">
                                <div class="nav-dot active"></div>
                                <div class="nav-dot"></div>
                                <div class="nav-dot"></div>
                                <div class="nav-dot"></div>
                            </div>
                        </div>
                    </div>

                    <!-- Floating elements stilizzati -->
                    <div class="floating-element element-1">
                        <Users :size="18" />
                    </div>
                    <div class="floating-element element-2">
                        <Zap :size="18" />
                    </div>
                    <div class="floating-element element-3">
                        <Shield :size="18" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import {
    ArrowRight,
    Play,
    Search,
    HandHeart,
    Heart,
    MessageCircle,
    Users,
    Zap,
    Shield
} from 'lucide-vue-next'
</script>

<style scoped>
.hero {
    padding: calc(70px + var(--space-16)) 0 var(--space-16);
    background: linear-gradient(135deg, var(--gray-50) 0%, var(--gray-100) 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
}

.hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-12);
    align-items: center;
}

.hero-title {
    font-size: var(--text-5xl);
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: var(--space-6);
    color: var(--gray-900);
}

.gradient-text {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.hero-description {
    font-size: var(--text-xl);
    color: var(--gray-600);
    line-height: 1.6;
    margin-bottom: var(--space-8);
}

.hero-actions {
    display: flex;
    gap: var(--space-4);
    margin-bottom: var(--space-12);
}

.hero-stats {
    display: flex;
    gap: var(--space-8);
}

.stat {
    text-align: center;
}

.stat-number {
    display: block;
    font-size: var(--text-2xl);
    font-weight: 700;
    color: var(--primary-color);
}

.stat-label {
    font-size: var(--text-sm);
    color: var(--gray-500);
}

.hero-visual {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* App Mockup Stilizzato */
.app-mockup {
    position: relative;
    transform: rotate(-5deg);
    transition: var(--transition-base);
}

.app-mockup:hover {
    transform: rotate(-2deg) scale(1.05);
}

.phone-frame {
    width: 240px;
    height: 480px;
    background: linear-gradient(145deg, var(--gray-50) 0%, var(--gray-100) 100%);
    border-radius: 40px;
    padding: var(--space-3);
    box-shadow:
        0 25px 50px rgba(0, 0, 0, 0.3),
        0 10px 25px rgba(0, 0, 0, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
}

/* App Content Stilizzato */
.app-header {
    background: var(--gray-100);
    border-radius: 32px 32px 0 0;
    padding: var(--space-4);
    margin-bottom: 2px;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo-dot {
    width: 8px;
    height: 8px;
    background: var(--gradient-primary);
    border-radius: 50%;
}

.app-name {
    font-size: var(--text-sm);
    font-weight: 700;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.nav-dots {
    display: flex;
    gap: var(--space-1);
}

.dot {
    width: 6px;
    height: 6px;
    background: var(--gray-400);
    border-radius: 50%;
}

.app-body {
    background: var(--gray-50);
    height: 360px;
    padding: var(--space-4);
    margin-bottom: 2px;
}

/* Search Element */
.search-element {
    background: var(--gray-200);
    border-radius: var(--rounded-xl);
    padding: var(--space-3);
    margin-bottom: var(--space-5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.search-icon {
    color: var(--gray-500);
}

/* Action Grid */
.action-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-3);
    margin-bottom: var(--space-6);
}

.action-box {
    height: 80px;
    border-radius: var(--rounded-2xl);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--gray-600);
    transition: var(--transition-base);
    cursor: pointer;
}

.help-box {
    background: linear-gradient(135deg, var(--primary-100) 0%, var(--primary-200) 100%);
}

.offer-box {
    background: linear-gradient(135deg, var(--secondary-100) 0%, var(--secondary-200) 100%);
}

.action-box:hover {
    transform: translateY(-2px);
}

/* Lista Stilizzata */
.list-container {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
}

.list-item {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    padding: var(--space-3);
    background: var(--gray-100);
    border-radius: var(--rounded-lg);
    transition: var(--transition-base);
}

.list-item:hover {
    background: var(--gray-200);
    transform: translateX(4px);
}

.item-avatar {
    width: 32px;
    height: 32px;
    background: linear-gradient(135deg, var(--primary-300) 0%, var(--primary-400) 100%);
    border-radius: 50%;
    flex-shrink: 0;
}

.item-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
}

.content-line {
    height: 8px;
    background: var(--gray-300);
    border-radius: 4px;
}

.content-line.long {
    width: 100%;
}

.content-line.medium {
    width: 70%;
}

.content-line.short {
    width: 40%;
}

.item-action {
    color: var(--primary-color);
    padding: var(--space-1);
}

/* Bottom Nav */
.bottom-nav {
    background: var(--gray-50);
    border-radius: 0 0 32px 32px;
    padding: var(--space-3);
    display: flex;
    justify-content: center;
    gap: var(--space-4);
}

.nav-dot {
    width: 8px;
    height: 8px;
    background: var(--gray-400);
    border-radius: 50%;
    transition: var(--transition-base);
}

.nav-dot.active {
    background: var(--primary-color);
    transform: scale(1.3);
}

/* Floating Elements */
.floating-element {
    position: absolute;
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, var(--gray-200) 0%, var(--gray-300) 100%);
    border-radius: var(--rounded-xl);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--gray-600);
    animation: float 3s ease-in-out infinite;
    box-shadow: var(--shadow-lg);
    backdrop-filter: blur(10px);
}

.element-1 {
    top: 15%;
    left: -15%;
    animation-delay: 0s;
}

.element-2 {
    top: 45%;
    right: -15%;
    animation-delay: 1s;
}

.element-3 {
    bottom: 20%;
    left: -10%;
    animation-delay: 2s;
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0px) rotate(-3deg);
    }

    50% {
        transform: translateY(-12px) rotate(3deg);
    }
}

/* Responsive */
@media (max-width: 768px) {
    .hero {
        padding-top: calc(60px + var(--space-12));
    }

    .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
        gap: var(--space-8);
    }

    .hero-title {
        font-size: var(--text-3xl);
    }

    .hero-actions {
        justify-content: center;
        flex-wrap: wrap;
    }

    .hero-stats {
        justify-content: center;
    }

    .app-mockup {
        transform: scale(0.85);
    }

    .floating-element {
        display: none;
    }
}

@media (max-width: 480px) {
    .hero-actions {
        flex-direction: column;
        align-items: center;
    }

    .btn {
        width: 100%;
        max-width: 250px;
    }

    .phone-frame {
        width: 200px;
        height: 400px;
    }
}
</style>