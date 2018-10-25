import Vue from 'vue'
import Router from 'vue-router'

//pages
import Home from '@/components/Home'
import Login from '@/components/Login'
import About from '@/components/About'
import Upa from '@/components/Upa'
import Fluxo from '@/components/Fluxo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/upa/:id',
      name: 'Upa',
      component: Upa
    },
    {
      path: '/fluxo',
      name: 'Fluxo',
      component: Fluxo
    },
    {
      path: '/sobre-nos',
      name: 'About',
      component: About
    }
  ]
})
