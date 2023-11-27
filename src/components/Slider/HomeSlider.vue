<script setup>
import { ref } from "vue";

const location = ref("portoflavia")
const city = ref("sardegna")
const country = ref("italia")
</script>

<template>
    <div class="rect def-shadow">
        <img class="img-slider w-100" src="/src/assets/imgs/slider-1.png" alt="">
        <div class="addons w-100 px-5">
            <div class="name-slider bg-white px-5 py-2 text-primary text-capitalize br-radius">
                <span>{{ city }}, <strong>{{ country }}</strong></span>
            </div>
            <div class="more-slider bg-white px-3 py-1 text-uppercase br-radius d-flex align-items-center">
                <p class="mb-0"><strong class="text-primary">CONOCE MAS DESTINOS</strong>
                    <span class="bg-primary text-white ms-3 px-2 br-radius fw-light">
                        {{ location }}, {{ city }}, {{ country }}
                    </span>
                </p>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.rect:hover{
    .img-slider{
        transform: scale(1.05);
    }
}

.rect{
    overflow: hidden;
    height: 460px;
    //background-color: #000;
    border-radius: $radius;
    display: flex;
    align-items: center;
    place-items: center;
    position: relative;
    .addons{
        z-index: 99;
        display: flex;
        justify-content: space-between;
        .name-slider{
            background-color: #fff;
        }
    }
}
.img-slider{
    position: absolute;
    transition: 1s;
}
</style>