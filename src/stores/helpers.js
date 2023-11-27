//import {ref,computed} from 'vue'
import {defineStore} from 'pinia'

export const useHelpersStore = defineStore('helpers', {
    state: () => ({
    }),
    actions: {
        formatPrice(price,currency) { //, decPlaces, decSep, thouSep
            return currency+"$"+new Intl.NumberFormat("es-AR").format(price)
            // decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces,
            // decSep = typeof decSep === "undefined" ? "," : decSep;
            // thouSep = typeof thouSep === "undefined" ? "." : thouSep;
            // var sign = price < 0 ? "-" : "";
            // var i = String(parseInt(price = Math.abs(Number(price) || 0).toFixed(decPlaces)));
            // var j = (j = i.length) > 3 ? j % 3 : 0;

            // return sign +
            //     (j ? i.substr(0, j) + thouSep : "") +
            //     i.substr(j).replace(/(\decSep{3})(?=\decSep)/g, "$1" + thouSep) +
            //     (decPlaces ? decSep + Math.abs(price - i).toFixed(decPlaces).slice(2) : "");

            //return "ar$"+price
        },
        getImagePath(image) {
            return "/src/assets/imgs/"+image
        },
    },
})