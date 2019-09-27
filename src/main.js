import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import { routes } from './routes'

import 'bootstrap' // Import js file
import 'bootstrap/dist/css/bootstrap.min.css' // Import css file

Vue.use(VueResource)
Vue.http.options.root = 'https://vue-stocktrader-25887.firebaseio.com/'

Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString()
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
}).$mount('#app')
