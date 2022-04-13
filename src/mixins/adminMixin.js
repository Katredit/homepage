export const adminMixin = {
    created(){
        if(this.$route.name != 'adminLogin')
            return this.$store.dispatch('initAuth' , {page : 'admin'});
    },
    watch : {
        '$route'(){
            if(this.$route.name != 'adminLogin')
                return this.$store.dispatch('initAuth' , {page : 'admin'});
        }
    }
}