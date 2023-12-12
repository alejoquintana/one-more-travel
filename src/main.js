import './assets/scss/main.scss'


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/scss/custom.scss'

import App from './App.vue'
import router from './router'

// import {VueMq} from 'vue3-mq'


const app = createApp(App)

const MQ = window.screen.width;
let mq = {sm:false,md:false,lg:false}
if (MQ < 576) mq.sm = true
//else if (MQ >= 576) mq = "md"
else mq.lg = true
app.config.globalProperties.$mq = mq

app.use(createPinia())
app.use(router)

// app.use(VueMq, {
//     breakpoints: {
//         sm: 450,
//             md: 1250,
//             lg: Infinity,
//     },
//     defaultBreakpoint: 'sm' // customize this for SSR

// })

app.mount('#app')
