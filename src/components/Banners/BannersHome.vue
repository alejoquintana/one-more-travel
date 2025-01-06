<template>
    <div>
        <v-row v-if="info().banners.length > 0">
            <v-col cols="12" :md="((info().banners.length == 1) ? 12 : 6)" v-for="banner, i in info().banners" :key="i">

                <div class="box-contanier br-lg-radius" :style="`background-color: ${banner.color}`">
                    <a :href="banner.link" target="_blank" rel="noopener noreferrer"
                        v-if="banner.link && banner.link != ''">
                        <img class="scale-hover-05 w-100" :src="helpers().getImagePath(banner.url, 'banners')" alt="">
                    </a>
                    
                    <img v-else class="scale-hover-05 w-100" :src="helpers().getImagePath(banner.url, 'banners')" alt="">
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
import { useHelpersStore as helpers } from '@/store/helpers'
import { useInfoStore as info } from '@/store/info'
info().fetchBanners()
</script>

<style lang="scss" scoped>
.box-contanier {
    max-width: $max-width;
    max-height: 240px;
    overflow: hidden;
}
</style>