<template>

    <div class="pages-details">

        <input type="text" class="title" v-model="project.title" placeholder="Lütfen Başlık Giriniz!">
        <br>
        <input type="text" v-model="project.thumbnail">
        <img :src="project.thumbnail" alt="" class="thumbnail">
        <textarea cols="30" rows="10" v-model="project.description"></textarea>
        <div class="markdown gray">
            <vue-marked>{{project.description}}</vue-marked>
        </div>

        <button class="primary default-btn" @click="editProject()">Kaydet</button>

    </div>
    
</template>

<script>
import {adminMixin} from '../../mixins/adminMixin'
import axios from 'axios'
import VueMarked from 'vue-marked'

export default {
    name : 'projectEdit',
    mixins : [adminMixin],
    data(){
        return{
            project : {},
        }
    },
    methods : {
        editProject(){
            axios.post('/admin/project/update' , {project: this.project, id : this.$route.params.id, token : this.$store.state.token}).then((res) => {
                if(res.err){
                    return console.log(err);
                }

                this.$router.push({name : 'adminHome'});
            })
        }
    },
    created(){
        if(this.$store.state.projects.length <= 0){
            this.$store.dispatch('getProjects' , this.$route.params.id).then((res) => {
                this.project = res;
            })
        }else{
            this.project = this.$store.getters.getProjectFromID(this.$route.params.id);
        }
    },
    components : {
        VueMarked
    }
}
</script>

<style scoped>

    .thumbnail{
        width: 100%;
        margin-top: 10px;
    }

    .default-btn{
        position: relative;
        width: 50%;
        height: 45px;
        left: 25%;
        margin-top: 15px;
        margin-bottom: 15px;
    }

    input, textarea{
        width: 100%;
        position: relative;
        outline: none;
        border: none;
        background: none;
        color: #fff;
        height: 30px;
        margin-bottom: 10px;
        font-family: 'Inter';
        font-size: 15px;
        border-radius: 4px;
        transition: .15s;
        background: #3B3B3E;
    }

    textarea{
        width: calc(100% - 50px);
        height: 400px;
        padding: 25px;
        resize: none;
        margin-top: 15px;
    }

    .title{
        font-size: 30px;
        font-weight: bold;
    }

</style>