import {
    createRouter,
    createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PaquetesView from '../views/PaquetesView.vue'
import PaqueteView from '../views/PaqueteView.vue'
import PaquetesFiltersView from '../views/PaquetesFiltersView.vue'
import ReservaView from '../views/ReservaView.vue'
import ConfirmarReservaView from '../views/ConfirmarReservaView.vue'

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
            // search=asdasd
            // adultos=3
            // menores=2
            // infantes=3
            // precio_min=93005
            // precio_max=131267
            // transporte=bus
            // regimen_incluido=media_pension
            // estrellas=4
            //http://localhost:5173/paquetes/000/22-03-2024_24-03-2024/1-0-0/123-1900000/aereo/all_inclusive
            path: '/paquetes/:destino/:fecha_rango/:precio_range/:transporte/:regimen',
            name: 'paquetesFilters',
            component: PaquetesFiltersView
        },
        {
            path: '/paquetes/:paquete',
            name: 'paquete',
            component: PaqueteView
        },
        {
            path: '/paquetes/:paquete/reservar',
            name: 'reservar',
            component: ReservaView
        },
        {
            path: '/paquetes/:paquete/confirmacion',
            name: 'confirmacion',
            component: ConfirmarReservaView
        },
    ]
})

export default router