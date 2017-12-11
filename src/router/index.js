import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Android from '@/components/Android'


Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/android',
      name: 'android',
      component: Android,
    }
  ]
})
