import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
        path:"/search",
        component:()=>import("../views/Search/index.vue")
    },
    {
        path:"/itemMusic",
        component:()=>import("../views/ItemMusic/index.vue")
    },
    {
        path: '/home',
        component: () => import("../views/Home/index.vue")
    },
    {
        path: '/',
        redirect: '/home'
    }
]

export default createRouter({
    history:createWebHashHistory(),
    routes
})