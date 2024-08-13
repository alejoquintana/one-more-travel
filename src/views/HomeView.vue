<script setup>
import HomeViewDefault from '@/views/HomeViewDefault.vue'
import HomeViewPaquetesOnly from '@/views/HomeViewPaquetesOnly.vue'
import { useHelpersStore as helpers } from '@/store/helpers'
</script>

<template>
    <div>
        <HomeViewDefault v-if="helpers().show_on == 'omg'" />
        <HomeViewPaquetesOnly v-else />
    </div>
</template>