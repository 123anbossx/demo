<template>
    <div id="app">
        <header>
            <!-- router-link 定义点击后导航到哪个路径下 -->
            <router-link to="/home/1">Home</router-link>
            <router-link to="/about/2">About</router-link>
            <router-link to="/upload">Upload</router-link>
        </header>
        <!-- 对应的组件内容渲染到router-view中 -->
        <router-view></router-view>
    </div>
</template>
<script>
    export default {

    }
</script>
