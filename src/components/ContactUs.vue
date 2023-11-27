<template>
    <div class="bg-container h-100 row br-radius p-4 gx-1 g-0">
        <span class="text-white fs-lg col-12">Contactanos</span>
        <span class="text-white fs-xs col-12">te damos una mano</span>
        <div class="col-12">
            <input class="w-100 p-2" type="text" id="nombre" name="nombre" placeholder="Nombre">
        </div>
        <div class="col-6">
            <input class="w-100 p-2" type="text" id="email" name="email" placeholder="Email">
        </div>
        <div class="col-6">
            <input class="w-100 p-2" type="text" id="telefono" name="telefono" placeholder="Telefono">
        </div>
        <div class="col-12">
            <textarea class="w-100 p-2" id="mensaje" name="mensaje" placeholder="Mensaje..."></textarea>
        </div>
        <div class="col-12">
            <button class="btn btn-primary text-white px-4">ENVIAR</button>
        </div>
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