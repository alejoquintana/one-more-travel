<script setup>

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
            <div v-for="({obj,icon},i) in contacts" :key="i" class="btn-contact d-flex align-items-center text-white">
                <div class="d-inline btn-icon-contact bg-secondary rounded-circle">
                    <Icon :icon="icon" color="primary" ></Icon>
                </div>
                <span class="px-4">
                    {{ obj }}
                </span>
            </div>
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
.btn-icon-contact{
    padding: 0.4rem;
    border: 1px solid $primary;
}
.btn-contact{
    box-shadow:inset 0px 0px 0px 2px $secondary;
    //border: 2px solid $secondary;
    border-radius: $radius;
}
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