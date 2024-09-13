//import {ref,computed} from 'vue'
import {
    defineStore
} from 'pinia'

export const useInfoStore = defineStore('info', {
    state: () => ({
        mail: 'ventas@onemoretravel.com.ar',
        sociales: [],
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
        ],
        contacts: [{
            obj: `<a href="mailto:ventas@onemoretravel.com.ar" style="text-decoration:none;">
                ventas@onemoretravel.com.ar
            </a>`,
            // obj_footer: `<a href="mailto:${info().mail}" style="text-decoration:none;">
            //         ${info().mail}
            //     </a>`,
            icon: 'envelope'
        }, {
            // obj: `<a href="tel:${info().phone}" style="text-decoration:none;">
            //     ${info().phone}
            //     </a>`,
            obj: `<a href="https://wa.me/541124917552" target="_blank" style="text-decoration:none;">
            +54 11 2491 7552
            </a>`,
            icon: 'phone-volume',
        }]
    }),
    actions: {
        fetchSociales() {}
    },
})