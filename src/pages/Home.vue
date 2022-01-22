<template>

    <div class="home">

        <div class="texts">
            <div class="title"><b>Merhaba, ben Arda!</b></div>
            <div class="description gray">Merhabalar, ben Arda. Türkiye'de yaşıyorum, 16 yaşındayım ve lise öğrencisiyim, küçüklüğümden beri merak saldığım yazılıma 2019 yılında başlamam ile birlikte kendimi geliştirmeye devam ediyorum.</div>
            <div class="description gray">MTA:SA adlı çevrimiçi bir oyun platformunda yazılıma başladıktan kısa bir süre sonra HTML ve CSS öğrenmem ile birlikte Javascripte ilgi duyarak Javascript dilini araştırmaya ve öğrenmeye başladım.Aldığım bir VueJS kursu ile Javascript diline olan ilgim artmaya başladı. Şuanda çevrimiçi web siteler tasarlamakla birlikte hobi olarak yazılıma başladığım platform olan MTA:SA'ya yazılımlar üretmekteyim.</div>
        </div>

        <div class="team">
            <div class="title-2"><b>Ekip Arkadaşlarım ve Ben</b></div>
            <div class="profiles">
                <div class="profile" v-for="profile in profiles" :key="profile.name">
                    <div class="status">
                        <img :src="profile.image">
                        <br>
                        <span>{{profile.name}}</span>
                    </div>
                    <div class="social">
                        <div class="circle" v-for="social in profile.socials" @click="openNewTab(social.link)" :key="social.name" :id="social.name">
                            <div v-if="social.name == 'instagram'" class="background"></div>
                            <img :src="'src/assets/'+social.name+'.png'">
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
export default {
    name : 'Home',
    data(){
        return {
            profiles : [
                {name : 'Arda Ahmet Dönmez' , image : 'https://i.hizliresim.com/4u600gy.png', socials : [
                    {name : 'twitter', link : 'https://twitter.com/ardadonmezk'},
                    {name : 'instagram', link : 'https://www.instagram.com/ardadonmezk/'},
                    {name : 'github', link : 'https://github.com/katredit'},
                ]},
                {name : 'Beşir Burak Arıbaş' , image : 'https://i.hizliresim.com/mouuk6f.png', socials : [
                    {name : 'twitter', link : 'https://twitter.com/01electr1c'},
                    {name : 'instagram', link : 'https://www.instagram.com/01electr1c/'},
                    {name : 'behance', link : 'https://www.behance.net/electr1c'},
                ]},
            ]
        }
    },
    methods: {
        openNewTab(link){
            window.open(link)
        }
    }
}
</script>

