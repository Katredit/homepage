<template>

    <div class="pages-projects">

        <div class="title"><b>Projelerim</b></div>
        <div class="description gray">Bu alanda şu ana kadar geliştirdiğim veya geliştirmeye devam ettiğim projelerimi görüntüleyebilirsiniz.</div>

        <div class="projects">

            <div class="project" v-for="project in projects" :key="project.id">
                <div class="texts">
                    <div class="title-3"><b>{{project.title}}</b></div>
                    <div class="description gray markdown">
                        <vue-marked>
                            {{project.description}}
                        </vue-marked>
                    </div>
                    <button class="primary" @click='readMore(project.id)'>Devamını oku</button>
                </div>
                <img :src="project.thumbnail">
            </div>

        </div>

    </div>

</template>

<script>
import VueMarked from 'vue-marked';
export default {
    name : 'Projects',
    data(){
        return{
            projects : []
        }
    },
    methods: {
        readMore(slug){
            this.$router.push('/projects/'+slug);
        }
    },
    created(){
        this.$store.dispatch('getProjects').then((res) => {
            this.projects = res;
        });
    },
    components: {
        VueMarked
    }
}
</script>

<style scoped>

    .description{
        position: relative;
        margin-top: 15px;
        font-size: 15px;
    }

    .projects{
        margin-top: 50px;
    }

    .project{
        width: 100%;
        height: 18.5vw;
        background: rgba(255, 255, 255, .05);
        border-radius: 16px;
        margin-bottom: 40px;
    }

    .project .texts{
        float: left;
        padding: 15px 20px;
        width: 47%;
    }

    .texts .description{
        position: relative;
        height: 12vw;
        margin-top: 10px;
        font-size: 15px;
        overflow: auto;
        overflow-x: hidden;
    }

    .description img{
        width: 100%;
    }

    .texts button{
        position: relative;
        width: 50%;
        left: 25%;
        top: 15px;
        outline: none;
        border: none;
        color: #fff;
        border-radius: 8px;
        height: 35px;
        font-family: 'Inter';
        transition: .2s;
    }

    .project img{
        height: 100%;
        float: right;
        border-top-right-radius: 16px;
        border-bottom-right-radius: 16px;
    }

    @media only screen and (max-width: 1600px) {
        .texts .description{
            height: 11vw;
        }
    }

    @media only screen and (max-width: 1440px) {
        .texts .description{
            height: 10vw;
        }
    }

    @media only screen and (max-width: 1024px) {
        .texts .description{
            height: 8vw;
        }

        .project .texts{
            width: 45%;
        }

        .texts button{
            height: 30px;
        }
    }

    @media only screen and (max-width: 900px) {

        .project{
            height: 20vw;
        }

        .project .texts{
            width: 40%;
        }

        .texts .description{
            height: 7vw;
            font-size: 12px;
        }

        .title-3{
            font-size: 17px;
        }

        .texts button{
            height: 25px;
            width: 40%;
            left: 30%;
            top: 17px;
            font-size: 11px;
        }
    }

    @media only screen and (max-width: 768px) {

        .project{
            height: 20vw;
        }

        .project .texts{
            width: 50%;
        }

        .texts .description{
            height: 7vw;
            font-size: 12px;
        }

        .title-3{
            font-size: 17px;
        }

        .texts button{
            height: 25px;
            width: 30%;
            left: 35%;
            top: 17px;
            font-size: 11px;
        }
    }

    @media only screen and (max-width: 700px) {

        .project{
            width: 100%;
            height: 150px;
        }

        .project .texts{
            width: calc(100% - 20px);
        }

        .project img{
            display: none;
        }

        .texts .description{
            height: 60px;
            font-size: 12px;
        }

        .title-3{
            font-size: 17px;
        }

        .texts button{
            height: 25px;
            width: 40%;
            left: 30%;
            top: 10px;
            font-size: 11px;
        }
    }

</style>