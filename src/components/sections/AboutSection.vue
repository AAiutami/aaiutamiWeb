<template>
    <section id="about" class="about">
        <div class="container">
            <div class="about-content">
                <div class="about-text">
                    <div class="section-tag">Chi Siamo</div>
                    <h2 class="section-title">
                        Pionieri nell'<span class="gradient-text">Innovazione AI</span>
                    </h2>
                    <p class="about-description">
                        AAIUTAMI nasce dalla visione di rendere l'intelligenza artificiale accessibile
                        a tutti. Il nostro team di esperti combina anni di esperienza in AI, machine learning
                        e user experience per creare soluzioni che trasformano il modo di lavorare.
                    </p>

                    <div class="about-stats">
                        <div class="stat-item">
                            <span class="stat-number">5+</span>
                            <span class="stat-label">Anni di Esperienza</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">50+</span>
                            <span class="stat-label">Progetti Completati</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">10K+</span>
                            <span class="stat-label">Utenti Soddisfatti</span>
                        </div>
                    </div>

                    <div class="about-values">
                        <h3 class="values-title">I Nostri Valori</h3>
                        <div class="values-list">
                            <div class="value-item">
                                <i class="icon-target"></i>
                                <div>
                                    <h4>Innovazione</h4>
                                    <p>Sempre all'avanguardia della tecnologia</p>
                                </div>
                            </div>
                            <div class="value-item">
                                <i class="icon-heart"></i>
                                <div>
                                    <h4>Semplicità</h4>
                                    <p>Tecnologia complessa, interfaccia semplice</p>
                                </div>
                            </div>
                            <div class="value-item">
                                <i class="icon-shield"></i>
                                <div>
                                    <h4>Sicurezza</h4>
                                    <p>La tua privacy è la nostra priorità</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="about-visual">
                    <div class="team-image">
                        <img src="" alt="Il nostro team" />
                        <div class="image-overlay">
                            <button class="play-button">
                                <i class="icon-play"></i>
                            </button>
                            <span class="overlay-text">Incontra il Team</span>
                        </div>
                    </div>

                    <div class="floating-elements">
                        <div class="floating-card innovation">
                            <i class="icon-lightbulb"></i>
                            <span>Innovazione Continua</span>
                        </div>
                        <div class="floating-card research">
                            <i class="icon-microscope"></i>
                            <span>Ricerca & Sviluppo</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Mission & Vision -->
            <div class="mission-vision">
                <div class="mission">
                    <div class="icon-wrapper">
                        <i class="icon-rocket"></i>
                    </div>
                    <h3>La Nostra Missione</h3>
                    <p>
                        Democratizzare l'accesso all'intelligenza artificiale, rendendo strumenti
                        potenti accessibili a individui e aziende di ogni dimensione.
                    </p>
                </div>
                <div class="vision">
                    <div class="icon-wrapper">
                        <i class="icon-eye"></i>
                    </div>
                    <h3>La Nostra Visione</h3>
                    <p>
                        Un futuro dove l'AI amplifica le capacità umane, aumentando produttività
                        e creatività senza sostituire l'elemento umano.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.about {
    padding: var(--space-20) 0;
    background: white;
}

.about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-16);
    align-items: center;
    margin-bottom: var(--space-20);
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

.about-description {
    font-size: var(--text-lg);
    color: var(--gray-600);
    line-height: 1.6;
    margin-bottom: var(--space-8);
}

.about-stats {
    display: flex;
    gap: var(--space-8);
    margin-bottom: var(--space-10);
}

.stat-item {
    text-align: center;
}

.stat-number {
    display: block;
    font-size: var(--text-3xl);
    font-weight: 700;
    color: var(--primary-color);
}

.stat-label {
    font-size: var(--text-sm);
    color: var(--gray-500);
}

.values-title {
    font-size: var(--text-xl);
    font-weight: 600;
    color: var(--gray-900);
    margin-bottom: var(--space-4);
}

.values-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
}

.value-item {
    display: flex;
    align-items: center;
    gap: var(--space-4);
}

.value-item i {
    width: 40px;
    height: 40px;
    background: var(--gradient-primary);
    border-radius: var(--rounded-lg);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    flex-shrink: 0;
}

.value-item h4 {
    font-weight: 600;
    color: var(--gray-900);
    margin-bottom: var(--space-1);
}

.value-item p {
    color: var(--gray-600);
    font-size: var(--text-sm);
}

.about-visual {
    position: relative;
}

.team-image {
    position: relative;
    border-radius: var(--rounded-2xl);
    overflow: hidden;
    box-shadow: var(--shadow-2xl);
}

.team-image img {
    width: 100%;
    height: auto;
}

.image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: var(--transition-base);
}

.team-image:hover .image-overlay {
    opacity: 1;
}

.play-button {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: white;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--space-4);
    cursor: pointer;
    transition: var(--transition-base);
}

.play-button:hover {
    transform: scale(1.1);
}

.overlay-text {
    color: white;
    font-weight: 600;
}

.floating-elements {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
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

.innovation {
    top: 10%;
    left: -15%;
}

.research {
    bottom: 15%;
    right: -15%;
    animation-delay: 1.5s;
}

.mission-vision {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-12);
}

.mission,
.vision {
    background: var(--gray-50);
    padding: var(--space-8);
    border-radius: var(--rounded-xl);
    text-align: center;
}

.icon-wrapper {
    width: 80px;
    height: 80px;
    background: var(--gradient-primary);
    border-radius: var(--rounded-xl);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto var(--space-6);
}

.icon-wrapper i {
    font-size: var(--text-2xl);
    color: white;
}

.mission h3,
.vision h3 {
    font-size: var(--text-xl);
    font-weight: 600;
    color: var(--gray-900);
    margin-bottom: var(--space-4);
}

.mission p,
.vision p {
    color: var(--gray-600);
    line-height: 1.6;
}

@media (max-width: 768px) {
    .about-content {
        grid-template-columns: 1fr;
    }

    .about-stats {
        justify-content: space-around;
    }

    .mission-vision {
        grid-template-columns: 1fr;
    }
}
</style>