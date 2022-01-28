<template>

    <div class="pages-details">

        <div class="title"><b>{{project.title}}</b></div>
        <img :src="project.thumbnail" alt="" class="thumbnail">
        <div class="markdown gray">
            <vue-marked>{{project.description}}</vue-marked>
        </div>

    </div>
    
</template>

<script>
import VueMarked from 'vue-marked'
export default {
    name : 'projectDetails',
    data(){
        return{
            project : {}
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
    components: {
        VueMarked
    }
}
</script>

<style scoped>

    .thumbnail{
        width: 100%;
        margin-top: 10px;
    }

</style>