<template>
    <div class="fixed">
        <div class="m-container relative br-radius overflow-hidden">
            <div class="p-4 absolute top-0 right-0">
                <button class="btn btn-secondary" @click="$emit('closeModal')">
                    <i class="fa fa-xmark"></i>
                </button>
            </div>
            <div class="overflow-hidden">
                <slot>
                </slot>
            </div>
        </div>
    </div>
</template>

<script setup>

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
    background-color: #00000088;
    padding: 15px;
    .m-container{
        margin: auto;
        background: $primary;
        width: 100%;
        max-height: 80vh;
        max-width: 1080px;
        border: 2px solid white;
    }
}
</style>