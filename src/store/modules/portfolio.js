const state = {
  stocks: [],
  funds: 10000
}

const mutations = {
  'BUY_STOCKS' (state, { id, price, quantity }) {
    const record = state.stocks.find(stock => stock.id === id)
    if (record) {
      record.quantity += quantity
    } else {
      state.stocks.push({
        id: id,
        quantity: quantity
      })
    }
    state.funds -= price * quantity
  },
  'SELL_STOCKS' (state, { id, price, quantity }) {
    const record = state.stocks.find(stock => stock.id === id)
    if (record.quantity > quantity) {
      record.quantity -= quantity
    } else {
      state.stocks.splice(state.stocks.indexOf(record),1)
    }
    state.funds += price * quantity
  },
  'SET_PORTFOLIO' (state, portfolio) {
    state.funds = portfolio.funds
    state.stocks = portfolio.portfolioStock ? portfolio.portfolioStock : []
  }
}

const actions = {
  sellStock: ({ commit }, order) => {
    commit('SELL_STOCKS', order)
  }
}

const getters = {
  portfolioStocks (state, getters) {
    return state.stocks.map(pStock => {
      const record = getters.stocks.find(stock => stock.id == pStock.id)
      return {
        id: pStock.id,
        quantity: pStock.quantity,
        price: record.price,
        name: record.name
      }
    })
  },
  funds () {
    return state.funds
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
