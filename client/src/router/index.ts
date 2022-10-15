import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Profil from '../views/Profil.vue'
import EditareProdus from '../views/EditareProdus.vue'
import CautareProduse from '../views/CautareProduse.vue'
import DetaliiProduse from '../views/DetaliiProdus.vue'
import CosCumparaturi from '../views/CosCumparaturi.vue'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/profil',
    name: 'Profil',
    component: Profil
  },

  {
    path: '/editareProdus',
    name: 'EditareProdus',
    component: EditareProdus
  },
  {
    path: '/cautareProduse',
    name: 'cautareProduse',
    component: CautareProduse
  },
  {
    path: '/detalii',
    name: 'detalii',
    component: DetaliiProduse
  },
  {
    path: '/cos',
    name: 'cos',
    component: CosCumparaturi
  },
  {
    path: '/about',
    name: 'About',

    component: () => import( '../views/Register.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
