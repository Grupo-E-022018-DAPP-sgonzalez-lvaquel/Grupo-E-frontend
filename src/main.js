import 'es6-promise/auto'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import { sync } from 'vuex-router-sync'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'

import AppView from './App.vue'

Vue.use(Vuetify)

sync(store, router)

// Start out app!
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(AppView),
  template: '<App/>'
})
