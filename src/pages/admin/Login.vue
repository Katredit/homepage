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

        </div>

    </div>

</template>

<script>
import {adminMixin} from '../../mixins/adminMixin'
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
                rotate : 'admin',
                username : this.username,
                password : this.password
            })
        }
    }
}
</script>