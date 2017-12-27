import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Android from '@/components/Android'
import IOS from '@/components/IOS'
import Blog from '@/components/Blog'
import BlogDetail from '@/components/BlogDetail'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Service from '@/components/Service'
import Policy from '@/components/Policy'


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
    {
      path: '/blog/detail',
      name: 'blogDetail',
      component: BlogDetail,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/service',
      name: 'service',
      component: Service,
    },
    {
      path: '/policy',
      name: 'policy',
      component: Policy,
    },
  ]
})
