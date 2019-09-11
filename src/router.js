import Vue from 'vue'
import Router from 'vue-router'
import tabbar from './components/tabbar'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('./views/login.vue')
    }, {
      path: '/register',
      name: 'register',
      component: () => import('./views/register.vue')
    }, {
      path: '/home',
      name: 'home',
      components: {
        default: () => import('./views/index.vue'),
        tabbar: tabbar
      }
    }, {
      path: '/personalCenter',
      name: 'personalCenter',
      components: {
        default: () => import('./views/personalCenter.vue'),
        tabbar: tabbar
      }
    }
  ]
})
