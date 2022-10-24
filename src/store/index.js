import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    config:window.$config,
    bigScreenModel:window.$bigScreenModel,
  },
  getters: {
    layout({config,bigScreenModel}){
      return bigScreenModel[config.screenResolution]
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
