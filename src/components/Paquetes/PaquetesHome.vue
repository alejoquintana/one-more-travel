<template>
    <div class="filters my-4">
        <!-- <filters-form-window></filters-form-window> -->
        <SearchEngine :tab="'paquetes'"/>
    </div>
    <div>
        <h1 class="fw-bold text-primary mb-0 border-bottom border-secondary border-4">Paquetes</h1>
        <!-- <hr class="m-0"> -->
        <div class="row">
            <PaqueteCard class="col-12 col-md-3 p-2" v-for="paquete, i in paquetes().paquetes" :paquete="paquete"
                :key="i" />
            <!-- <div class="col-12 col-md-3 p-2" v-for="paquete, i in paquetes().paquetes" :key="i">
                <div class="relative br-radius p-3 bg-primary text-white pointer h-100 d-flex flex-column justify-content-between"
                    @click="goToPack(paquete.codigo)">
                    <div>
                        <div class="ratio br-radius overflow-hidden ratio-50 fill-img">
                            <img class="scale-hover" v-if="paquete.imagenes[0]"
                                :src="helpers().getImagePath(paquete.imagenes[0].url, 'paquetes')" alt=""
                                :srcset="helpers().getImagePath(paquete.imagenes[0].url, 'paquetes')">
                            <img v-else :src="helpers().getImagePath('no-photo-available.png')" alt="" srcset="">
                        </div>
                        <div class="d-flex justify-content-between align-items-center mt-2">
                            <p class="fs-4 mb-0 ucfirst ellipsis flex-grow-1">
                                {{ paquete.nombre }}
                            </p>
                        </div>
                        <div class="mb-0">
                            <div v-if="paquete.estrellas != 0">
                                <i class="fa fa-star me-1"></i>
                                {{ paquete.estrellas }}
                            </div>
                            <div>
                                <i class="fa fa-calendar me-1"></i>
                                {{ formatDate(paquete.fecha_salida) }}
                            </div>
                            <div>
                                <i class="fa fa-moon me-1"></i>
                                {{ paquete.noches }} noches
                            </div>
                            <div>
                                <i class="fa fa-utensils me-1"></i>
                                <span v-if="paquete.regimen_incluido == 'all_inclusive'">All inclusive</span>
                                <span v-if="paquete.regimen_incluido == 'media_pension'">Media pensión</span>
                                <span v-if="paquete.regimen_incluido == 'solo_alojamiento'">Sólo alojamiento</span>
                            </div>
                        </div>
                        <div v-if="paquete.descripcion_breve"
                            class="col-12 mt-2 row g-0 justify-content-between align-items-center">
                            <p class="mb-0 ffs-1" v-html="paquete.descripcion_breve"></p>
                        </div>
                        <div class="absolute m-2 p-2 top-0 left-0 text-white bg-secondary rounded-circle">
                            <i v-if="paquete.transporte == 'aereos'" class="fa-solid fa-plane fa-xl"></i>
                            <i v-if="paquete.transporte == 'barco'" class="fa-solid fa-ship fa-xl"></i>
                            <i v-if="paquete.transporte == 'bus'" class="fa-solid fa-bus fa-xl"></i>
                        </div>
                        <div v-if="paquete.oferta != 0" class="absolute m-2 top-0 right-0">
                            <img class="abso-icon discount-icon" style="max-width: 75px;"
                                :src="helpers().getImagePath('10-discount.png')" :alt="'Imagen de ' + paquete.destinos" />
                        </div>
                    </div>
                    <div>
                        <p class="mb-0 fs-lg fw-bold text-secondary text-center fs-3">
                            {{ helpers().formatPrice(paquete.precio_final, 'AR') }}
                        </p>
                        <button class="btn btn-block btn-secondary text-primary-hover w-100 btn-link btn-sm fw-bold text-white" style="text-decoration: none;">VER DETALLE</button>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script setup>
import FiltersFormWindow from './FiltersFormWindow.vue'
import SearchEngine from '@/components/SearchEngine/SearchEngine.vue'
import PaqueteCard from './PaqueteCard.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
import { usePaquetesStore as paquetes } from '@/store/paquetes'

let params = new URLSearchParams(route.query).toString();
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