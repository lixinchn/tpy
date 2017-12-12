import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Android from '@/components/Android'
import IOS from '@/components/IOS'
import Blog from '@/components/Blog'


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
    },
    {
      path: '/ios',
      name: 'iOS',
      component: IOS,
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
    },
  ]
})
