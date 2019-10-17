import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Employees from './views/Employees'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'employees',
      component: Employees
    },
    {
      path: '/employees',
      name: 'employees',
      component: Employees
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
