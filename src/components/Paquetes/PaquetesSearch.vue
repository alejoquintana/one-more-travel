<template>
    <div class="filters my-4">
        <!-- <filters-form-window></filters-form-window> -->
        <SearchEngine :tab="'paquetes'" />
    </div>
    <div>
        <h1 class="fw-bold text-primary mb-0 border-bottom border-secondary border-4">Paquetes a {{ paquetes().titleFilter }}</h1>
        <!-- <hr class="m-0"> -->
        <div class="row">
            <PaqueteCard class="col-12 col-md-3 p-2" v-for="paquete, i in paquetes().paquetes" :paquete="paquete"
                :key="i" />
        </div>
    </div>
</template>

<script setup>
import FiltersFormWindow from './FiltersFormWindow.vue'
import SearchEngine from '@/components/SearchEngine/SearchEngine.vue'
import PaqueteCard from './PaqueteCard.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
console.log("route",route);
import { usePaquetesStore as paquetes } from '@/store/paquetes'

let params = new URLSearchParams(route.params).toString();
console.log("params",params);
paquetes().fetchPaquetesParametros(params)
</script>

<style lang="scss" scoped>


.filters {
    // position: fixed;
    // top: 0;
    // //top: $nav-h-sm;
    // left: 0;
    // height: 100vh;
    // z-index: 99;
}

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.3s ease-out;
    //transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(-100%);
    //opacity: 0;
}
</style>