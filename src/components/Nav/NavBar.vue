<script setup>
import OmgButton from '@/components/OmgButton.vue';
import { useHelpersStore as helpers } from '@/stores/helpers'
import { useInfoStore as info } from '@/stores/info'
import Icon from '@/components/AIcon.vue'

const contacts = [
    { obj: info().mail, icon: 'envelope' },
    { obj: info().phone, icon: 'phone-volume' }
]
</script>

<template>
    <header class="header">
        <nav class="nav-bar px-lg-0">
            <router-link to="/">
                <img class="logo" :class="$mq.sm ? 'w-50' : ''" :src="helpers().getImagePath('logo-white.png')"
                    alt="Logo OMG Travel">
            </router-link>
            <div class="d-flex gap-4" v-if="$mq.lg">
                <OmgButton v-for="({ obj, icon }, i) in contacts" :key="i" :icon="icon">{{ obj }}</OmgButton>
            </div>
            <div class="d-flex gap-5" v-if="$mq.lg">
                <span v-for="social in info().socials" :key="social.icon">
                    <Icon :icon="social.icon" color="white"></Icon>
                </span>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: center;
    background-color: $primary;
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