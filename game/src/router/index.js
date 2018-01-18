import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import IndexPage from '@/pages/index'
import SwiperPage from '@/pages/swiper'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/swiper',
      name: 'SwiperPage',
      component: SwiperPage
    }
  ]
})
