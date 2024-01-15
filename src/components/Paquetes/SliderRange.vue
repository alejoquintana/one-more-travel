<template>
    <Slider v-model="value" :min="parseInt(precio_min)" :max="parseInt(precio_max)" @end="change()"
    :format="{prefix: '$',suffix: '',decimals: '0',thousand: '.'}" class="slider"/>
    <!-- {{ precio_max }}
    {{ precio_min }} -->
    <div v-if="test"></div>
</template>

<script>
import Slider from '@vueform/slider'

export default {
    props:['precio_max','precio_min'],
    components: { Slider },
    data: () => ({
        value: [0, 100]
    }),
    emits: ['hasChanged'],
    methods: {
        change() {
            this.$emit('hasChanged', this.value)
        }
    },
    computed: {
        test() {
            if (this.precio_min && this.precio_max) {
                this.value = [parseInt(this.precio_min), parseInt(this.precio_max)]
            }
            return 0
        }
    }
}
</script>

<style  scoped>
/* 
$primary: #6686FF;
$secondary: #01FFC1;
$blue: #0848a8;
*/
.slider {
  --slider-connect-bg: #01FFC1;
  --slider-tooltip-bg: #01FFC1;
  --slider-handle-ring-color: #01FFC1;
  --slider-tooltip-color: #6686FF;
}
</style>
<style src="@vueform/slider/themes/default.css"></style>
