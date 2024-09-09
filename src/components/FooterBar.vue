<template>
    <div class="mt-5" style="background-color: #EEE;">
        <NavBar :footer="true" />
        <div class="d-flex justify-content-center">
            <v-row no-gutters class="max-width px-3 px-lg-0 pb-3">
                <v-col cols="12" md="4">
                    <span class="fs-md">
                        2022-{{ new Date().getFullYear() }} © ONE MORE Travel. All Rights Reserved.
                    </span>
                </v-col>
                <v-col cols="6" md="4" class="text-center">
                    <span class="cursor-pointer fs-md" @click="openModal">Términos y condiciones de uso</span>
                </v-col>
                <v-col cols="6" md="4" class="d-flex justify-content-end">
                    <img src="https://onemoretravel.aereos.app/images/cuatrolados-logo-black.png" alt="Logo de Cuatro Lados"
                        style="max-height: 27px;">
                </v-col>
            </v-row>
        </div>
        <!-- <div class="max-width py-4 d-flex justify-content-between align-items-center">
        </div> -->
        <Transition name="fade">
            <modal-container v-if="showModal" @closeModal="closeModal">
                <div class="text-white m-4 p-4 fs-md">
                    <h2>
                        CONDICIONES GENERALES
                    </h2>
                    <br>
                    NUESTRA EMPRESA OPERA BAJO LAS CONDICIONES GENERALES DEL MINISTERIO DE TURISMO Y DEPORTES. LOS
                    SERVICIOS TURÍSTICOS DETALLADOS EN LA CORRESPONDIENTE SOLICITUD DE RESERVA FORMAN PARTE INTEGRAL DE
                    LAS CONDICIONES GENERALES DEL CONTRATO DE SERVICIOS TURÍSTICOS.
                    <br>
                    <br>
                    Responsabilidad:
                    <br>
                    <strong>ONE MORE TRAVEL S.A. CUIT N° 30-715753481-2 con domicilio legal en Cerrito 1070, Piso 7° Of.
                        “116”</strong>
                    reviste la calidad de Empresa de Viajes y Turismo, declara expresamente que actúa en su carácter de
                    intermediario en la reserva o contratación de los distintos servicios vinculados e incluídos en el
                    respectivo tour o los detallados en la solicitud de servicios: hoteles, restaurantes, medios de
                    transporte, etc., es decir, los prestadores de los servicios, - según lo establece la Ley 18829
                    reguladora de las actividades turísticas -, por lo cual en ningún caso actúa por cuenta propia. La
                    empresa declina, por esta razón, a toda responsabilidad por deficiencia en la presentación de
                    cualquiera de estos servicios como así también por los daños y perjuicios que pudieran sufrir los
                    pasajeros en las personas o en sus bienes cualquiera fuera de la causa que los origine, alteración
                    de horarios, postergaciones, cancelaciones, o modificaciones de los equipos utilizados por las
                    empresas transportadoras o sobreventa de las mismas, deterioro, pérdida o extravío de equipaje,
                    etc., ya que esta responsabilidad es exclusiva de los prestadores de los servicios; todo esto
                    siempre que nuestra Empresa haya actuado con la previsión diligencias debidas en la reserva o
                    contratación de los referidos servicios. La empresa tampoco se responsabiliza por los hechos que se
                    produzcan por caso fortuito y/o fuerza mayor, fenómenos climáticos o hechos de la naturaleza, antes
                    o durante el desarrollo del tour, que impidan, demoren o de cualquier modo obstaculicen la ejecución
                    total o parcial de las prestaciones organizadas y/o reservadas por la Empresa, de conformidad con lo
                    dispuesto por el Código Civil, ni por las pérdidas o gastos que todas las situaciones arriba
                    detalladas pudieran provocar.
                    <br>
                    <br>
                    Solicitudes de reservas y pagos:
                    <br>
                    1. Las solicitudes de reserva de servicios turísticos requieren efectuarse con el pago de un importe
                    no menor al 10% del precio total del tour o reserva de servicios turísticos.
                    2. Todos los importes pagados antes de la confirmación definitiva de los servicios son percibidos en
                    concepto de reserva y no implican confirmación de los mismos ni de su precio.
                    3. Con la confirmación definitiva de los servicios y de su precio final, el o los solicitantes
                    deberán abonar dentro de las 24 hs. el saldo final resultante. La empresa emitirá los
                    correspondientes pasajes y/o ordenes de servicios y su facturación.
                    4. Todos los pagos efectuados por medios electrónicos quedan sujetos a la verificación de su
                    efectiva acreditación.
                    5. Las operaciones a crédito, deberán satisfacer los requisitos exigidos a las mismas, en su defecto
                    el solicitante deberá cumplimentar el pago final con otro medio de pago y dentro de los plazos
                    establecidos.
                    6. Los precios de los servicios quedan sujetos a modificaciones sin previo aviso cuando se produzcan
                    modificaciones en los costos o en los tipos de cambio.
                    <br>
                    <br>
                    Servicios incluídos:
                    <br>
                    1. Alojamiento en los hoteles indicados en el tour o reservación de servicios y/o de similares
                    características, ocupando habitaciones standard, singles, dobles, triples, etc. según tarifa y
                    servicios elegidos. Pueden también incluirse servicios con tarifas diferenciadas ocupando otros
                    tipos de habitaciones: superiores, lujo, suite, exteriores, interiores, etc. según los hoteles
                    seleccionados.
                    2. La cantidad prevista de días de alojamiento, -noches de hotel-, teniendo en cuenta que el día de
                    alojamiento hotelero se computa desde las quince horas del día de ingreso y finaliza a las doce
                    horas del día siguiente, independientemente de la hora de llegada, de salida y de la utilización
                    completa o fracciones del mismo.
                    3. Régimen o cantidad de comidas, según se indique en cada caso y bajo el sistema de menú fijo,
                    buffet o a la carta. Desayunos tipo continental.
                    4. Transportación en los medios indicados para cada tramo, avión, bus, tren, barco, etc. Las tarifas
                    serán ajustadas de acuerdo a las clases, tipos y modalidades de reservación de las diferentes
                    empresas transportadoras.
                    5. Visitas y excursiones incluyendo o no tickets de ingreso a museos, parques, etc. según se indique
                    en cada caso.
                    6. Traslados desde y hasta terminales y hoteles, - cuando se indique y siempre que el arribo al
                    destino se produzca en el vuelo indicado en el billete de viaje.
                    7. Duración del tour o reservación de servicios, considerando el primer día, el día de partida y
                    como último día, el día de salida del destino final, independientemente del horario de inicio del
                    primer día o el de llegada en el último.
                    8. Tasas de embarque cuando se encuentren incluidas en el billete de transporte, IVA y otros
                    impuestos que estuviesen detallados.
                    9. Todos aquellos servicios que estuvieran expresamente indicados en los respectivos programas
                    conforme a su nombre y/o código.
                    <br>
                    <br>
                    Servicios y otros rubros no incluídos:
                    <br>
                    1. Extras, bebidas, lavado de ropa, propinas, tasas de embarque cuando no se encuentren incluidas en
                    el billete de transporte y otras tasas o impuestos, actuales y/o futuros, ni ningún otro servicio
                    que no se encuentre expresamente indicado.
                    2. Estadías, comidas y/o gastos adicionales o perjuicios producidos por cancelaciones, demoras en
                    las salidas o llegadas de los medios de transporte, o por razones imprevistas ajenas a nuestra
                    empresa.
                    3. El traslado de llegada a un determinado destino - no estará incluído ni será efectuado cuando el
                    arribo por cualquier causa o motivo se produzca en un vuelo diferente al indicado en el billete de
                    viaje.
                    4. Comidas en ruta, excepto aquellas que estuvieran expresamente incluídas en los programas de
                    viaje.
                    5. Los gastos e intereses en operaciones a crédito.
                    6. Gastos de gestión de reservas.
                    7. El 5% de la percepción según resolución RG3819 de AFIP.
                    <br>
                    <br>
                    Documentación:
                    <br>
                    Para viajes al exterior del país, los solicitantes deberán consultar debidamente. Es responsabilidad
                    de la Empresa informar fehacientemente y con anticipación suficiente sobre los requisitos que exigen
                    las autoridades migratorias, aduaneras y sanitarias de los destinos que incluye el tour y de nuestro
                    país. Es responsabilidad exclusiva de los pasajeros contar al momento de ser requerida por las
                    autoridades correspondientes con la documentación personal, como así también por su estado,
                    vigencia, visas, vacunas y otros requerimientos exigibles por el o los países de destino. La Empresa
                    en ningún caso se responsabilizará por las pérdidas y/o perjuicios que estas situaciones les fueran
                    a ocasionar, inclusive en los casos en que autoridades nacionales por alguna razón les impidieron la
                    salida del país. Tampoco será responsable la empresa ante el supuesto que la autoridad extranjera
                    impidiera la entrada al el o los países de destino.
                    <br>
                    <br>
                    Alteraciones o modificaciones:
                    <br>
                    1. La empresa se reserva el derecho, por razones técnicas u operativas de postergar una determinada
                    salida o de alterar total o parcialmente el ordenamiento diario y/o de los servicios que componen el
                    correspondiente tour, antes o durante la ejecución de los mismos.
                    2. Los hoteles indicados tienen carácter informativo, reservándose la empresa el derecho de
                    reemplazarlos siempre que se asigne otro(s) de similares o mejores características. Respecto de
                    estas variaciones el pasajero no tendrá derecho a indemnización alguna.
                    3. Las alteraciones y/o modificaciones serán informadas antes de la partida y en caso de que se
                    asignen servicios diferentes, el interesado podrá optar antes de la partida por la cancelación sin
                    cargo, o bien por la aceptación y consecuente ajuste del precio. Una vez iniciados los servicios, el
                    pasajero no tendrá derecho a reclamación alguna por tales conceptos. Tampoco tendrá derecho a
                    devoluciones o reclamos por aquellos servicios de los que renuncie voluntariamente, inclusive por
                    razones personales de cualquier índole, enfermedad, fallecimiento, etc. corriendo en estos casos,
                    los gastos de regreso por su exclusiva cuenta.
                    4. La empresa podrá anular cualquier tour cuando se configure alguna de las circunstancias previstas
                    en el art. 24 del Decreto N º2182/72, en cuyo caso el solicitante sólo tendrá derecho al reembolso
                    de los importes abonados.
                    <br>
                    <br>
                    Cancelaciones de los solicitantes:
                    <br>
                    1. Cuando se trate de desistimientos que afecten a servicios contratados en firme por la empresa, el
                    reembolso de los mismos estará sujeto a las condiciones contractuales bajo las cuales presten sus
                    servicios los prestadores respectivos. En todos los casos de reintegros , si los hubiere, la empresa
                    retendrá el valor de los gastos incurridos, (gastos directos e indirectos de toda gestión) ,que se
                    establecen en un mínimo equivalente al 12% del valor total del precio de los servicios, en concepto
                    de gastos de gestión, más un 10% del total de los servicios contratados y/o reservados con terceros.
                    2. Para cancelaciones que afecten servicios incluyendo transporte no regular o charter, rige lo
                    estipulado en el punto anterior. Sin perjuicio de ello, en estos casos sólo se reintegrará la
                    proporción del precio correspondiente a los servicios terrestres (hotelería , pensión , excursiones)
                    que determine el organizador según la modalidad con que operen los prestadores de los servicios.
                    Para que esta cláusula sea válida deberá determinarse en el documento entregado al pasajero el tipo
                    de transporte a ser utilizado.
                    3. En caso de desistimiento de operaciones a crédito, además no tendrán reembolso los importes
                    abonados en concepto de gastos de gestión del crédito e impuestos.
                    <br>
                    <br>
                    Derecho de conducta y permanencia:
                    <br>
                    La empresa se reserva el derecho de hacer que abandone el tour en cualquier punto del mismo, a aquel
                    pasajero que por cualquier motivo (conducta, modo de obrar, estado de salud, etc), constituya una
                    molestia para los integrantes del viaje, o pueda malograr el éxito de la excursión o el normal
                    desarrollo de la misma
                    <br>
                    <br>
                    En caso de estar en desacuerdo con alguna de las Condiciones Generales precedentes, el solicitante
                    podrá desistir sin cargo alguno dentro de las 24 hs. posteriores a la presentación de la presente
                    solicitud de reserva de servicios turísticos o de la aceptación on-line de las mismas - para
                    reservas efectuadas a través de nuestra página web. Superado éste plazo la presente será considerada
                    en firme, implicando la aceptación a estas Condiciones Generales, a las particulares de cada tour o
                    reservación de servicios y a las propias de las empresas prestadoras de los servicios
                    intervinientes.
                </div>

            </modal-container>
        </Transition>
    </div>
</template>

<script setup>
import NavBar from '@/components/Nav/NavBar.vue'
import ModalContainer from '@/components/ModalContainer.vue'

import { ref } from 'vue'

const showModal = ref(false)

function openModal() {
    showModal.value = true
}
function closeModal() {
    if (showModal.value) {
        showModal.value = false
    }
}
</script>

<style lang="scss" scoped>
.cursor-pointer.fs-md:hover {
    text-decoration: underline;
    color: $primary;
}
</style>