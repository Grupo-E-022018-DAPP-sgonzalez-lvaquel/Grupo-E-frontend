import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import DetalleApuesta from '@/components/DetalleApuesta'
import Dash from '@/components/Dash'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Dash',
      component: Dash,
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home,
          props: true
        },
        {
          path: 'detalleApuesta',
          name: 'DetalleApuesta',
          component: DetalleApuesta,
          props: true
        }
      ],
      props: true
    }
  ]
})
