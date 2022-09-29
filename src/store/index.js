import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
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
