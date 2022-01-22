import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state : {
        projects : [
            {id : 1, title : 'MTA:SA Taksi Sistemi' , thumbnail : 'https://i.hizliresim.com/3qe39d2.png' , description : `MTA:SA platformu için yapılan roleplay konseptli sunucular için bir taksi sistemi, roleplay konseptli sunucular için yapılan bu sistem oyuncular için kolaylık sağlar ve rol ortamı oluşmasına kolaylık sağlar.
            ### Nasıl taksi plakası satın alınır?
            /plakasatinal ile belirli bir bölgeden taksi paneli alınabilir. Satın alma bölgesini ise sistem içerisindeki dosyalardan ayarlayabilirsiniz.
            ### Nasıl çalışır?
            /taksi yazarak genel paneli açabilirsiniz ve panel içerisindeki 'Taksimetre' seçeniğine taksimetrenizi aktif hale getirebilirsiniz. Taksimetreyi açtıktan sonra toplan gelirinizi panelden 'Oturum Kazancı' adı altında görüntüleyebilirsiniz. 'Taksi Tabelası Yerleştir' seçeneğine çift tıklayarak aracanıza eğer taksimetresi açıksa tabela yerleştirebilirsiniz
            ### Taksi nasıl çağırılır ve talepler nasıl görüntülenir?
            /taksicagir ile taksi çağrısında bulunabilirsiniz. Herhangi bir taksi çağrısı olduğu zaman taksimetresi açık olan taksi şöförlerine bildirim gitmektedir. Taksi paneli üzerinden 'Taksi Talepleri' seçeneğine çift tıklayarak gelen taksi taleplerine geri dönüşte bulunabilirsiniz
            ### Taksimetre ücreti nasıl ayarlanır?
            Taksi paneli üzerinden 'Taksimetre Ücretini Ayarla' seçeneğine çift tıklayarak kilometre başına alacağınız ücreti belirleyebilirsiniz
            ### Oturum Kazancı nedir?
            Oturum Kazancı taksimetre açıldıktan sonra toplanan hasılatın tamamını ifade eder eğer oturum kazancını sıfırlamak isterseniz 'Oturum Kazancını Sıfırla' seçeneğine çift tıklayarak toplam kazancı sıfırlayabilirsiniz
            ### Sistem Videosu
            [![](https://i.hizliresim.com/3qe39d2.png)](https://www.youtube.com/embed/5JSb2NhXxFc)`}
        ]
    },
    getters : {
        getProjectFromID: (state) => (id) => {
            return state.projects.find(project => project.id == id);
        }
    }
})