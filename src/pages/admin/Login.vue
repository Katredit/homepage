<template>
    
    <div class="pages-admin-login">

        <div class="center">

            <div class="title-2"><b>Naber? <span class="gray">Hadi giriş yapalım!</span></b></div>

            <br>
            <input v-model="username" name="username" type="text" placeholder="Kullanıcı adı">
            <br>
            <input v-model="password" name="password" type="password" placeholder="Şifre">
            <br>

            <button class="primary" @click="login()">Giriş yap --></button>

        </div>

    </div>

</template>

<script>
import {adminMixin} from '../../mixins/adminMixins'
export default {
    name : 'adminLogin',
    mixins : [adminMixin],
    data(){
        return {
            username : '',
            password : '',
        }
    },
    methods : {
        login(){
            this.$store.dispatch('login' , {
                username : this.username,
                password : this.password
            })
        }
    }
}
</script>

<style scoped>

    .center{
        left: 50%;
        top: 50%;
        text-align: center;
    }

    input, button{
        position: relative;
        outline: none;
        border: none;
        background: #3B3B3E;
        color: #B7B7B7;
        width: 25%;
        height: 35px;
        margin-bottom: 10px;
        padding: 0 10px;
        font-family: 'Inter';
        font-size: 15px;
        border-radius: 4px;
        transition: .15s;
    }

    button{
        padding: 0;
        color: #fff;
        margin-top: 10px;
    }

    @media only screen and (max-width: 768px) {
        input, button{
            width: 80%;
        }
    }

</style>