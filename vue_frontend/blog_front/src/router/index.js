import Vue from 'vue'
import VueRouter from 'vue-router'

// 异步组件加载
// import Home from '../views/Home/index'
// import Login from '../views/Login'
// import Index from '../views/Index'
// import Music from '../views/Music'
// import Efficiency from '../views/Efficiency'
// import About from '../views/About'
const Index = () =>
    import ('@/views/Index');
const Login = () =>
    import ('@/views/Login');
const Home = () =>
    import ('@/views/Home');
const Music = () =>
    import ('@/views/Music');
const Efficiency = () =>
    import ('@/views/Efficiency');
const About = () =>
    import ('@/views/About');
const Summary = () =>
    import ('@/views/Summary');
const Admin = () =>
    import ('@/views/Admin');
// const User = () => import('@/views/User');

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/home',
        name: 'Home',
        component: Index,
        children: [{
                path: 'home',
                component: Home
            },
            {
                path: 'music',
                component: Music
            },
            {
                path: 'efficiency',
                component: Efficiency
            },
            {
                path: 'about',
                component: About
            },
            {
                path: 'summary',
                component: Summary
            }
        ]
    },
    {
        path: '/Login',
        name: 'login',
        component: Login
    },
    {
        path: '/Admin',
        name: 'admin',
        component: Admin,
        meta: {
            auth: true
        },
        children: [{
                path: '/admin/write',
                component: () =>
                    import ('@/views/BManagement/Write')
            },
            {
                path: '/admin/summary',
                component: () =>
                    import ('@/views/BManagement/Summary')
            },
        ]
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router