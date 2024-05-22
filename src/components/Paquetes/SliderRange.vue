<template>
    <Slider v-model="value" :tooltipPosition="'bottom'" :min="parseInt(precio_min)" :max="parseInt(precio_max)"
        @end="change()" :format="{prefix: '$',suffix: '',decimals: '0',thousand: '.'}" class="slider" />
</template>

<script>
import Slider from '@vueform/slider'

export default {
    props:['precio_max','precio_min'],
    components: { Slider },
    data: () => ({
        value: [0, 100],
        fetched: false
    }),
    emits: ['hasChanged'],
    methods: {
        change() {
            this.$emit('hasChanged', this.value)
        }
    },
    updated() {
        if (!this.fetched) {            
            if (this.precio_min && this.precio_max) {
                this.value = [parseInt(this.precio_min), parseInt(this.precio_max)]
                this.$emit('hasChanged', this.value)
                this.fetched = true
            }
        }
    },
    mounted() {
        if (!this.fetched) {            
            if (this.precio_min && this.precio_max) {
                this.value = [parseInt(this.precio_min), parseInt(this.precio_max)]
                this.$emit('hasChanged', this.value)
                this.fetched = true
            }
        }
    },
}
</script>

<style  scoped>
.slider {
  --slider-connect-bg: #01FFC1;
  --slider-tooltip-bg: #01FFC1;
  --slider-handle-ring-color: #01FFC1;
  --slider-tooltip-color: #6666ff;

  --slider-tooltip-font-size: 0.875rem;
--slider-tooltip-line-height: 1.25rem;
--slider-tooltip-font-weight: 600;
--slider-tooltip-min-width: 20px;
--slider-tooltip-bg-disabled: #9CA3AF;
--slider-tooltip-radius: 5px;
--slider-tooltip-py: 1px;
--slider-tooltip-px: 6px;
--slider-tooltip-arrow-size: 3px;
--slider-tooltip-distance: 1px;

--slider-handle-bg: #fff;
--slider-handle-border: 0;
--slider-handle-width: 16px;
--slider-handle-height: 16px;
--slider-handle-radius: 9999px;
--slider-handle-shadow: 0.5px 0.5px 2px 1px rgba(0,0,0,.32);
--slider-handle-shadow-active: 0.5px 0.5px 2px 1px rgba(0,0,0,.42);
--slider-handle-ring-width: 3px;
--slider-handle-ring-color: #10B98130;
}
</style>
<style src="@vueform/slider/themes/default.css"></style>
