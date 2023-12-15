<script setup>
import { useAdminStore as admin } from '@/stores/admin'
const sections = admin().sections
import Icon from '@/components/AIcon.vue'
</script>

<template>
    <div class="d-flex flex-column gap-4 p-4">
        <div class="d-flex align-items-center gap-3" v-for="section,s in sections" :key="s">
            <Icon :icon="section.icon" color="primary"></Icon>
            <span class="text-uppercase">{{ section.name }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.header{
    display: flex;
    justify-content: center;
    background-color: $primary;
}
.logo{
    max-height: 60px;
}
.nav-bar{
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: $max-width;
    min-height: 70px;
}
</style>