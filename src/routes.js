import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home, name: 'home' },
        { path: '/tv', component: ()=> import('./pages/Serials.vue'), name: 'tvs' },
        { path: '/tv/:id', component: ()=> import('./pages/SerialsId.vue'), name: 'tvsid' },
        { path: '/movie', component: ()=> import('./pages/Films.vue'), name: 'movies' },
        { path: '/movie/:id', component: ()=> import('./pages/FilmsId.vue'), name: 'moviesid' },
        { path: '/search', component: ()=> import('./pages/Search.vue'), name: 'search' },
    ],
    linkActiveClass: 'active'
})

export default router;