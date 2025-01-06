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
        phone: '+54 11 6589 5993',
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
                url: "https://www.instagram.com/onemoretravel_/",
                name: "instagram"
            },
            {
                icon: "whatsapp",
                url: "https://wa.me/541165895993",
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
            obj: `<a href="tel:+541165895993" target="_blank" style="text-decoration:none;">
            +54 11 6589 5993
            </a>`,
            icon: 'phone-volume',
        }],
        banners: [],
        slider: null,        
        popup: null,      
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
        async fetchPopup() {
            fetch(URL + "/api/popup-home.php")
                .then(response => {
                    // console.log("response",response);
                    return response.json()
                })
                .then(data => {
                    console.log("data", data);
                    this.popup = data
                })
                .catch(error => console.error(error));
        },
    },
})