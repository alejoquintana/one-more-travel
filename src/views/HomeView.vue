<script setup>
import NavBar from '@/components/Nav/NavBar.vue'
import FooterBar from '@/components/FooterBar.vue'
import OffersItems from '@/components/Offers/OffersItems.vue';
import HomeSlider from '@/components/Slider/HomeSlider.vue'
import BannerComponent from '@/components/Banners/BannerComponent.vue'
import ContactUs from '@/components/ContactUs.vue'
import BigDescription from '@/components/BigDescription.vue'
import SearchEngine from '@/components/SearchEngine/SearchEngine.vue';
</script>

<template>
    <NavBar/>
    <main>
        <div class="main-content max-width">
            <SearchEngine/>
            <HomeSlider />
            <OffersItems />
            <BannerComponent banner="banner-mercado-pago.png" />
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
        <FooterBar/>
    </footer>
</template>

<style lang="scss" scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.main-content {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 30px;
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
