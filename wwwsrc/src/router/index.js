import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/components/auth'
import Home from '@/components/home'
import Keeps from '@/components/keeps'
import Vaults from '@/components/vaults'
import KeepDetail from '@/components/KeepDetail'
import VaultDetail from '@/components/VaultDetail'
import MyKeeps from '@/components/Mykeeps'

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
    path: '/MyKeeps',
    name: 'MyKeeps',
    component: MyKeeps,
  },
    {
      path: '/Vaults',
      name: 'Vaults',
      component: Vaults,
    },
    {
      path: '/KeepDetail',
      name: 'KeepDetail',
      component: KeepDetail
    },
  {
    path: '/VaultDetail',
    name: 'VaultDetail',
    component: VaultDetail
  },
  ]
})
