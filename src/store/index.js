import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    $config:window.$config,
    // $layout:window.$layout,
  },
  getters: {
    $layout(state){
      const config = window.$config
      return config.templates[config.theme][config.useLayout]
    }
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
