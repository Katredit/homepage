<template>
    
    <div class="pages-login">

        <div class="center">

            <div class="title-2"><b>Naber? <span class="gray">Hadi giriş yapalım!</span></b></div>

            <br>
            <input v-model="username" name="username" type="text" placeholder="Kullanıcı adı">
            <br>
            <input v-model="password" name="password" type="password" placeholder="Şifre">
            <br>

            <button class="primary" @click="login()">Giriş yap --></button>
            <br>
            <button class="primary register" @click="register()">Hesabın yok mu? --></button>

        </div>

    </div>

</template>

<script>
import {bannerMixin} from '../../mixins/bannerMixin'
export default {
    name : 'bannerLogin',
    mixins : [bannerMixin],
    data(){
        return {
            username : '',
            password : '',
        }  
    },
    methods : {
        login(){
            this.$store.dispatch('login' , {
                rotate : 'banner',
                username : this.username,
                password : this.password
            })
        },
        register(){
            this.$router.push({name : 'bannerRegister'})
        }
    }
}
</script>