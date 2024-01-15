<template>
    <div class="d-flex flex-column gap-3 bg-primary py-2 px-3 mt-4 br-radius mb-4">

        <div class="d-flex justify-content-between align-items-center" @click="showFilters = !showFilters">
            <span class="fw-bold fs-2">
                Filtros
            </span>
            <i class="ms-3 fs-2 fa " :class="showFilters ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
        </div>
        <Transition name="height">
            <div v-if="showFilters" class="row align-items-end g-4 mb-3 mx-1">
                <!-- //! BUSCAR -->
                <div class="col-md-4 col-12">
                    Buscador
                    <input class="form-control-1" type="text" placeholder="Buscar..." v-model="form.search"
                        @change="filter('search')" id="search" name="search">
                </div>

                <!-- //! FECHA -->
                <div class="col-md-3 col-12">
                    Fecha
                    <VueDatePicker v-model="date" range :format="format" @update:model-value="dateClicked">
                        <template #calendar-header="{ index, day }">
                            <div v-if="index === 0">Lu</div>
                            <div v-if="index === 1">Ma</div>
                            <div v-if="index === 2">Mi</div>
                            <div v-if="index === 3">Ju</div>
                            <div v-if="index === 4">Vi</div>
                            <div v-if="index === 5">Sa</div>
                            <div v-if="index === 6">Do</div>
                        </template>
                    </VueDatePicker>
                </div>


                <!-- //! PAXS -->
                <div class="col-md-5 col-12">
                    <div class="row">
                        <!-- <div class="col-md-3 col-12">
                            Dias
                            <input class="form-control-2" type="number" name="dias" id="dias" v-model="form.dias"
                                @change="filter('dias')">
                        </div> -->
                        <div class="col-4">
                            Adultos <input class="form-control-2" type="number" name="adultos" id="adultos" placeholder="2"
                                v-model="form.adultos" @change="filter('adultos')">
                        </div>
                        <div class="col-4">
                            Menores <input class="form-control-2" type="number" name="menores" id="menores" placeholder="0"
                                v-model="form.menores" @change="filter('menores')">
                        </div>
                        <div class="col-4">
                            Infantes <input class="form-control-2" type="number" name="infantes" id="infantes"
                                placeholder="0" v-model="form.infantes" @change="filter('infantes')">
                        </div>
                    </div>
                </div>



                <!-- //! PRECIO -->
                <div class="col-12 col-md-5" style="place-self:baseline">
                    <div class="mt-1 mb-3">Precio</div>
                    <div class="ms-1">
                        <slider-range :precio_min="paquetes().filters.precio_min"
                            :precio_max="paquetes().filters.precio_max" @hasChanged="sliderChange"></slider-range>
                    </div>
                    <!-- <div class="row">
                        <div class="col-6">
                            Precio minimo
                            <div class="d-flex justify-content-between">
                                <span>{{ helpers().formatPrice(paquetes().filters.precio_min) }}</span>
                                <span>{{ helpers().formatPrice(paquetes().filters.precio_max) }}</span>
                            </div>
                            <input name="precio_min" id="precio_min" v-model="form.precio_min" class="form-range"
                            type="range" :min="paquetes().filters.precio_min" :max="paquetes().filters.precio_max"
                                @change="filter('precio_min')" />
                        </div>
                        <div class="col-6">
                            Precio maximo
                            <div class="d-flex justify-content-between">
                                <span>{{ helpers().formatPrice(paquetes().filters.precio_min) }}</span>
                                <span>{{ helpers().formatPrice(paquetes().filters.precio_max) }}</span>
                            </div>
                            <input name="precio_max" id="precio_max" v-model="form.precio_max" class="form-range"
                                type="range" :min="paquetes().filters.precio_min" :max="paquetes().filters.precio_max"
                                @change="filter('precio_max')" />
                        </div>
                    </div> -->
                </div>
                <!-- //! ESTRELLAS -->
                <div class="col-md-2 col-12">
                    Estrellas
                    <div class="input-group">
                        <div class="rating">
                            <input v-model="form.estrellas" class="form-control" type="radio" id="estrella5"
                                name="estrellas" value="5" @change="filter('estrellas')" />
                            <label class="estrella" for="estrella5" title="Awesome" aria-hidden="true"></label>
                            <input v-model="form.estrellas" class="form-control" type="radio" id="estrella4"
                                name="estrellas" value="4" @change="filter('estrellas')" />
                            <label class="estrella" for="estrella4" title="Great" aria-hidden="true"></label>
                            <input v-model="form.estrellas" class="form-control" type="radio" id="estrella3"
                                name="estrellas" value="3" @change="filter('estrellas')" />
                            <label class="estrella" for="estrella3" title="Very good" aria-hidden="true"></label>
                            <input v-model="form.estrellas" class="form-control" type="radio" id="estrella2"
                                name="estrellas" value="2" @change="filter('estrellas')" />
                            <label class="estrella" for="estrella2" title="Good" aria-hidden="true"></label>
                            <input v-model="form.estrellas" class="form-control" type="radio" id="estrella1"
                                name="estrellas" value="1" @change="filter('estrellas')" />
                            <label class="estrella" for="estrella1" title="Bad" aria-hidden="true"></label>
                        </div>
                    </div>
                </div>

                <!-- //! TRANSPORTE y REGIMEN -->
                <div class="col-12 col-md-5">
                    <div class="row">
                        <div class="col-md-6 col-12">
                            Transporte
                            <select placeholder="" class="form-select form-select-3" name="transporte" id="transporte"
                                v-model="form.transporte" @change="filter('transporte')">
                                <option value="aereos">Aereos</option>
                                <option value="bus">Bus</option>
                                <option value="barco">Barco</option>
                            </select>
                        </div>

                        <div class="col-md-6 col-12">
                            Regimen incluido
                            <select placeholder="" class="form-select form-select-3" name="regimen_incluido"
                                id="regimen_incluido" v-model="form.regimen_incluido" @change="filter('regimen_incluido')">
                                <option value="all_inclusive">All inclusive</option>
                                <option value="media_pension">Media pensión</option>
                                <option value="solo_alojamiento">Sólo alojamiento</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="d-flex justify-content-end">
                    <button class="me-4 btn btn-outline-secondary btn-block" @click="resetForm()">Limpiar filtros</button>
                    <button class="btn btn-secondary text-primary px-4 bs-white-sm" @click="filtrar()">
                        FILTRAR
                    </button>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
const showFilters = ref(false)
import { useRoute } from 'vue-router'
const route = useRoute()
import { usePaquetesStore as paquetes } from '@/stores/paquetes'
import SliderRange from './SliderRange.vue'
let formDef = {
    search: route.query.search ? route.query.search : '',
    adultos: route.query.adultos ? route.query.adultos : 2,
    menores: route.query.menores ? route.query.menores : 0,
    infantes: route.query.infantes ? route.query.infantes : 0,
    precio_min: route.query.precio_min ? route.query.precio_min : 0,
    precio_max: route.query.precio_max ? route.query.precio_max : 0,
    regimen_incluido: route.query.regimen_incluido ? route.query.regimen_incluido : '',
    transporte: route.query.transporte ? route.query.transporte : '',
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