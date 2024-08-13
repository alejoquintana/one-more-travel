<script setup>
import { ref, reactive, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import ModalContainer from '@/components/ModalContainer.vue'
import SkeletonReserva from './SkeletonReserva.vue'
import { useHelpersStore as helpers } from '@/store/helpers'
import { usePaquetesStore as paquetes } from '@/store/paquetes'
import { useImportScriptsStore as importScripts } from '@/store/importScripts'
import { useRoute } from 'vue-router'
const route = useRoute()
let { paquete, paises } = storeToRefs(paquetes());

const selectedMedia = reactive({})

const showModal = ref(false)
const form = ref({
    name: "",
    surname: "",
    nationality: "Argentina",
    doc_type: "dni",
    doc_num: "",
    sex: "0",
    birthdate: "",
    email: "",
})

paquetes().fetchPaises()
paquetes().fetchPaquete(route.params.paquete)

function formatDate(value) {
    let val = value.split('-')
    return `${val[2]}/${val[1]}/${val[0]}`
}

const allMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
function meses(arr) {
    let meses = []
    arr.forEach(function (el) {
        let mes = parseInt(el.fecha)
        if (!meses.includes(allMeses[(mes)])) {
            meses.push(allMeses[(mes)])
        }
    })
    return meses.join(', ')
}

onMounted(function () {
    console.log("paquete.value", route.params.paquete);
    importScripts().fetchReserva({
        paquete: route.params.paquete
    })
})
</script>

<template>
    <div class="row mt-4" v-if="paquete && paquete.codigo">
        <div class="col-12 col-md-8 mt-4">
            <div class="">
                <div class="formReserva" data-tipoMotor="aereos"></div>
                <SkeletonReserva></SkeletonReserva>
            </div>
        </div>
        <div class="col-12 col-md-4 mt-4">
            <div class="p-4 bg-primary bs-white br-radius info-default d-flex flex-column justify-content-between"
                style="position: sticky;top: 100px;">
                <div v-if="paquete.estrellas && paquete.estrellas != 0" class="d-flex gap-2">
                    <i v-for="i in parseInt(paquete.estrellas)" class="fa-solid fa-star " :key="i"></i>
                </div>
                <h2 class="ucfirst mt-2 mb-0">{{ paquete.nombre }}</h2>
                <hr class="my-2">
                <div class="list-icons">
                    <div class="item-icons" v-if="paquete.fechas && paquete.fechas.length">
                        <div class="i-icon">
                            <i class="fa fa-calendar"></i>
                        </div>
                        <div class="i-info">
                            {{ meses(paquete.fechas) }}.
                        </div>
                    </div>
                    <div class="item-icons" v-if="paquete.duracion && paquete.noches">
                        <div class="i-icon">
                            <i class="fa fa-moon"></i>
                        </div>
                        <div class="i-info">
                            {{ paquete.noches }} noches.
                        </div>
                    </div>
                    <div class="item-icons" v-if="paquete.destinos">
                        <div class="i-icon">
                            <i class="fa fa-plane"></i>
                        </div>
                        <div class="i-info">
                            {{ paquete.destinos }}.
                        </div>
                    </div>

                    <div class="item-icons" v-if="paquete.destinos">
                        <div class="i-icon">
                            <i class="fa fa-users"></i>
                        </div>
                        <div class="i-info">
                            {{ paquete.minimo }} pasajeros
                            <!-- {{ paquete.adultos }} adulto/s -->
                            <!-- <span v-if="paquete.menores > 0">, {{ paquete.menores }} menore/s</span>
                            <span v-if="paquete.infantes > 0">, {{ paquete.infantes }} infante/s</span>. -->
                        </div>
                    </div>

                    <!-- <div class="item-icons" v-if="paquete.alojamiento">
                        <div class="i-icon">
                            <i class="fa fa-hotel"></i>
                        </div>
                        <div class="i-info">
                            {{ paquete.alojamiento }}.
                        </div>
                    </div> -->
                    <div class="item-icons" v-if="paquete.regimen_incluido">
                        <div class="i-icon">
                            <i class="fa fa-utensils"></i>
                        </div>
                        <div class="i-info">
                            <span v-if="paquete.regimen_incluido == 'all_inclusive'">All inclusive</span>
                            <span v-if="paquete.regimen_incluido == 'media_pension'">Media pensión</span>
                            <span v-if="paquete.regimen_incluido == 'solo_alojamiento'">Sólo alojamiento</span>
                        </div>
                    </div>
                </div>
                <hr class="my-3">
                <div class="x-4">
                    <h4 class="">Precio final</h4>
                    <div class="d-flex justify-content-between d-none" id="fecha_front">
                        <span id="fecha_title"></span>
                        <span id="fecha_price"></span>
                    </div>
                    <div class="d-flex justify-content-between d-none" id="alojamiento_base_front">
                        <span id="alojamiento_base_title"></span>
                        <span id="alojamiento_base_price"></span>
                    </div>
                    <div class="d-flex justify-content-between d-none" id="alojamiento_front">
                        <span class="fw-bold fs-lg" id="alojamiento_title"></span>
                        <span class="fw-bold fs-lg" id="alojamiento_price"></span>
                    </div>
                    <hr>
                    <div class="d-flex justify-content-end">
                        <span class="fw-bold fs-xl" id="total_front" data-price="0" data-currency=""></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.list-icons {
    .item-icons {
        display:flex;
        align-items:center;
        .i-icon {
            min-width: 20px;
            margin-right: 0.5rem;
            display:flex;
            justify-content:center;
        }
        .i-info {

        }
    }
}

.form-section {
    overflow: hidden;
    margin: 20px 0;

    .form-section-header {
        display: flex;
        color: $primary;
        padding-left: 40px;
        padding-bottom: 0px;

        .header-text {
            font-weight: bold;
            background: $primary;
            color: #FFF;
            padding: 10px 20px;
            font-size: 20px;
            border-radius: $radius $radius 0 0;
        }
    }

    .form-section-content {
        border-radius: $radius;
        color: #FFF;
        background: $bg-primary-gradient;
        padding: 20px;

        .row>div {
            margin-top: 15px;
        }

        .form-text {
            color: #FFF;
            font-style: italic;
            @extend .ffs-1;
        }

    }
}

.form-label {
    margin-bottom: 2px;
}

.form-control::placeholder {
    color: rgba($secondary, 0.8);
}

.form-control,
.form-select {
    background: transparent;
    border-width: 2px;
    border-style: dotted;
    color: #FFF;
    @extend .br-sm-radius;
}

//.form-control.type-1,.form-select.type-1{
.form-control {
    border-style: dotted;
    border-color: #FFF;
}

//.form-control.type-2,.form-select.type-2{
.form-select {
    border-style: solid;
    border-color: $secondary;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: transparent;
    background-image: url("data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    background-repeat: no-repeat;
    background-position-x: 100%;
    background-position-y: 5px;
}

option {
    background: $primary;
}
</style>