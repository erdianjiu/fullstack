import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import { setStore, getStore } from '@/utils/storage'

export default new Vuex.Store({
    state: {
        login: false, //是否登录
    },
    mutations: {
        ISLOGIN(state) {
            state.login = true;
        },
    },
    actions: {},
    modules: {}
})