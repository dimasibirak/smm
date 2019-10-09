export const state = () => ({
  info: null
})

export const getters = {
  info: s => s.info
}

export const mutations = {
  setInfo(state, info) {
    state.info = info
  }
}

export const actions = {
  async apiProfileInfo({commit}) {
    await this.$axios.$get('user').then(response => {
      commit('setInfo', response.success) 
    })
  }
}