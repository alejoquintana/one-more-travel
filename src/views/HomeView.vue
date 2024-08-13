<script setup>
import HomeViewDefault from '@/views/HomeViewDefault.vue'
import HomeViewPaquetesOnly from '@/views/HomeViewPaquetesOnly.vue'
import { useHelpersStore as helpers } from '@/store/helpers'
</script>

<template>
    <div>
        <HomeViewDefault v-if="helpers().show_on == 'one-more'" />
        <HomeViewPaquetesOnly v-else />
    </div>
</template>