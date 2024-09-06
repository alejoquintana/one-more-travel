<script setup>
import { useHelpersStore as helpers } from '@/store/helpers'
import { usePaquetesStore as paquetes } from '@/store/paquetes'
import PaqueteCard from '@/components/Paquetes/PaqueteCard.vue'
paquetes().fetchPaquetesOferta(helpers().show_on == 'one-more' ? 3 : null)
</script>

<template>
    <div class="row gy-4">
        <div class="col-lg-3 col-12" v-if="helpers().show_on == 'one-more'">
            <div class="h-100 scale-hover bg-primary def-shadow br-radius row align-content-center relative p-3 g-0 g"
                style="min-height: 350px;">
                <img class="w-100" :src="helpers().getImagePath('cyber-monday.png')" alt="Imagen de cyber-monday" />
            </div>
        </div>
        <PaqueteCard class="col-lg-3 col-12" v-for="offer in paquetes().ofertas" :key="offer.id" :paquete="offer" />
        <div class="col-12" v-if="helpers().show_on == 'one-more'">
            <router-link to="/paquetes">
                <div
                    class="verTodos scale-hover-05 text-end fw-bold fs-lg def-shadow br-radius px-5 py-3 gy-2">
                    VER TODOS LOS PAQUETES
                </div>
            </router-link>
        </div>
    </div>
</template>


<style lang="scss" scoped>

.verTodos{
    background-color: #FFF;
    color: $primary;
    border: 2px solid $primary;
    text-decoration: none !important;
}

.abso-icon {
    position: absolute;
    top: 5px;
}

.discount-icon {
    width: 70px;
    right: 5px;
}

.type-icon {
    left: 5px;
    width: 40px;
}

.img-box {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 160px;

    img {
        object-fit: cover;
        min-width: 100%;
        min-height: 100%;
    }
}
</style>