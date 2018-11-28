import Vue from 'vue'
import Router from 'vue-router'
import home from './component/home.vue'
import about from './component/about.vue'
import homeChildren from './component/homeChildren.vue'
import upload from './component/upload.vue'
Vue.use(Router);
const router = new Router({
    routes:[
        {
            path:"/home/:id",
            component:home,
            children:[
                {
                    path:'children',
                    name:'homeChildren',
                    component:homeChildren
                }
            ]
        },
        {
            path: "/about/:id",
            component:about,
        },
        {
            path: "/upload",
            component:upload,
        }
    ]
});
export default router;