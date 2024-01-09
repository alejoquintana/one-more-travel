import {
    defineStore
} from 'pinia'

export const usePaquetesStore = defineStore('paquetes', {
    state: () => ({
        paquetes: [],
        paquete:{},
    }),
    getters: {
        getPaquete(state) {
            return state.paquete
        }
    },
    actions: {
        async fetchPaquetes() {
            fetch("https://phpstack-627868-4182415.cloudwaysapps.com/api/paquetes-home")
                .then(response => response.json())
                .then(json => this.paquetes = json)
                .catch(error => console.log('Authorization failed : ' + error.message));
        },
        async fetchPaquete(codigo) {
            fetch("https://phpstack-627868-4182415.cloudwaysapps.com/api/paquetes-home?codigo=" + codigo)
                .then(response => response.json())
                .then(json => {
                    console.log("json",json);
                    this.paquete = json[0]
                })
                .catch(error => console.log('Authorization failed : ' + error.message));
        },
    },
})