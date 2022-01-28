export const adminMixin = {
    created(){
        if(!this.$store.getters.isAuthenticated){
            if(this.$route.name != 'adminLogin')
                return this.$store.dispatch('initAuth');
        }
    },
    data(){
        return{
            projects : [],
        }
    }
}