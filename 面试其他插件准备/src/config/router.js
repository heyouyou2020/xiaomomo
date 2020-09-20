import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home = () => import('../components/Home');

export default new VueRouter({
    routes:[
        {
            name:'home',
            path:'/home',
            component:Home

        }
    ]

})

