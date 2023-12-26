import {
    fileURLToPath,
    URL
} from 'node:url'

import {
    defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
//import { VueMq } from 'vue3-mq'


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        // VueMq({
        //     breakpoints: { // default breakpoints - customize this
        //         sm: 450,
        //         md: 1250,
        //         lg: Infinity,
        //     },
        //     defaultBreakpoint: 'sm' // customize this for SSR
        // }),
        // VueMq({
        //     defaultBreakpoint: 'mobile',
        //     breakpoints: {
        //         mobile: 0,
        //         tabletSmall: 768,
        //         tablet: 960,
        //         desktop: 1025
        //     }
        // }),
    ],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "/src/assets/scss/_variables.scss";@import "/src/assets/scss/custom-styles.scss";`,
            }
        }
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src',
                import.meta.url))
        }
    }
})