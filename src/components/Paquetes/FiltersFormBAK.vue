<template>
    <div class="d-flex flex-column gap-3 bg-primary p-4 h-100">
        <div class="d-flex justify-content-between align-items-center" v-if="showFilters">
            <span class="fw-bold fs-lg">
                Filtros
            </span>
            <button @click="$emit('toggleShowFilters')" class="btn btn-primary text-white">
                <i class="fa-solid fa-xmark fa-xl"></i>
            </button>
        </div>
        <div class="">
            <input class="form-control" type="text" placeholder="Buscar..." v-model="form.search"
                @change="filter('search')" id="search" name="search">
        </div>
        <div class=" d-flex align-items-center">
            <input class="form-control" type="date" name="fecha_salida" id="fecha_salida" v-model="form.fecha_salida"
                @change="filter('fecha_salida')">
        </div>
        <div class="d-flex align-items-center">
            <input class="form-control me-2" type="number" name="dias" id="dias" v-model="form.dias"
                @change="filter('dias')"> Dias
        </div>

        <div class="d-flex flex-column gap-3">
            <div class=" d-flex align-items-center">
                Adultos <input class="ms-2 form-control" type="number" name="adultos" id="adultos" placeholder="2"
                    v-model="form.adultos" @change="filter('adultos')">
            </div>
            <div class=" d-flex align-items-center">
                Menores <input class="ms-2 form-control" type="number" name="menores" id="menores" placeholder="0"
                    v-model="form.menores" @change="filter('menores')">
            </div>
            <div class=" d-flex align-items-center">
                Infantes <input class="ms-2 form-control" type="number" name="infantes" id="infantes" placeholder="0"
                    v-model="form.infantes" @change="filter('infantes')">
            </div>
        </div>

        <div class="">
            Estrellas
            <div class="input-group">
                <div class="rating">
                    <input v-model="form.estrellas" class="form-control" type="radio" id="estrella5" name="estrellas"
                        value="5" @change="filter('estrellas')" />
                    <label class="estrella" for="estrella5" title="Awesome" aria-hidden="true"></label>
                    <input v-model="form.estrellas" class="form-control" type="radio" id="estrella4" name="estrellas"
                        value="4" @change="filter('estrellas')" />
                    <label class="estrella" for="estrella4" title="Great" aria-hidden="true"></label>
                    <input v-model="form.estrellas" class="form-control" type="radio" id="estrella3" name="estrellas"
                        value="3" @change="filter('estrellas')" />
                    <label class="estrella" for="estrella3" title="Very good" aria-hidden="true"></label>
                    <input v-model="form.estrellas" class="form-control" type="radio" id="estrella2" name="estrellas"
                        value="2" @change="filter('estrellas')" />
                    <label class="estrella" for="estrella2" title="Good" aria-hidden="true"></label>
                    <input v-model="form.estrellas" class="form-control" type="radio" id="estrella1" name="estrellas"
                        value="1" @change="filter('estrellas')" />
                    <label class="estrella" for="estrella1" title="Bad" aria-hidden="true"></label>
                </div>
            </div>
        </div>

        <div class="">
            <div>
                Precio minimo
                <div class="d-flex justify-content-between">
                    <span>{{ paquetes().filters.precio_min }}</span>
                    <span>{{ paquetes().filters.precio_max }}</span>
                </div>
                <input name="price_min" id="price_min" v-model="form.price_min" class="form-range" type="range" :min="paquetes().filters.precio_min" :max="paquetes().filters.precio_max" @change="filter('price_min')" />
            </div>
            <div>
                Precio maximo
                <div class="d-flex justify-content-between">
                    <span>{{ paquetes().filters.precio_min }}</span>
                    <span>{{ paquetes().filters.precio_max }}</span>
                </div>
                <input name="price_max" id="price_max" v-model="form.price_max" class="form-range" type="range" :min="paquetes().filters.precio_min" :max="paquetes().filters.precio_max" @change="filter('price_max')" />
            </div>
        </div>

        <div class="">
            Transporte
            <select class="form-control" name="transporte" id="transporte" v-model="form.transporte"
                @change="filter('transporte')">
                <option value="aereos">Aereos</option>
                <option value="bus">Bus</option>
                <option value="barco">Barco</option>
            </select>
        </div>

        <div class="">
            Regimen incluido
            <select class="form-control" name="regimen_incluido" id="regimen_incluido" v-model="form.regimen_incluido"
                @change="filter('regimen_incluido')">
                <option value="all_inclusive">All inclusive</option>
                <option value="media_pension">Media pensión</option>
                <option value="solo_alojamiento">Sólo alojamiento</option>
            </select>
        </div>
        
        <!-- etiquetas for etiquetas -->

        <button class="btn btn-secondary btn-block" @click="resetForm()">Limpiar filtros</button>
        <div class="">
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
const props = defineProps(['showFilters'])
import { useRoute } from 'vue-router'
const route = useRoute()
import { usePaquetesStore as paquetes } from '@/stores/paquetes'


const showFilters = props.showFilters
function filter(field = '') {
    let query = route.query
    if (field) {
        query[field] = form[field]
        let params = new URLSearchParams(query).toString();
        location.href="/paquetes?"+params
    } else {  
        location.href="/paquetes"
    }
}
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
const form = reactive(formDef)
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
    filter()
    // form.value = formDef
}
</script>

<style lang="scss" scoped>
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

tyle>.rating {
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
</style>