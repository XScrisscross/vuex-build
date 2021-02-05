import * as type from './mutations_types'

export default {
  // data-change
  async [type.FETCH_SEARCH_DATA] ({ commit, state }, val) {
    if (val) state.searchInfo = val
    let res = await Apis_imSB.FETCH_SEARCH_DATA(state.searchInfo)
    commit('FETCH_SEARCH_DATA', res)
  },
  async [type.FETCH_LISTRA_DATA] ({ commit, state }, val) {
    if (val) state.listRAInfo = val
    let res = await Apis_imSB.FETCH_LISTRA_DATA(state.listRAInfo)
    commit('FETCH_LISTRA_DATA', res)
  },
  async [type.FETCH_LISTRB_DATA] ({ commit, state }, val) {
    if (val) state.listRBInfo = val
    let res = await Apis_imSB.FETCH_LISTRB_DATA(state.listRBInfo)
    commit('FETCH_LISTRB_DATA', res)
  },
  async [type.FETCH_LISTRC_DATA] ({ commit, state }, val) {
    if (val) state.listRCInfo = val
    let res = await Apis_imSB.FETCH_LISTRC_DATA(state.listRCInfo)
    commit('FETCH_LISTRC_DATA', res)
  },
  async [type.FETCH_LISTRD_DATA] ({ commit, state }, val) {
    if (val) state.listRDInfo = val
    let res = await Apis_imSB.FETCH_LISTRD_DATA(state.listRDInfo)
    commit('FETCH_LISTRD_DATA', res)
  },
  async [type.FETCH_KQ_LISTKA_DATA] ({ commit, state }, val) {
    if (val) state.listKQ_KAInfo = val
    let res = await Apis_imSB.FETCH_KQ_LISTKA_DATA(state.listKQ_KAInfo)
    commit('FETCH_KQ_LISTKA_DATA', res)
  },
  async [type.FETCH_KQ_LISTKB_DATA] ({ commit, state }, val) {
    if (val) state.listKQ_KBInfo = val
    let res = await Apis_imSB.FETCH_KQ_LISTKB_DATA(state.listKQ_KBInfo)
    commit('FETCH_KQ_LISTKB_DATA', res)
  },
  async [type.FETCH_KQ_LISTKC_DATA] ({ commit, state }, val) {
    if (val) state.listKQ_KCInfo = val
    let res = await Apis_imSB.FETCH_KQ_LISTKC_DATA(state.listKQ_KCInfo)
    commit('FETCH_KQ_LISTKC_DATA', res)
  },
  async [type.FETCH_KQ_LISTKD_DATA] ({ commit, state }, val) {
    if (val) state.listKQ_KDInfo = val
    let res = await Apis_imSB.FETCH_KQ_LISTKD_DATA(state.listKQ_KDInfo)
    commit('FETCH_KQ_LISTKD_DATA', res)
  },
  async [type.FETCH_CQ_LISTKA_DATA] ({ commit, state }, val) {
    if (val) state.listCQ_KAInfo = val
    let res = await Apis_imSB.FETCH_CQ_LISTKA_DATA(state.listCQ_KAInfo)
    commit('FETCH_CQ_LISTKA_DATA', res)
  },
  async [type.FETCH_CQ_LISTKB_DATA] ({ commit, state }, val) {
    if (val) state.listCQ_KBInfo = val
    let res = await Apis_imSB.FETCH_CQ_LISTKB_DATA(state.listCQ_KBInfo)
    commit('FETCH_CQ_LISTKB_DATA', res)
  },
  async [type.FETCH_LISTJA_DATA] ({ commit, state }, val) {
    if (val) state.listJAInfo = val
    let res = await Apis_imSB.FETCH_LISTJA_DATA(state.listJAInfo)
    commit('FETCH_LISTJA_DATA', res)
  },
  async [type.FETCH_LISTJB_DATA] ({ commit, state }, val) {
    if (val) state.listJBInfo = val
    let res = await Apis_imSB.FETCH_LISTJB_DATA(state.listJBInfo)
    commit('FETCH_LISTJB_DATA', res)
  },
}