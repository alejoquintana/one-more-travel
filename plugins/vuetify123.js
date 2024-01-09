import {
    createVuetify,
} from 'vuetify'

import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default createVuetify({
    components,
    directives,
    theme: {
        themes: {
            light: {
                dark: false,
                colors: {
                    primary: "#FF0000", // #E53935
                    secondary: "#FF00FF", // #E53935
                }
            },
        },
    },
})