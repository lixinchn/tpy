// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueLazyload, {
  preLoad: 0.8,
  attemp: 1,
  lazyComponent: true,
  listenEvents: ['scroll'],
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
