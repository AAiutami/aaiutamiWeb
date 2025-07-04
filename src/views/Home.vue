<template>
    <div class="home">
        <Header />
        <main>
            <HeroSection />
            <FeaturesSection />
            <AboutSection />
            <PricingSection />
            <ContactSection />
        </main>
        <Footer />
    </div>
</template>

<script setup>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import FeaturesSection from '@/components/sections/FeaturesSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import PricingSection from '@/components/sections/PricingSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
</script>

<style scoped>
.home {
    min-height: 100vh;
}
</style>
