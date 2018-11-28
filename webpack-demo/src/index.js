import Vue from 'vue'
import router from './router.js';
import App from '../App.vue';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);
new Vue({
    el:"#app",
     router,
    render:h=>h(App)
});