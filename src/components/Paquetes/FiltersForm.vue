<template>
    <div class="formPaquetesFilters"></div>
    <v-row class="pt-4 skeletonPaquetesFilters" style="gap:10px 0">
        <v-col class="p-2" cols="4">
            <div class="skeleton"></div>
        </v-col>
        <v-col class="p-2" cols="3">
            <div class="skeleton"></div>
        </v-col>
        <v-col class="p-2" cols="5">
            <v-row>
                <v-col class="px-2" cols="4">
                    <div class="skeleton"></div>
                </v-col>
                <v-col class="px-2" cols="4">
                    <div class="skeleton"></div>
                </v-col>
                <v-col class="px-2" cols="4">
                    <div class="skeleton"></div>
                </v-col>
            </v-row>
        </v-col>
        <v-col class="p-2" cols="4">
            <v-row>
                <v-col class="px-2" cols="6">
                    <div class="skeleton"></div>
                </v-col>
                <v-col class="px-2" cols="6">
                    <div class="skeleton"></div>
                </v-col>
            </v-row>
        </v-col>
        <v-col class="p-2" cols="5">
            <div class="skeleton"></div>
        </v-col>
        <v-col class="p-2" cols="3">
            <v-row>
                <v-col class="px-2" cols="6">
                    <div class="skeleton"></div>
                </v-col>
                <v-col class="px-2" cols="6">
                    <div class="skeleton"></div>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue';
import '@vuepic/vue-datepicker/dist/main.css'
import VueDatePicker from '@vuepic/vue-datepicker';
import SliderRange from './SliderRange.vue'

import { useRoute } from 'vue-router'
const route = useRoute()

import { usePaquetesStore as paquetes } from '@/store/paquetes'
import { useImportScriptsStore as importScripts } from '@/store/importScripts'

let formDef = {
    search: route.query.search ? route.query.search : '',
    adultos: route.query.adultos ? route.query.adultos : 2,
    menores: route.query.menores ? route.query.menores : 0,
    infantes: route.query.infantes ? route.query.infantes : 0,
    precio_min: route.query.precio_min ? route.query.precio_min : 0,
    precio_max: route.query.precio_max ? route.query.precio_max : 0,
    transporte: route.query.transporte ? route.query.transporte : 'aereos',
    regimen_incluido: route.query.regimen_incluido ? route.query.regimen_incluido : 'all_inclusive',
    estrellas: route.query.estrellas ? route.query.estrellas : 0,
    dias: route.query.dias ? route.query.dias : 0,
    fecha_salida: route.query.fecha_salida ? route.query.fecha_salida : '',
    fecha_rango: '',
}

const date = ref();

function sliderChange(e) {
    form.precio_min = e[0];
    form.precio_max = e[1];
}

function filtrar(limpiar = false) {
    if (limpiar) location.href = "/paquetes"
    let fecha_rango = form.fecha_rango || formatDate(getDate(3), '-') + '_' + formatDate(getDate(10), '-')
    let paxs = form.adultos + '-' + form.menores + '-' + form.infantes
    let precio_range = form.precio_min + '-' + form.precio_max
    let hrefRoute = `/paquetes/${fecha_rango}/${paxs}/${precio_range}/${form.transporte}/${form.regimen_incluido}/${form.estrellas}?searchTerm=${form.search}`;
    // location.href = hrefRoute
    console.log("params", hrefRoute);
}

function filter(field = '') {
    console.log(field, form[field]);
}

const form = reactive({ ...formDef })

onMounted(() => {
    importScripts().fetchPaquetesfilter()
    const startDate = getDate(3);
    const endDate = getDate(10);
    date.value = [startDate, endDate];
})

function resetForm() {
    form.search = '';
    form.adultos = 2;
    form.menores = 0;
    form.infantes = 0;
    form.precio_min = 0;
    form.precio_max = 0;
    form.regimen_incluido = '';
    form.transporte = '';
    form.estrellas = 0;
    form.dias = 0;
    form.fecha_salida = '';
    filtrar(true)
}

function getDate(days) {
    const today = new Date();
    return new Date(today.setDate(today.getDate() + days));
}

const formatForDatePicker = ([start, end]) => {
    return formatDate(start, '/') + ' - ' + formatDate(end, '/');
}

const formatDate = (date, symbol) => {
    return `${date.getDate()}${symbol}${date.getMonth() + 1}${symbol}${date.getFullYear()}`;
}

