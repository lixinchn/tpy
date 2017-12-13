import Vue from 'vue'
import Vuex from 'vuex'
import blog from './modules/blog'
import contact from './modules/contact'
import getters from './getters'


Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    blog,
    contact,
  },
  getters,
})

export default store
