<template>
    <div>
        <div class="pCard scale-hover  def-shadow br-radius p-0"
            :style="{ 'background-image': 'url(' + helpers.getImagePath(pack.imagenes[0].url, 'paquetes') + ')' }"
            @click="goToPack(pack.codigo)">
            <div v-if="pack.oferta != 0"
                class="absolute top-0 right-0 px-2 py-3 box-primary-border fw-bold rounded-pill"
                style="line-height: 16px;margin: -12px; z-index: 9999;">
                10%<br>OFF
                <!-- <img class="abso-icon discount-icon" style="max-width: 75px;"
                    :src="helpers.getImagePath('10-discount.png')" :alt="'Imagen de ' + pack.destinos" /> -->
            </div>
            <div class="p-4 flex-grow-1 d-flex flex-column justify-content-between br-radius" style="background: rgb(0,0,0);
background: linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 75%);">
                <div class="d-flex justify-content-center">
                    <span
                        class="bg-white text-primary rounded-pill py-1 px-2 mb-0 mt-1 ucfirst ellipsis fw-bold text-center"
                        style="max-width:100%;width: max-content;">
                        {{ pack.nombre }}
                    </span>
                </div>
                <div>
                    <div class="d-flex justify-content-between align-items-center gap-3 mt-2">
                        <div v-if="pack.noches" class="fw-bold">{{ pack.noches }} noches</div>
                        <div class="d-flex gap-1" v-if="pack.estrellas != 0">
                            <i class="fa fa-star fa-sm" v-for="stars, i in parseInt(pack.estrellas) " :key="i"></i>
                        </div>
                    </div>
                    <div v-if="pack.descripcion_breve"
                        class="col-12 mt-2 row g-0 justify-content-between align-items-center">
                        <p class="mb-0 ffs-1" v-html="pack.descripcion_breve"></p>
                    </div>
                    <div
                        class="relative bg-white d-flex justify-content-center align-items-center mt-2 py-2 rounded-pill">
                        <p v-if="pack.precio_final && pack.currency" class="price text-center mb-0"
                            style="line-height: 1.7rem;">
                            <small class="m-auto">Desde</small><br>
                            <span class="fs-lg fw-bold text-primary fs-3">
                                {{ helpers.formatPrice(pack.precio_final, pack.currency) }}
                            </span>
                        </p>
                        <p class=" mb-0 py-2 fw-bold text-center w-100 text-primary"
                            :class="{'seeDetail': pack.precio_final && pack.currency }">
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
    min-height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 250ms;
    // overflow: hidden;
    background-size: cover;
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
    // bottom: 0;
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