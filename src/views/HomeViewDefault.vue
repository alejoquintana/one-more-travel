<script setup>
import NavBar from '@/components/Nav/NavBar.vue'
import FooterBar from '@/components/FooterBar.vue'
import OffersItems from '@/components/Offers/OffersItems.vue';
import HomeSlider from '@/components/Slider/HomeSlider.vue'
import BannersHome from '@/components/Banners/BannersHome.vue'
import ContactUs from '@/components/ContactUs.vue'
import BigDescription from '@/components/BigDescription.vue'
import SearchEngine from '@/components/SearchEngine/SearchEngine.vue';
import { useHelpersStore as helpers } from '@/store/helpers'

import { useInfoStore as info } from '@/store/info'

</script>

<template>
    <NavBar />
    <main>
        <div class="main-content max-width">
            <SearchEngine v-if="helpers().show_on == 'one-more'" />

            <!-- <HomeSlider position="bottom" image="tropical-beach.jpg" first="Sardegna, Italia" :show_first="true"
                second="CONOCE MAS DESTINOS" :show_second="true" third="PORTOFLAVIA, SARDEGNA, ITALIA"
                :show_third="true">
                <div></div>
            </HomeSlider> -->


            <!-- <HomeSlider /> -->
            <OffersItems class="mt-4" />
            <BannersHome class="mt-4" />
            <!-- <HomeSlider second="CONOCÉ MAS BENEFICIOS" :show_second="true" third="CONTACTATE CON UN ASESOR"
                :show_third="true" :url="'tel:' + info().phone.replace(/\s/g, '')" /> -->

            <div class="row gap-lg-0 gap-3">
                <div class="col-md-4">
                    <ContactUs />
                </div>
                <div class="col-md-8">
                    <BigDescription />
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
