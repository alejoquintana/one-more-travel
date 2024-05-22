<template>
    <div class="fixed">
        <div class="bg w-100 h-100 absolute" @click="$emit('closeModal')"></div>
        <div class="m-cont br-radius">
            <div class="m-container relative br-radius">
                <div class="p-4 absolute top-0 right-0">
                    <button class="btn btn-secondary" @click="$emit('closeModal')">
                        <i class="fa fa-xmark"></i>
                    </button>
                </div>
                <div class="overflow-" style="">
                    <slot>
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import vClickOutside from 'click-outside-vue3'

export default {
    directives: {
        clickOutside: vClickOutside.directive
    },
    methods: {
        onClickOutside(event) {
            console.log('Clicked outside. Event: ', event)
        }
    }
};
</script>

<style lang="scss" scoped>
body{
  height: 100% !important; 
  overflow: hidden  !important;
}

.fixed{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1000000;
    display: flex;
    .bg{
        background-color: #00000088;
    }
    .m-cont{
        overflow: hidden;
        margin: auto;
        background: $primary;
        width: 100%;
        max-height: 80vh;
        max-width: 1080px;
        .m-container{
            overflow-y: scroll;
            margin: auto;
            background: $primary;
            width: 100%;
            max-height: 80vh;
            max-width: 1080px;
            border: 2px solid white;
        }
    }
}
</style>