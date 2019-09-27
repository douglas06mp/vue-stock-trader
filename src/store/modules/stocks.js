import data from '../../data/data'

const state = {
  stocks: []
}

const mutations = {
  'INIT_STOCKS' (state) {
    state.stocks = data
  },
  'RND_STOCKS' (state) {
    state.stocks.map(stock => {
			return stock.price = Math.floor(stock.price * ( Math.random()*(1.3-0.8) + 0.8))
    })
  },
  'SET_STOCKS' (state, stocks) {
    state.stocks = stocks
  }
}

const actions = {
  initStock: ({ commit }) => {
		commit('INIT_STOCKS')
  },
  randomizeStock: ({ commit }) => {
    commit('RND_STOCKS')
  },
  buyStock: ({ commit }, order) => {
    commit('BUY_STOCKS', order)
  }
}

const getters = {
  stocks () {
    return state.stocks
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
