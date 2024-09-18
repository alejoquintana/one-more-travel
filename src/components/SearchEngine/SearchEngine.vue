<template>
    <div class="relative searchengine-container">
        <div class="absolute w-100 img-box br-lg-radius py-4 px-5" 
        :style="`background-image: url(${helpers().getImagePath(info().slider && info().slider.url && info().slider.url != '' ? info().slider.url : 'tropical-beach.jpg','sliders')});`">
            <!-- <p class="fs-4xl fw-extra-bolder mb-0">Bienvenido</p>
            <p class="">Conocé nuestra mejores ofertas</p> -->
        </div>
        <div class="relative w-100 px-2 px-lg-5">
            <div class="d-flex ps-lg-5 ps-4 text-primary w-100">
                <div class="d-flex align-items-center tab" :class="selectedTab == name ? 'selected' : ''"
                    v-for="{ name, icon }, i in tabs" :key="i" @click="selectedTab = name">
                    <Icon :icon="icon" :color="selectedTab == name ? 'white' : 'primary'" size="lg" />
                    <div v-if="$mq.lg" class="tab-name text-center text-capitalize fs-lg fw-bold">
                        {{ name }}
                    </div>
                </div>
            </div>
            <div class="search-window bg-primary def-shadow">
                <Aereos v-if="selectedTab == 'aereos'" />
                <Hoteles v-if="selectedTab == 'hoteles'" />
                <Paquetes v-if="selectedTab == 'paquetes'" />
                <Buques v-if="selectedTab == 'buques'" />
            </div>
        </div>
    </div>
</template>

<script setup>
import Icon from '@/components/AIcon.vue'
import Aereos from "@/components/SearchEngine/SearchAereos.vue";
import Hoteles from "@/components/SearchEngine/SearchHoteles.vue";
import Paquetes from "@/components/SearchEngine/SearchPaquetes.vue";
import Buques from "@/components/SearchEngine/SearchBuques.vue";

import { useHelpersStore as helpers } from '@/store/helpers'
import { useInfoStore as info } from '@/store/info'
info().fetchSlider()

import { onMounted, ref } from "vue";
const props = defineProps({
    tab: {
        // type: Number,
        default: 'aereos'
    },
})

const selectedTab = ref(props.tab)
const tabs = [
    { name: 'aereos', icon: "plane" },
    // {name:'hoteles',icon:"train-subway"},
    { name: 'paquetes', icon: "suitcase" },
    // {name:'buques',icon:"ship"},
]
</script>

<style lang="scss" scoped>
.searchengine-container {
    // min-height: 500px;
    padding-top: 90px;

    .img-box {
        min-height: 300px;
        background-size: cover;
        background-position: center center;
        z-index: 1;
    }

    .absolute {
        top: -50px;
    }

    .relative {
        z-index: 10;
    }
}

@media (min-width: $min-width) {
    .tab {
        padding: 0.5rem 1.8rem !important;
    }
}

.tab {
    cursor: pointer;
    transition: all $transitions-time;
    border-radius: $radius $radius 0 0;
    padding: 0.5rem 1.2rem;
    border-top: 2px solid $primary;
    border-left: 2px solid $primary;
    border-right: 2px solid $primary;
    margin-right: 8px;
    background-color: #FFF;
}

.tab.selected {
    background-color: $primary;
    color: #fff;
    fill: #fff;
}

.tab-name {
    //padding: 0rem 1rem;
    opacity: 0;
    width: 0;
    //display: none;
    transition: all $transitions-time;
}

.tab:hover,
.tab.selected {
    .tab-name {
        //display: block;
        opacity: 1;
        width: 100px
    }
}

.search-window {
    //background: rgb(255,255,255);
    color: #fff;
    border-radius: $radius;
    padding: 1.2rem;
    min-height: 200px;
}
</style>