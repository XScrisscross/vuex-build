import Vue from 'vue'
import Vuex from 'vuex'

import imSA from './index-module-sectionA'
import imSB from './index-module-sectionB'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    imSA,
    imSB
  }
})
