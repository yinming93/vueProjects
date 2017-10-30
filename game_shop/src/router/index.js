import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Apple from '@/components/a'
import Banana from '@/components/b'
import redapple from '@/components/reda'

Vue.use(Router)

export default new Router({
  routes: [
  // 路由重定向
  {
    path:'/',
    redirect:'/a'
  },
    {
      path: '/',
      name: 'Hello',
      component: Hello 
    },
    {
      path:'/a',
      component:Apple,
      children:[
        {
          path:'red',
          component:redapple
        }
      ]
    },
    {
      path:'/b',
      name:'Banana',
      component:Banana
    }
  ]
})