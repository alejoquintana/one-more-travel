<script setup>
import OmgButton from '@/components/OmgButton.vue';
import { useHelpersStore as helpers } from '@/stores/helpers'
import { useInfoStore as info } from '@/stores/info'
import Icon from '@/components/AIcon.vue'

const contacts = [
    { obj: info().mail ,icon: 'envelope' },
    { obj: info().phone ,icon: 'phone-volume' }
]
</script>

<template>
    <header class="header">
        <nav class="nav-bar">
            <img class="logo" :src="helpers().getImagePath('logo.png')" alt="Logo OMG Travel">
            <OmgButton v-for="({ obj, icon }, i) in contacts" :key="i" :icon="icon">{{obj}}</OmgButton>
            <div>
                <div class="d-flex gap-5">
                    <span v-for="social in info().socials" :key="social.icon">
                        <Icon :icon="social.icon" color="white"></Icon>
                    </span>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>

.header{
    display: flex;
    justify-content: center;
    background-color: $primary;
}
.logo{
    max-height: 60px;
}
.nav-bar{
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: $max-width;
    min-height: 70px;
}
</style>