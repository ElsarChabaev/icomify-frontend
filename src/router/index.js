import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/kontaktformular',
    name: 'Kontaktformular',
    component: () => import(/* webpackChunkName: "Kontaktformular" */ '../views/KontaktFormular.vue')
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: () => import(/* webpackChunkName: "Impressum" */ '../views/Impressum.vue')
  },
  {
    path: '/datenschutz',
    name: 'Datenschutz',
    component: () => import(/* webpackChunkName: "Datenschutz" */ '../views/Datenschutz.vue')
  },
  {
    path: '/allgemeineGeschaeftsbedingungen',
    name: 'Agbs',
    component: () => import(/* webpackChunkName: "Agbs" */ '../views/Agbs.vue')
  },
  {

    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "About" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
