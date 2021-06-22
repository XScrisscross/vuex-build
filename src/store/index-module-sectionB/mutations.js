import * as type from './mutations_types'
import * as server from './server'

export default {
  // globle

  // apis
  // data-change
  [type.FETCH_SEARCH_DATA](state, { data }) {
    state.searchData = data
    // server[type.FETCH_LISTB_DATA](state.Atotal, val, 'B')
  },
  [type.FETCH_LISTRA_DATA](state, { data }) {
    state.listRAData = data
  },
  [type.FETCH_LISTRB_DATA](state, { data }) {
    state.listRBData = data
  },
  [type.FETCH_LISTRC_DATA](state, { data }) {
    state.listRCData = data
  },
  [type.FETCH_LISTRD_DATA](state, { data }) {
    state.listRDData = data
  },
  [type.FETCH_KQ_LISTKA_DATA](state, { data }) {
    state.listKQ_KAData = data
  },
  [type.FETCH_KQ_LISTKB_DATA](state, { data }) {
    server[type.FETCH_KQ_LISTKB_DATA](state, data)
  },
  [type.FETCH_KQ_LISTKC_DATA](state, { data }) {
    server[type.FETCH_KQ_LISTKB_DATA](state, data)
  },
  [type.FETCH_KQ_LISTKD_DATA](state, { data }) {
    state.listKQ_KDData = data
  },
  [type.FETCH_CQ_LISTKA_DATA](state, { data }) {
    state.listCQ_KAData = data
  },
  [type.FETCH_CQ_LISTKB_DATA](state, { data }) {
    state.listCQ_KBData = data
  },
  [type.FETCH_LISTJA_DATA](state, { data }) {
    state.listJAData = data
  },
  [type.FETCH_LISTJB_DATA](state, { data }) {
    state.listJBData = data
  },

  // info-change
  [type.FETCH_SEARCH_INFO](state, data) {
    state.searchInfo = data
  },
  [type.FETCH_LISTRA_INFO](state, data) {
    state.listRAInfo = data
  },
  [type.FETCH_LISTRB_INFO](state, data) {
    state.listRBInfo = data
  },
  [type.FETCH_LISTRC_INFO](state, data) {
    state.listRCInfo = data
  },
  [type.FETCH_LISTRD_INFO](state, data) {
    state.listRDInfo = data
  },
  [type.FETCH_KQ_LISTKA_INFO](state, data) {
    state.listKQ_KAInfo = data
  },
  [type.FETCH_KQ_LISTKB_INFO](state, data) {
    state.listKQ_KBInfo = data
  },
  [type.FETCH_CQ_LISTKA_INFO](state, data) {
    state.listCQ_KAInfo = data
  },
  [type.FETCH_CQ_LISTKB_INFO](state, data) {
    state.listCQ_KBInfo = data
  },
  [type.FETCH_LISTJA_INFO](state, data) {
    state.listJAInfo = data
  },
  [type.FETCH_LISTJB_INFO](state, data) {
    state.listJBInfo = data
  },
}
