//import {ref,computed} from 'vue'
import {
    defineStore
} from 'pinia'
import {
    useHelpersStore as helpers
} from './helpers.js'
const URL = "https://onemoretravel.aereos.app";


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
            {
                icon: "whatsapp",
                url: "https://wa.me/541124917552",
                name: "whatsapp"
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
        }],
        banners: [],
        slider: null,
    }),
    actions: {
        fetchSociales() {},
        async fetchBanners() {
            fetch(URL + "/api/banners-home.php")
                .then(response => {
                    // console.log("response",response);
                    return response.json()
                })
                .then(data => {
                    this.banners = data
                })
                .catch(error => console.error(error));
        },
        async fetchSlider() {
            fetch(URL + "/api/slider-home.php")
                .then(response => {
                    // console.log("response",response);
                    return response.json()
                })
                .then(data => {
                    console.log("data", data);
                    this.slider = data
                })
                .catch(error => console.error(error));
        },
    },
})