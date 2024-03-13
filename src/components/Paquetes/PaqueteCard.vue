<template>
    <div>
        <div class="relative scale-hover box-primary-border bg-primary def-shadow br-radius p-3 text-white pointer h-100 d-flex flex-column justify-content-between"
            @click="goToPack(props.paquete.codigo)">
            <div>
                <div class="ratio br-radius overflow-hidden ratio-50 fill-img">
                    <img class="scale-hover" v-if="props.paquete.imagenes[0] && props.paquete.imagenes[0].url"
                        :src="helpers.getImagePath(props.paquete.imagenes[0].url, 'paquetes')" alt="" />
                    <img v-else :src="helpers.getImagePath('no-photo-available.png')" alt="">
                </div>
                <!-- <div class="d-flex justify-content-between align-items-center mt-2"> -->
                <p class="fs-4 mb-0 mt-2 ucfirst ellipsis w-100 fw-bold border-bottom border-secondary">
                    <!-- {{ props.paquete.nombre }} -->
                    {{ props.paquete.nombre }}
                </p>
                <!-- </div> -->
                <div class="mb-0">
                    <div class="d-flex" v-if="props.paquete.estrellas != 0">
                        <div class="min-w-16 text-center me-2">
                            <i class="fa fa-star"></i>
                        </div>
                        {{ props.paquete.estrellas }}
                    </div>
                    <div class="d-flex">
                        <div class="min-w-16 text-center me-2">
                            <i class="fa fa-calendar"></i>
                        </div>
                        {{ formatDate(props.paquete.fecha_salida) }}
                    </div>
                    <div class="d-flex">
                        <div class="min-w-16 text-center me-2">
                            <i class="fa fa-moon"></i>
                        </div>
                        {{ props.paquete.noches }} noches
                    </div>
                    <div class="d-flex" v-if="props.paquete.regimen_incluido">
                        <div class="min-w-16 text-center me-2">
                            <i class="fa fa-utensils"></i>
                        </div>
                        <span v-if="props.paquete.regimen_incluido == 'all_inclusive'">All inclusive</span>
                        <span v-if="props.paquete.regimen_incluido == 'media_pension'">Media pensión</span>
                        <span v-if="props.paquete.regimen_incluido == 'solo_alojamiento'">Sólo alojamiento</span>
                        <!-- {{ props.paquete.regimen_incluido }} -->
                    </div>
                </div>
                <div v-if="props.paquete.descripcion_breve"
                    class="col-12 mt-2 row g-0 justify-content-between align-items-center">
                    <p class="mb-0 ffs-1" v-html="props.paquete.descripcion_breve"></p>
                </div>
                <div class="absolute m-2 p-2 top-0 left-0 text-white bg-secondary rounded-circle">
                    <i v-if="props.paquete.transporte == 'aereos'" class="fa-solid fa-plane fa-xl"></i>
                    <i v-if="props.paquete.transporte == 'barco'" class="fa-solid fa-ship fa-xl"></i>
                    <i v-if="props.paquete.transporte == 'bus'" class="fa-solid fa-bus fa-xl"></i>
                </div>
                <div v-if="props.paquete.oferta != 0" class="absolute m-2 top-0 right-0">
                    <img class="abso-icon discount-icon" style="max-width: 75px;"
                        :src="helpers.getImagePath('10-discount.png')" :alt="'Imagen de ' + props.paquete.destinos" />
                </div>
            </div>
            <div>
                <p class="mb-0 fs-lg fw-bold text-secondary text-center fs-3">
                    {{ helpers.formatPrice(props.paquete.precio_final, 'AR') }}
                </p>
                <button class="btn btn-block btn-secondary text-primary-hover w-100 btn-link btn-sm fw-bold text-white"
                    style="text-decoration: none;">VER DETALLE</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useHelpersStore } from '@/store/helpers'
const helpers = useHelpersStore()
const router = useRouter()

const props = defineProps(['paquete'])
function goToPack(codigo) { router.push('paquetes/' + codigo) }

function formatDate(value) {
    let val = value.split('-')
    return `${val[2]}/${val[1]}/${val[0]}`
}
</script>

<style lang="scss" scoped>
.ratio-50 {
    --bs-aspect-ratio: 60%;
}
.min-w-16{
    flex: 0 0 20px;
}
</style>