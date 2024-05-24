<script setup>
import HomeViewDefault from '@/views/HomeViewDefault.vue'
import HomeViewSportclub from '@/views/HomeViewSportclub.vue'
import { useHelpersStore as helpers } from '@/store/helpers'
</script>

<template>
    <div>
        <HomeViewDefault v-if="!helpers().sportclub" />
        <HomeViewSportclub v-else />
    </div>
</template>