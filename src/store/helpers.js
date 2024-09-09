//import {ref,computed} from 'vue'
import {defineStore} from 'pinia'
export const useHelpersStore = defineStore('helpers', {
    state: () => ({
        show_on:'one-more'
        // show_on: 'sportclub'
        // show_on:'femer'
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
                import.meta.env.PROD && this.show_on == 'one-more' ? '' : 'https://onemoretravel.aereos.app';
            let base = api+"/images/"
            if (folder) base = base + folder + '/'
            let res = base + image
            // console.log(`'${res}'`);
            return res
        },
    },
})