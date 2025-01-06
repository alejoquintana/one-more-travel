<template>
    <div class="filters my-4" v-if="!helpers().show_on != 'femer'">
        <!-- <filters-form-window></filters-form-window> -->
        <SearchEngine :tab="'paquetes'" />
    </div>
    <div>
        <h1 class="fw-bold text-primary mb-0 border-bottom border-secondary border-4">Resultados</h1>
        <!-- <hr class="m-0"> -->
        <!-- <div v-if="paquetes().paquetes && paquetes().paquetes.length >= 1" class="row">
            <PaqueteCard class="col-12 col-md-3 p-2" v-for="paquete, i in paquetes().paquetes" :paquete="paquete"
                :key="i" />
        </div>
        <h3 v-else class="text-center text-primary py-5">
            No hay se encontraron paquetes...
        </h3> -->

        <div class="row" v-if="paquetes().paquetesFiltered.length > 0">
            <PaqueteCard class="col-12 col-md-3 p-2" v-for="paquete, i in paquetes().paquetesFiltered"
                :paquete="paquete" :key="i" />
        </div>
        <div class="row" v-else>
            <h3 class="text-center fw-bold text-primary py-5 my-5">
                No se encontraron paquetes
            </h3>
            <h3 class="text-primary mb-4 border-bottom border-secondary border-4">
                Quizás te interese....
            </h3>
            <PaqueteCard class="col-12 col-md-4 p-3" v-for="paquete, i in paquetes().ofertas" :paquete="paquete"
                :key="i" />
        </div>
    </div>
</template>

<script setup>
import FiltersFormWindow from './FiltersFormWindow.vue'
import SearchEngine from '@/components/SearchEngine/SearchEngine.vue'
import { useHelpersStore as helpers } from '@/store/helpers'

import PaqueteCard from './PaqueteCard.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
console.log("route",route);
import { usePaquetesStore as paquetes } from '@/store/paquetes'

let params = new URLSearchParams(route.params).toString();
console.log("params",params);
paquetes().fetchPaquetesParametros(params)
paquetes().fetchPaquetesOferta()

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