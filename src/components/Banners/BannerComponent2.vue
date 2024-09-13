<template>
    <div class="box-contanier bg-primary br-lg-radius h-100">
        <div class="d-flex justify-content-center align-items-center px-5 py-3">
            <div class="">
                <p class="fw-extra-bolder fs-lg mb-2">
                    Estos son nuestros descuentos de cyber monday
                </p>
                <v-btn color="black" class="text-white" size="large">Ver descuentos</v-btn>
            </div>
            <!-- <div> -->
            <!-- <v-img class="img-cyber" :src="helpers().getImagePath('cyber-monday.png')" alt="" /> -->
            <!-- </div> -->
        </div>
    </div>
</template>

<script setup>
import { useHelpersStore as helpers } from '@/store/helpers'
</script>

<style lang="scss" scoped>
.box-contanier{
    max-width: $max-width;
    // max-height: 240px;
    overflow: hidden;
}
.img-cyber{
    height: 100%;
    max-height: 200px;
        object-fit: cover;
}
</style>