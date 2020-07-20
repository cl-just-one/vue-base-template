import Vue from 'vue'
import Vuex from 'vuex'
import Settings from './modules/settings'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    Settings
  }
})

export default store
