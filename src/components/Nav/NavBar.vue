<script setup>
import OmgButton from '@/components/OmgButton.vue';
import { useHelpersStore as helpers } from '@/store/helpers'
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
        obj_footer: `<a href="mailto:${info().mail}" style="text-decoration:none;">
                ${info().mail}
            </a>`,
        icon: 'envelope'
    },
    {
        obj: `<a href="tel:${info().phone}" style="text-decoration:none;">
            ${info().phone}
            </a>`,
        obj_footer: `<a href="https://wa.me/541124917552" target="_blank" style="text-decoration:none;">
            ${info().phone}
            </a>`,
        icon: 'phone-volume',
    }
]

// import { useHelpersStore as helpers } from '@/store/helpers.js'

</script>

<template>
    <header class="header">
        <nav class="nav-bar">
            <router-link to="/">
                <img class="logo" :class="$mq.sm ? 'w-50' : ''" :src="helpers().getImagePath('logo-purple.png')"
                    alt="Logo OMG Travel">
            </router-link>
            <div class="d-flex gap-4" v-if="$mq.lg">
                <OmgButton v-for="({ obj, obj_footer, icon }, i) in contacts" :key="i" :icon="icon">
                    <span class="px-4" v-html="(footer ? obj_footer : obj)"></span>
                </OmgButton>
            </div>
            <div class="d-flex gap-5" v-if="$mq.lg">
                <!-- <a v-for="social in info().socials" :key="social.icon">
                    <Icon :icon="social.icon" color="white"></Icon>
                </a> -->
                <a :href="social.url" :target="social.url != '/' ? '_blank' : '_self'" v-for="social in info().socials"
                    :key="social.icon" class="bg-primary rounded-circle p-2">
                    <Icon :icon="social.icon" color="white"></Icon>
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

.logo {
    max-height: 60px;
}

.nav-bar {
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: $max-width;
    min-height: $nav-h-lg;
}

@media (max-width: 576px) {
    .nav-bar {
        min-height: $nav-h-sm;
    }
}
</style>