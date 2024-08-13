<script setup>

import { ref } from 'vue'
const p = defineProps({
    url: {
        default: ''
    },
    image: {
        default: 'slider-1.png'
    },
    position: {
        default: ''
    },
    first: {
        default: ''
    },
    second: {
        default: ''
    },
    third: {
        default: ''
    },
    show_first: {
        default: false
    },
    show_second: {
        default: false
    },
    show_third: {
        default: false
    }
})
const location = ref('portoflavia')
const city = ref('sardegna')
const country = ref('italia')

function anchor() {
    if (p.url && p.url != '') {
        window.open(p.url, "_blank")
    }
}


import { useHelpersStore } from '@/store/helpers'
const helpers = useHelpersStore()
</script>

<template>
    <div class="rect def-shadow" :class="{ 'cursor-pointer': url && url != '' }" @click="anchor()">
        <img class="img-slider" :class="'pos-' + position"
            :src="helpers.getImagePath(image)" alt="" />
        <div class="addons w-100 px-lg-5 px-3 ps-3 ps-lg-3" :class="{ 'flex-column gap-3 align-items-start': $mq.sm }">
            <h2 v-if="show_first" class="name-slider bg-white px-lg-5 px-2 py-2 text-primary br-radius fs-5">
                <span v-if="!first" class="text-capitalize">{{ city }}, <strong>{{ country }}</strong></span>
                <span v-else v-html="first"></span>
            </h2>
            <div v-if="show_second || show_third"
                class="more-slider bg-white px-lg-3 px-3 py-2 tpext-uppercase br-radius d-flex align-items-center fs-5">
                <h3 class="mb-0" style="font-size: inherit;">
                    <strong v-if="show_second" class="text-primary">
                        <span v-if="!second"> CONOCE MAS DESTINOS </span>
                        <span v-else>{{ second }}</span>
                    </strong>
                    <br v-if="$mq.sm" />
                    <span v-if="show_third" class="bg-primary text-white ms-lg-3 px-2 br-radius fw-light">
                        <span v-if="!third"> {{ location }}, {{ city }}, {{ country }} </span>
                        <span v-else>{{ third }}</span>
                    </span>
                </h3>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.rect:hover {
    .img-slider {
        transform: scale(1.05);
    }
}

.rect {
    overflow: hidden;
    max-height: 460px;
    min-height: 240px;
    //background-color: #000;
    border-radius: $radius;
    display: flex;
    align-items: center;
    place-items: center;
    position: relative;

    .addons {
        z-index: 99;
        display: flex;
        justify-content: space-between;

        .name-slider {
            background-color: #fff;
        }
    }
}

.img-slider {
    position: absolute;
    transition: 1s;
}

@media (min-width: 500px) {
    .img-slider {width: 100%}
}

@media (max-width: 499px) {
    .img-slider {height: 100%}
}

.pos-bottom {
    bottom: 0;
}

.pos-top {
    top: 0;
}

.pos-left {
    left: 0;
}

.pos-right {
    right: 0;
}
</style>