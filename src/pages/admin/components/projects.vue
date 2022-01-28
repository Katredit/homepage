<template>
    
    <div class="pages-edit-projects">
        <span class="title-3"><b>Admin panele hoşgeldin!</b></span>
        <br>
        <br>
        <button class="primary default-btn" @click="projectCreate()">Yeni proje oluştur!</button>
        <div class="search">
            <input type="text">
            <i class="fal fa-search"></i>
        </div>

        <div class="projects">

            <div class="project table">
                <div class="name"><b>Başlık</b></div>
                <div class="little-description"><b>Açıklama</b></div>
                <div class="process"><b>Düzenle/Sil</b></div>
            </div>

            <div class="project" v-for="project in projects" :key="project.name">
                <div class="name"><span>{{project.title}}</span></div>
                <div class="little-description"> {{project.description | sliceText}} </div>
                <div class="process">
                    <button class="primary default-btn" @click="projectEdit(project.id)">Düzenle</button> 
                    <button class="danger default-btn" @click="projectDelete(project.id)">Sil</button>
                </div>
            </div>

        </div>

    </div>

</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            projects : [],
        }
    },
    created(){
        this.loadProjects();
    },
    methods : {
        loadProjects(){
            this.$store.dispatch('getProjects').then((res) => {
                this.projects = res;
            });
        },
        projectEdit(id){
            this.$router.push({name : 'projectEdit' , params : {id}})
        },
        projectDelete(id){
            axios.post('/admin/project/delete' , {id, token : this.$store.state.token}).then((res) => {
                if(res.err){
                    return console.log(err);
                }

                this.loadProjects()
            })
        },
        projectCreate(){
            axios.post('/admin/project/create' , {token : this.$store.state.token}).then((res) => {
                if(res.err){
                    return console.log(err)
                }

                this.loadProjects()
            })
        }
    },
    filters : {
        sliceText(value){
            return value.length > window.innerWidth / 15 ? value.slice(0 , window.innerWidth / 15)+'...' : value;
        }
    }
}
</script>

<style scoped>

    .projects{
        position: relative;
        margin-top: 35px;
        width: 100%;
    }

    .project{
        position: relative;
        float: none;
        margin-bottom: 15px;
    }

    .project{
        display: flex;
        justify-content: space-between;
    }

    .project div{
        color: #fff;
        position: relative;
        float: left;
        color: #fff;
        text-align: center;
        width: 30%;
        height: 45px;
        /* line-height: 45px; */
    }

    .table div{
        width: 30%;
        background: #3B3B3E;
        line-height: 40px;
        height: 40px;
        border-radius: 6px;
    }

    .project div:nth-child(1), .project div:nth-child(3){
        width: 24%;
    }

    .project div:nth-child(2){
        width: 44%;
    }

    .project div button{
        margin-bottom: 10px;
    }

    .search{
        position: relative;
        float: right;
    }

    @media screen and (max-width: 600px) {
        .project div{
            font-size: 14px;
        }
    }

</style>