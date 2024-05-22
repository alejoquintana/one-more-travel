<template>
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
</template>