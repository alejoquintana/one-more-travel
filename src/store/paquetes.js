import {
    defineStore
} from 'pinia'
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
            fetch(URL + "/api/paquetes-home.php")
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
            fetch(URL + "/api/paquetes-home.php?tipo=oferta&limit="+limit)
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
            fetch(URL + "/api/paquetes-home.php?" + params)
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
            fetch(URL + "/api/paquetes-home.php?tipo=home")
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
            fetch(URL + "/api/paquetes-home.php?codigo=" + codigo)
                .then(response => {
                    return response.json()
                })
                .then(json => this.paquete = json.paquetes[0])
                .catch(error => console.error(error));
        },
    },
})