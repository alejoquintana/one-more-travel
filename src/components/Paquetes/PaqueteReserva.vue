<script setup>
import { ref, reactive, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import ModalContainer from '@/components/ModalContainer.vue'
import { useHelpersStore as helpers } from '@/store/helpers'
import { usePaquetesStore as paquetes } from '@/store/paquetes'
import { useRoute } from 'vue-router'
const route = useRoute()
let { paquete, paises } = storeToRefs(paquetes());

const selectedMedia = reactive({})

const showModal = ref(false)
const form = ref({
    name: "",
    surname: "",
    nationality: "Argentina",
    doc_type: "dni",
    doc_num: "",
    sex: "0",
    birthdate: "",
    email: "",
})

paquetes().fetchPaises()
paquetes().fetchPaquete(route.params.paquete)

function formatDate(value) {
    let val = value.split('-')
    return `${val[2]}/${val[1]}/${val[0]}`
}

onMounted(function () {
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://omgtravel.aereos.app/reserva.omg.app.js?v=' + Date.now())
    document.body.appendChild(recaptchaScript)
})
</script>

<template>
    <div class="row mt-4" v-if="paquete && paquete.codigo">
        <div class="col-12 col-md-8 mt-4">
            <div class="formReserva" data-tipoMotor="aereos"></div>
        </div>
        <!--
            <form action="">
                <div class="form-section">
                    <div class="form-section-header">
                        <span class="header-text">
                            Datos de los pasajeros
                        </span>
                    </div>
                    <div class="form-section-content">
                        <div class="row">
                            <div class="col-6">
                                <label for="name" class="form-label">
                                    Nombre/s
                                </label>
                                <input type="text" id="name" v-model="form.name" class="form-control"
                                    aria-describedby="nameHelpBlock">
                                <div id="nameHelpBlock" class="form-text">
                                    Ingresá todos los nombres que aparezcan en tu documento de viaje.
                                </div>
                            </div>
                            <div class="col-6">
                                <label for="surname" class="form-label">
                                    Apellido/s
                                </label>
                                <input type="text" id="surname" v-model="form.surname" class="form-control"
                                    aria-describedby="surnameHelpBlock">
                                <div id="surnameHelpBlock" class="form-text">
                                    Ingresá todos los apellidos que aparezcan en tu documento de viaje.
                                </div>
                            </div>
                            <div class="col-4">
                                <label for="nationality" class="form-label">Nacionalidad</label>
                                <select class="form-select" aria-label="Default select example" name="nationality"
                                    v-model="form.nationality">
                                    <option v-for="pais,i in paises" :key="i">
                                        {{ pais }}
                                    </option>
                                </select>
                            </div>
                            <div class="col-3">
                                <label for="doc_type" class="form-label">Tipo documento</label>
                                <select class="form-select" aria-label="Default select example" name="doc_type"
                                    v-model="form.doc_type">
                                    <option value="dni" selected>
                                        DNI
                                    </option>
                                    <option value="pasaport">
                                        Pasaporte
                                    </option>
                                </select>
                            </div>
                            <div class="col-5">
                                <label for="doc_num" class="form-label">
                                    Número
                                </label>
                                <input type="text" id="doc_num" v-model="form.doc_num" class="form-control"
                                    aria-describedby="doc_numHelpBlock" placeholder="XX XXXX-XXXX">
                                <div id="doc_numHelpBlock" class="form-text">
                                    Sin puntos ni espacios. Tal cual figura en el documento.
                                </div>
                            </div>
                            <div class="col-3">
                                <label for="sex" class="form-label">Sexo</label>
                                <select class="form-select" aria-label="Default select example" name="sex"
                                    v-model="form.sex">
                                    <option value="0" selected>
                                        Seleccione...
                                    </option>
                                    <option value="F">
                                        Femenino
                                    </option>
                                    <option value="M">
                                        Masculino
                                    </option>
                                </select>
                            </div>
                            <div class="col-3">
                                <label for="birthdate" class="form-label">Fecha de nacimiento</label>
                                <input type="text" name="birthdate" v-model="form.birthdate" class="form-control"
                                    placeholder="dd/mm/aaaa">
                            </div>
                            <div class="col-6">
                                <label for="email" class="form-label">E-mail</label>
                                <input type="text" name="email" v-model="form.email" class="form-control"
                                    placeholder="nombre@dominio.com">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-section">
                    <div class="form-section-header">
                        <span class="header-text">
                            Forma de pago
                        </span>
                    </div>
                    <div class="form-section-content">
                        <div class="">
                            <div class="form-check d-flex align-items-center">
                                <input checked class="form-check-input me-3" type="radio" name="flexRadioDefault" id="payment">
                                <i class="fa-solid fa-user-tie text-white fa-lg me-3"></i>
                                <label class="form-check-label" for="payment">
                                    Coordinar con un representante de ventas
                                </label>
                            </div>
                            <hr>
                            <h5>
                                Información importante
                            </h5>
                            En cuanto finalices la reserva nos pondremos en contacto para coordinar el pago y así poder emitir la reserva.
                        </div>
                    </div>
                </div>
                <div class="form-section">
                    <div class="form-section-header">
                        <span class="header-text">
                            Datos de facturación
                        </span>
                    </div>
                    <div class="form-section-content">
                        <div class="px-4 py-2 mb-2 d-flex align-items-center border border-secondary br-radius">
                            <i class="fa-solid fa-info-circle text-secondary fa-xl me-4"></i>
                            <i class="text-secondary">
                                Por disposición de la AFIP, la factura tiene que ser emitida a nombre de la persona que
                                realiza el
                                pago.
                            </i>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <label for="tax_situation" class="form-label">
                                    Situación fiscal
                                </label>
                                <select class="form-select type-2" aria-label="Default select example"
                                    name="tax_situation">
                                    <option value="CF">Consumidor final</option>
                                    <option value="RI">Responsable Inscripto</option>
                                    <option value="EX">Exento</option>
                                    <option value="MO">Monotributo</option>
                                </select>
                            </div>
                            <div class="col-12">
                                <label for="use_pax_data" class="form-label">
                                    Utilizar los datos de un pasajero adulto para la facturación:
                                </label>
                                <select class="form-select type-2" aria-label="Default select example"
                                    name="use_pax_data">
                                    <option selected>
                                        Cargar datos manualmente
                                    </option>
                                </select>
                            </div>
                            <div class="col-12">
                                <label for="full_name" class="form-label">
                                    Nombre completo
                                </label>
                                <input type="text" name="full_name" class="form-control">
                            </div>
                            <div class="col-3">
                                <label for="doc_type_billing" class="form-label">
                                    Tipo documento
                                </label>
                                <select class="form-select" aria-label="Default select example" name="doc_type_billing">
                                    <option value="cuil" selected>
                                        CUIL
                                    </option>
                                    <option value="cuit">
                                        CUIT
                                    </option>
                                </select>
                            </div>
                            <div class="col-5">
                                <label for="doc_type_billing" class="form-label">
                                    Número
                                </label>
                                <input type="text" id="doc_type_billing" class="form-control"
                                    aria-describedby="doc_type_billingHelpBlock" placeholder="XX-XXXXXXXX-X">
                                <div id="doc_type_billingHelpBlock" class="form-text">
                                    Sin puntos ni espacios.
                                </div>
                            </div>
                            <div class="col-4">
                                <label for="phone_number" class="form-label">
                                    Teléfono
                                </label>
                                <div class="input-group">
                                    <input type="text" id="phone_number_code" class="form-control"
                                        aria-describedby="phone_numberHelpBlock" placeholder="011">
                                    <input type="text" id="phone_number" class="form-control w-50"
                                        aria-describedby="phone_numberHelpBlock" placeholder="1234-5678">
                                </div>
                                <div id="phone_numberHelpBlock" class="form-text">
                                    Sin puntos, guiones ni espacios.
                                </div>
                            </div>
                            <div class="col-6">
                                <label for="street" class="form-label">
                                    Calle
                                </label>
                                <input type="text" name="street" class="form-control">
                            </div>
                            <div class="col-2">
                                <label for="street_number" class="form-label">
                                    Altura
                                </label>
                                <input type="text" name="street_number" class="form-control">
                            </div>
                            <div class="col-2">
                                <label for="floor" class="form-label">
                                    Piso
                                </label>
                                <input type="text" name="floor" class="form-control">
                            </div>
                            <div class="col-2">
                                <label for="apartment" class="form-label">
                                    Dpto
                                </label>
                                <input type="text" name="apartment" class="form-control">
                            </div>
                            <div class="col-5">
                                <label for="province" class="form-label">
                                    Provincia
                                </label>
                                <select class="form-select" aria-label="Default select example" name="province">
                                    <option selected>
                                        Seleccioná...
                                    </option>
                                </select>
                            </div>
                            <div class="col-5">
                                <label for="city" class="form-label">
                                    Ciudad o localidad
                                </label>
                                <select class="form-select" aria-label="Default select example" name="city">
                                    <option selected>
                                        Seleccioná provincia...
                                    </option>
                                </select>
                            </div>
                            <div class="col-2">
                                <label for="postal_code" class="form-label">
                                    Código postal
                                </label>
                                <input type="text" name="postal_code" class="form-control" placeholder="1234">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-section">
                    <div class="form-section-header">
                        <span class="header-text">
                            Confirmación de información
                        </span>
                    </div>
                    <div class="form-section-content">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="form-check mt-0">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Leí y acepto los términos y condiciones
                                </label>
                            </div>
                            <div>
                                <a class="btn btn-secondary text-primary" @click="book()">
                                    RESERVAR
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        -->
        <div class="col-12 col-md-4 mt-4">
            <div class="row g-0">
                <div class="col-12 col-md-12">
                    <div
                        class="p-4 bg-primary bs-white br-radius info-default d-flex flex-column justify-content-between">
                        <div v-if="paquete.estrellas && paquete.estrellas != 0" class="d-flex gap-2">
                            <i v-for="i in parseInt(paquete.estrellas)" class="fa-solid fa-star " :key="i"></i>
                        </div>
                        <h2 class="ucfirst mt-2 mb-0">{{ paquete.nombre }}</h2>
                        <hr class="my-2">
                        <div>
                            <div>
                                <span v-if="paquete.fecha_salida && formatDate(paquete.fecha_salida)" class="me-2">
                                    <i class="me-2 fa fa-calendar"></i>{{ formatDate(paquete.fecha_salida) }}.
                                </span>-<span class="ms-2" v-if="paquete.duracion && paquete.noches">
                                    <i class="me-2 fa fa-moon"></i>{{ paquete.noches }} noches.
                                </span>
                            </div>
                            <div v-if="paquete.destinos">
                                <i class="me-2 fa fa-plane"></i>{{ paquete.destinos }}
                            </div>
                            <div>
                                <i class="me-2 fa fa-user"></i> {{ paquete.adultos }} adulto/s
                                <span v-if="paquete.menores > 0">, {{ paquete.menores }} menore/s</span>
                                <span v-if="paquete.infantes > 0">, {{ paquete.infantes }} infante/s.</span>
                            </div>
                            <div>
                                <i class="me-2 fa fa-hotel"></i> <span v-if="paquete.alojamiento">
                                    {{ paquete.alojamiento }}</span>
                            </div>
                            <div v-if="paquete.regimen_incluido">
                                <i class="me-2 fa fa-utensils"></i>
                                <span>
                                    <span v-if="paquete.regimen_incluido == 'all_inclusive'">All inclusive</span>
                                    <span v-if="paquete.regimen_incluido == 'media_pension'">Media pensión</span>
                                    <span v-if="paquete.regimen_incluido == 'solo_alojamiento'">Sólo alojamiento</span>
                                </span>
                            </div>
                            <div v-if="paquete.itinerario">
                                <i class="me-2 fa-solid fa-list"></i>
                                {{ paquete.itinerario }}
                            </div>
                        </div>
                        <hr class="my-3">
                        <div class="x-4">
                            <h4 class="">Precio final</h4>
                            <div class="d-flex justify-content-between">
                                <span>Tarifa</span>
                                <span>{{ helpers().formatPrice(paquete.tarifa, 'AR') }}</span>
                            </div>
                            <div class="d-flex justify-content-between">
                                <span>Impuestos</span>
                                <span>{{ helpers().formatPrice(paquete.impuestos, 'AR') }}</span>
                            </div>
                            <div class="d-flex justify-content-end fs-xl">
                                <span class="fw-bold">{{ helpers().formatPrice(paquete.precio_final, 'AR') }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
            color: #FFF;
            padding: 10px 20px;
            font-size: 20px;
            border-radius: $radius $radius 0 0;
        }
    }

    .form-section-content {
        border-radius: $radius;
        color: #FFF;
        background: $bg-primary-gradient;
        padding: 20px;

        .row>div {
            margin-top: 15px;
        }

        .form-text {
            color: #FFF;
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
    color: #FFF;
    @extend .br-sm-radius;
}

//.form-control.type-1,.form-select.type-1{
.form-control {
    border-style: dotted;
    border-color: #FFF;
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