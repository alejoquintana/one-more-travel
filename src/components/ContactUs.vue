<template>
    <div class="bg-container h-100 d-flex flex-column gap-2 br-radius p-4 gx-1 g-0">
        <p class="text-white fs-lg col-12 mb-0  ">Contactanos</p>
        <p class="text-white fs-xs col-12 mb-2">te damos una mano</p>
        <input class="w-100 px-2 py-1 br-sm-radius form-control" type="text" id="nombre" name="nombre" placeholder="Nombre" v-model="data.nombre">
        <div class="d-flex gap-2">
            <input class="w-100 px-2 py-1 br-sm-radius form-control" type="text" id="email" name="email" placeholder="Email" v-model="data.email">
            <input class="w-100 px-2 py-1 br-sm-radius form-control" type="text" id="telefono" name="telefono" placeholder="Telefono"
                v-model="data.telefono">
        </div>
        <textarea class="w-100 px-2 py-1 flex-grow-1 br-sm-radius" id="mensaje" name="mensaje"
            placeholder="Mensaje..." v-model="data.mensaje"></textarea>
        <button class="btn btn-primary text-white px-4" @click="saveData">ENVIAR</button>
    </div>
</template>

<script setup>
import { ref, inject } from 'vue';

const swal = inject('$swal')

const data = ref({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
})
function saveData() {
    fetch("/api/solicitud-contacto.php?n=n", {
        method: "POST",
        mode: 'cors',
        body: JSON.stringify({ action: 'crear', data: data.value }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
    }).then(r => r.json()).then(r => {
        swal('Tu consulta fue enviada','a la brevedad nos contactaremos contigo.','')
        data.value = {
            nombre: '',
            email: '',
            telefono: '',
            mensaje: '',
        }
    }).catch(r => console.error(r))
}
</script>

<style scoped lang="scss">
.bg-container {
    background-color: rgba($blue, 0.8);
}

input::placeholder,
textarea::placeholder {
    font-size: $fs-sm;
    font-weight: bold;
}</style>