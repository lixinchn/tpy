import Vue from 'vue'
import Vuex from 'vuex'
import log from './modules/log'
import getters from './getters'


Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    log,
  },
  getters,
})

export default store
