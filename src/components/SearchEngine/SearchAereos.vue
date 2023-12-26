<template>
    <div class="d-flex flex-column gap-3">
        <h1  :class="$mq.lg ? 'fs-xl' : 'fs-lg'"><strong>Vuela vuela!</strong> Pero primero, busca pasajes acá!</h1>
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
                <div class=""  :class="$mq.sm ? 'col-6 pe-1' : 'col'">
                    <div class="filter data">
                        <span class="title">Salida</span>
                        <input type="text" v-model="form.start_date">
                    </div>
                </div>
                <div class=""  :class="$mq.sm ? 'col-6 ps-1' : 'col'">
                    <div class="filter data">
                        <span class="title">Regreso</span>
                        <input type="text" v-model="form.return_date">
                    </div>
                </div>
                <div class="col-lg filter data my-2 my-lg-0">
                    <span class="title">Cuantos?</span>
                    <input type="text" v-model="form.passangers">
                </div>
                <div class="col-lg filter data">
                    <span class="title">Clase</span>
                    <input type="text" v-model="form.class">
                </div>
            </div>
            <div class="col d-flex justify-content-center">
                <button class="btn btn-secondary align-self-center rounded-pill px-5 text-primary">Buscar</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import OmgButton from '@/components/OmgButton.vue';
import Icon from '@/components/AIcon.vue'
import { reactive } from 'vue';
const form = reactive({
    origin: "Buenos Aires Arg, AEP",
    destination: "Ingresa una ciudad",
    start_date: "13/12/2023",
    return_date: "13/01/2024",
    passangers: "1 solo",
    class: "Turista",
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
    left: calc(-1*$b4);
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
}</style>