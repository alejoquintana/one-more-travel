<template>
    <div class="btn-contact d-flex align-items-center text-white">
        <div class="d-inline btn-icon-contact bg-secondary rounded-circle">
            <Icon :icon="icon" color="primary" :size="size"></Icon>
        </div>
        <span class="px-4">
            <slot />
        </span>
    </div>
</template>

<script setup>
import Icon from '@/components/AIcon.vue'
defineProps([
    'icon','size'
])
</script>

<style lang="scss" scoped>
.btn-contact{
    box-shadow:inset 0px 0px 0px 2px $secondary;
    //border: 2px solid $secondary;
    border-radius: $radius;
}
.btn-icon-contact{
    padding: 0.4rem;
    border: 1px solid $primary;
}
</style>