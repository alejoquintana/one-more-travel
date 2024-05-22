//import {ref,computed} from 'vue'
import {defineStore} from 'pinia'

export const useInfoStore = defineStore('info', {
    state: () => ({
        mail: 'ventas@omgtravel.com.ar',
        sociales:[],
        phone: '+54 11 2491 7552',
        socials: [
            {
                icon: "snapchat",
                url: "/",
                name: "snapchat"
            },
            {
                icon: "twitter",
                url: "/",
                name: "twitter"
            },
            {
                icon: "square-facebook",
                url: "/",
                name: "facebook"
            },
            {
                icon: "instagram",
                url: "/",
                name: "instagram"
            },
        ]
    }),
    actions: {
        fetchSociales() {
        }
    },
})