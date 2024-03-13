import {
    defineStore
} from 'pinia'
const URL = "https://omgtravel.aereos.app";

export const usePaquetesStore = defineStore('paquetes', {
    state: () => ({
        paquetes: [],
        paises: [],
        paquete: {},
        ofertas: [],
        filters: {
            precio_min:0,
            precio_max:0,
        },
    }),
    getters: {
        getPaquete(state) {
            return state.paquete
        }
    },
    actions: {
        async fetchPaquetes() {
            fetch(URL+"/api/paquetes-home.php")
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
            fetch(URL+"/api/paises.php")
                .then(response => {
                    return response.json()
                })
                .then(json => {
                    // console.log("response", json);
                    this.paises = json.paises
                })
                .catch(error => console.error(error));
        },
        async fetchPaquetesOferta() {
            fetch(URL+"/api/paquetes-home.php?tipo=oferta")
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
        async fetchPaquetesParametros(params) {
            fetch(URL+"/api/paquetes-home.php?"+params)
                .then(response => {
                    // console.log("response",response);
                    return response.json()
                })
                .then(json => {
                    this.paquetes = json.paquetes
                    this.filters = json.filters
                })
                .catch(error => console.error(error));
        },
        async fetchPaquete(codigo) {
            fetch(URL+"/api/paquetes-home.php?codigo=" + codigo)
                .then(response => {
                    return response.json()
                })
                .then(json => this.paquete = json.paquetes[0])
                .catch(error => console.error(error));
        },
    },
})