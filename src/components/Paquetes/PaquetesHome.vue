<template>
    <div class="filters my-4" v-if="!helpers().sportclub">
        <!-- <filters-form-window></filters-form-window> -->
        <SearchEngine :tab="'paquetes'" />
    </div>
    <div class="my-4" v-for="destino, i in paquetes().paquetesByDestinos" :key="i">
        <!-- <pre>
            {{ destino }}
        </pre> -->
        <h2 class="fw-bold text-primary mb-0 border-bottom border-secondary border-2"><small>Paquetes a</small> {{
            destino.titulo }}</h2>
        <div class="row">
            <PaqueteCard class="col-12 col-md-4 p-2" v-for="paquete, i in destino.paquetes" :paquete="paquete" :key="i"
                :i="0" />
        </div>
    </div>
    <div class="my-4">
        <h2 class="fw-bold text-primary mb-0 border-bottom border-primary border-2 pb-2">Todos los paquetes</h2>
        <div class="row mt-3">
            <PaqueteCard class="col-12 col-md-4 p-2" v-for="paquete, i in paquetes().paquetes" :paquete="paquete"
                :key="i" :i="1" />
        </div>
    </div>
</template>

<script setup>
import SearchEngine from '@/components/SearchEngine/SearchEngine.vue'
import PaqueteCard from './PaqueteCard.vue'
import { usePaquetesStore as paquetes } from '@/store/paquetes'
paquetes().fetchPaquetesHome()
</script>

<style lang="scss" scoped>


// .filters {
    // position: fixed;
    // top: 0;
    // //top: $nav-h-sm;
    // left: 0;
    // height: 100vh;
    // z-index: 99;
// }

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