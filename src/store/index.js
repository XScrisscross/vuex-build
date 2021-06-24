import Vue from 'vue'
import Vuex from 'vuex'

// import imSA from './index-module-sectionA'
// import imSB from './index-module-sectionB'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { val: '1', flag: false },
  getters: {},
  mutations: {
    change(state, data) {
      setTimeout(() => {
        state.val = data
      }, 2000)
      setTimeout(() => {
        state.flag = true
      }, 3000)
    },
  },
  actions: {},
})
