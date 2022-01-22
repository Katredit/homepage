<template>

    <div class="pages-details">

        <div class="title"><b>{{project.title}}</b></div>
        <img :src="project.thumbnail" alt="" class="thumbnail">
        <div class="description gray">
            <vue-marked>{{project.description}}</vue-marked>
        </div>

    </div>
    
</template>

<script>
import Vue from 'vue';
import VueMarked from 'vue-marked'
export default {
    name : 'projectDetails',
    data(){
        return{
            project : {}
        }
    },
    created(){
        this.project = this.$store.getters.getProjectFromID(1);
    },
    components: {
        VueMarked
    }
}
</script>

<style>

    .description h3{
        color: #fff;
    }

    .description img, .thumbnail{
        width: 100%;
        margin-top: 10px;
    }

</style>