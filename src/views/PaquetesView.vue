<template>
    <div class="cont">
        <div class="nav bg-primary px-5 py-2">
            <img class="logo" :class="$mq.sm ? 'w-50' : ''" :src="helpers().getImagePath('logo.png')" alt="Logo OMG Travel">
        </div>
        <div class="dash row">
            <div class="col-2 h-100">
                <SideMenu></SideMenu>
            </div>
            <div class="col-10 h-100 border border-left" style="">
                
            </div>
        </div>
    </div>
</template>

<script setup>
import { useHelpersStore as helpers } from '@/stores/helpers'
import SideMenu from '@/components/Admin/SideMenu/SideMenu.vue'
</script>

<style lang="scss" scoped>
.logo{
    max-height: 100%;
}
.nav {
    height: 10vh;
}
.dash{

    height: 90vh;
}
</style>