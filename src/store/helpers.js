//import {ref,computed} from 'vue'
import {defineStore} from 'pinia'
let api =
    import.meta.env.PROD ? '' : 'https://omgtravel.aereos.app';
export const useHelpersStore = defineStore('helpers', {
    state: () => ({
    }),
    actions: {
        formatPrice(price, currency = '') {
            let res = new Intl.NumberFormat("es-AR").format(price)
            if (currency) {
                res = currency+' $ '+res
            }
            return res
        },
        getImagePath(image, folder = '') {
            let base = api+"/imgs/"
            if (folder) base = base + folder + '/'
            let res = base + image
            // console.log(`'${res}'`);
            return res
        },
    },
})