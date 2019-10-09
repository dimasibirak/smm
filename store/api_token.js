export const state = () => ({
  value: ''
})

export const mutations = {
  set(state, newValue) {
    state.value = newValue
  },
  clear(state) {
    state.value = ''
  }
}

export const getters = {
  isAuthenticated (state) {
    return !!state.value
  }
}
