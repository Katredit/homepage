<template>
    
    <div class="pages-spotify-confirmation">

        <div class="title-3"><b>Botu kullanmak için oluşturulan hesaplar!</b></div>

        <div class="table">

            <div class="table-div table-title">
                <div class="name"><b>Kullanıcı Adı</b></div>
                <div class="little-description"><b>E-Mail</b></div>
                <div class="process"><b>Onayla/Geri Çevir</b></div>
            </div>

            <div class="table-div" v-for="user in users" :key="user.name">
                <div class="name"><span>{{user.username}}</span></div>
                <div class="little-description"> {{user.email}} </div>
                <div class="process">
                    <button class="primary default-btn" @click='accept(user.username)'>Onayla</button> 
                    <button class="danger default-btn" @click='decline(user.username)'>Reddet</button>
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
            users : [],
            token : '',
        }
    },
    created(){
        this.token = this.$store.state.token;
        this.loadusers();
    },
    methods : {
        loadusers(){
            axios.post('/admin/users' , {token : this.token}).then((response) => {
                this.users = response.data.filter((element) => (element.rotate == 'banner' && !element.spotify));
            })
        },

        accept(username){
            axios.post('/admin/banner/accept' , {token : this.token , username}).then(() => {
                this.loadusers();
            })
        },

        decline(username){
            axios.post('/admin/banner/decline' , {token : this.token , username}).then(() => {
                this.loadusers();
            })
        }
    }
}
</script>

<style scoped>

    .table-div div:nth-child(1), .table-div div:nth-child(3){
        width: 28%;
    }

    .table-div div:nth-child(2){
        width: 32%;
    }

</style>