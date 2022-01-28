<template>

    <div class="app">

        <div class="navbar">

            <div class="brand" @click="activeNav = !activeNav">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="28" height="28" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 8h16M4 16h16"></path>
                </svg>
            </div>

            <div class="navbar-nav" @click="activeNav = true">
                <router-link tag="nav" active-class="active" exact :class="{'nav-hide' : activeNav}" v-for="nav in routers" :key="nav.link" :to="nav.link">{{nav.name}}</router-link>
            </div>

        </div>

        <router-view></router-view>

    </div>

</template>

<script>
export default {
    name : 'app',
    data(){
        return {
            activeNav : true,
            routers : [
                {link : '/' , name : 'Anasayfa'},
                {link : '/projects' , name : 'Projelerim'},
            ]
        }
    }
}
</script>

<style>

    body{
        padding: 0;
        margin: 0;
        background: #18181B;
        font-family: 'Inter', sans-serif;
        overflow: auto;
    }

    *::-webkit-scrollbar,
    *::-webkit-scrollbar-thumb {
        width: 26px;
        border-radius: 13px;
        background-clip: padding-box;
        border: 10px solid transparent;
        color: #B7B7B7;
    }

    *::-webkit-scrollbar-thumb {        
        box-shadow: inset 0 0 0 10px;
    }

    .app{
        position: relative;
        max-width: 1440px;
        margin-left: 15%;
        margin-right: 15%;
        padding-bottom: 15px;
    }

    .navbar{
        margin-top: 40px;
        margin-bottom: 20px;
        height: 40px;
        width: 100%;
        color: #B7B7B7;
    }

    .brand{
        float: left;
        width: 28px;
        margin-right: 6px;
    }

    .navbar-nav{
        position: relative;
        top: 4px;
    }

    .navbar-nav nav{
        color: #B7B7B7;
        cursor: pointer;
        float: left;
        margin-right: 10px;
    }

    .navbar-nav .active{
        display: block;
        color: #fff;
    }

    .nav-hide{
        display: none;
    }

    .title{
        color: #fff;
        font-size: 30px;
    }

    .title-2{
        color: #fff;
        font-size: 27px;
    }

    .title-3{
        color: #fff;
        font-size: 20px;
    }

    .gray{
        color: #B7B7B7;
    }

    .primary{
        background: dodgerblue;
    }

    .primary:hover{
        background: #54aaff;
    }

    .danger{
        background: firebrick;
    }

    .danger:hover{
        background: #c54848;
    }

    .default-btn{
        border: none;
        outline: none;
        color: #fff;
        font-family: 'Inter';
        font-size: 14px;
        padding: 8px 14px;
        border-radius: 4px;
        margin-right: 5px;
        transition: .15s;
    }

    .search{
        width: 25%;
    }

    .search .fal{
        position: absolute;
        color: #B7B7B7;
        left: 5px;
        top: 8px;
        font-size: 16px;
    }

    .search input{
        position: relative;
        outline: none;
        border: none;
        background: #3B3B3E;
        color: #fff;
        width: calc(100% - 56px);
        height: 30px;
        margin-bottom: 10px;
        padding: 0 28px;
        font-family: 'Inter';
        font-size: 15px;
        border-radius: 4px;
        transition: .15s;
    }

    .markdown img{
        max-width: 100%;
    }

    .markdown h1, .markdown h2, .markdown h3, .markdown h4, .markdown h5, .markdown h6{
        color: #fff;
    } 

    code{
        position: relative;
        display: inline-block;
        color: #fff;
        background: #3B3B3E;
        padding: 7px;
        border-radius: 4px;
    }


    @media only screen and (max-width:768px){

        .app{
            position: relative;
            width: 90%;
            margin: 0;
            margin-left: 5%;
        }

    }

</style>