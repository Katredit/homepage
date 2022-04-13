import Vue from 'vue'
import axios from 'axios'
import router from './core/router.js'
import store from './core/store.js'
import App from './App.vue'

axios.defaults.baseURL = 'https://ardadonmez.herokuapp.com'
// axios.defaults.baseURL = 'http://localhost:3000'

axios.interceptors.response.use((response) => {
    if(response.data.redirect){
        router.push({name : response.data.redirect});
    }
    return response;
}, (error) => {
    return Promise.reject(error.message);
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});