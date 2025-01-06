<script setup>
import OmgButton from '@/components/OmgButton.vue';
import { useHelpersStore } from '@/store/helpers'
const helpers = useHelpersStore()
import { useInfoStore as info } from '@/store/info'
import Icon from '@/components/AIcon.vue'
defineProps({
    footer: {
        default: false
    },
})

// import { useHelpersStore as helpers } from '@/store/helpers.js'

</script>

<template>
    <header class="header" :class="footer ? 'footer' : 'fixed'">
        <nav class="nav-bar">
            <h1 v-if="footer" class="h6 text-primary">
                <strong class="h3">ONE MORE</strong> <span class="h3">Travel</span> <br> Agencia de Viajes y Paquetes
                Turísticos
            </h1>
            <!-- <div v-else style="min-width: 100px;"></div> -->
            <OmgButton v-if="$mq.lg" :icon="info().contacts[0].icon">
                <span class="text-black" v-html="info().contacts[0].obj"></span>
            </OmgButton>
            <!-- <div class="d-flex gap-4" v-if="$mq.lg">
                <OmgButton v-for="({ obj, icon }, i) in info().contacts" :key="i" :icon="icon">
                    <span class="text-black" v-html="obj"></span>
                </OmgButton>
            </div> -->
            <router-link to="/">
                <img class="logo rounded-4" :class="$mq.sm ? 'w-50' : ''" :src="helpers.getImagePath('logo_omt.gif')"
                    alt="Logo ONE MORE Travel">
            </router-link>
            <div class="d-flex gap-3">
                <!-- <a v-for="social in info().socials" :key="social.icon">
                        <Icon :icon="social.icon" color="white"></Icon>
                    </a> -->
                <OmgButton v-if="$mq.lg" :icon="info().contacts[1].icon">
                    <span class="text-black" v-html="info().contacts[1].obj"></span>
                </OmgButton>
                <a :href="social.url" :target="social.url != '/' ? '_blank' : '_self'" style="aspect-ratio: 1;"
                    v-for="social in info().socials" :key="social.icon" class="social-icon rounded p-2">
                    <Icon :icon="social.icon" color="primary" hover="white" size="lg"></Icon>
                </a>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: center;
}

.header:not(.footer) {
    background-color: #fff;
}

.social-icon {
    aspect-ratio: 1;
}

.social-icon:hover {
    background-color: $primary;
}

.fixed {
    position: fixed;
    top: 0;
    z-index: 85;
}

@media (min-width: 576px) {
    .fixed {
        left: 50%;
        transform: translatex(-50%);
    }

    .logo {
        max-height: 150px;
    }
}

@media (max-width: 575px) {
    .logo {
        max-height: 180px;
    }

    .fixed {
        left: 50%;
        transform: translatex(-50%);
    }
}


.nav-bar {
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    max-width: $max-width;
    min-height: $nav-h-lg;
}

@media (max-width: 576px) {
    .nav-bar {
        min-height: $nav-h-sm;
    }
}
</style>