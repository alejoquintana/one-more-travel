<template>
    <div class="d-flex flex-column align-items-center relative py-2 px-3 my-4">
        <div class="d-flex w-100 px-5">
            <div class="filter-tab fw-bold fs-3 bg-primary br-radius px-4" @click="showFilters = !showFilters">
                Filtros <i class="fa-solid fa-filter fa-xs ms-2"></i>
            </div>
        </div>
        <div class="w-br-radius">
            <div class="filter-tab bg-primary br-radius px-4 mb-3" style="min-height: 2px">
            </div>
        </div>
        <Transition name="fadeHeight">
            <FiltersForm  v-if="showFilters"></FiltersForm>
        </Transition>
    </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
const showFilters = ref(false)
import FiltersForm from '@/components/Paquetes/FiltersForm.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
import { usePaquetesStore as paquetes } from '@/stores/paquetes'
import SliderRange from './SliderRange.vue'
let formDef = {
    search: route.query.search ? route.query.search : '',
    adultos: route.query.adultos ? route.query.adultos : 1,
    menores: route.query.menores ? route.query.menores : 0,
    infantes: route.query.infantes ? route.query.infantes : 0,
    precio_min: route.query.precio_min ? route.query.precio_min : 0,
    precio_max: route.query.precio_max ? route.query.precio_max : 0,
    transporte: route.query.transporte ? route.query.transporte : 'aereos',
    regimen_incluido: route.query.regimen_incluido ? route.query.regimen_incluido : 'all_inclusive',
    estrellas: route.query.estrellas ? route.query.estrellas : 0,
    dias: route.query.dias ? route.query.dias : 0,
    fecha_salida: route.query.fecha_salida ? route.query.fecha_salida : '',
}

const date = ref();


function sliderChange(e) {
    console.log("e", e);
    form.precio_min = e[0];
    form.precio_max = e[1];
}
function filtrar(limpiar = false) {
    if (limpiar) {
        location.href = "/paquetes"
    }
    // let query = route.query
    let params = {}
    for (const key of Object.keys(formDef)) {
        console.log(key, form[key], formDef[key]);
        if (form[key] != formDef[key]) {
            params[key] = form[key]
        }
        let serialized = new URLSearchParams(params).toString();
        location.href = "/paquetes?" + serialized
    }
    console.log("params", params);
}
function filter(field = '') {
    console.log(field, form[field]);
    // let query = route.query
    // if (field) {
    //     query[field] = form[field]
    //     let params = new URLSearchParams(query).toString();
    //     location.href = "/paquetes?" + params
    // } else {
    //     location.href = "/paquetes"
    // }
}
const form = reactive({ ...formDef })
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
// For demo purposes assign range from the current date
onMounted(() => {
    const startDate = new Date();
    const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
    date.value = [startDate, endDate];
})

const format = ([start, end]) => {
    const sday = start.getDate();
    const smonth = start.getMonth() + 1;
    const syear = start.getFullYear();

    const eday = end ? end.getDate() : '-';
    const emonth = end ? end.getMonth() + 1 : '-';
    const eyear = end ? end.getFullYear() : '-';

    return `${sday}/${smonth}/${syear} - ${eday}/${emonth}/${eyear}`;
}
const dateClicked = ([date, end]) => {
    let Difference_In_Time = end.getTime() - date.getTime();
    let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));
    form.dias = Difference_In_Days
    form.fecha_salida = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate()}`
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