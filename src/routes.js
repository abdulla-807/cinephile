import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
const basePath = 'https://abdulla-807.github.io/cinephile';
const router = createRouter({
    history: createWebHistory(),
routes: [
  { path: '/', component: Home, name: 'home', alias: basePath },
  { path: '/tv', component: ()=> import('./pages/Serials.vue'), name: 'tvs', alias: basePath + '/tv' },
  { path: '/tv/:id', component: ()=> import('./pages/SerialsId.vue'), name: 'tvsid' },
  { path: '/movie', component: ()=> import('./pages/Films.vue'), name: 'movies', alias: basePath + '/movie' },
  { path: '/movie/:id', component: ()=> import('./pages/FilmsId.vue'), name: 'moviesid' },
  { path: '/search', component: ()=> import('./pages/Search.vue'), name: 'search', alias: basePath + '/search' },
],
    linkActiveClass: 'active'
})

export default router;