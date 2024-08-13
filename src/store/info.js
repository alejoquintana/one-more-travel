//import {ref,computed} from 'vue'
import {defineStore} from 'pinia'

export const useInfoStore = defineStore('info', {
    state: () => ({
        mail: 'ventas@onemoretravel.com.ar',
        sociales:[],
        phone: '+54 11 2491 7552',
        socials: [
            // {
            //     icon: "snapchat",
            //     url: "/",
            //     name: "snapchat"
            // },
            // {
            //     icon: "twitter",
            //     url: "/",
            //     name: "twitter"
            // },
            {
                icon: "square-facebook",
                url: "https://www.facebook.com/onemoretravel.ar/",
                name: "facebook"
            },
            {
                icon: "instagram",
                url: "https://www.instagram.com/onemoretravel.ar/",
                name: "instagram"
            },
        ]
    }),
    actions: {
        fetchSociales() {
        }
    },
})