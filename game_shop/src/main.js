// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import Vuex from 'vuex'

Vue.config.productionTip = false


Vue.use(Vuex)
// 数据中心vuex状态管理
let store = new Vuex.Store({
  state:{
    totlaPrice:0
  },
  mutations:{
    increment(state,price){
      state.totlaPrice += price
    },
    increment(state,price){
      state.totlaPrice -= price
    }
  }
})


// Vue.component('ymhead',{
//   template: '<p>这是什么?</p>'
// })
var child = {
	template:"<p>这估计是个儿子</p>",
}
var ymhead = {
  template: '<p><ym-child></ym-child>这是老子?</p>',
  components:{
  	'ym-child':child
  }
}

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  data: { 
 	word:'hello word'
  },
  components:{
  	'ym-head':ymhead
  },
  template:'<App/>',
  components:{ App }
})