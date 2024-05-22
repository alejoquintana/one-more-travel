import {
    defineStore
} from 'pinia'
import {
    usePaquetesStore
} from './paquetes'

const URL = "https://omgtravel.aereos.app";

export const useImportScriptsStore = defineStore('importScripts', {
    state: () => ({
        FlightEngine: false,
        Reserva: false,
        Reserva: false,
    }),
    getters: {

    },
    actions: {
        async fetchFlightEngine() {
            if (!this.FlightEngine) {
                let recaptchaScript = document.createElement('script')
                recaptchaScript.setAttribute('src', URL+'/aereos.omg.app.min.js?v=' + Date.now())
                document.body.appendChild(recaptchaScript)
            }
            let vm = this
            setTimeout(async function () {
                await callInitEngine()
                vm.FlightEngine = true
            }, 1000)
        },
        async fetchReserva(obj = null) {
            console.log("obj", obj);
            if (!this.Reserva) {
                let recaptchaScript = document.createElement('script')
                recaptchaScript.setAttribute('src', URL+'/reserva.omg.app.js?v=' + Date.now()+'&paquete='+obj.paquete)
                document.body.appendChild(recaptchaScript)
            }
            let vm = this
            setTimeout(async function () {
                await callInitReserva()
                vm.Reserva = true
            }, 1000)
        },
        async fetchPaquetesfilter() {
            if (!this.Paquetesfilter) {
                let recaptchaScript = document.createElement('script')
                recaptchaScript.setAttribute('src', URL+'/paquetes.filters.omg.app.js?v=' + Date.now())
                document.body.appendChild(recaptchaScript)
            }
            let vm = this
            setTimeout(async function () {
                await callInitPaquetesfilter()
                vm.Paquetesfilter = true
            }, 1000)
        },
    },
})