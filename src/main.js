import Vue from 'vue'
import router from './core/router.js'
import store from './core/store.js'
import App from './App.vue'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
