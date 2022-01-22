import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home.vue';
import Projects from '../pages/Projects.vue';
import projectDetails from '../pages/projectDetails.vue';

Vue.use(Router);

const routes = [
    {path : '/' , component : Home , name : 'Home'},
    {path : '/projects' , component : Projects , name : 'Projects'},
    {path : '/projects/:id' , component : projectDetails , name : 'projectDetails'},
]

const router = new Router({
    routes,
});

export default router