<style scoped>

    .description{
        position: relative;
        margin-top: 27px;
        font-size: 15px;
        font-weight: 400;
    }

    .team{
        position: relative;
        margin-top: 55px;
    }

    .profiles{
        display: flex;
        justify-content: space-between;
        float: none;
    }

    .profile{
        width: 550px;
        height: 228px;
        margin-top: 28px;
        background: rgba(255, 255, 255, .05);
        border-radius: 32px;
        color: #fff;
    }

    .status{
        position: relative;
        text-align: center;
        width: 200px;
        float: left;
        left: 25px;
    }

    .status img{
        position: relative;
        width: 174px;
    }

    .social{
        position: relative;
        float: left;
        top: 50%;
        margin-left: 35px;
        transform: translateY(-50%);
    }

    .circle{
        background: #757575;
        width: 64px;
        height: 64px;
        border-radius: 50%;
        text-align: center;
        float: left;
        margin-right: 12.5px;
        margin-left: 12.5px;
        transition: .2s;
    }

    .circle img{
        position: relative;
        width: 32px;
        top: 50%;
        transform: translateY(-50%);
    }

    .social #twitter:hover{
        background: #1DA1F2;
    }

    #instagram .background{
        position: absolute;
        width: 64px;
        height: 64px;
        border-radius: 50%;
        opacity: 0;
        transition: .2s;
        background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);;
    }

    #instagram:hover .background{
        opacity: 1;
    }

    .social #github:hover{
        background: #1B1F22;
    }

    .social #behance:hover{
        background: #053eff;
    }

    @media only screen and (max-width:1600px){

        .profile{
            width: 500px;
        }

        .profile .status{
            left: 15px;
        }

        .profile .social{
            margin-left: 15px;
        }

    }

    @media only screen and (max-width:1440px){

        .profile{
            width: 450px;
            height: 200px;
        }

        .profile .status{
            left: 0px;
        }

        .status img{
            width: 150px;
        }

        .profile .social{
            margin-left: 0px;
        }

        .social .circle{
            width: 54px;
            height: 54px;
        }

        #instagram .background{
            width: 54px;
            height: 54px;
        }

        .circle img{
            width: 27px;
        }

    }

    @media only screen and (max-width:1368px){

        .profile{
            width: 400px;
            height: 140px;
        }

        .profile .status{
            margin-left: 20px;
            width: 136px;
        }

        .status img{
            width: 100px;
        }

        .status span{
            position: relative;
            top: -8px;
        }

        .profile .social{
            margin-left: 10px;
        }

        .social .circle{
            width: 48px;
            height: 48px;
        }

        #instagram .background{
            width: 48px;
            height: 48px;
        }

        .circle img{
            width: 20px;
        }

    }

    @media only screen and (max-width:1280px){

        .profile{
            width: 350px;
            height: 130px;
        }

        .profile .status{
            margin-left: 10px;
            width: 100px;
        }

        .status img{
            width: 80px;
        }

        .status span{
            position: relative;
            top: -8px;
            font-size: 12px;
        }

        .profile .social{
            margin-left: 10px;
        }

        .social .circle{
            width: 40px;
            height: 40px;
        }

        #instagram .background{
            width: 40px;
            height: 40px;
        }

        .circle img{
            width: 18px;
        }

    }

    @media only screen and (max-width:1024px){

        .profile{
            width: 260px;
            height: 120px;
        }

        .profile .status{
            margin-left: 5px;
            width: 90px;
        }

        .status img{
            width: 70px;
        }

        .status span{
            position: relative;
            top: -8px;
            font-size: 12px;
        }

        .profile .social{
            margin-left: 8px;
        }

        .social .circle{
            width: 32px;
            height: 32px;
            margin-right: 8px;
            margin-left: 8px;
        }

        #instagram .background{
            width: 32px;
            height: 32px;
        }

        .circle img{
            width: 16px;
        }

    }

    @media only screen and (max-width:530px){

        .profiles{
            width: 100%;
            display: inline-block;
            justify-content: none;
        }

        .profile{
            min-width: 100%;
            height: 125px;
            margin-top: 28px;
            background: rgba(255, 255, 255, .05);
            border-radius: 32px;
            color: #fff;
        }

        .profile .social{
            float: right;
            margin-right: 15px;
        }

        .status{
            position: relative;
            text-align: center;
            width: 30%;
            left: 5px;
            float: left;
            font-size: 13px;
        }

        .status span{
            position: relative;
            margin: 0;
            top: -8px;
        }

        .status img{
            position: relative;
            width: 90px;
            height: 90px;
        }

        .social .circle{
            width: 48px;
            height: 48px;
        }

        #instagram .background{
            width: 48px;
            height: 48px;
        }

        .circle img{
            width: 16px;
        }

        #instagram .background{
            opacity: 1;
        }

        .social #github{
            background: #1B1F22;
        }

        .social #behance{
            background: #053eff;
        }

        .social #twitter{
            background: #1DA1F2;
        }

    }

    @media only screen and (max-width:280px){

        .profiles{
            width: 100%;
            display: inline-block;
            justify-content: none;
        }

        .profile{
            min-width: 100%;
            height: 125px;
            margin-top: 28px;
            background: rgba(255, 255, 255, .05);
            border-radius: 32px;
            color: #fff;
        }

        .profile .social{
            float: right;
            margin-right: 5px;
        }

        .status{
            position: relative;
            text-align: center;
            width: 30%;
            left: 5px;
            float: left;
            font-size: 13px;
        }

        .status span{
            position: relative;
            margin: 0;
            top: -8px;
        }

        .status img{
            position: relative;
            width: 90px;
            height: 90px;
        }

        .social .circle{
            width: 32px;
            height: 32px;
        }

        #instagram .background{
            width: 32px;
            height: 32px;
        }

        .circle img{
            width: 16px;
        }

    }

</style>