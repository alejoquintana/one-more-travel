<template>
    <div class="filters my-4" v-if="!helpers().sportclub">
        <SearchEngine :tab="'paquetes'" />
    </div>

    <v-row v-if="paquete && paquete.codigo">
        <v-col cols="12" md="7">
            <div class="relative">
                <div class="absolute m-3 p-2 top-0 left-0 text-white bg-primary rounded-circle" style="z-index:99">
                    <i v-if="paquete.transporte == 'aereos'" class="fa-solid fa-plane fa-2x"></i>
                    <i v-if="paquete.transporte == 'barco'" class="fa-solid fa-ship fa-2x"></i>
                    <i v-if="paquete.transporte == 'bus'" class="fa-solid fa-bus fa-2x"></i>
                </div>
                <div class="absolute m-3 top-0 right-0 text-white fw-bold d-flex flex-column align-items-end gap-2"
                    style="z-index:99">
                    <span v-if="paquete.oferta != 0" class="text-end bg-primary rounded-pill p-2 px-3">
                        OFERTA
                    </span>
                    <span v-if="paquete.destacado != 0" class="text-end  bg-primary rounded-pill p-2 px-3">
                        DESTACADO
                    </span>
                    <span v-if="paquete.reserva_real != 0" class="text-end   bg-primary rounded-pill p-2 px-3">
                        RESERVA REAL
                    </span>
                </div>
                <div @click="prevImage()" v-if="paquete.imagenes && paquete.imagenes.length"
                    class="absolute top-0 left-0 text-white h-100 br-radius bg-gradient-left d-flex align-items-center"
                    style="z-index:98">
                    <i class="fa fa-chevron-left px-4 fs-2"></i>
                </div>
                <div @click="nextImage()" v-if="paquete.imagenes && paquete.imagenes.length"
                    class="absolute top-0 right-0 text-white h-100 br-radius bg-gradient-right d-flex align-items-center"
                    style="z-index:98">
                    <i class="fa fa-chevron-right px-4 fs-2"></i>
                </div>
                <div v-if="paquete.imagenes && paquete.imagenes.length" class="br-radius img-box img-portada-box">
                    <img :src="helpers().getImagePath(paquete.imagenes[imgIndex].url, 'paquetes')" alt="">
                </div>
                <div v-else class="br-radius img-box img-portada-box">
                    <img :src="helpers().getImagePath('no-photo-available.png')" alt="">
                </div>
            </div>
            <v-row no-gutters v-if="paquete.descripcion"
                class="p-4 align-items-center justify-content-center bborder bborder-primary bbr-white br-radius">
                <v-col cols="12" lg="12" class="ppx-4">
                    <h4>Descripción</h4>
                    <div class="pt-3" v-html="paquete.descripcion"></div>
                </v-col>
            </v-row>
            <v-row v-if="paquete.fechas && paquete.fechas.length" no-gutters
                class="br-radius border border-2 bg-primary my-4 my-lg-2 p-4 justify-content-around">
                <v-col cols="12" class=" border-bottom border-white mb-3">
                    <h4 class="ucfirst">
                        Fechas de salida
                    </h4>
                </v-col>
                <v-col cols="4" v-for="fecha in paquete.fechas" :key="fecha.id" class="p-2">
                    <h5 for="alojamiento" class="fs-4 border-bottom border-white mb-1">
                        {{mes(fecha.fecha)}}
                    </h5>
                    <div class="d-flex align-items-center justify-content-between">
                        <span>Tarifa:</span>
                        <span>
                            {{ helpers().formatPrice(fecha.tarifa, fecha.currency) }}
                        </span>
                    </div>
                    <div class="d-flex align-items-center justify-content-between">
                        <span>Imp:</span>
                        <span>
                            {{ helpers().formatPrice(fecha.impuestos, fecha.currency) }}
                        </span>
                    </div>
                    <div class="d-flex align-items-center justify-content-between fs-5">
                        <span>Final:</span>
                        <span>
                            {{ helpers().formatPrice(fecha.precio_final, fecha.currency) }}
                        </span>
                    </div>
                </v-col>
            </v-row>
            <v-row v-if="paquete.alojamientos && paquete.alojamientos.length" no-gutters
                class="br-radius border border-2 bg-primary my-4 my-lg-2 p-4 justify-content-around">
                <v-col cols="12" class=" border-bottom border-white mb-3">
                    <h4 class="ucfirst">
                        Alojamientos
                    </h4>
                </v-col>
                <v-col cols="4" v-for="alojamiento in paquete.alojamientos" :key="alojamiento.id">
                    <h5 for="alojamiento" class="fs-4 border-bottom border-white mb-1">
                        {{alojamiento.alojamiento}}
                    </h5>
                    <div class="d-flex align-items-center justify-content-between">
                        <span>Tarifa:</span>
                        <span>
                            {{ helpers().formatPrice(alojamiento.tarifa, alojamiento.currency) }}
                        </span>
                    </div>
                    <div class="d-flex align-items-center justify-content-between">
                        <span>Imp:</span>
                        <span>
                            {{ helpers().formatPrice(alojamiento.impuestos, alojamiento.currency) }}
                        </span>
                    </div>
                    <div class="d-flex align-items-center justify-content-between fs-5">
                        <span>Final:</span>
                        <span>
                            {{ helpers().formatPrice(alojamiento.precio_final, alojamiento.currency) }}
                        </span>
                    </div>
                </v-col>
            </v-row>
            <div v-if="paquete.links && paquete.links.length"
                class="br-radius border border-2 bg-primary my-4 my-lg-0 p-4">
                <h4>Enlaces a recursos adicionales</h4>
                <hr class="mt-0">
                <div class="d-flex justify-content-center flex-wrap gap-2">
                    <a :href="enlace.url" target="_blank" rel="noopener noreferrer"
                        class="btn btn-outline-primary text-white" v-for="enlace, i in paquete.links" :key="i">
                        <div class="py-1 px-2 text-white ucfirst text-primary-hover">
                            {{ enlace.nombre }} <i class="fa-solid fa-arrow-up-right-from-square ps-3"></i>
                        </div>
                    </a>
                </div>
            </div>
            <div class="my-3 p-4 border border-primary br-radius" v-for="textoLibre, i in paquete.textos" :key="i">
                <h4 class="ucfirst">
                    {{ textoLibre.nombre }}
                </h4>
                <hr class="m-0">
                <p class="mt-3" v-html="textoLibre.texto"></p>
            </div>
        </v-col>
        <v-col cols="12" md="5">
            <div style="position: sticky; top: 20px">
                <div class="p-4 bg-primary bs-white br-radius info-default d-flex flex-column justify-content-between">
                    <div>
                        <div v-if="paquete.estrellas && paquete.estrellas != 0" class="d-flex gap-2 mt-2">
                            <i v-for="i in parseInt(paquete.estrellas)" class="fa-solid fa-star fa-lg" :key="i"></i>
                        </div>
                        <h1 class="ucfirst mt-3">{{ paquete.nombre }}</h1>
                        <p v-if="paquete.descripcion_breve" class="fs-md text-white" v-html="paquete.descripcion_breve">
                        </p>
                        <hr class="my-2">
                        <div>
                            <v-row>
                                <!-- <v-col cols="12">
                                    <v-row>
                                        <v-col cols="12">
                                            salidas
                                        </v-col>
                                        <v-col cols="6" v-for="fecha in paquete.fechas" :key="fecha.id">
                                            <p class="mb-0">{{ mes(fecha.fecha) }}: {{helpers().formatPrice(fecha.precio_final, fecha.currency) }}</p>
                                            
                                            <p>Tarifa: {{helpers().formatPrice(fecha.tarifa, fecha.currency) }}</p>
                                            <p>Impuestos: {{helpers().formatPrice(fecha.impuestos, fecha.currency) }}</p>
                                            <p>Final: {{helpers().formatPrice(fecha.precio_final, fecha.currency) }}</p>
                                        
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="12">
                                            alojamientos
                                        </v-col>
                                        <v-col cols="6" v-for="alojamiento in paquete.alojamientos" :key="alojamiento.id">
                                            <p class="mb-0">{{ alojamiento.alojamiento }}: {{helpers().formatPrice(alojamiento.precio_final, alojamiento.currency) }}</p>
                                            
                                            <p>Tarifa: {{helpers().formatPrice(alojamiento.tarifa, alojamiento.currency) }}</p>
                                            <p>Impuestos: {{helpers().formatPrice(alojamiento.impuestos, alojamiento.currency) }}</p>
                                            <p>Final: {{helpers().formatPrice(alojamiento.precio_final, alojamiento.currency) }}</p>
                                            
                                        </v-col>
                                    </v-row>
                                </v-col> -->
                                <v-col cols="6">
                                    <div v-if="paquete.duracion && paquete.noches" class="d-flex align-items-center">
                                        <div style="min-width: 20px;" class="me-2 d-flex justify-content-center">
                                            <i class="fa fa-moon"></i>
                                        </div>
                                        {{ paquete.noches }} noches.
                                    </div>
                                    <div v-if="paquete.destinos" class="d-flex align-items-center">
                                        <div style="min-width: 20px;" class="me-2 d-flex justify-content-center">
                                            <i class="fa fa-plane"></i>
                                        </div>
                                        {{ paquete.destinos }}
                                    </div>
                                </v-col>
                                <v-col cols="6">
                                    <div class="d-flex align-items-center">
                                        <div style="min-width: 20px;" class="me-2 d-flex justify-content-center">
                                            <i class="fa fa-user"></i>
                                        </div>
                                        {{ paquete.adultos }} adulto/s{{ paquete.menores > 0 ? `, ${paquete.menores}
                                        menore/s`: '' }}{{ paquete.infantes > 0 ? `, ${paquete.infantes} infante/s` : ''
                                        }}
                                    </div>
                                    <div v-if="paquete.alojamiento" class="d-flex align-items-center">
                                        <div style="min-width: 20px;" class="me-2 d-flex justify-content-center">
                                            <i class="fa fa-hotel"></i>
                                        </div>
                                        <span> {{ paquete.alojamiento }}</span>
                                    </div>
                                    <div v-if="paquete.regimen_incluido" class="d-flex align-items-center">
                                        <div style="min-width: 20px;" class="me-2 d-flex justify-content-center">
                                            <i class="fa fa-utensils"></i>
                                        </div>

                                        <span>
                                            <span v-if="paquete.regimen_incluido == 'all_inclusive'">All
                                                inclusive</span>
                                            <span v-if="paquete.regimen_incluido == 'media_pension'">Media
                                                pensión</span>
                                            <span v-if="paquete.regimen_incluido == 'solo_alojamiento'">Sólo
                                                alojamiento</span>
                                        </span>
                                    </div>
                                </v-col>
                            </v-row>

                        </div>
                        <!-- <hr class="my-2">
                        <div>
                            <div>
                                <h4 class="">Precio final</h4>
                                <div class="d-flex justify-content-between">
                                    <span>Tarifa</span>
                                    <span>{{ helpers().formatPrice(paquete.tarifa, paquete.currency) }}</span>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <span>Impuestos</span>
                                    <span>{{ helpers().formatPrice(paquete.impuestos, paquete.currency) }}</span>
                                </div>
                                <div class="d-flex justify-content-end fs-xl">
                                    <span class="fw-bold">{{ helpers().formatPrice(paquete.precio_final,
                                        paquete.currency)
                                        }}</span>
                                </div>
                            </div>
                        </div> -->
                    </div>
                    <div class="mt-4"
                        v-if="paquete.fechas && paquete.fechas && paquete.alojamientos && paquete.alojamientos">
                        <button class="btn btn-white bg-white text-primary w-100 px-4 scale-hover-05"
                            @click="goToReserva">IR
                            A RESERVAR</button>
                    </div>
                </div>

                <div v-if="paquete.etiquetas && paquete.etiquetas.length" class="br-radius my-4 mt-4">
                    <h4>Etiquetas</h4>
                    <hr class="mt-0">
                    <div class="d-flex flex-wrap justify-content-center">
                        <a class="px-2 text-primary rounded" v-for="etiqueta, i in paquete.etiquetas" :key="i">
                            {{ etiqueta.nombre }}
                        </a>
                    </div>
                </div>
            </div>
        </v-col>

    </v-row>

    <!-- <div>paquete:{{ paquete }}</div>
    <div>paquete.codigo:{{ paquete.codigo }}</div>
    <div>!!paquete:{{ !!paquete }}</div>
    <div>!!paquete.codigo:{{ !!paquete.codigo }}</div>
    <div>paquete && paquete.codigo:{{ paquete && paquete.codigo }}</div> -->
    <Transition name="fade">
        <modal-container v-if="showModal" @closeModal="closeModal">
            <div class="img-box m-auto">
                <img v-if="selectedMedia.value.tipo == 'I'"
                    :src="helpers().getImagePath(selectedMedia.value.url, 'paquetes')" alt="">
                <video v-if="selectedMedia.value.tipo == 'V'" controls>
                    <source :src="helpers().getImagePath(selectedMedia.value.url, 'paquetes')" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        </modal-container>
    </Transition>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'
