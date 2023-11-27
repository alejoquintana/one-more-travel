//import {ref,computed} from 'vue'
import {defineStore} from 'pinia'

export const useInfoStore = defineStore('info', {
    state: () => ({
        mail:'OMGtravel@omg.com',
        phone: '+54 11 444 5555',
        socials: [
            {
                icon: "snapchat",
                url: "",
                name: "snapchat"
            },
            {
                icon: "twitter",
                url: "",
                name: "twitter"
            },
            {
                icon: "square-facebook",
                url: "",
                name: "facebook"
            },
            {
                icon: "instagram",
                url: "",
                name: "instagram"
            },
        ]
    }),
    actions: {
    },
})