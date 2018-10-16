import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import DetalleApuesta from '@/components/DetalleApuesta'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/detalleApuesta',
      name: 'DetalleApuesta',
      component: DetalleApuesta
    }
  ]
})
