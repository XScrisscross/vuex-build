import * as type from './mutations_types'
import * as server from './server'

export default {
  // globle

  // apis
  // data-change
  [type.FETCH_LISTA_DATA](state, { data }) {
    server[type.FETCH_LISTA_DATA](state, data)
  },
  [type.FETCH_LISTB_DATA](state, { data }) {
    server[type.FETCH_LISTB_DATA](state, data)
  },
  [type.FETCH_LISTC_DATA](state, { data }) {
    server[type.FETCH_LISTC_DATA](state, data)
  },
  [type.FETCH_SEARCH_DATA](state, { data }) {
    server[type.FETCH_SEARCH_DATA](state, data)
  },
  [type.FETCH_SELECT_DATA](state, { data }) {
    server[type.FETCH_SELECT_DATA](state, data)
  },
  [type.FETCH_SEEMORE_DATA](state, { data }) {
    server[type.FETCH_SEEMORE_DATA](state, data)
  },

  // info-change
  [type.FETCH_LISTA_INFO](state, data) {
    state.listAInfo = data
  },
  [type.FETCH_LISTB_INFO](state, data) {
    state.listBInfo = data
  },
  [type.FETCH_LISTC_INFO](state, data) {
    state.listCInfo = data
  },
  [type.FETCH_SEARCH_INFO](state, data) {
    state.searchInfo = data
  },
  [type.FETCH_SELECT_INFO](state, data) {
    state.selectDepInfo = data
  },
  [type.FETCH_SEEMORE_INFO](state, data) {
    state.seeMoreInfo = data
  },
}
