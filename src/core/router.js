import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home.vue';
import Projects from '../pages/projects/Projects.vue';
import projectDetails from '../pages/projects/projectDetails.vue';
import projectEdit from '../pages/projects/projectEdit.vue';

import adminHome from '../pages/admin/Home.vue';
import adminLogin from '../pages/admin/Login.vue';

Vue.use(Router);

const routes = [
    {path : '/' , component : Home , name : 'Home'},
    {path : '/projects' , component : Projects , name : 'Projects'},
    {path : '/projects/:id' , component : projectDetails , name : 'projectDetails'},
    {path : '/admin' , component : adminHome , name : 'adminHome'},
    {path : '/admin/login' , component : adminLogin , name : 'adminLogin'},
    {path : '/admin/projects/edit/:id' , component : projectEdit , name : 'projectEdit'},
]

const router = new Router({
    routes,
});

export default router