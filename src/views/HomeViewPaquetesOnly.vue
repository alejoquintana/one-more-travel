<script setup>
import NavBar from '@/components/Nav/NavBar.vue'
import FooterBar from '@/components/FooterBar.vue'
import OffersItems from '@/components/Offers/OffersItems.vue';
import HomeSlider from '@/components/Slider/HomeSlider.vue'
import { useInfoStore as info } from '@/store/info'

import { useHelpersStore } from '@/store/helpers'
const helpers = useHelpersStore()
// let { paquete } = storeToRefs(helpers());
</script>

<template>
    <NavBar />
    <main>
        <div class="main-content max-width">
            <HomeSlider v-if="helpers.show_on == 'sportclub'" position="bottom" image="tropical-beach.jpg"
                :first="`Descubrí los beneficios exclusivos para socios <img src='imgs/${helpers.show_on}-logo.png' style='max-height:38px'> con OMG Travel`"
                :show_first="true">
                <div></div>
            </HomeSlider>
            <HomeSlider v-if="helpers.show_on == 'femer'" position="bottom" image="tropical-beach.jpg"
                :first="`Descubrí los beneficios exclusivos para socios FEMER con OMG Travel`" :show_first="true">
                <div></div>
            </HomeSlider>
            <OffersItems />
            <HomeSlider second="CONOCÉ MAS BENEFICIOS" :show_second="true" third="CONTACTATE CON UN ASESOR"
                :show_third="true" :url="' tel:' + info().phone.replace(/\s/g, '' )" />
            <v-row class="justify-content-between align-items-center mt-1">
                <v-col cols="5" md="3">
                    <v-img v-if="helpers.show_on == 'femer'" src="imgs/femer-logo.png"
                    style="max-height:80px"
                    ></v-img>
                </v-col>
                <v-col cols="5" md="3">
                    <v-img :src="helpers.getImagePath('logo-purple.png')"></v-img>
                </v-col>
            </v-row>
            <div class="row gap-lg-0 gap-3">

                <div class="col-md-12">
                    <p class="bg-primary br-radius text-white p-4 ffs-1">OMG TRAVEL. Todos los precios están sujetos a
                        disponibilidad de lugares en el momento de solicitar la reserva y pueden ser alterados sin
                        previo aviso. Todos los derechos reservados. LEGAJO ** NUMEROS**. Dirección General de Defensa y
                        Protección al Consumidor, para consultas y/o denuncias ingrese aquí. Defensa de las y los
                        consumidores para Reclamos. Ingrese Aquí. Los incumplimientos relacionados a la gestión
                        turística, se revisarán a través del Ministerio de Turismo y Deportes. Para más información
                        ingrese aquí. Los inconvenientes relacionados con la gestión comercial de productos, se
                        revisarán a través de la Secretaría de Comercio. Para más información ingrese aquí. El titular
                        de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma
                        gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al
                        efecto conform establecido en el artículo 14, inciso 3 de la Ley N° 25.326". LA DIRECCIÓN
                        NACIONAL DE PROTECCIÓN DE DATOS PERSONALES, Órgano de Control de la Ley No 25.326, tiene la de
                        atender las denuncias y reclamos que se interpongan con relación al incumplimiento de las normas
                        sobre protección de datos personales. El envío de la factura correspondiente a la/s compra/s
                        efectuadas se realizará dentro de los 10 días hábiles de haberse realizado y confirmado. o marca
                        de tarjeta emisora. Ve a Configuración para activar Windows.</p>
                </div>
            </div>
        </div>
    </main>
    <footer class="">
        <FooterBar />
    </footer>
</template>

<style lang="scss" scoped>
header {
    line-height: 1.5;
    max-height: 100vh;
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        //padding-right: calc(var(--section-gap) / 2);
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }

    nav {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;

        padding: 1rem 0;
        margin-top: 1rem;
    }
}
</style>
