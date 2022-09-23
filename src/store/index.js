import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    $config:window.$config, //Ë«Ïò°ó¶¨ÓÃ£¬ÎðÉ¾
  },
  getters: {
  },
  mutations: {
    SET_ROOT_STATE: (state, { key, data }) => {
      state[key] = data;
    },
  },
  actions: {
  },
  modules: {
  }
})
