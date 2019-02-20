import Vuex from 'vuex'
import Vue from 'vue'
import state from './states'
import leftDrawerStore from './modules/LeftDrawer/leftDrawerStore'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  modules: {
    leftDrawer: leftDrawerStore
  }
})

export default store
