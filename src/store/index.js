import Vue from 'vue'
import Vuex from 'vuex'

const files = require.context('./', true, /(^\.\/module-)([a-zA-Z/]+)index\.js$/)

const modules = files.keys().reduce((res, cur) => {
  const moduleKey = cur.match(/\.\/module-(\S*)\//)[1]
  const module = files(cur).default
  return { ...res, [moduleKey]: module }
}, {})

Vue.use(Vuex)

export default new Vuex.Store({ modules })
