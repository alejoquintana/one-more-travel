<script setup>
import { useHelpersStore as helpers } from '@/store/helpers'
</script>

<template>
  <div class="row gap-3 g-0">
    <div class="scale-hover box-primary-border bg-primary p-3 def-shadow br-radius col-lg col-12"
      v-for="offer in offers" :key="offer.id">
      <div v-if="offer.type!='banner'" class="row relative g-0 gy-2">
        <img class="abso-icon type-icon" :src="helpers().getImagePath(offer.type+'-icon.png')" :alt="'Imagen de ' + offer.destination"/>
        <img class="abso-icon discount-icon" :src="helpers().getImagePath(offer.discount+'-discount.png')" :alt="'Imagen de ' + offer.destination"/>
        <div class="col-12">
          <div class="img-box br-radius">
            <img
              class="w-100"
              :src="helpers().getImagePath(offer.image)"
              :alt="'Imagen de ' + offer.destination"
            />
          </div>
        </div>
        <div class="col-10">
          <p class="lh-1 mb-0">
            <small class="fs-sm text-white text-uppercase">
              {{ offer.type }}
            </small>
            <br />
            <span class="text-white text-uppercase">
              {{ offer.destination }} </span
            ><br />
            <span class="fs-lg fw-bold text-secondary">
              {{ helpers().formatPrice(offer.price, offer.currency) }}
            </span>
          </p>
        </div>
        <div class="col-2">
          <img class="w-100" :src="helpers().getImagePath(`${offer.bank}.png`)" alt="" />
        </div>
        <div class="col-12 mt-2 row g-0 justify-content-between align-items-center">
            <div class="col-4">
              <img
                class="w-100 mix-blend-mode-multiply"
                :src="helpers().getImagePath(`ahora-3-6-12-18.png`)"
                alt=""
              />
            </div>
            <div class="col-4">
              <p class="mb-0 fw-bolder text-white fs-xs">CONSULTAR BASES Y CONDICIONES</p>
            </div>
        </div>
      </div>
      <div v-else class="row g-0 gy-2">
        <div class="img-banner-box br-radius">
            <img
              class="w-100"
              :src="helpers().getImagePath(offer.image)"
              :alt="'Imagen de ' + offer.destination"
            />
          </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.abso-icon{
    position: absolute;
    top: -5px;

}
.discount-icon{
    width: 70px;
    right: -5px;
}
.type-icon{
    left: -5px;
    width: 40px;
}
.img--box {
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