<template>
    <h1 class="fw-bold text-primary mb-0">Paquetes</h1>
    <hr class="m-0">
    <div class="row">
        <div class="col-12 col-md-4 p-2" v-for="paquete,i in paquetes().paquetes" :key="i">
            <div class="relative rounded p-3 bg-primary text-white" @click="goToPack(paquete.codigo)">
                <div class="ratio ratio-16x9 fill-img">
                    <img v-if="paquete.imagenes[0]" :src="helpers().getImagePath(paquete.imagenes[0].url,'paquetes')" alt="" :srcset=" helpers().getImagePath(paquete.imagenes[0].url,'paquetes')">
                    <img v-else :src="helpers().getImagePath('no-photo-available.png')" alt="" srcset="">
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <h3 class="mb-0">{{ paquete.nombre }}</h3>
                    <div v-if="paquete.estrellas != 0">
                        <i v-for="i in 5" :class="{'text-warning':i <= paquete.estrellas}" class="fa-solid fa-star" :key="i"></i>
                    </div>
                </div>
                <div class="absolute m-2 p-2 top-0 left-0 text-white bg-secondary rounded-circle">
                    <i v-if="paquete.transporte == 'aereos'" class="fa-solid fa-plane fa-2x"></i>
                    <i v-if="paquete.transporte == 'barco'" class="fa-solid fa-ship fa-2x"></i>
                    <i v-if="paquete.transporte == 'bus'" class="fa-solid fa-bus fa-2x"></i>
                </div>
                <p class="mb-0">
                    {{ paquete.destinos}}
                </p>
                <p class="mb-0">
                    {{ paquete.duracion }} dias, {{ paquete.noches }} noches.
                    <span class="ucfirst">
                        {{ paquete.regimen_incluido }}
                    </span>
                </p>
                <p class="mb-0">
                </p>
                <p class="mb-0 fs-xl fw-bold text-secondary">
                    $ {{ paquete.precio_final }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useHelpersStore as helpers } from '@/stores/helpers'
import { usePaquetesStore as paquetes } from '@/stores/paquetes'
import { useRouter } from 'vue-router'
const router = useRouter()

import Icon from '@/components/AIcon.vue'
paquetes().fetchPaquetes()
function goToPack(codigo) {
    router.push('paquetes/'+codigo)
}
</script>

<style lang="scss" scoped>
</style>