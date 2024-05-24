import {
    defineStore
} from 'pinia'
import {
    useHelpersStore as helpers
} from './helpers.js'
const URL = "https://omgtravel.aereos.app";

export const usePaquetesStore = defineStore('paquetes', {
    state: () => ({
        paquete: {},
        paquetes: [],
        paquetesByDestinos: [],
        ofertas: [],
        filters: {
            precio_min: 0,
            precio_max: 0,
        },
        paises: [],
    }),
    getters: {
        getPaquete(state) {
            return state.paquete
        },
        getPaqueteByCode: (state) => (code) => {
            console.log("state.paquetes",state.paquetes);
            return state.paquetes.find((paquete) => {
                console.log("", paquete.code);
                return code == paquete.code
            })
        }
    },
    actions: {
        async fetchPaquetes() {
            let sportclub = helpers().sportclub ? '-sportclub' : ''
            fetch(URL + "/api/paquetes"+sportclub+"-home.php")
                .then(response => {
                    // console.log("response",response);
                    return response.json()
                })
                .then(json => {
                    this.paquetes = json.paquetes
                })
                .catch(error => console.error(error));
        },
        async fetchPaises() {
            fetch(URL + "/api/paises.php")
                .then(response => {
                    return response.json()
                })
                .then(json => {
                    // console.log("response", json);
                    this.paises = json.paises
                })
                .catch(error => console.error(error));
        },
        async fetchPaquetesOferta(limit = 3) {
            let sportclub = helpers().sportclub ? '-sportclub' : ''
            fetch(URL + "/api/paquetes"+sportclub+"-home.php?tipo=oferta&limit="+limit)
                .then(response => {
                    // console.log("response",response);
                    return response.json()
                })
                .then(json => {
                    //console.log("json", json);
                    this.ofertas = json.paquetes
                })
                .catch(error => console.error(error));
        },
        async fetchPaquetesSportClub() {
            fetch(URL + "/api/paquetes-sportclub-home.php?limit=25")
                .then(response => {
                    // console.log("response",response);
                    return response.json()
                })
                .then(json => {
                    console.log("json", json);
                    this.ofertas = json.paquetes
                })
                .catch(error => console.error(error));
        },
        async fetchPaquetesParametros(params) {
            let sportclub = helpers().sportclub ? '-sportclub' : ''
            fetch(URL + "/api/paquetes"+sportclub+"-home.php?" + params)
            .then(response => {
                return response.json()
            })
            .then(json => {
                console.log("response json", json);
                this.paquetes = json.paquetes
                this.filters = json.filters
            })
            .catch(error => console.error(error));
        },
        async fetchPaquetesHome() {
            let sportclub = helpers().sportclub ? '-sportclub' : ''
            fetch(URL + "/api/paquetes"+sportclub+"-home.php?tipo=home")
                .then(response => {
                    // console.log("response",response);
                    return response.json()
                })
                .then(json => {
                    console.log("json", json);
                    this.paquetes = json.paquetes
                    this.filters = json.filters
                    this.paquetesByDestinos = json.paquetesByDestinos
                })
                .catch(error => console.error(error));
        },
        async fetchPaquete(codigo) {
            let sportclub = helpers().sportclub ? '-sportclub' : ''
            fetch(URL + "/api/paquetes"+sportclub+"-home.php?codigo=" + codigo)
                .then(response => {
                    return response.json()
                })
                .then(json => this.paquete = json.paquetes[0])
                .catch(error => console.error(error));
        },
    },
})