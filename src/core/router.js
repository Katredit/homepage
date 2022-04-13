import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home.vue';
import Projects from '../pages/projects/Projects.vue';
import projectDetails from '../pages/projects/projectDetails.vue';
import projectEdit from '../pages/projects/projectEdit.vue';

import adminHome from '../pages/admin/Home.vue';
import adminLogin from '../pages/admin/Login.vue';

import bannerHome from '../pages/bannerCreator/Home.vue';
import bannerLogin from '../pages/bannerCreator/Login.vue';
import bannerRegister from '../pages/bannerCreator/Register.vue';
import bannerAbout from '../pages/bannerCreator/About.vue';
import bannerCallbackTwitter from '../pages/bannerCreator/callback/twitter.vue';

import privateDogan from '../pages/private/doganyildiz.vue'

import Logout from '../pages/Logout.vue';

Vue.use(Router);

const routes = [
    {path : '/' , component : Home , name : 'Home'},
    {path : '/logout' , component : Logout , name : 'Logout'},

    {path : '/projects' , component : Projects , name : 'Projects'},
    {path : '/projects/:id' , component : projectDetails , name : 'projectDetails'},

    {path : '/admin' , component : adminHome , name : 'adminHome'},
    {path : '/admin/login' , component : adminLogin , name : 'adminLogin'},
    {path : '/admin/projects/edit/:id' , component : projectEdit , name : 'projectEdit'},

    {path : '/bannercreator' , component : bannerHome , name : 'bannerHome'},
    {path : '/bannercreator/about' , component : bannerAbout , name : 'bannerAbout'},
    {path : '/bannercreator/login' , component : bannerLogin , name : 'bannerLogin'},
    {path : '/bannercreator/register' , component : bannerRegister , name : 'bannerRegister'},
    {path : '/bannercreator/callback/twitter' , component : bannerCallbackTwitter , name : 'bannerCallbackTwitter'},

    {path : '/private/doganyildiz' , component : privateDogan , name : 'privateDogan'},
]

const router = new Router({
    routes,
});

export default router