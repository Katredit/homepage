import Vue from 'vue'
import axios from 'axios'
import router from './core/router.js'
import store from './core/store.js'
import App from './App.vue'

axios.defaults.baseURL = 'http://localhost:3000'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
