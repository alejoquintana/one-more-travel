<script setup>
import Icon from '@/components/AIcon.vue'

</script>

<template>
    <div class="col-12 mt-4">
        <div class="p-4 bg-primary bs-white br-radius">
            <div class="d-flex py-3 justify-content-center">
                <!-- <div class="text-center"> -->
                    <Icon icon="thumbs-up" color="white" :intSize="130"></Icon>
                <!-- </div> -->
            </div>
            <h2 class=" text-center mt-2 mb-0">Gracias por la reserva!</h2>
            <p class="text-center">Nuestros agentes de viajes se contactaran contigo en la brevedad</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.form-section {
    overflow: hidden;
    margin: 20px 0;

    .form-section-header {
        display: flex;
        color: $primary;
        padding-left: 40px;
        padding-bottom: 0px;

        .header-text {
            font-weight: bold;
            background: $primary;
            color: #fff;
            padding: 10px 20px;
            font-size: 20px;
            border-radius: $radius $radius 0 0;
        }
    }

    .form-section-content {
        border-radius: $radius;
        color: #fff;
        background: $bg-primary-gradient;
        padding: 20px;

        .row>div {
            margin-top: 15px;
        }

        .form-text {
            color: #fff;
            font-style: italic;
            @extend .ffs-1;
        }
    }
}

.form-label {
    margin-bottom: 2px;
}

.form-control::placeholder {
    color: rgba($secondary, 0.8);
}

.form-control,
.form-select {
    background: transparent;
    border-width: 2px;
    border-style: dotted;
    color: #fff;
    @extend .br-sm-radius;
}

//.form-control.type-1,.form-select.type-1{
.form-control {
    border-style: dotted;
    border-color: #fff;
}

//.form-control.type-2,.form-select.type-2{
.form-select {
    border-style: solid;
    border-color: $secondary;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: transparent;
    background-image: url("data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    background-repeat: no-repeat;
    background-position-x: 100%;
    background-position-y: 5px;
}

option {
    background: $primary;
}
</style>
