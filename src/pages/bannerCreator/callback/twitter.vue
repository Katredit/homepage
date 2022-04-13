<template>
    <div class="app">
    </div>
</template>

<script>
import axios from 'axios'
import {bannerMixin} from '../../../mixins/bannerMixin'

export default {
    mixins : [bannerMixin],
    created(){
        setTimeout(() => {
            let url = new URL(window.location.href);
            let oauth_token = url.searchParams.get('oauth_token');
            let oauth_verifier = url.searchParams.get('oauth_verifier');
            axios.post('/banner/twitter/callback' , {token : this.$store.state.token , auth_data : {oauth_token, oauth_verifier}}).then((res) => {
                this.$store.commit('changeProfileData' , res.data);
                this.$router.push('/bannercreator')
            })
        } , 150);
    }
}
</script>