import Vue from 'vue'
import Vuex from 'vuex'
import blog from './modules/blog'
import getters from './getters'


Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    blog,
  },
  getters,
})

export default store
