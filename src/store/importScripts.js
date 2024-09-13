import {
    defineStore
} from 'pinia'
import {
    usePaquetesStore
} from './paquetes'

const URL = "https://onemoretravel.aereos.app";

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
            // if (!this.FlightEngine) {
                let recaptchaScript = document.createElement('script')
                recaptchaScript.setAttribute('src', 'https://onemoretravel.aereos.app/aereos.onemore.app.min.js?v=' + Date.now())
                document.body.appendChild(recaptchaScript)
            // }
            let vm = this

            setTimeout(async function () {
                let interval_ = setInterval(async () => {
                    if (typeof callInitEngine == 'function') {
                        await callInitEngine()
                        clearInterval(interval_);
                    }
                },500)
                // interval_()
                vm.FlightEngine = true
            }, 1500)
        },
        async fetchReserva(obj = null) {
            console.log("obj", obj);
            if (!this.Reserva) {
                let recaptchaScript = document.createElement('script')
                recaptchaScript.setAttribute('src', URL+'/reserva.onemore.app.js?v=' + Date.now()+'&paquete='+obj.paquete)
                document.body.appendChild(recaptchaScript)
            }
            let vm = this
            setTimeout(async function () {
                let interval_ = setInterval(async () => {
                    if (typeof callInitReserva == 'function') {
                        await callInitReserva()
                        clearInterval(interval_);
                    }
                },500)
                // interval_()
                vm.Reserva = true
            }, 1000)
        },
        async fetchPaquetesfilter() {
            if (!this.Paquetesfilter) {
                let recaptchaScript = document.createElement('script')
                recaptchaScript.setAttribute('src', URL+'/paquetes.filters.onemore.app.js?v=' + Date.now())
                document.body.appendChild(recaptchaScript)
            }
            let vm = this
            setTimeout(async function () {
                let interval_ = setInterval(async () => {
                    if (typeof callInitPaquetesfilter == 'function') {
                        await callInitPaquetesfilter()
                        clearInterval(interval_);
                    }
                }, 500)
                // interval_()
                // await callInitPaquetesfilter()
                vm.Paquetesfilter = true
            }, 1000)
        },
    },
})