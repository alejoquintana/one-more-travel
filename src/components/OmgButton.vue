<template>
    <div class="btn-contact d-flex align-items-center text-primary">
        <div class="d-inline btn-icon-contact bg-primary rounded-circle">
            <Icon :icon="icon" color="white" :size="size"></Icon>
        </div>
            <slot />
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
    box-shadow:inset 0px 0px 0px 2px $primary;
    //border: 2px solid $secondary;
    border-radius: $radius;
}
.btn-icon-contact{
    padding: 0.4rem;
    border: 1px solid $primary;
}
</style>