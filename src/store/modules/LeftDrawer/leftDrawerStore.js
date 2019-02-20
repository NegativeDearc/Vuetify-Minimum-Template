const leftDrawerStore = {
  namespaced: true,
  state: {
    drawer: true
  },
  mutations: {
    undrawer: function (state, payload) {
      //
      if (payload === state.drawer) { state.drawer = payload } else { state.drawer = !state.drawer }
    }
  }
}

export default leftDrawerStore
