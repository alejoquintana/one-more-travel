<template>
    <div class="box-contanier br-lg-radius">
        <img class="scale-hover-05 w-100" :src="helpers().getImagePath('banner-mercado-pago.png')" alt="">
    </div>
</template>

<script setup>
import { useHelpersStore as helpers } from '@/stores/helpers'
</script>

<style lang="scss" scoped>
.box-contanier{
    max-width: $max-width;
    max-height: 240px;
    overflow: hidden;
}
</style>