<template>
    <div>
        <div class="pCard scale-hover box-primary-border def-shadow br-radius p-0"
            :class="pack.oferta == 0 ? 'bg-odd' : 'bg-even'" @click="goToPack(pack.codigo)">
            <div>
                <div class="ratio br-radiuss overflow-hidden ratio-50 fill-img relative">
                    <img class="sscale-hover"
                        v-if="pack.imagenes && pack.imagenes.length && pack.imagenes[0] && pack.imagenes[0].url"
                        :src="helpers.getImagePath(pack.imagenes[0].url, 'paquetes')" alt="" />
                    <img v-else :src="helpers.getImagePath('no-photo-available.png')" alt="">
                </div>
            </div>
            <!-- <div v-if="pack.oferta != 0" class="absolute m-2 top-0 right-0">
                <img class="abso-icon discount-icon" style="max-width: 75px;"
                    :src="helpers.getImagePath('10-discount.png')" :alt="'Imagen de ' + pack.destinos" />
            </div> -->
            <div v-if="false" class="pt-0 p-3 flex-grow-1 d-flex flex-column justify-content-between">
                <div>
                    <div class="d-flex justify-content-between gap-3 mt-2">
                        <div class="d-flex gap-1" v-if="pack.estrellas != 0">
                            <i class="fa fa-star" v-for="stars, i in parseInt(pack.estrellas) " :key="i"></i>
                        </div>
                        <div v-if="pack.noches" class="fw-bold">{{ pack.noches }} noches</div>
                    </div>
                    <p class="fs-4 mb-0 mt-1 ucfirst ellipsis w-100 fw-bold border-bottom border-secondary">
                        {{ pack.nombre }}
                    </p>
                    <!-- <div class="mb-0 fs-md">
                        <div class="d-flex" v-if="pack.estrellas != 0">
                            <div class="min-w-16 text-center me-2">
                                <i class="fa fa-star"></i>
                            </div>
                            {{ pack.estrellas }} estrellas
                        </div>
                        <div class="d-flex">
                            <div class="min-w-16 text-center me-2">
                                <i class="fa fa-calendar"></i>
                            </div>
                            {{ formatDate(pack.fecha_salida) }}
                        </div>
                        <div class="d-flex">
                            <div class="min-w-16 text-center me-2">
                                <i class="fa fa-moon"></i>
                            </div>
                            {{ pack.noches }} noches
                        </div>
                        <div class="d-flex" v-if="pack.regimen_incluido">
                            <div class="min-w-16 text-center me-2">
                                <i class="fa fa-utensils"></i>
                            </div>
                            <span v-if="pack.regimen_incluido == 'all_inclusive'">All inclusive</span>
                            <span v-if="pack.regimen_incluido == 'media_pension'">Media pensión</span>
                            <span v-if="pack.regimen_incluido == 'solo_alojamiento'">Sólo alojamiento</span>
                        </div>
                    </div> -->
                    <div v-if="pack.descripcion_breve"
                        class="col-12 mt-2 row g-0 justify-content-between align-items-center">
                        <p class="mb-0 ffs-1" v-html="pack.descripcion_breve"></p>
                    </div>
                    <!-- <div
                        class="absolute m-2 p-2 top-0 left-0 text-white bg-primary border border-secondary border-2 rounded-circle">
                        <i v-if="pack.transporte == 'aereos'" class="fa-solid fa-plane fa-xl"></i>
                        <i v-if="pack.transporte == 'barco'" class="fa-solid fa-ship fa-xl"></i>
                        <i v-if="pack.transporte == 'bus'" class="fa-solid fa-bus fa-xl"></i>
                    </div> -->
                </div>
                <div class="">
                    <!-- <p v-if="pack.cupo" class="text-center mt-2 mb-0">Disponibilidad: {{ pack.cupo }}</p> -->
                    <div class="relative d-flex justify-content-center mt-2">
                        <p class="price mb-0 fs-lg fw-bold text-secondary text-center fs-3">
                            {{ helpers.formatPrice(pack.precio_final, pack.currency) }}
                        </p>
                        <p class="seeDetail mb-0 py-2 fw-bold text-center w-100 bg-secondary br-sm-radius text-primary">
                            VER DETALLE
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useHelpersStore } from '@/store/helpers'
const helpers = useHelpersStore()
const router = useRouter()

const props = defineProps(['paquete', 'i'])
const pack = props.paquete
function goToPack(codigo) { router.push('paquetes/' + codigo) }

function paxs() {
    let res = '';
    let adt = pack.adultos
    let chd = pack.menores
    let inf = pack.infantes
    if (adt && adt > 0) {
        res += adt + ' adulto' + (adt > 1 ? 's' : '')
        if ((chd && chd > 0) || (inf && inf > 0)) {
            res += ' - '
        }
    }
    if (chd && chd > 0) {
        res += chd + ' menor' + (chd > 1 ? 'es' : '')
        if (inf && inf > 0) {
            res += ' - '
        }
    }
    if (inf && inf > 0) {
        res += inf + ' infante' + (inf > 1 ? 's' : '')
    }
    return res
}
function formatDate(value) {
    let val = value.split('-')
    return `${val[2]}/${val[1]}/${val[0]}`
}
</script>

<style lang="scss" scoped>
.pCard {
    position: relative;
    color: #FFF;
    cursor: pointer;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 250ms;
    overflow: hidden;
}

.icons-list {
    z-index: 2;
    gap: 1rem;
    text-shadow: 0px 0px 10px #000, 0px 0px 10px #00000088;
}

.price,
.seeDetail,
.discount-icon {
    transition: all 250ms;
}

.seeDetail {
    position: absolute;
    bottom: 0;
    opacity: 0;
}

.pCard:hover {
    .price {
        opacity: 0;
    }

    .seeDetail {
        opacity: 1;
    }

    .discount-icon {
        transform: scale(1.2);
    }
}

.ratio-50 {
    --bs-aspect-ratio: 70%;
}

.min-w-16 {
    flex: 0 0 20px;
}
</style>