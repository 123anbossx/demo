<template>
    <div class="homeChildren">
        <p>{{mes}} {{this.$route.params.userId}}</p>
    </div>
</template>

<script>
    export default {
       data(){
           return{
               mes:'这是home的子组件'
           }
       }
    }
</script>

<style scoped>
    @import "../static/css/home.css";
</style>