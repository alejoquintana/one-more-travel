import './assets/scss/main-styles.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'

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
                    // primary: "#6686FF", // #E53935
                    primary: "#ffb235", // #E53935
                    secondary: "#000000", // #E53935
                    white: "#FFFFFF", // #E53935
                }
            },
        },
    },
})

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import App from './App.vue'
import router from './router'

const app = createApp(App)

const MQ = window.screen.width;
let mq = {sm:false,md:false,lg:false}
if (MQ < 576) mq.sm = true
else mq.lg = true
app.config.globalProperties.$mq = mq

app.use(createPinia())

app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios) // provide 'axios'

app.use(VueSweetalert2);

app.use(router)
app.use(vuetify)

app.mount('#app')