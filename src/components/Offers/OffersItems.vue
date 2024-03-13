<script setup>
import { useHelpersStore as helpers } from '@/store/helpers'
import { usePaquetesStore as paquetes } from '@/store/paquetes'
import { useRouter } from 'vue-router'
import PaqueteCard from '@/components/Paquetes/PaqueteCard.vue'
const router = useRouter()
paquetes().fetchPaquetesOferta()
function goToPack(codigo) {
    router.push('paquetes/' + codigo)
}
</script>

<template>
    <div class="row gy-4">
        <div class="col-lg-3 col-12">
            <div
                class="h-100 scale-hover box-primary-border bg-primary def-shadow br-radius row align-content-center relative p-3 g-0 gy-2">
                <img class="w-100" :src="helpers().getImagePath('cyber-monday.png')" alt="Imagen de cyber-monday" />
            </div>
        </div>
        <PaqueteCard class="col-lg-3 col-12" v-for="offer in paquetes().ofertas" :key="offer.id" :paquete="offer" />

        <!-- <div class="col-lg-3 col-12" v-for="offer in paquetes().ofertas" :key="offer.id">
            <div class="h-100 scale-hover box-primary-border bg-primary def-shadow br-radius row align-content-start relative p-3 g-0 gy-2 pointer"
                @click="goToPack(offer.codigo)">
                <div class="abso-icon type-icon p-2 text-white bg-secondary rounded-circle">
                    <i v-if="offer.transporte == 'aereos'" class="fa-solid fa-plane fa-xl"></i>
                    <i v-if="offer.transporte == 'barco'" class="fa-solid fa-ship fa-xl"></i>
                    <i v-if="offer.transporte == 'bus'" class="fa-solid fa-bus fa-xl"></i>
                </div>
                //--<img class="abso-icon type-icon" :src="helpers().getImagePath(offer.transporte + '-icon.png')" :alt="'Imagen de ' + offer.destinos" /> -- 
                <img class="abso-icon discount-icon" :src="helpers().getImagePath('10-discount.png')"
                    :alt="'Imagen de ' + offer.destinos" />
                <div class="col-12">
                    <div class="img-box br-radius">
                        <img class="" v-if="offer.imagenes[0]"
                            :src="helpers().getImagePath(offer.imagenes[0].url, 'paquetes')" alt="">
                        <img v-else :src="helpers().getImagePath('no-photo-available.png')" alt="" srcset="">
                    </div>
                </div>
                <div v-if="offer.nombre" class="col-12 mt-2 row g-0 justify-content-between align-items-center">
                    <p class="mb-0 ucfirst" v-text="offer.nombre"></p>
                </div>
                <div class="col-6 lh-1 mb-0">
                    <small class="fs-sm text-white text-uppercase">
                        {{ offer.transporte }}
                    </small>
                    <br />
                    <span class="text-white text-uppercase">
                        {{ offer.destinos }}
                    </span>
                </div>
                <div class="col-6 d-flex justify-content-end align-items-center">
                    <span class="fs-lg fw-bold text-secondary">
                        {{ helpers().formatPrice(offer.precio_final, 'AR') }}
                    </span>
                </div>
                <div v-if="offer.descripcion_breve"
                    class="col-12 mt-2 row g-0 justify-content-between align-items-center">
                    <p class="mb-0 ffs-1" v-html="offer.descripcion_breve"></p>
                </div>
            </div>
        </div> -->
        <div class="col-12">
            <router-link to="/paquetes">
                <div
                    class="scale-hover-05 text-center fw-bold fs-lg box-primary-border bg-primary def-shadow br-radius p-3 gy-2">
                    VER TODOS LOS PAQUETES
                </div>
            </router-link>
        </div>
    </div>
</template>


<style lang="scss" scoped>
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