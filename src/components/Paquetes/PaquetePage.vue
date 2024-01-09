<template>
    <div class="relative my-5">
        <div class="absolute m-2 p-2 top-0 left-0 text-white bg-secondary rounded-circle">
            <i v-if="paquete.transporte == 'aereos'" class="fa-solid fa-plane fa-2x"></i>
            <i v-if="paquete.transporte == 'barco'" class="fa-solid fa-ship fa-2x"></i>
            <i v-if="paquete.transporte == 'bus'" class="fa-solid fa-bus fa-2x"></i>
        </div>
        <div class="absolute m-2 fs-lg top-0 right-0 text-white fw-bold d-flex flex-column align-items-end gap-2">
            <span v-if="paquete.oferta" class="text-end bg-primary rounded-pill p-2 px-4">
                OFERTA
            </span>
            <span v-if="paquete.destacado" class="text-end  bg-primary rounded-pill p-2 px-4">
                DESTACADO
            </span>
            <span v-if="paquete.reserva_real" class="text-end   bg-primary rounded-pill p-2 px-4">
                RESERVA REAL
            </span>
        </div>
        <v-carousel class="rounded" v-model="carousel" hide-delimiter-background cycle height="400" show-arrows="hover"
            hide-delimiters>
            <template v-slot:prev="{ props }">
                <i class="fa-solid fa-chevron-left text-white fa-2x pointer scale-hover" @click="props.onClick"></i>
            </template>
            <template v-slot:next="{ props }">
                <i class="fa-solid fa-chevron-right text-white fa-2x pointer scale-hover" @click="props.onClick"></i>
            </template>
            <v-carousel-item v-for="imagen, i in paquete.imagenes" :src="helpers().getImagePath(imagen.url, 'paquetes')"
                cover></v-carousel-item>
        </v-carousel>
        <!-- <div class="row">
            <div class="col-12 col-md-4" v-for="video, i in paquete.videos" :key="i">
                <video style="width:100%">
                    <source :src="helpers().getImagePath(video.url, 'paquetes')" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        </div> -->
        <div class="d-flex justify-content-between align-items-center my-2">
            <h1 class="mb-0 ucfirst">{{ paquete.nombre }}</h1>
            <div v-if="paquete.estrellas != 0" class="d-flex gap-2">
                <i v-for="i in 5" :class="{ 'text-warning': i <= paquete.estrellas }" class="fa-solid fa-star fa-2x"
                    :key="i"></i>
            </div>
        </div>
        <hr>
        <p v-html="paquete.descripcion_breve"></p>

        <v-row class="align-items-end">
            <v-col>
                <div>
                    <span v-if="paquete.duracion && paquete.noches">Duracion: {{ paquete.duracion }} dias, {{ paquete.noches
                    }} noches</span>.
                    <span v-if="paquete.fecha_salida && formatDate(paquete.fecha_salida)">Fecha salida: {{
                        formatDate(paquete.fecha_salida) }}</span>
                </div>
                <div v-if="paquete.itinerario">Itinerario: {{ paquete.itinerario }}.</div>
                <div v-if="paquete.destinos">Destinos: {{ paquete.destinos }}.</div>
                <div v-if="paquete.alojamiento">Alojamiento: {{ paquete.alojamiento }}.</div>
                <div v-if="paquete.regimen_incluido">Regimen: {{ paquete.regimen_incluido }}.</div>
                <div>{{ paquete.adultos }} adulto/s, {{ paquete.menores }} menore/s, {{ paquete.infantes }} infante/s.</div>
                <div v-if="paquete.cupo">Cupo: {{ paquete.cupo }}</div>
            </v-col>
            <v-col>
                <div class="d-flex justify-content-between">
                    <span>Tarifa</span>
                    <span>AR$ {{ formatPrice(paquete.tarifa) }}</span>
                </div>
                <div class="d-flex justify-content-between">
                    <span>Impuestos</span>
                    <span>AR$ {{ formatPrice(paquete.impuestos) }}</span>
                </div>
                <div class="d-flex justify-content-between fs-xl">
                    <span class=" fw-bold">Precio final</span>
                    <span class=" fw-bold">AR$ {{ formatPrice(paquete.precio_final) }}</span>
                </div>
            </v-col>
        </v-row>
        <p class="my-4" v-html="paquete.descripcion"></p>
        <div class="my-4">
            <h3>Etiquetas</h3>
            <hr class="mt-0">
            <div class="d-flex flex-wrap justify-content-center gap-2">
                <div class="py-2 px-4 bg-primary text-white rounded" v-for="etiqueta, i in paquete.etiquetas" :key="i">
                    {{ etiqueta.nombre }}
                </div>
            </div>
        </div>
        <div class="my-4">
            <h3>Enlaces a recursos adicionales</h3>
            <hr class="mt-0">
            <div class="d-flex flex-wrap justify-content-center gap-2">
                <a :href="etiqueta.url" target="_blank" rel="noopener noreferrer" class="btn btn-outline-secondary"
                    v-for="etiqueta, i in paquete.links" :key="i">
                    <div class="py-1 px-2  text-black ucfirst">
                        {{ etiqueta.nombre }} <i class="fa-solid fa-arrow-up-right-from-square ps-3"></i>
                    </div>
                </a>
            </div>
        </div>

        <div class="my-3 p-4 rounded bg-primary" v-for="textoLibre, i in paquete.textos" :key="i">
            <h3 class="ucfirst">
                {{ textoLibre.nombre }}
            </h3>
            <hr class="m-0">
            <p class="mt-3 text-white" v-html="textoLibre.texto"></p>
        </div>

        <!-- <div v-if="paquete.incluye" class="my-3">
            <h3 class="ucfirst">incluye</h3>
            <hr class="m-0">
            <p class="mt-3" v-html="paquete.incluye"></p>
        </div>
        <div v-if="paquete.no_incluye" class="my-3">
            <h3 class="ucfirst">no incluye</h3>
            <hr class="m-0">
            <p class="mt-3" v-html="paquete.no_incluye"></p>
        </div>
        <div v-if="paquete.requisitos_especiales" class="my-3">
            <h3 class="ucfirst">requisitos especiales</h3>
            <hr class="m-0">
            <p class="mt-3" v-html="paquete.requisitos_especiales"></p>
        </div>
        <div v-if="paquete.nivel_de_dificultad" class="my-3">
            <h3 class="ucfirst">nivel de dificultad</h3>
            <hr class="m-0">
            <p class="mt-3" v-html="paquete.nivel_de_dificultad"></p>
        </div>
        <div v-if="paquete.notas_o_comentarios_adicionales" class="my-3">
            <h3 class="ucfirst">notas o comentarios adicionales</h3>
            <hr class="m-0">
            <p class="mt-3" v-html="paquete.notas_o_comentarios_adicionales"></p>
        </div>
        <div v-if="paquete.excursiones" class="my-3">
            <h3 class="ucfirst">excursiones</h3>
            <hr class="m-0">
            <p class="mt-3" v-html="paquete.excursiones"></p>
        </div>
        <div v-if="paquete.actividades" class="my-3">
            <h3 class="ucfirst">actividades</h3>
            <hr class="m-0">
            <p class="mt-3" v-html="paquete.actividades"></p>
        </div>
        <div v-if="paquete.traslados" class="my-3">
            <h3 class="ucfirst">traslados</h3>
            <hr class="m-0">
            <p class="mt-3" v-html="paquete.traslados"></p>
        </div>
        <div v-if="paquete.equipaje" class="my-3">
            <h3 class="ucfirst">equipaje</h3>
            <hr class="m-0">
            <p class="mt-3" v-html="paquete.equipaje"></p>
        </div>
        <div v-if="paquete.compañía" class="my-3">
            <h3 class="ucfirst">compañía</h3>
            <hr class="m-0">
            <p class="mt-3" v-html="paquete.compañía"></p>
        </div>
        <div v-if="paquete.políticas_de_reembolsos_y_cambios" class="my-3">
            <h3 class="ucfirst">políticas de reembolsos y cambios</h3>
            <hr class="m-0">
            <p class="mt-3" v-html="paquete.políticas_de_reembolsos_y_cambios"></p>
        </div>
        <div v-if="paquete.asistencia" class="my-3">
            <h3 class="ucfirst">asistencia</h3>
            <hr class="m-0">
            <p class="mt-3" v-html="paquete.asistencia"></p>
        </div>
        <div v-if="paquete.requisitos_de_visa_y_documentacion" class="my-3">
            <h3 class="ucfirst">requisitos de visa y documentacion</h3>
            <hr class="m-0">
            <p class="mt-3" v-html="paquete.requisitos_de_visa_y_documentacion"></p>
        </div>
        <div v-if="paquete.idioma" class="my-3">
            <h3 class="ucfirst">idioma</h3>
            <hr class="m-0">
            <p class="mt-3" v-html="paquete.idioma"></p>
        </div>
        <div v-if="paquete.propinas" class="my-3">
            <h3 class="ucfirst">propinas</h3>
            <hr class="m-0">
            <p class="mt-3" v-html="paquete.propinas"></p>
        </div>
        <div v-if="paquete.testimonios_y_reseñas" class="my-3">
            <h3 class="ucfirst">testimonios y reseñas</h3>
            <hr class="m-0">
            <p class="mt-3" v-html="paquete.testimonios_y_reseñas"></p>
        </div>
        <div v-if="paquete.terminos_y_condiciones" class="my-3">
            <h3 class="ucfirst">terminos y condiciones</h3>
            <hr class="m-0">
            <p class="mt-3" v-html="paquete.terminos_y_condiciones"></p>
        </div> -->
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useHelpersStore as helpers } from '@/stores/helpers'
import { usePaquetesStore as paquetes } from '@/stores/paquetes'
import { useRoute } from 'vue-router'
const route = useRoute()
paquetes().fetchPaquete(route.params.paquete)
let { paquete } = storeToRefs(paquetes());
const carousel = ref(1)

function formatPrice(value) {
    let val = (value / 1).toFixed(2).replace('.', ',')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}
function formatDate(value) {
    let val = value.split('-')
    return `${val[2]}/${val[1]}/${val[0]}`
}

</script>

<style lang="scss" scoped></style>