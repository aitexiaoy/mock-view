import Vue from 'vue'
import Vuex from 'vuex'
import { SET_SILDER_COLLAPSE } from './types.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        silderCollapse: false, //左侧silder是否收起
    },
    mutations: {
        [SET_SILDER_COLLAPSE](state, data) {
            state.silderCollapse = data
        }
    },
    actions: {
        setSilderCollapse({ commit }, data) {
            commit(SET_SILDER_COLLAPSE,data)
        }
    },
    modules: {
    },
})
