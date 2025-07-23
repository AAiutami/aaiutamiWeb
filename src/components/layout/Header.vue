<template>
    <header class="header">
        <nav class="navbar">
            <div class="nav-content">
                <!-- Logo -->
                <div class="logo">
                    <router-link to="/" class="logo-link">
                        <img src="/src/assets/aaiutami.png" alt="Logo" class="logo-image" />
                        <span class="logo-text">AAIUTAMI</span>
                    </router-link>
                </div>

                <!-- Navigation Links -->
                <div class="nav-links">
                    <ul class="nav-links">
                        <li><a href="#features" class="nav-link">Funzionalità</a></li>
                        <li><a href="#about" class="nav-link">Chi Siamo</a></li>
                    </ul>
                    <button class="btn btn-secondary">
                        <Download :size="20" />
                        Download App
                    </button>
                </div>
                <!-- Mobile Menu Button -->
                <button class="mobile-menu-btn" @click="toggleMobileMenu" :class="{ active: mobileMenuOpen }">
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                </button>
            </div>

            <!-- Mobile Menu -->
            <div class="mobile-menu" :class="{ active: mobileMenuOpen }">
                <ul class="mobile-nav-links">
                    <li><a href="#features" @click="closeMobileMenu" class="mobile-nav-link">Funzionalità</a></li>
                    <li><a href="#about" @click="closeMobileMenu" class="mobile-nav-link">Chi Siamo</a></li>
                </ul>
                <div class="mobile-actions">
                    <button class="btn btn-secondary btn-full" @click="closeMobileMenu">Accedi</button>
                    <button class="btn btn-primary btn-full" @click="closeMobileMenu">Inizia Gratis</button>
                </div>
            </div>
        </nav>

        <!-- Mobile Overlay -->
        <div v-if="mobileMenuOpen" class="mobile-overlay" @click="closeMobileMenu"></div>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import {
    Download,
} from 'lucide-vue-next'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value
    // Previene lo scroll quando il menu è aperto
    document.body.style.overflow = mobileMenuOpen.value ? 'hidden' : 'unset'
}

const closeMobileMenu = () => {
    mobileMenuOpen.value = false
    document.body.style.overflow = 'unset'
}

// Chiudi il menu quando si preme ESC
const handleEscape = (e) => {
    if (e.key === 'Escape' && mobileMenuOpen.value) {
        closeMobileMenu()
    }
}

onMounted(() => {
    document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
    document.removeEventListener('keydown', handleEscape)
    document.body.style.overflow = 'unset'
})
</script>

<style scoped>
.header {
    border-radius: var(--rounded-xl);
    margin-block: var(--space-4);
    margin-inline: auto;
    max-width: 1400px;
    background: var(--gray-75);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    box-shadow: 0 1px 15px rgba(0, 0, 0, 0.2);
    transition: var(--transition-base);
}

.navbar {
    padding: var(--space-4) var(--space-10);
    position: relative;
}

.nav-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-4) 0;
    height: 70px;
}

.logo-image {
    width: 50px;
    height: 50px;
    border-radius: var(--rounded-full);
    margin-right: var(--space-2);
}

.logo-link {
    display: flex;
    align-items: center;
    text-decoration: none;
}

.logo-text {
    font-size: var(--text-xl);
    font-weight: 700;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transition: var(--transition-base);
}

.logo-link:hover .logo-text {
    transform: scale(1.05);
}

.nav-links {
    display: flex;
    align-items: center;
    gap: var(--space-8);
    list-style: none;
    margin: 0;
    padding: 0;
}

.nav-link {
    position: relative;
    text-decoration: none;
    color: var(--gray-700);
    font-weight: 500;
    font-size: var(--text-base);
    padding: var(--space-2) var(--space-3);
    border-radius: var(--rounded-md);
    transition: var(--transition-base);
}

.nav-link:hover {
    color: var(--primary-color);
    background-color: var(--primary-50);
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: 0;
    height: 2px;
    background: var(--gradient-primary);
    transition: var(--transition-base);
    transform: translateX(-50%);
}

.nav-link:hover::after {
    width: 80%;
}

.nav-actions {
    display: flex;
    align-items: center;
    gap: var(--space-3);
}

.mobile-menu-btn {
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 32px;
    height: 32px;
    padding: var(--space-1);
    background: transparent;
    border: none;
    cursor: pointer;
    transition: var(--transition-base);
}

.hamburger-line {
    width: 100%;
    height: 3px;
    background: var(--gray-700);
    border-radius: 2px;
    transition: var(--transition-base);
    transform-origin: center;
}

.mobile-menu-btn.active .hamburger-line:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
}

.mobile-menu-btn.active .hamburger-line:nth-child(2) {
    opacity: 0;
}

.mobile-menu-btn.active .hamburger-line:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
}

.mobile-menu {
    position: absolute;
    top: 100px;
    left: 0;
    right: 0;
    background: var(--gray-100);
    border-radius: 0 0 var(--rounded-xl) var(--rounded-xl);
    box-shadow: var(--shadow-xl);
    padding: var(--space-6);
    transform: translateY(-20px);
    opacity: 0;
    visibility: hidden;
    transition: var(--transition-base);
    max-height: calc(100vh - 70px);
    overflow-y: auto;
}

.mobile-menu.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
}

.mobile-nav-links {
    list-style: none;
    margin: 0 0 var(--space-6) 0;
    padding: 0;
}

.mobile-nav-links li {
    margin-bottom: var(--space-2);
}

.mobile-nav-link {
    display: block;
    padding: var(--space-4);
    text-decoration: none;
    color: var(--gray-700);
    font-weight: 500;
    font-size: var(--text-lg);
    border-radius: var(--rounded-lg);
    transition: var(--transition-base);
    border: 1px solid transparent;
}

.mobile-nav-link:hover {
    color: var(--primary-color);
    background-color: var(--primary-50);
    border-color: var(--primary-200);
}

.mobile-actions {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
    padding-top: var(--space-4);
    border-top: 1px solid var(--gray-200);
}

.mobile-overlay {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
    animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

/* Scroll behavior */
.header.scrolled {
    background: rgba(255, 255, 255, 0.98);
    box-shadow: var(--shadow-lg);
}

/* Responsive */
@media (max-width: 968px) {
    .nav-links {
        gap: var(--space-6);
    }
}

@media (max-width: 768px) {
    .nav-content {
        height: 60px;
        padding: var(--space-3) 0;
    }

    .nav-links,
    .nav-actions {
        display: none;
    }

    .mobile-menu-btn {
        display: flex;
    }

    .logo-text {
        font-size: var(--text-lg);
    }

    .mobile-overlay {
        top: 60px;
    }
}

@media (max-width: 480px) {
    .mobile-menu {
        padding: var(--space-4);
    }

    .mobile-nav-link {
        font-size: var(--text-base);
        padding: var(--space-3);
    }
}

/* Focus states for accessibility */
.nav-link:focus,
.mobile-nav-link:focus,
.mobile-menu-btn:focus {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
}

.btn:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
}
</style>