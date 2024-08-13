//import {ref,computed} from 'vue'
import {defineStore} from 'pinia'
export const useHelpersStore = defineStore('helpers', {
    state: () => ({
        // show_on:'omg'
        // show_on: 'sportclub'
        show_on:'femer'
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
            let api =
                import.meta.env.PROD && this.show_on == 'omg' ? '' : 'https://omgtravel.aereos.app';
            let base = api+"/imgs/"
            if (folder) base = base + folder + '/'
            let res = base + image
            // console.log(`'${res}'`);
            return res
        },
    },
})