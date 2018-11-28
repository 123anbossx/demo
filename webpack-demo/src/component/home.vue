<template>
  <div>
    <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
    <!--<div  class="homeClass"><router-link to="/home/1/children">路由跳转</router-link></div>-->
    <div  class="homeClass"> <li @click="homeChildren">添加路由</li></div>
    <router-view></router-view>
  </div>

</template>
<script>
    export default {
        data () {
            return {
                msg:"我是home 组件",
                value: '',
            }
        },
        methods:{
            homeChildren(){
                this.$router.push({name:'homeChildren',params:{userId: 666}});
            }
        }
    }
</script>
<style>
@import "../static/css/home.css";
</style>