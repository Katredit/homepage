<template>
    <div class="pages-logout">
        <div class="title">Çıkış yapılıyor!</div>
    </div>
</template>

<script>
export default {
    name : 'logout',
    created(){
        this.$store.dispatch('logout');
    }
}
</script>