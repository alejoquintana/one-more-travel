<template>
    <div class="mt-5 text-white" style="background-color: #000;">
        <!-- <NavBar :footer="true" /> -->
        <div class="max-width py-5">
            <div class="d-flex justify-content-between" :class="{ 'flex-column px-4': $mq.sm }">
                <div :class="{ 'py-4': $mq.sm }">
                    <p class="fs-xl fw-bolder mb-4">ONE MORE TRAVEL</p>
                    <p class="text-grey fw-bold mb-0">
                        Agencia de Viajes y Paquetes Turísticos
                    </p>
                    <p class="text-grey cursor-pointer fs-md mb-0" @click="openModal('condiciones')">Términos y condiciones
                        de
                        uso</p>
                    <p class="text-grey cursor-pointer fs-md mb-0" @click="openModal('politicas')">Políticas de
                        cancelación</p>
                </div>
                <div :class="{ 'py-4': $mq.sm }">
                    <p class="fs-xl fw-bolder mb-4">Nuestros Datos</p>
                    <div v-for="({ obj, icon }, i) in info().contacts" :key="i">
                        <OmgButton :icon="icon">
                            <span class="text-grey" v-html="obj"></span>
                        </OmgButton>
                    </div>
                </div>
                <div :class="{ 'py-4': $mq.sm }">
                    <p class="fs-xl fw-bolder text-center mb-4">Nuestros redes</p>
                    <div class="d-flex justify-content-center gap-4">
                        <a :href="social.url" :target="social.url != '/' ? '_blank' : '_self'" style="aspect-ratio: 1;"
                            v-for="social in info().socials" :key="social.icon" class="net-icon br-radius">
                            <Icon :icon="social.icon" color="white" :size="$mq.lg ? 'md' : 'sm'"></Icon>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="max-width border-top border-muted pt-3 pb-2">
            <v-row no-gutters class="max-width px-3 px-lg-0 pb-3 justify-content-between">
                <v-col cols="12" md="4" :class="$mq.lg ? '' : 'd-flex justify-content-center'">
                    <span class="fs-md text-grey">
                        2022-{{ new Date().getFullYear() }} © ONE MORE Travel. All Rights Reserved.
                    </span>
                </v-col>
                <v-col cols="12" md="4"
                    :class="$mq.lg ? 'd-flex justify-content-end' : 'd-flex justify-content-center mt-4'">
                    <img src="https://onemoretravel.aereos.app/images/cuatrolados-logo.png" alt="Logo de Cuatro Lados"
                        style="max-height: 27px;">
                </v-col>
            </v-row>
        </div>
        <Transition name="fade">
            <modal-container v-if="showModal_condiciones" @closeModal="closeModal">
                <CondicionesGenerales />
            </modal-container>
        </Transition>
        <Transition name="fade">
            <modal-container v-if="showModal_politicas" @closeModal="closeModal">
                <PoliticasCancelacion />
            </modal-container>
        </Transition>
    </div>
</template>

<script setup>
// import NavBar from '@/components/Nav/NavBar.vue'
import OmgButton from '@/components/OmgButton.vue';

import { useInfoStore as info } from '@/store/info'
import Icon from '@/components/AIcon.vue'

import ModalContainer from '@/components/ModalContainer.vue'
import CondicionesGenerales from '@/components/CondicionesGenerales.vue'
import PoliticasCancelacion from '@/components/PoliticasCancelacion.vue'

import { ref } from 'vue'

const showModal_condiciones = ref(false)
const showModal_politicas = ref(false)

function openModal(type) {
    if (type == 'condiciones') {
        showModal_condiciones.value = true
        showModal_politicas.value = false
    }
    if (type == 'politicas') {
        showModal_politicas.value = true
        showModal_condiciones.value = false
    }
}
function closeModal() {
    if (showModal_condiciones.value) {
        showModal_condiciones.value = false
    }
    if (showModal_politicas.value) {
        showModal_politicas.value = false
    }
}
</script>

<style lang="scss" scoped>
.cursor-pointer.fs-md:hover {
    text-decoration: underline;
    color: $primary;
}

.net-icon {
    background-color: #222;
    border-radius: 50px;
    aspect-ratio: 1;
    padding: 0.9rem;
}
</style>