const dateClicked = ([date, end]) => {
    let Difference_In_Time = end.getTime() - date.getTime();
    let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));
    form.dias = Difference_In_Days
    form.fecha_salida = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate()}`
    let routeStart = `${date.getDate()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear()}`
    let routeEnd = `${end.getDate()}-${(end.getMonth() + 1).toString().padStart(2, '0')}-${end.getFullYear()}`
    form.fecha_rango = routeStart + '_' + routeEnd
}
</script>

<style lang="scss" scoped>
.filter-window {
    width: 100%;
    height: 1px;
    border-bottom: 2px $primary solid
}

.filter-tab {
    border-radius: $radius $radius 0 0;
}

.form-control-1 {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: white;
    appearance: none;
    background-color: transparent;
    //background-clip: padding-box;
    border: solid 2px white;
    border-radius: var(--bs-border-radius);
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-control-2 {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: white;
    appearance: none;
    background-color: transparent;
    //background-clip: padding-box;
    border: dotted 2px $secondary;
    border-radius: var(--bs-border-radius);
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-select-3 {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: white;
    appearance: none;
    background-color: $primary;
    //background-clip: padding-box;
    border: solid 2px $secondary;
    border-radius: var(--bs-border-radius);
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-select-3:after {
    color: #F79426;
}

.form-control-1::placeholder,
.form-control-2::placeholder {
    color: white;
    opacity: 0.5;
}

.form-range::-webkit-slider-runnable-track {
    height: 2px;
    background: white;
    border-radius: 3px;
}

.form-range::-webkit-slider-thumb {
    -webkit-appearance: none;
    margin-top: -8px;
}


.rating {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;
    width: 100%;
    border: none;
    float: left;
    align-items: flex-end;
    height: 35px;
}

.rating>label {
    margin-bottom: 0;
    color: #90A0A3;
    float: right;
}

.rating>label:before {
    font-size: 2em;
    content: "\2605";
    display: inline-block;
}

.rating>input {
    display: none;
}

.rating>input:checked~label,
.rating:not(:checked)>label:hover,
.rating:not(:checked)>label:hover~label {
    color: #F79426;
}

.rating>input:checked+label:hover,
.rating>input:checked~label:hover,
.rating>label:hover~input:checked~label,
.rating>input:checked~label:hover~label {
    color: #FECE31;
}

.rating {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;
    width: 100%;
    border: none;
    float: left;
    align-items: flex-end;
    height: 35px;
}

.rating>label {
    margin-bottom: 0;
    color: #90A0A3;
    float: right;
}

.rating>label:before {
    font-size: 2em;
    content: "\2605";
    display: inline-block;
}

.rating>input {
    display: none;
}

.rating>input:checked~label,
.rating:not(:checked)>label:hover,
.rating:not(:checked)>label:hover~label {
    color: #F79426;
}

.rating>input:checked+label:hover,
.rating>input:checked~label:hover,
.rating>label:hover~input:checked~label,
.rating>input:checked~label:hover~label {
    color: #FECE31;
}

.dp__theme_light {
    --dp-background-color: $primary;
    --dp-text-color: white;
    --dp-hover-color: white;
    --dp-hover-text-color: #212121;
    --dp-hover-icon-color: white;
    --dp-primary-color: $primary;
    --dp-primary-disabled-color: #6bacea;
    --dp-primary-text-color: #f8f5f5;
    --dp-secondary-color: white;
    --dp-border-color: white;
    --dp-menu-border-color: #ddd;
    --dp-border-color-hover: $secondary;
    --dp-disabled-color: #f6f6f6;
    --dp-scroll-bar-background: #f3f3f3;
    --dp-scroll-bar-color: #959595;
    --dp-success-color: #76d275;
    --dp-success-color-disabled: #a3d9b1;
    --dp-icon-color: $secondary;
    --dp-danger-color: #ff6f60;
    --dp-marker-color: #ff6f60;
    --dp-tooltip-color: #fafafa;
    --dp-disabled-color-text: #8e8e8e;
    --dp-highlight-color: rgb(25 118 210 / 10%);
    --dp-range-between-dates-background-color: var(--dp-hover-color, #f3f3f3);
    --dp-range-between-dates-text-color: var(--dp-hover-text-color, #212121);
    --dp-range-between-border-color: var(--dp-hover-color, #f3f3f3);
}
</style>