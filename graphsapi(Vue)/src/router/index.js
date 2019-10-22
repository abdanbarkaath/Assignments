import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Weather from '../views/Weather.vue'
import Day from '../components/Day.vue'
import Hour from '../components/Hour.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'login',
    component:Login
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component:Dashboard
  },
  {
    path: '/weather',
    name: 'weather',
    component:Weather,
    children: [
      {
        // A will be rendered in the second <router-view>
        // when /your-sidebar-url/a is matched
        path: '/weather?mode=day',
        name:'day',
        component: Day
      },
      {
        path:'/weather?mode=hour',
        name:'hour',
        component:Hour
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
