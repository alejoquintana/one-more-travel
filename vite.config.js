import {
    fileURLToPath,
    URL
} from 'node:url'

import {
    defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
// import daterangepicker from './plugins/daterangepicker.js'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        // daterangepicker(),
        vue(),
        vuetify({
            //autoImport: true,
            styles: {
                configFile: 'src/assets/scss/main.vuetify.scss',
                //configFile: 'src/styles/settings.scss'
            }
        }),
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
    },
})