import { storeToRefs } from 'pinia'

import ModalContainer from '@/components/ModalContainer.vue'
import SearchEngine from '@/components/SearchEngine/SearchEngine.vue'

import { useHelpersStore as helpers } from '@/store/helpers'
import { usePaquetesStore as paquetes } from '@/store/paquetes'

import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
let { paquete } = storeToRefs(paquetes());

const selectedMedia = reactive({})

const showModal = ref(false)
const imgIndex = ref(0)


function nextImage() {
    // console.log(imgIndex.value,imgIndex.value+1 , paquete.value.imagenes.length);
    imgIndex.value = (imgIndex.value + 1) % paquete.value.imagenes.length
}
function prevImage() {
    // console.log(imgIndex.value,imgIndex.value+1 , paquete.value.imagenes.length);
    imgIndex.value = ((imgIndex.value + paquete.value.imagenes.length) - 1) % paquete.value.imagenes.length
}

paquetes().fetchPaquete(route.params.paquete)
function goToReserva() {
    router.push(paquete.value.codigo + '/reservar')
}
function selectMedia(media) {
    selectedMedia.value = media
    showModal.value = true
}
function closeModal() {
    if (showModal.value) {
        showModal.value = false
    }
}
function formatDate(value) {
    let val = value.split('-')
    return `${val[2]}/${val[1]}/${val[0]}`
}

const allMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
function meses(arr) {
    let meses = []
    arr.forEach(function (el) {
        let mes = el.split('-')
        mes = parseInt(el)
        if (!meses.includes(allMeses[(mes)])) {
            meses.push(allMeses[(mes)])
        }
    })
    return meses.join(', ')
}
function mes(number) {
    return allMeses[number]
}
</script>

<style lang="scss" scoped>
.bg-gradient-right .fa,
.bg-gradient-left .fa {
    transition: all 250ms;
    text-shadow: 0 0 20px #000;
}

.bg-gradient-right:hover,
.bg-gradient-left:hover {
    .fa {
        text-shadow: 0 0 10px #000;
        transform: scale(1.2);
    }
}

// .bg-gradient-right:hover:after{
//     opacity: 1;
// }

.img-box {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    img {
        object-fit: cover;
        min-width: 100%;
        min-height: 100%;
    }

    video {
        object-fit: cover;
        min-width: 100%;
        min-height: 100%;
    }
}

.img-portada-box {
    height: 100%;
}
</style>