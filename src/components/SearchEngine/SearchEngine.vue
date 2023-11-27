<template>
    <div>
        <div class="d-flex ps-5 text-primary">
            <div class="d-flex align-items-center tab" :class="selectedTab == name ? 'selected':''" v-for="{name,icon},i in tabs" :key="i"
            @click="selectedTab= name">
                <Icon :icon="icon" :color="selectedTab == name ? 'secondary':'primary'" size="lg"/>
                <div class="tab-name text-center text-capitalize fs-lg fw-bold">
                    {{ name }}
                </div>
            </div>
        </div>
        <div class="search-window">
            <Aereos v-if="selectedTab == 'aereos'"/>
            <Hoteles v-if="selectedTab == 'hoteles'"/>
            <Paquetes v-if="selectedTab == 'paquetes'"/>
            <Buques v-if="selectedTab == 'buques'"/>
        </div>
    </div>
</template>

<script setup>
import Icon from '@/components/AIcon.vue'
import Aereos from "@/components/SearchEngine/SearchAereos.vue";
import Hoteles from "@/components/SearchEngine/SearchHoteles.vue";
import Paquetes from "@/components/SearchEngine/SearchPaquetes.vue";
import Buques from "@/components/SearchEngine/SearchBuques.vue";
import { ref } from "vue";
const selectedTab = ref("aereos")
const tabs = [
    {name:'aereos',icon:"calendar-days"},
    {name:'hoteles',icon:"train-subway"},
    {name:'paquetes',icon:"suitcase"},
    {name:'buques',icon:"ship"},
]
</script>

<style lang="scss" scoped>
.tab{
    transition: all $transitions-time;
    border-radius:  $radius $radius 0 0;
    padding: 0.5rem 1.8rem;
}
.tab.selected{
    background-color: $primary;
    color: $secondary;
    fill: $secondary;
}

.tab-name{
    //padding: 0rem 1rem;
    opacity: 0;
    width:0;
    //display: none;
    transition: all $transitions-time;
}
.tab:hover, .tab.selected{
    .tab-name{
        //display: block;
        opacity: 1;
        width: 100px
    }
}
.search-window{
    //background: rgb(255,255,255);
    color: #fff;
    border-radius: $radius;
    padding: 1.2rem;
    min-height: 200px;
    background: linear-gradient(110deg, rgba(#6668ff,1) 0%, rgba(#6696ff,1) 100%);
}
</style>