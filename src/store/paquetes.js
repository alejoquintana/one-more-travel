import {
    defineStore
} from 'pinia'
import {
    useHelpersStore as helpers
} from './helpers.js'
const URL = "https://onemoretravel.aereos.app";

export const usePaquetesStore = defineStore('paquetes', {
    state: () => ({
        paquete: {},
        paquetes: [],
        paquetesFiltered: [],
        paquetesByDestinos: [],
        ofertas: [],
        destacados: [],
        filters: {
            precio_min: 0,
            precio_max: 0,
        },
        paises: [],
        regimenes: {
            all_inclusive:'All inclusive',
            solo_alojamiento:'Sólo alojamiento',
            media_pension:'Media pensión',
            desayuno:'Desayuno',
        },
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
            fetch(URL + "/api/paquetes-home.php?show_on=" + helpers().show_on)
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
            fetch(URL + "/api/paquetes-home.php?tipo=oferta&limit=" + limit + "&show_on=" + helpers().show_on)
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
        async fetchPaquetesDestacado(limit = 2) {
            fetch(URL + "/api/paquetes-home.php?tipo=destacado&limit=" + limit + "&show_on=" + helpers().show_on)
                .then(response => {
                    // console.log("response",response);
                    return response.json()
                })
                .then(json => {
                    //console.log("json", json);
                    this.destacados = json.paquetes
                })
                .catch(error => console.error(error));
        },
        async fetchPaquetesSportClub() {
            fetch(URL + "/api/paquetes-home.php?limit=25&show_on=" + helpers().show_on)
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
            console.log("params",params);
            fetch(URL + "/api/paquetes-home.php?" + params + "&show_on=" + helpers().show_on)
            .then(response => {
                return response.json()
            })
            .then(json => {
                console.log("response json", json);
                this.paquetesFiltered = json.paquetes
                this.filters = json.filters
            })
            .catch(error => console.error(error));
        },
        async fetchPaquetesHome() {
            fetch(URL + "/api/paquetes-home.php?tipo=home" + "&show_on=" + helpers().show_on)
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
            fetch(URL + "/api/paquetes-home.php?codigo=" + codigo + "&show_on=" + helpers().show_on)
                .then(response => {
                    return response.json()
                })
                .then(json => this.paquete = json.paquetes[0])
                .catch(error => console.error(error));
        },
    },
})