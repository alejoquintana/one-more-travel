import './assets/scss/main-styles.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/scss/custom.scss'

//import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import {VCarousel,VCarouselItem} from 'vuetify/components/VCarousel'
// import * as components from "vuetify/components";
// import * as directives from "vuetify/directives";

const vuetify = createVuetify({
    components: {
        VCarousel,
        VCarouselItem,
    },
    // components,
    // directives,
    theme: {
        themes: {
            light: {
                dark: false,
                colors: {
                    primary: "#6686FF", // #E53935
                    secondary: "#01FFC1", // #E53935
                    white: "#FFFFFF", // #E53935
                }
            },
        },
    },
})

import App from './App.vue'
import router from './router'

const app = createApp(App)

const MQ = window.screen.width;
let mq = {sm:false,md:false,lg:false}
if (MQ < 576) mq.sm = true
else mq.lg = true
app.config.globalProperties.$mq = mq

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')