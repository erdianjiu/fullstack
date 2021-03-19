import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { getStore } from './utils/storage'
import url from '@/serviceAPI.config.js'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.use(mavonEditor)
Vue.use(ElementUI);
Vue.config.productionTip = false
    // 挂载axios到vue的原型，由于继承性，所有的组件都可以使用this.$http
import axios from 'axios';
Vue.prototype.$http = axios;
// 请求拦截
axios.interceptors.request.use(config => {
    const token = getStore('token');
    if (token) {
        //表示用户已登录
        config.headers.common['Authorization'] = token;
    }
    return config
}, error => {
    return Promise.reject(error);
})
router.beforeEach((to, from, next) => {
    axios.post(url.validate, {}).then(ctx => {
        let data = ctx.data;
        if (data.state !== 200) {
            // 用户要登录

            if (to.matched.some(record => record.meta.auth)) {
                // 用户未登录 需要跳转登录页面
                next({
                    path: '/login',
                    query: {
                        redirect: to.fullPath
                    }
                })
            } else {
                next();
            }
        } else {
            // 保存用户的信息
            store.commit('ISLOGIN', data);
            if (to.path === '/login') {
                router.push({
                    path: '/admin'
                })

            }
            next();
        }
    }).catch(error => {
        console.log(error);
    })
})
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')