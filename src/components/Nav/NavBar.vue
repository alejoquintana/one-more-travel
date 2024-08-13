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
const contacts = [
    {
        obj: `<a href="mailto:${info().mail}" style="text-decoration:none;">
                ${info().mail}
            </a>`,
        // obj_footer: `<a href="mailto:${info().mail}" style="text-decoration:none;">
        //         ${info().mail}
        //     </a>`,
        icon: 'envelope'
    },
    {
        // obj: `<a href="tel:${info().phone}" style="text-decoration:none;">
        //     ${info().phone}
        //     </a>`,
        obj: `<a href="https://wa.me/541124917552" target="_blank" style="text-decoration:none;">
            ${info().phone}
            </a>`,
        icon: 'phone-volume',
    }
]

// import { useHelpersStore as helpers } from '@/store/helpers.js'

</script>

<template>
    <header class="header" :class="footer ? '' : 'fixed'">
        <nav class="nav-bar">
            <h1 v-if="footer" class="h6 text-primary">
                <strong class="h3">ONE MORE</strong> <span class="h3">Travel</span> <br> Agencia de Viajes y Paquetes
                Turísticos
            </h1>
            <router-link to="/" v-else>
                <img class="logo" :class="$mq.sm ? 'w-50' : ''" :src="helpers.getImagePath('logo-purple.png')"
                    alt="Logo ONE MORE Travel">
            </router-link>
            <!-- <div v-else style="min-width: 100px;"></div> -->
            <div class="d-flex gap-4" v-if="$mq.lg">
                <OmgButton v-for="({ obj, icon }, i) in contacts" :key="i" :icon="icon">
                    <span class="px-4" v-html="obj"></span>
                </OmgButton>
            </div>
            <div class="d-flex gap-5">
                <!-- <a v-for="social in info().socials" :key="social.icon">
                    <Icon :icon="social.icon" color="white"></Icon>
                </a> -->
                <a :href="social.url" :target="social.url != '/' ? '_blank' : '_self'" v-for="social in info().socials"
                    :key="social.icon" class="bg-primary rounded-circle p-2">
                    <Icon :icon="social.icon" color="white" :size="$mq.lg ? '' : 'sm'"></Icon>
                </a>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: center;
    background-color: #fff;
}

.fixed {
    position: fixed;
    top: 0;
    z-index: 9999999999;
}
@media (min-width: 576px) {
    .fixed {
        left: 50%;
        transform: translatex(-50%);
    }
}

.logo {
    max-height: 60px;
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