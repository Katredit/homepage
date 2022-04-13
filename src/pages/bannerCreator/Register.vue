<template>
    
    <div class="pages-login">

        <div class="center">

            <div class="title-3"><b>Kayıt olup Twitter hesabını renklendirmeye hazır mısın?</b></div>

            <br>
            <div class="input-box" :class="{'error-box' : error.input == 'username' ? true : false}">
                <input v-model="username" name="username" type="text" placeholder="Kullanıcı adı">
                <br>
                <label class="error-text" for="username">{{error.text}}</label>
            </div>

            <div class="input-box" :class="{'error-box' : error.input == 'email' ? true : false}">
                <input v-model="email" name="email" type="text" placeholder="E-Posta">
                <br>
                <label class="error-text" for="username">{{error.text}}</label>
            </div>

            <div class="input-box" :class="{'error-box' : error.input == 'password' ? true : false}">
                <input v-model="password" name="password" type="password" placeholder="Şifre">
                <br>
                <label class="error-text" for="username">{{error.text}}</label>
            </div>

            <div class="input-box" :class="{'error-box' : error.input == 'repassword' ? true : false}">
                <input v-model="repassword" name="password" type="password" placeholder="Şifre (Doğrulama)">
                <br>
                <label class="error-text" for="username">{{error.text}}</label>
            </div>

            <button class="primary" @click="register()">Hesabını oluştur</button>
            <br>
            <button class="primary register" @click="login()">Zaten bir hesabın var mı?</button>

        </div>

    </div>

</template>

<script>
export default {
    name : 'bannerRegister',
    data(){
        return {
            username : '',
            email : '',
            password : '',
            repassword : '',
        }
    },
    methods : {
        register(){
            this.$store.dispatch('register' , {
                rotate : 'banner',
                username : this.username,
                email : this.email,
                password : this.password,
                repassword : this.repassword,
            }).then(() => {
                // this.error = this.$store.state.inputError;
            })
        },
        login(){
            this.$router.push({name : 'bannerLogin'})
        }
    },
    computed : {
        error() {
            return this.$store.state.inputError;
        }
    },
    watch : {
        repassword(){
            if(this.password.length > 3 && this.repassword.length > 3 && this.repassword != this.password){
                this.$store.commit('setError' , {
                    input : 'repassword',
                    text : 'Şifreler uyuşmuyor!'
                })
            }else if(this.repassword == this.password){
                this.$store.commit('setError' , {});
            }
        }
    }
}
</script>