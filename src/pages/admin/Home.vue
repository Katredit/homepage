<template>
    
    <div class="pages-admin-home">

        <div class="title"><b>Admin panele hoşgeldin!</b></div>
        <div class="description gray">Ne ile başlayalım?</div>

        <div class="pages">
            <button class="page" :class="{'active-btn' : selectPage == page.page}" v-for="page in components" :key="page.name" @click="selectPage = page.page">{{page.name}}</button>
        </div>

        <br>

        <edit-projects v-if="selectPage == 'edit-projects'"></edit-projects>
        <edit-users v-if="selectPage == 'edit-users'"></edit-users>
        <edit-products v-if="selectPage == 'edit-products'"></edit-products>

    </div>

</template>

<script>
import {adminMixin} from '../../mixins/adminMixins'
import editProducts from './components/products.vue'
import editProjects from './components/projects.vue'
import editUsers from './components/users.vue'

export default {
    // mixins : [adminMixin],
    data(){
        return {
            selectPage : 'edit-projects',
            components : [
                {name : 'Projeler' , page : 'edit-projects'},
                {name : 'Ürünler' , page : 'edit-products'},
                {name : 'Kullanıcılar' , page : 'edit-users'},
            ]
        }
    },
    methods : {
        logout(){
            this.$store.dispatch('logout')
        }
    },
    components : {
        editProducts,
        editProjects,
        editUsers,
    }
}
</script>

<style scoped>

    .description{
        position: relative;
        margin-top: 15px;
        font-size: 15px;
    }

    .pages{
        position: relative;
        width: 100%;
        margin-top: 10px;
    }

    .page{
        border: none;
        outline: none;
        color: #fff;
        background: #3B3B3E;
        font-family: 'Inter';
        font-size: 14px;
        padding: 8px 14px;
        border-radius: 4px;
        margin-right: 5px;
        transition: .15s;
    }

    .page:hover{
        background: dodgerblue;
    }

    .active-btn{
        background: dodgerblue;
    }

</style>