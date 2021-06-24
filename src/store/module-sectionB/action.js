import * as type from './mutation_type'

export default {
  async [type.renderCardA]({ commit, state }, val) {
    if (val) state.listAInfo = val
    let resA = await window.Apis_imSA.renderCardA(state.listAInfo)
    let resB = await window.Apis_imSA.renderCardA(state.listBInfo)
    commit('renderCardA', resA)
    commit('renderCardA', resB)
  },
  async [type.renderCardB]({ commit, state }, val) {
    if (val) state.listCInfo = val
    let res = await window.Apis_imSA.renderCardB(state.listCInfo)
    commit('renderCardB', res)
  },
}
