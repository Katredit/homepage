import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

import {banner} from './modules/banner'

const config = {
    maxAge : {
        banner : 1000 * 60 * 60,
        admin : 1000 * 60 * 10,
        user : 1000 * 60 * 30
    }
}

Vue.use(Vuex);

export default new Vuex.Store({
    modules : {banner},
    state : {
        projects : [],
        token : '',
        inputError : {}
    },
    mutations : {
        setToken(state , token){
            state.token = token
        },
        clearToken(state){
            state.token = ''
        },
        setError(state , error){
            state.inputError = error;
        }
    },
    actions : {

        initAuth({commit, dispatch} , params){

            let token = localStorage.getItem('token');
            if(token){

                if(params.page == 'admin'){

                    let expirationDate = localStorage.getItem('expirationDate');
                    let time = new Date().getTime();

                    if(time >= +expirationDate){
                        return dispatch('logout');
                    }

                    if(localStorage.getItem('admin').toString() == 'true'){
                        axios.post('/admin/check' , {token}).then((response) => {
                            if(!response && !response.data && !response.data.success){
                                return false;
                            }

                            commit('setToken' , token);

                            let timerSecond = +expirationDate - time
                            dispatch('setTimeoutTimer' , timerSecond);

                            if(router.currentRoute.name != 'adminHome')
                                router.push({name : 'adminHome'});

                            return token;
                        });
                    }else{
                        return dispatch('logout');
                    }

                }else{
                    commit('setToken' , token);
                    return token;
                }

            }else{
                router.push({name : params.page+'Login'});
            }

        },

        login({commit , dispatch} , params){
            axios.post('/'+params.rotate+'/login' , params).then((res) => {
                if(res.data.token){
                    commit('setToken' , res.data.token);
                    dispatch('setLoginData' , params)
                    localStorage.setItem('admin' , res.data.admin ? true : false);
                }
            })
        },

        register({commit , dispatch , state} , params){
            axios.post('/'+params.rotate+'/register' , params).then((res) => {

                if(res.data.error){
                    state.inputError = res.data.error;
                }else if(res.data.token){
                    commit('setToken' , res.data.token);
                    dispatch('setLoginData' , params)
                    state.inputError = {};
                }

            })
        },

        setLoginData({state, dispatch} , params){
            localStorage.setItem('token' , state.token);
            localStorage.setItem('admin' , false);

            if(params.rotate == 'admin'){
                localStorage.setItem('expirationDate' , new Date().getTime() + config.maxAge[params.rotate]);
                dispatch('setTimeoutTimer' , config.maxAge[params.rotate])
            }

            router.push({name : params.rotate+'Home'});
        },

        logout({commit}){
            commit('clearToken');
            localStorage.removeItem('token');
            localStorage.removeItem('admin');
            router.push({name : 'Home'});
        },

        setTimeoutTimer({dispatch} , maxAge){
            setTimeout(() => {
                dispatch('logout');
            } , maxAge)
        },

        getProjects({state , getters} , id){

            return axios.get('/projects').then((res) => {
                state.projects = res.data;

                if(id){
                    return getters.getProjectFromID(id);
                }

                return state.projects;

            })

        }

    },
    getters : {

        getProjectFromID: (state) => (id) => {
            return state.projects.length > 0 ? state.projects.find(project => project.id == id) : {error : 'Projeler yüklenemedi!'};
        },

        isAuthenticated(state){
            return state.token !== ''
        }

    }
})