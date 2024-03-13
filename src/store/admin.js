//import {ref,computed} from 'vue'
import {defineStore} from 'pinia'

export const useAdminStore = defineStore('info', {
    state: () => ({
        sections: [
            {
                icon: "snapchat",
                url: "/paquetes",
                name: "paquetes"
            },
            {
                icon: "snapchat",
                url: "/redes-sociales",
                name: "redes sociales"
            },
        ]
    }),
    actions: {
    },
})