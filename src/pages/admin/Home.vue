<template>
    
    <div class="pages-admin-home">

        <div class="title"><b>Admin panele hoşgeldin!</b></div>
        <button @click="logout()">logout</button>

    </div>

</template>

<script>
import {adminMixin} from '../../mixins/adminMixins'
export default {
    mixins : [adminMixin],
    methods : {
        logout(){
            this.$store.dispatch('logout')
        }
    }
}
</script>