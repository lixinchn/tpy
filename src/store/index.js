import Vue from 'vue'
import Vuex from 'vuex'
import blog from './modules/blog'
import contact from './modules/contact'
import getters from './getters'
import index from './modules/index'


Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    blog,
    contact,
    index,
  },
  getters,
})

export default store
