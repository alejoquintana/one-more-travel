import {
    createRouter,
    createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PaquetesView from '../views/PaquetesView.vue'
import PaqueteView from '../views/PaqueteView.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/paquetes',
            name: 'paquetes',
            component: PaquetesView
        },
        {
            path: '/paquetes/:paquete',
            name: 'paquete',
            component: PaqueteView
        },
    ]
})

export default router