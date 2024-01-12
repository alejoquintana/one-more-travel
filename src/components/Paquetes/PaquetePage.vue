<template>
    <button class="btn btn-primary btn-link mt-4" @click="goBack()">Volver atras</button>
    <div class="relative my-3">
        <div class="absolute m-3 p-2 top-0 left-0 text-white bg-secondary rounded-circle" style="z-index:99">
            <i v-if="paquete.transporte == 'aereos'" class="fa-solid fa-plane fa-2x"></i>
            <i v-if="paquete.transporte == 'barco'" class="fa-solid fa-ship fa-2x"></i>
            <i v-if="paquete.transporte == 'bus'" class="fa-solid fa-bus fa-2x"></i>
        </div>
        <div class="absolute m-3 fs-lg top-0 right-0 text-white fw-bold d-flex flex-column align-items-end gap-2"
            style="z-index:99">
            <span v-if="paquete.oferta != 0" class="text-end bg-primary rounded-pill p-2 px-4">
                OFERTA
            </span>
            <span v-if="paquete.destacado != 0" class="text-end  bg-primary rounded-pill p-2 px-4">
                DESTACADO
            </span>
            <span v-if="paquete.reserva_real != 0" class="text-end   bg-primary rounded-pill p-2 px-4">
                RESERVA REAL
            </span>
        </div>
        <v-carousel class="br-radius" v-if="paquete.imagenes && paquete.imagenes.length" v-model="carousel" hide-delimiter-background cycle height="400" :show-arrows="false" hide-delimiters>
            <!-- <template v-slot:prev="{ props }">
                <i class="fa-solid fa-chevron-left text-white fa-2x pointer scale-hover" @click="props.onClick"></i>
            </template>
            <template v-slot:next="{ props }">
                <i class="fa-solid fa-chevron-right text-white fa-2x pointer scale-hover" @click="props.onClick"></i>
            </template> -->
            <v-carousel-item v-for="imagen, i in paquete.imagenes" :src="helpers().getImagePath(imagen.url, 'paquetes')"
                cover></v-carousel-item>
        </v-carousel>
        <div class="row g-0 my-4">
            <div class="col-12 col-md-8 p-4">
                <h1 class="ucfirst">{{ paquete.nombre }}</h1>
                <div v-if="paquete.destinos">{{ paquete.destinos }}</div>
                <div v-if="paquete.estrellas != 0" class="d-flex gap-2 mt-2">
                    <i v-for="i in 5" :class="{ 'text-warning': i <= paquete.estrellas }" class="fa-solid fa-star fa-1x"
                        :key="i"></i>
                </div>
                <p v-if="paquete.descripcion_breve" class="my-4" v-html="paquete.descripcion_breve"></p>
            </div>
            <!-- <v-divider vertical></v-divider> -->
            <div class="col-12 col-md-4 p-4">
                <div class="p-4 bg-primary bs-white br-radius info-default">
                    <div class="fs-lg" v-if="paquete.fecha_salida && formatDate(paquete.fecha_salida)">Fecha de salida:
                        {{ formatDate(paquete.fecha_salida) }}.</div>
                    <div class="fs-xl fw-bold" v-if="paquete.duracion && paquete.noches">{{ paquete.duracion }} dias, {{ paquete.noches }}
                        noches.</div>
                    <div class="fw-bold">{{ paquete.adultos }} adulto/s
                        <span class="fw-bold" v-if="paquete.menores > 0">, {{ paquete.menores }} menore/s</span>
                        <span class="fw-bold" v-if="paquete.infantes > 0">, {{ paquete.infantes }} infante/s.</span>
                    </div>
                    <div>
                        <span v-if="paquete.alojamiento"> {{ paquete.alojamiento }}</span>
                        <span v-if="paquete.regimen_incluido">,
                            <span v-if="paquete.regimen_incluido == 'all_inclusive'">All inclusive</span>
                            <span v-if="paquete.regimen_incluido == 'media_pension'">Media pensión</span>
                            <span v-if="paquete.regimen_incluido == 'solo_alojamiento'">Sólo alojamiento</span>
                        </span>
                    </div>
                    <div v-if="paquete.itinerario">Itinerario: {{ paquete.itinerario }}</div>
                </div>
            </div>
        </div>


        <v-row no-gutters class="my-4 p-4 align-items-center justify-content-center bg-primary br-white br-radius">
            <v-col v-if="paquete.descripcion" cols="12" lg="8" class="px-4">
                <div class="p-3 text-white" v-html="paquete.descripcion"></div>
            </v-col>
            <v-divider v-if="paquete.descripcion" vertical></v-divider>
            <v-col cols="12" :lg="paquete.descripcion ? '4' : '8'" class="px-4">
                <div class="d-flex justify-content-between">
                    <span>Tarifa</span>
                    <span>{{ helpers().formatPrice(paquete.tarifa, 'AR') }}</span>
                </div>
                <div class="d-flex justify-content-between">
                    <span>Impuestos</span>
                    <span>{{ helpers().formatPrice(paquete.impuestos, 'AR') }}</span>
                </div>
                <div class="d-flex justify-content-between fs-xl">
                    <span class="fw-bold">Precio final</span>
                    <span class="fw-bold">{{ helpers().formatPrice(paquete.precio_final, 'AR') }}</span>
                </div>
            </v-col>
        </v-row>
        <div v-if="paquete.videos && paquete.videos.length" class="row g-0">
            <div class="col-12 col-md-12 br-radius overflow-hidden" v-for="video, i in paquete.videos" :key="i">
                <video style="width:100%" controls>
                    <source :src="helpers().getImagePath(video.url, 'paquetes')" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
        
        
        <div class="row">
           <div class="col-md-4">
               <div v-if="paquete.links && paquete.links.length" class="my-4 p-4">
                   <h3>Enlaces a recursos adicionales</h3>
                   <hr class="mt-0">
                   <div class="justify-content-center gap-2">
                       <a :href="enlace.url" target="_blank" rel="noopener noreferrer" class="btn w-100 btn-block btn-outline-primary"
                           v-for="enlace, i in paquete.links" :key="i">
                           <div class="py-1 px-2  text-black ucfirst">
                               {{ enlace.nombre }} <i class="fa-solid fa-arrow-up-right-from-square ps-3"></i>
                           </div>
                       </a>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
               <div v-if="paquete.etiquetas && paquete.etiquetas.length" class="my-4 p-4 br-radius border border-2 border-primary">
                   <h3>Etiquetas</h3>
                   <hr class="mt-0">
                   <div class="d-flex flex-wrap justify-content-center gap-2">
                       <div class="py-2 px-4 bg-primary text-white rounded" v-for="etiqueta, i in paquete.etiquetas" :key="i">
                           {{ etiqueta.nombre }}
                       </div>
                   </div>
               </div>
           </div>
        </div>

        <div class="my-3 p-4 bg-primary br-radius" v-for="textoLibre, i in paquete.textos" :key="i">
            <h3 class="ucfirst">
                {{ textoLibre.nombre }}
            </h3>
            <hr class="m-0">
            <p class="mt-3 text-white" v-html="textoLibre.texto"></p>
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useHelpersStore as helpers } from '@/stores/helpers'
import { usePaquetesStore as paquetes } from '@/stores/paquetes'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
paquetes().fetchPaquete(route.params.paquete)
let { paquete } = storeToRefs(paquetes());
const carousel = ref(paquete.imagenes && paquete.imagenes.length == 1 ? 0 : 1)

function goBack(value) {
    router.go(-1)
}
function formatPrice(value) {
    let val = (value / 1).toFixed(2).replace('.', ',')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}
function formatDate(value) {
    let val = value.split('-')
    return `${val[2]}/${val[1]}/${val[0]}`
}

</script>

<style lang="scss" scoped>
.info-default {}
</style>