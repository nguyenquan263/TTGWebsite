import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/admin/Login.vue'
import Manage from '../views/admin/Manage.vue'
import Client from '../views/client/Client.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/manage',
    name: 'manage',
    component: Manage
  },
  {
    path: '/',
    name: 'client',
    component: Client
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
