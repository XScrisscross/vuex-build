import * as type from './mutations_types'

export default {
  // data-change
  async [type.FETCH_LISTA_DATA]({ commit, state }, val) {
    if (val) state.listAInfo = val
    let res = await window.Apis_imSA.FETCH_LISTA_DATA(state.listAInfo)
    commit('FETCH_LISTA_DATA', res)
  },
  async [type.FETCH_LISTB_DATA]({ commit, state }, val) {
    if (val) state.listBInfo = val
    let res = await window.Apis_imSA.FETCH_LISTB_DATA(state.listBInfo)
    commit('FETCH_LISTB_DATA', res)
  },
  async [type.FETCH_LISTC_DATA]({ commit, state }, val) {
    if (val) state.listCInfo = val
    let res = await window.Apis_imSA.FETCH_LISTC_DATA(state.listCInfo)
    commit('FETCH_LISTC_DATA', res)
  },
  async [type.FETCH_SEARCH_DATA]({ commit, state }, val) {
    if (val) state.searchInfo = val
    let res = await window.Apis_imSA.FETCH_SEARCH_DATA(state.searchInfo)
    commit('FETCH_SEARCH_DATA', res)
  },
  async [type.FETCH_SELECT_DATA]({ commit, state }, val) {
    if (val) state.selectDepInfo = val
    let res = await window.Apis_imSA.FETCH_SELECT_DATA(state.selectDepInfo)
    commit('FETCH_SELECT_DATA', res)
  },
  async [type.FETCH_SEEMORE_DATA]({ commit, state }, val) {
    if (val) state.seeMoreInfo = val
    let res = await window.Apis_imSA.FETCH_SEEMORE_DATA(state.seeMoreInfo)
    commit('FETCH_SEEMORE_DATA', res)
  },
}
