import { createApp } from 'vue'
import './style.css'
import { createMemoryHistory, createRouter } from 'vue-router'
import AuthPage from '@/pages/AuthPage.vue'
import HomePage from '@/pages/HomePage.vue'
import { RouteNames } from '@/consts/route-names.js'
import App from './App.vue'

const routes = [
    { path: '/', name: RouteNames.HOME, component: HomePage },
    { path: '/auth', name: RouteNames.AUTH, component: AuthPage },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

createApp(App)
    .use(router)
    .mount('#app')
