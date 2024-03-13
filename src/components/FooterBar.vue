<template>
    <div class="mt-5">
        <NavBar />
        <div class="max-width py-4 d-flex justify-content-between align-items-center">
            <span class="fs-md">
                2022-{{ new Date().getFullYear() }} © OMG Travel. All Rights Reserved.
            </span>
            <img src="https://omgtravel.aereos.app/imgs/cuatrolados-logo-black.png" alt="Logo de Cuatro Lados"
                style="max-height: 30px;">
        </div>
    </div>
</template>

<script setup>
import NavBar from '@/components/Nav/NavBar.vue'
</script>

<style lang="scss" scoped>
</style>