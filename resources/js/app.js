import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './views/App'
import Tasks from './views/Pages/Tasks/Tasks'
import Home from './views/Pages/Home/Home'
import Navbar from './views/Partials/Navbar'
import Footer from './views/Partials/Footer'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/tasks',
            name: 'tasks',
            component: Tasks
        },
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});