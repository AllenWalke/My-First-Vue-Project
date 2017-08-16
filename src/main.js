// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import Apple from './components/apple.vue'
import Banana from './components/banana.vue'
import RedApple from './components/RedApple.vue'
import Vuex from 'vuex'
Vue.use(Router)
Vue.use(Vuex)
let store = new Vuex.Store({
  modules:{
    a:moduleA
  }
})
const moduleA = {
  state:{
    totalPrice:0
  },
  getters:{
    getTotal (state) {
      return state.totalPrice
    }
  },
  mutations:{
    increment (state,price) {
      state.totalPrice += price
    },
    decrement (state,price) {
      state.totalPrice -= price
    }
  },
  actions:{
    increase (context,price) {
      context.commit('increment',price)
    },
    decrease (context,price) {
      context.commit('decrement',price)
    }
  }
}

let router = new Router({
  mode:'history',
  routes:[
    {
      path: '/apple',
      component: Apple ,
      children:[
        {
          path:'red',
          component:RedApple
        }
      ]
    },
    {
      path: '/banana',
      component: Banana
  }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
