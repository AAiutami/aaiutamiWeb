<template>
    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <div class="hero-text">
                    <h1 class="hero-title">
                        Il Futuro dell'<span class="gradient-text">AI</span> è qui
                    </h1>
                    <p class="hero-description">
                        Scopri come AAIUTAMI può rivoluzionare il tuo modo di lavorare con l'intelligenza artificiale.
                        Strumenti potenti, interfaccia intuitiva, risultati straordinari.
                    </p>
                    <div class="hero-actions">
                        <button class="btn btn-primary btn-lg">
                            Inizia Gratis
                            <i class="icon-arrow-right"></i>
                        </button>
                        <button class="btn btn-outline btn-lg">
                            <i class="icon-play"></i>
                            Guarda Demo
                        </button>
                    </div>
                    <div class="hero-stats">
                        <div class="stat">
                            <span class="stat-number">10K+</span>
                            <span class="stat-label">Utenti Attivi</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number">99.9%</span>
                            <span class="stat-label">Uptime</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number">4.9/5</span>
                            <span class="stat-label">Recensioni</span>
                        </div>
                    </div>
                </div>
                <div class="hero-visual">
                    <div class="hero-image">
                        <img src="" alt="AAIUTAMI Dashboard" class="dashboard-image">
                        <div class="floating-card card-1">
                            <i class="icon-ai"></i>
                            <span>AI Processing</span>
                        </div>
                        <div class="floating-card card-2">
                            <i class="icon-chart"></i>
                            <span>Analytics</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.hero {
    padding: calc(var(--header-height) + var(--space-16)) 0 var(--space-16);
    background: var(--gray-100);
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
}

.dashboard-image {
    width: 100%;
    height: auto;
    border-radius: var(--rounded-xl);
    box-shadow: var(--shadow-2xl);
}

.floating-card {
    position: absolute;
    background: white;
    padding: var(--space-4);
    border-radius: var(--rounded-lg);
    box-shadow: var(--shadow-lg);
    display: flex;
    align-items: center;
    gap: var(--space-2);
    animation: float 3s ease-in-out infinite;
}

.card-1 {
    top: 20%;
    left: -10%;
}

.card-2 {
    bottom: 20%;
    right: -10%;
    animation-delay: 1.5s;
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-20px);
    }
}

@media (max-width: 768px) {
    .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .hero-title {
        font-size: var(--text-3xl);
    }
}
</style>