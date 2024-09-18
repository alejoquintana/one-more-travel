<template>
    <div class="formAereos" data-tipoMotor="aereos"></div>
    <v-row class="py-4 skeletonAereos">
        <v-col cols="10">
            <v-row>
                <v-col cols="4">
                    <div class="skeleton"></div>
                </v-col>
                <v-col cols="4">
                    <div class="skeleton"></div>
                </v-col>
                <v-col cols="4">
                    <div class="skeleton"></div>
                </v-col>
                <v-col cols="5">
                    <div class="skeleton"></div>
                </v-col>
                <v-col cols="7">
                    <v-row>
                        <v-col cols="4">
                            <div class="skeleton"></div>
                        </v-col>
                        <v-col cols="4">
                            <div class="skeleton"></div>
                        </v-col>
                        <v-col cols="4">
                            <div class="skeleton"></div>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="2">
            <div class="skeleton h-100"></div>
        </v-col>
    </v-row>

    <!-- <div class="d-flex flex-column gap-3">
        <h1 :class="$mq.lg ? 'fs-xl' : 'fs-lg'"><strong>Vuela vuela!</strong> Pero primero, busca pasajes acá!</h1>
        <div :class="$mq.lg ? 'd-flex gap-5' : 'row g-0 align-items-center gap-3'">
            <div class="d-flex align-items-center">
                <input type="radio" id="round" name="trip" value="round" checked />
                <label class="ms-3" for="round">Voy y vuelvo</label>
            </div>
            <div class="d-flex align-items-center">
                <input type="radio" id="justgo" name="trip" value="justgo" />
                <label class="ms-3" for="justgo">Voy</label>
            </div>
            <div class="d-flex align-items-center">
                <input type="radio" id="multi" name="trip" value="multi" />
                <label class="ms-3" for="multi">Multidestino</label>
            </div>
            <OmgButton icon="house" size="xs">Con alojamiento</OmgButton>
        </div>
        <div :class="$mq.lg ? 'row g-0 gap-2 justify-content-between' : ''">
            <div class="col-lg-2">
                <div class="filter spot relative ms-4 ps-4 w-calc">
                    <div class="rounded-circle bg-primary absolute abso-icon">
                        <Icon icon="plane-departure" color="white"></Icon>
                    </div>
                    <span class="ps-2 title">Voy desde</span>
                    <input class="ps-2" type="text" v-model="form.origin">
                </div>
            </div>
            <div class="col-lg-2">
                <div class="filter spot relative ms-4 ps-4 w-calc">
                    <div class="rounded-circle bg-primary absolute abso-icon">
                        <Icon icon="plane-arrival" color="white"></Icon>
                    </div>
                    <span class="ps-2 title">Llego a</span>
                    <input class="ps-2" type="text" v-model="form.destination">
                </div>
            </div>
            <div :class="$mq.lg ? 'd-flex justify-content-between gap-2' : 'row my-2 g-0'" class="col-lg-6">
                <div class="" :class="$mq.sm ? 'col-6 pe-1' : 'col-6'">
                    <span class="title">Fechas</span>
                    <div class="filter-date data">
                        <VueDatePicker v-model="form.range" range :enable-time-picker="false" placeholder="Seleccionar fecha">
                        </VueDatePicker>
                        <input type="text" v-model="form.start_date">
                    </div>
                </div>
                <div class=""  :class="$mq.sm ? 'col-6 ps-1' : 'col'">
                    <div class="filter data">
                        <span class="title">Regreso</span>
                              <VueDatePicker v-model="form.return_date"></VueDatePicker>
                        <input type="text" v-model="form.return_date">
                    </div>
                </div>
                <div class="col-lg my-2 my-lg-0">
                    <span class="title-data">Cuantos?</span>
                    <div class="filter-data">
                        <input type="text" v-model="form.passangers">
                    </div>
                </div>
                <div class="col-lg">
                    <span class="title-data">Clase</span>
                    <div class="filter-data">
                        <input type="text" v-model="form.class">
                    </div>
                </div>
            </div>
            <div class="col d-flex justify-content-center">
                <button class="btn btn-secondary align-self-center rounded-pill px-5 text-primary"
                    @click="consoleLog()">Buscar</button>
            </div>
        </div>
    </div> -->
