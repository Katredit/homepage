<template>
    
    <div class="pages-admin-home">

        <div v-if="confirm" class="profile">
            <div class="image">
                <div v-if="!profile.image">
                    <div class="head"></div>
                    <div class="body"></div>
                </div>
                <div v-else>
                    <img :src="profile.image" alt="">
                </div>
            </div>
            <div class="username gray"> {{profile.name}} </div>

        </div>

        <div v-if="confirm && track">
            <div class="title"><b>Twitter Banner Botuna Hoş Geldin!</b></div>
            <div class="description gray">Bu bot Spotify'da son dinlediğin şarkı ile özel tasarımı bir araya getirerek bir Twitter banneri oluşturur! Havalı bir Twitter profil sayfan olsun istemez misin?</div>

            <div class="banner">
                <img id="thumbnail" src="https://i.ibb.co/M1z4zSm/kato.png" alt="">
            </div>

            <div v-if="thumbnail" id="banner">

                <div class="background" :style="bgImage()">></div>
                <div class="noisy"></div> 
                <div class="plays"></div>

                <div class="in">
                    <img class="thumbnail" :src="track.albumImage.url" alt="">
                    <div class="texts">
                        <span class="title">{{track.trackName}}</span>
                        <br>
                        <span class="artist">{{track.artistName}}</span>
                    </div>
                    
                </div>

            </div>

            <br>
            <div class="buttons center">

                <button class="primary default-btn" @click="changeBanner()">
                <i class="fas fa-images"></i>
                Arkaplan olarak ayarla</button>

                <br>
                <button class="primary default-btn" @click="changeTrack()">
                <i class="fas fa-redo-alt"></i>
                Şarkıyı yenile</button>

                <br>
                <button class="danger default-btn" @click="logout()">
                <i class="fas fa-times"></i>
                Çıkış yap</button>

            </div>

        </div>

        <div v-if="confirm && !track">

            <div class="title"><b>Hesaplarını bağla!</b></div>
            <div class="description gray">Öncelikle yapmamız gerek bir kaç iş var gibi görünüyor!</div>

            <div class="buttons">
                <button :disabled='profile.image' @click="connect('twitter')" class="default-btn" id="twitter" v-if="!profile.twitter">
                    <i class="fab fa-twitter"></i>
                    Twitter hesabını bağla!</button>
                <button :disabled='!profile.image' @click="connect('spotify')" class="default-btn" id="spotify" v-if="!profile.spotify">
                    <i class="fab fa-spotify"></i>
                    Spotify hesabını bağla!</button>
            </div>

        </div>

        <div v-if="!confirm">
            <div class="title"><b>Üzgünüz...</b></div>
            <div class="description gray"><b>E-mail hesabınız onaylanmamış.</b> Bunun hakkında <router-link tag="a" :to="{name : 'bannerAbout'}">daha fazla bilgi</router-link> almak istiyorsanız bağlantıya tıklayınız.</div>
        </div>

    </div>

</template>

<script>
import axios from 'axios'
import {bannerMixin} from '../../mixins/bannerMixin'

