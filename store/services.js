export const state = () => ({
  url: {
    all: 'services/',
    costs: 'services/costs',
    g: 'services/g'
  },
  result: {
    all: null,
    costs: null,
    g: null,
  }
})

export const getters = {
  r: s => s.result,
  resultById: s => id => s.result[id],
  g: s => s.result.g,
  serviceId: state => type => state.result.all.find(el => el.type === type).id
}

export const mutations = {
  setResult (state, {id, response}) {
    state.result[id] = response
  }
}

export const actions = {
  async apiServices({state, commit}) {
    await this.$axios.$get(state.url.all).then(response => { commit('setResult', { id: 'all',  response}) })
  },
  async apiServicesG({state, commit}) {
    await this.$axios.$get(state.url.g).then(response => { commit('setResult', { id: 'g',  response}) })
  },
  async apiCosts({state, getters, commit}, {type, n}) {
    await this.$axios.$post(state.url.costs, {
      params: JSON.stringify([{ service_id: await getters.serviceId(type), n }])
    }).then(response => { commit('setResult', { id: 'costs', response: response.success}) })
  }
}