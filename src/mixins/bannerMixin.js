export const bannerMixin = {
    created(){
        if(!this.$store.getters.isAuthenticated){
            if(this.$route.name != 'bannerLogin'){
                this.$store.dispatch('initAuth' , {page : 'banner'}).then(() => {
                    this.$store.dispatch('initConnections');
                });
            }
        }
    }
}