export default {
    mixins : [bannerMixin],
    data(){
        return {
            token : '',
            confirm : true,
            thumbnail : false,
            bannerUrl : '',
        }
    },
    methods : {
        logout(){
            axios.post('/banner/logout' , {token : this.token}).then(() => {
                this.$store.dispatch('logout');
                this.$store.dispatch('logoutBanner');
            });
        },
        connect(social){
            axios.get('/banner/'+social+'/login?token='+this.token).then((response) => {
                window.location = response.data.url;
            })
        },
        bgImage(){
            return 'background-image: url("' + this.track.albumImage.url + '")';
        },
        changeBanner(){
            axios.post('/banner/change' , {token : this.token , dataUrl : this.bannerUrl} , {
                headers : {
                    'Access-Control-Allow-Origin' : '*',
                    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                }
            }).then((response) => {});
        },
        changeTrack(){

            this.thumbnail = true;
            this.$store.dispatch('getCurrentlyTrack').then((response) => {

                setTimeout(() => {

                    let banner = document.getElementById('banner');
                    domtoimage.toPng(banner)
                    .then((dataUrl) => {
                        document.getElementById('thumbnail').src = dataUrl;
                        this.bannerUrl = dataUrl.replace(/^data:image\/\w+;base64,/, "");
                        this.thumbnail = false;
                        this.changeBanner();
                    })
                    .catch(function (err) {
                        console.error('Error : ', err);
                    });

                }, 250);

            })

        }
    },
    computed : {
        profile(){
            return this.$store.state.banner.profile;
        },
        track(){
            return this.$store.state.banner.track;
        }
    },
    mounted(){
        this.token = this.$store.state.token;
        axios.get('/banner/check?token='+this.token).then((response) => {
            this.confirm = response.data.confirm;
        });

        setTimeout(() => {

            if(this.profile.spotify && this.confirm){
                this.changeTrack(this.track)
            }

        } , 500);

        setInterval(() => {
            this.changeTrack(this.track)
        } , 1000 * 60);
    }
}
</script>

<style scoped>

    #thumbnail{
        width: 100%;
    }

    .description{
        position: relative;
        margin-top: 5px;
        margin-bottom: 10px;
        font-size: 15px;
    }

    .profile{
        position: relative;
        width: 200px;
        float: right;
        text-align: right;
    }

    .profile .username{
        position: relative;
        margin-top: 17px;
        right: 10px;
        float: right;
        font-size: 15px;
    }

    .profile .image{
        float: right;
        width: 52px;
        height: 52px;
        background: #505050;
        border-radius: 50%;
        overflow: hidden;
        margin-bottom: 15px;
    }

    .image img{
        width: 100%;
    }

    .image .head{
        position: relative;
        width: 22px;
        height: 22px;
        background: #F2F2F2;
        border-radius: 50%;
        margin: auto;
        top: 10px;
    }

    .image .body{
        position: relative;
        width: 55px;
        height: 55px;
        background: #F2F2F2;
        border-radius: 50%;
        top: 17px;
    }

    #twitter{
        background: #1DA1F2;
    }

    #twitter:hover{
        background: #46b1f3;
    }

    #spotify{
        background: #1DB954;
    }

    #spotify:hover{
        background: #3fbd6b;
    }
    
    .buttons{
        margin-top: 15px;
        float: left;
    }

    .banner{
        margin-top: 30px;
    }

    button{
        margin-right: 10px;
    }

    #twitter:disabled, #spotify:disabled{
        background: #6d6d6d;
    }

    #banner{
        position: relative;
        width: 1500px;
        height: 500px;
        overflow: hidden;
        background-color: #000;
        color: #fff;
    }

    .background{
        position: absolute;
        width: 1500px;
        height: 500px;
        background-repeat: no-repeat;
        background-size: 120%;
        background-position: 50% 50%;
        filter: blur(8px) saturate(30%);
    }

    .background:after, .background:before {
        content: '';
        position: absolute;
        top: 0; left: 0; bottom: 0; right: 0;
        box-shadow: inset 0px 0px 300px black;
    }

    .in{
        position: relative;
        text-align: center;
    }

    .in .thumbnail{
        position: relative;
        width: 250px;
        height: 250px;
        top: 30px;
        filter: brightness(120%);
    }

    .auto{
        position: absolute;
        z-index: 2;
        /* top: 0; */
    }

    .noisy {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url(data:image/png;base64,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);  
    }

    .plays {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url('../../assets/plays.png');
    }

    .texts{
        position: relative;
        top: 40px;
        font-family: 'Inter';
        color: #cdcdcd;
    }

    .texts span{
        margin-bottom: 5px;
        font-family: 'Inter-Medium';
    }

    .texts .title{
        font-family: 'Inter-Bold';
        font-size: 36px;
        font-weight: bold;
        color: #fff;
    }

    .button:hover{
        opacity: .8;
    }

    .center{
        width: 100%;
        text-align: center;
    }

    .buttons button{
        margin-bottom: 15px;
    }

</style>