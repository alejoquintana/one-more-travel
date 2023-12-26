<template>
    <div class="bg-container h-100 d-flex flex-column gap-2 br-radius p-4 gx-1 g-0">
        <p class="text-white fs-lg col-12 mb-0  ">Contactanos</p>
        <p class="text-white fs-xs col-12 mb-2">te damos una mano</p>
        <input class="w-100 px-2 py-1" type="text" id="nombre" name="nombre" placeholder="Nombre">
        <div class="d-flex gap-2">
            <input class="w-100 px-2 py-1" type="text" id="email" name="email" placeholder="Email">
            <input class="w-100 px-2 py-1" type="text" id="telefono" name="telefono" placeholder="Telefono">
        </div>
        <textarea class="w-100 px-2 py-1" id="mensaje" name="mensaje" placeholder="Mensaje..."></textarea>
        <button class="btn btn-primary text-white px-4">ENVIAR</button>
    </div>
</template>

<style scoped lang="scss">
.bg-container{
    background-color: rgba($blue,0.8);
}
input::placeholder,textarea::placeholder {
  font-size: $fs-sm;
  font-weight: bold;
}

</style>