export const adminMixin = {
    created(){
        if(!this.$store.getters.isAuthenticated){
            if(this.$route.name != 'adminLogin')
                this.$store.dispatch('initAuth');
        }
    }
}