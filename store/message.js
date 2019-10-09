export const state = () => ({
  message: 'init'
})

export const mutations = {
  set(state, text) {
    state.message = text
  },
  clear(state) {
    state.message = ''
  }
}
