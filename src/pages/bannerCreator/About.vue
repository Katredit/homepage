<template>
    
    <div class="pages-banner-about">

        <div class="title"><b>Merhaba!</b></div>
        <div class="description gray">Bu proje hakkında daha fazla bilgiye ihtiyacın olduğunu düşündük, hadi biraz bakınalım.</div>
    
        <div class="sss">

            <div class="title"><b>Sıkça Sorulan Sorular (S.S.S.)</b></div>
            <br>

            <div class="questions">
                <div class="question" v-for="question in questions" :key='question.title' @click="selectQuestion(question)" :class="{'active' : question.selected , 'right' : question.id % 2 == 0 ? true : false}">
                    <div class="title">{{question.title}}</div>
                    <div class="gray description" v-html="question.description"> </div>
                </div>
            </div>

        </div>

    </div>

</template>

<script>
export default {
    name : 'bannerAbout',
    data(){
        return {
            questions : [
                {id : 1 , title : 'Bu bot neyin nesi?' , description : "Bu bot sizin Spotify'da son dinlediğiniz şarkının bilgilerini alarak özel bir tasarıma dökerek size bir Twitter banneri verir." , selected : false},
                {id : 2 , title : 'Twitter ve Spotify hesabımı nasıl bağlayacağım?' , description : "Hesabınıza giriş yaptıktan sonra 'Twitter hesabımı bağla' ve 'Spotify hesabımı bağla' butonlarına basarak hesaplarınız güvenle bağlayabilirsiniz." , selected : false},
                {id : 3 , title : 'Neden hesabım onaylanmadı?' , description : "Botu kullanabilmeniz için Spotify e-mail adresinize yetki tanımamız gerekmekte, haftalık olarak sadece 50 kişiye yetki tanımaktayız. Başvuru sıranıza göre hesabınıza yetki tanınacaktır." , selected : false},
                {id : 4 , title : 'Hesabım onaylanmış fakat botu kullanamıyorum, neden?' , description : "Kayıt olurken kullandığınız e-mail adresiniz ile Spotify'a kayıt olurken kullandığınız e-mail adresinin aynı olması gerekmektedir. Aksi takdirde bot sizi tanımaz ve kullanmanıza müsade etmez." , selected : false},
                {id : 5 , title : 'Bağladığım hesaplar güvence altında mı?' , description : "Evet, bağladığınız tüm hesaplar güven altında tutuluyor ve siz siteden çıkış yaptığınız anda hesaplarınızdan otomatik çıkış gerçekleşiyor ve bot çalışmayı durduruyor." , selected : false},
                {id : 6 , title : 'Yeni tasarımlar gelecek mi?' , description : "Yeni temalar, tasarımlar ve hatta yeni bir bot bile gelecek. Sadece biraz zamana ve maddi desteğe ihtiyacağımız var." , selected : false},
                {id : 7 , title : 'Bu bot hakkında daha fazla bilgi mi almak istiyorsun?' , description : "Botun işleyişi, yazım süreci ve basit kaynak kodu gibi bilgilere erişmek istiyorsan <a href='www.twitter.com/ardadonmezk'> bağlantıya </a> tıklaman yeterli." , selected : false},
                {id : 8 , title : 'Bizimle iletişime nasıl geçebilirsin?' , description : "Bizimle <a href='www.twitter.com/ardadonmezk'> iletişime geçmek istiyorsan </a> adresine tıklaman yeterli." , selected : false},
            ]
        }
    },
    methods : {
        selectQuestion(question){
            this.questions.forEach(element => {
                element.selected = false;
            });
            question.selected = !question.selected;
        }
    }
}
</script>

<style scoped>

    .description{
        position: relative;
        margin-top: 5px;
        font-size: 15px;
    }

    .sss{
        position: relative;
        margin-top: 55px;
        
    }

    .questions .active{
        background: #3B3B3E;
    }

    .questions{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .question{
        position: relative;
        margin-bottom: 15px;
        border-radius: 10px;
        width: 60%;
        padding: 12px 20px;
        transition: .3s;
        display: inline-block;
        float: none;
        cursor: pointer;
        overflow: hidden;
        outline: none;
    }

    .question:hover{
        background: #3B3B3E;
    }

    .question .description{
        position: relative;
        display: none;
        text-align: left;
        transition: .3s;
        font-size: 15px;
    }

    .active .description{
        display: block;
    }

    .question .title{
        font-size: 19px;
        font-weight: 600;
    }

    @media only screen and (max-width : 1024px) {

        .question{
            width: 100%;
        }

    }

</style>