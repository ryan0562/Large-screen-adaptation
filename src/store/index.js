import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    $config:window.$config, //双向绑定用，勿删
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
