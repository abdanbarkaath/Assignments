import Vue from 'vue'
import Router from 'vue-router'
import Shoes from './products'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shoes',
      component: Shoes
    }
  ]
})