</template>

<script setup>
import { onMounted } from 'vue';
import { useImportScriptsStore as importScripts } from '@/store/importScripts'

onMounted(function () {
    importScripts().fetchFlightEngine()
})
</script>

<style lang="scss" scoped>
.abso-icon {
    display: grid;
    place-items: center;
    top: calc(50% - $b4);
    width: calc($b4*2);
    height: calc($b4*2);
    border: 3px solid #fff;
    left: calc(-1 * $b4);
}

input {
    background: none;
    border: none;
    color: #fff;
    max-width: 100px;
}

.filter {
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 2px dotted;
    border-radius: $radius;

    .title {
        color: $secondary;
    }
}

.filter-date {
    display: flex;
    flex-direction: column;
    border: 2px dotted;
    border-radius: $radius;

    .title {
        color: $secondary;
    }
}

.filter-data {
    display: flex;
    flex-direction: column;
    border: 2px dotted;
    padding: 0.4rem 0.8rem;
    border-radius: $radius;
}

.title-data {
    color: $secondary;
}

.filter.data {
    border-color: #fff;
}

.filter.spot {
    border-color: $secondary;
}

@media (max-width: 576px) {
    .w-calc {
        width: calc(100% - 1.5rem);
    }
}




.dp__theme_light {
    --dp-background-color: transparent;
    --dp-text-color: #fff;
    --dp-hover-color: #f3f3f3;
    --dp-hover-text-color: #212121;
    --dp-hover-icon-color: #959595;
    --dp-primary-color: #1976d2;
    --dp-primary-disabled-color: #6bacea;
    --dp-primary-text-color: #f8f5f5;
    --dp-secondary-color: #c0c4cc;
    --dp-border-color: transparent;
    --dp-menu-border-color: transparent;
    --dp-border-color-hover: transparent;
    --dp-disabled-color: #f6f6f6;
    --dp-scroll-bar-background: #f3f3f3;
    --dp-scroll-bar-color: #959595;
    --dp-success-color: #76d275;
    --dp-success-color-disabled: #a3d9b1;
    --dp-icon-color: #fff;
    --dp-danger-color: #ff6f60;
    --dp-marker-color: #ff6f60;
    --dp-tooltip-color: #fafafa;
    --dp-disabled-color-text: #8e8e8e;
    --dp-highlight-color: rgb(25 118 210 / 10%);
    --dp-range-between-dates-background-color: var(--dp-hover-color, #f3f3f3);
    --dp-range-between-dates-text-color: var(--dp-hover-text-color, #212121);
    --dp-range-between-border-color: var(--dp-hover-color, #f3f3f3);
}

.dp__theme_dark {
    --dp-background-color: #212121;
    --dp-text-color: #fff;
    --dp-hover-color: #484848;
    --dp-hover-text-color: #fff;
    --dp-hover-icon-color: #959595;
    --dp-primary-color: #005cb2;
    --dp-primary-disabled-color: #61a8ea;
    --dp-primary-text-color: #fff;
    --dp-secondary-color: #a9a9a9;
    --dp-border-color: #2d2d2d;
    --dp-menu-border-color: #2d2d2d;
    --dp-border-color-hover: #aaaeb7;
    --dp-disabled-color: #737373;
    --dp-disabled-color-text: #d0d0d0;
    --dp-scroll-bar-background: #212121;
    --dp-scroll-bar-color: #484848;
    --dp-success-color: #00701a;
    --dp-success-color-disabled: #428f59;
    --dp-icon-color: #959595;
    --dp-danger-color: #e53935;
    --dp-marker-color: #e53935;
    --dp-tooltip-color: #3e3e3e;
    --dp-highlight-color: rgb(0 92 178 / 20%);
    --dp-range-between-dates-background-color: var(--dp-hover-color, #484848);
    --dp-range-between-dates-text-color: var(--dp-hover-text-color, #fff);
    --dp-range-between-border-color: var(--dp-hover-color, #fff);
}

input::placeholder {
    color: red !important;
}
</style>