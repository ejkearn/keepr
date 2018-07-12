import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/components/auth'
import Home from '@/components/home'
import Keeps from '@/components/keeps'
import Vaults from '@/components/vaults'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Auth',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/Keeps',
      name: 'Keeps',
      component: Keeps,
    },
    {
      path: '/Vaults',
      name: 'Vaults',
      component: Vaults,
    },
  ]
})
