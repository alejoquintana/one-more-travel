<script setup>
import HomeViewDefault from '@/views/HomeViewDefault.vue'
import HomeViewPaquetesOnly from '@/views/HomeViewPaquetesOnly.vue'
import { useHelpersStore as helpers } from '@/store/helpers'
import ModalContainer from '@/components/ModalContainer.vue'

import { ref } from "vue";

const show_popup = ref(true)

function closeModal() {
    show_popup.value = false
}

import { useInfoStore as info } from '@/store/info'
info().fetchPopup()
</script>

<template>
    <div>
        <modal-container v-if="info().popup && info().popup.html != '' && show_popup" @closeModal="closeModal">
            <div class="p-5" v-html="info().popup.html"></div>
        </modal-container>

        <HomeViewDefault v-if="helpers().show_on == 'one-more'" />
        <HomeViewPaquetesOnly v-else />
    </div>
</template>