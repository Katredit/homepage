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
        <edit-spotify-users v-if="selectPage == 'edit-spotify-users'"></edit-spotify-users>

    </div>

</template>

<script>
import {adminMixin} from '../../mixins/adminMixin'
import editProducts from './components/products.vue'
import editProjects from './components/projects.vue'
import editUsers from './components/users.vue'
import editSpotifyUsers from './components/spotify.vue'

export default {
    mixins : [adminMixin],
    data(){
        return {
            selectPage : 'edit-projects',
            components : [
                {name : 'Projeler' , page : 'edit-projects'},
                // {name : 'Ürünler' , page : 'edit-products'},
                // {name : 'Kullanıcılar' , page : 'edit-users'},
                {name : 'Banner Kullancıları' , page : 'edit-spotify-users'},
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
        editSpotifyUsers
    }
}
</script>

<style>

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

    .table{
        position: relative;
        margin-top: 35px;
        width: 100%;
    }

    .table-div{
        position: relative;
        float: none;
        margin-bottom: 15px;
    }

    .table-div{
        display: flex;
        justify-content: space-between;
    }

    .table-div div{
        color: #fff;
        position: relative;
        float: left;
        color: #fff;
        text-align: center;
        width: 30%;
        height: 45px;
        /* line-height: 45px; */
    }

    .table-title div{
        width: 30%;
        background: #3B3B3E;
        line-height: 40px;
        height: 40px;
        border-radius: 6px;
    }

    .table-div div:nth-child(1), .table-div div:nth-child(3){
        width: 24%;
    }

    .table-div div:nth-child(2){
        width: 44%;
    }

    .table-div div button{
        margin-bottom: 10px;
    }

    @media screen and (max-width: 600px) {
        .table-div div{
            font-size: 14px;
        }
    }

</style>